const AddReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, amount, product } = action.payload;

    //handle the exciting product

    let existingProduct = state.cart.find((curELe) => curELe.id === id);
    if (existingProduct) {
      let updatecart = state.cart.map((curELe) => {
        if (curELe.id == id) {
          let newAmount = curELe.amount + amount;
          return {
            ...curELe,
            amount: newAmount,
          };
        } else {
          return curELe;
        }
      });
      return {
        ...state,
        cart: updatecart,
      };
    } else {
      const firstProduct = product[0];

      let cartProduct = {
        id: id,
        amount,
        discription: firstProduct.discription,
        img: firstProduct.img,
        price: firstProduct.price,
        overline: firstProduct.overline,
      }

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      }
    }
  }

//   to increment 
if(action.type === "INCREMENT"){
   let updatecart = state.cart.map((curEle)=>{
    if(curEle.id === action.payload){
        let incAmount = curEle.amount + 1

        if(incAmount >=5){
            incAmount = 5
        }

        return {
            ...curEle,
            amount : incAmount
        }
    }
    else {
        return curEle;

        
    }
   }) ;
   return {
    ...state,
    cart : updatecart
   }
}

if(action.type === "DECREMENT"){
   let updatecart = state.cart.map((curEle)=>{
    if(curEle.id === action.payload){
        let decAmount = curEle.amount - 1

        if(decAmount <= 0){
            decAmount = 1
        }

        return {
            ...curEle,
            amount : decAmount
        }
    }
    else {
        return curEle;

        
    }
   }) ;
   return {
    ...state,
    cart : updatecart
   }
}


//   for delete the item 

  if (action.type === "DELETE_ITEM") {
    let updatecart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: updatecart,
    };
  }

  //  to empty the cart

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

//   total item in cart icon 

  if(action.type ==="CART_TOTAL_ITEM"){
    let updateItem = state.cart.reduce((initialVal,curEle)=> {
        let {amount} = curEle;  

        initialVal = initialVal + amount;
        return initialVal;
    },0);
    return {
        ...state,
        total_item : updateItem,
    }
  }
  if(action.type === "CART_TOTAL_PRICE"){
    let total_price = state.cart.reduce((initialVal, curEle)=> {
        let {price , amount} = curEle
        initialVal = initialVal + (price*amount)
        return initialVal
    }, 0)
       return {
        ...state,
        total_price : total_price
       }
  } 

  return state;
};

export default AddReducer;
