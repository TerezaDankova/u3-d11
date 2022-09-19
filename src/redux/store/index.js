import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers";
import jobsSearchReducer from "../reducers/jobsSearch";

const bigReducer = combineReducers ({
  favourites: favouritesReducer,
  fetchJobs: jobsSearchReducer
})

const store = configureStore({
      reducer: bigReducer,
    });
    
export default store;

