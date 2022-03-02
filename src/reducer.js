export const initialState = {
    basket:[]
}


export const actionTypes = {

    ADD_TO_BASKET:"ADD_TO_BASKET",
    REMOVE_ITEM:"REMOVE_ITEM"
}


export const getBasketTotal = (basket)=>{

    return basket?.reduce((amount, item) => item.price + amount, 0)
    
}

const reducer = (state, action)=>{
    console.log(action)
    switch(action.type){

        case "ADD_TO_BASKET":
            return{
                ...state,
                basket:[...state.basket, action.item]
            }
        case "REMOVE_ITEM":
            const index = state.basket.findIndex((basketItem=>basketItem.id === action.id))
            let newBasket = [...state.basket];
            if(index >= 0){
                newBasket.splice(index, 1)
            }else{
                console.log("Cant remove product")
            }
            return{

                ...state,
                basket: newBasket,
                
            }

        default: return state;

    }
   
}

export default reducer