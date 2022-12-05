// let's manage all our actions here!
// best practise: instead of writing the actions manually every time,
// let's create some functions that return actions with dynamic payload:
// these are called "action creators functions"

// another best practise: define CONSTANTS for your action types!
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

// this is a function returning an action
// in Redux terminology, this is called an "action creator"
export const addToCartAction = (bookSelected) => {
  return {
    type: ADD_TO_CART,
    payload: bookSelected, // most of the times,
    // you'll also need some data in your actions...
    // that's a job for a property commonly called 'payload'
  }
}

export const removeFromCartAction = (i) => {
  return {
    type: REMOVE_FROM_CART,
    payload: i,
  }
}

// addToCartAction(something) <-- this gives me the action!
