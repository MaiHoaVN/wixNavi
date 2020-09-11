import { combineReducers } from 'redux';

//import reducer
import { reducer as GlobalRedux } from './GlobalRedux'

// export reducers
const rootReducer = combineReducers({
    global: GlobalRedux
});

export default rootReducer;
