import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../Reducer/FilterReducer";

const FilterContext = createContext()
const initialState = {
    filter_products : [],
    all_products : []
}

export const FilterContextProvider = ({children}) =>{

    const {products} = useProductContext()
    
    const [state,dispath] = useReducer(reducer,initialState)

    useEffect(()=>{
        dispath({type: "LOAD_FILTER_PRODUCT", payload: products})
    },[products])

    return <FilterContext.Provider value={{...state}}>
        {children}
        </FilterContext.Provider>
}

export const useFilterContext = ()=>{
    return useContext(FilterContext)
}