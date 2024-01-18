const ADD_DISH_CART = 'cart/ADD_DISH_CART'
const CLEAR_DISH_CART = 'cart/CLEAR_DISH_CART'
const MINUS_DISH = 'cart/MINUS_DISH'

const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DISH_CART: {
      let newState =  {
        ...state, 
        items: [...state.items, action.payload],
      }

      let newTotalPrice = 0

      newState.items.forEach(item => newTotalPrice += parseInt(item.price) )
      
      newState.totalCount = newState.items.length

      newState.totalPrice = newTotalPrice

      return newState
    }
    case CLEAR_DISH_CART: {
      let newState = { 
        ...state, items: state.items = []
      }
      newState.totalCount = 0

      newState.totalPrice = 0
      return newState
    }
    case MINUS_DISH: {
      const { dishId, dishSize } = action.payload;
      const updatedItems = state.items.filter(item => item.id !== dishId || item.activeSize !== dishSize);
      const newTotalPrice = updatedItems.reduce((sum, item) => sum + parseInt(item.price), 0);
      return {
        ...state,
        items: updatedItems,
        totalCount: updatedItems.length,
        totalPrice: newTotalPrice
      }
    }
    default:
      return state
  }
}

export const addDishToCartAC = (dishObj) => ({ type: ADD_DISH_CART, payload: dishObj  })
export const clearDishCartAC = () => ({ type: CLEAR_DISH_CART })
export const removeDishAC = (dishObj) => ({ type: MINUS_DISH, payload: dishObj  })

export default cartReducer