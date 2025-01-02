// here we define all the application level states and define actions to make the changes to the state

//creating an empty array which serves as the initial state of the basket/cart 
export const initialState = {
    basket: [],
}

//getting the total amount of items that have been added to cart
export const getBasketTotal = (basket) => {
    return(basket?.reduce((amount, item) => item.price + amount, 0)) //iterates through the basket array, if not empty, gets the price of the current item added to basket/cart and adds it to the previous amount; sets the initial amount to 0
}

//reducer function
const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )

            let newBasket = [...state.basket]

            if(index >= 0){
                newBasket.splice(index, 1)
            } else{
                console.warn(`Can't remove product(id: ${action.id}) as it's not in the basket!`)
            }

            return {
                ...state,
                basket: newBasket
            }
        
        default:
            return state;
    }
}

export default reducer;