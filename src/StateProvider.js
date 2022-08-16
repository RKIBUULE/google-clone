import React, {createContext, useContext, useReducer} from 
"react";
// import ReactDOM from "react-dom";
// import './index.css';
// import App from "./App";
// import * as serviceWorker from '.serviceWorker';

export const StateContext = createContext()

export const StateProvider = ({
    reducer, initialState, children
}) => (
    <StateContext.Provider value={
        useReducer(reducer,initialState)
    } >
    {children}
    </StateContext.Provider >
)

export const useStateValue = () => useContext(StateContext)
