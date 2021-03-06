import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'
const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
}
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

//REFACTORING REDUCERS CONTINUED WAS SKIPPED

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            //new es6 syntax for overwriting a property in an object. This is not an array
            const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] +1 }
            const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice +INGREDIENT_PRICES[action.ingredientName],
                building: true
            }
            return updateObject(state, updatedState)

        case actionTypes.REMOVE_INGREDIENT:
             //new es6 syntax for overwriting a property in an object. This is not an array
             const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
             const updatedIngs = updateObject(state.ingredients, updatedIng)
             const updatedSt = {
                 ingredients: updatedIngs,
                 totalPrice: state.totalPrice +INGREDIENT_PRICES[action.ingredientName],
                 building: true
             }
             return updateObject(state, updatedSt)
        
        // case changed in lecture "changing the order of our ingredients manually"
        case actionTypes.SET_INGREDIENTS:
        return updateObject(state, {
            ...state,
            ingredients: action.ingredients,
            totalPrice: 4,
            error: false,
            building: false
            
        })
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, {error: true})
        default:
            return state;
    }
}

export default reducer