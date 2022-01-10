import React, { createContext, useContext, useReducer } from 'react'

//Preparing the datalayer
export const StateContext = createContext()

//Data layer for initial state, reducer to modify data
//We wrap our app inside StateProvider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//pulling information from the data layer to component 
export const useStateValue = () => useContext(StateContext)
