import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/addReducer";


const AddContext = createContext()


const getLocalStorageData =()=>{
    let newData = localStorage.getItem("cartitem");
    if(newData == []){
     return []
    }
    else{
        return JSON.parse(newData)
    }
}


const initialState = {
    cart : getLocalStorageData(),
    total_item: "",
    total_price: "",
    shipping_fee : 200,
}
   
//  add to cart 

 const AddContextProvider = ({children})=>{
    const [state, dispath] = useReducer(reducer,initialState)
    const addCart = (id,amount,product) =>{
        dispath({type:"ADD_TO_CART", payload: {id,amount,product}})
    }

    // to deleteitem 
    
    const deleteItem = (id)=>{
         dispath({type:"DELETE_ITEM" , payload : id})
    }

    // clear cart 
    const clearcart = () =>{
        dispath({type:"CLEAR_CART"})
    }

    // increment and decrement 
    const increment = (id)=>{
        dispath({type: "INCREMENT", payload : id})
    }
    const decrement = (id)=>{
      dispath({type: "DECREMENT" , payload : id})
    }
    
    // to add the data in localStorage 
    useEffect(()=>{
        dispath({type: "CART_TOTAL_ITEM"})
        dispath({type: "CART_TOTAL_PRICE"})
        localStorage.setItem("cartitem", JSON.stringify(state.cart)) 
    },[state.cart])


    return <AddContext.Provider value={{...state , addCart, deleteItem , clearcart , decrement , increment}}>
        {children}
    </AddContext.Provider>
}
 const useAddCart = ()=>{
    return useContext(AddContext)
}
export {AddContextProvider, useAddCart}