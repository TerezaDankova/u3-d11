import { GET_JOBS } from "../actions";

const initialState = {
      fetchJobs: [],
    };

const jobsSearchReducer = (state = initialState, action) => {
     
      switch (action.type) {
        case GET_JOBS: {
          return {
            ...state,
            fetchJobs: [...action.payload],
          };
        }
    
        default:
          return state;
      }
    };
    
    export default jobsSearchReducer;