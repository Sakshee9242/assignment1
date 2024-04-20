
const number = {num:1}
export const userReducer = (state = number, action ) =>{
    switch(action.type){
        case "increment" : return { num:state.num+1}
        case "decrement" : return {num:state.num-1}
        default : return state
    }
    
}