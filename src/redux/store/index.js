import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favourites";
import jobsSearchReducer from "../reducers/jobsSearch";

const bigReducer = combineReducers ({
  favourites: favouritesReducer,
  jobs: jobsSearchReducer
})

const store = configureStore({
  reducer: bigReducer,
});
    
export default store;

