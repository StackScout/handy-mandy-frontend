import { combineReducers } from "@reduxjs/toolkit";
import { ORDERS } from "../actions/actionTypes";
import initialState from "../store/initialState";
import { createReducer } from "./reducerHelper";

const orders = createReducer(ORDERS, initialState.orders);

export default combineReducers({ orders });
