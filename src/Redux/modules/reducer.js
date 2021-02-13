import login from './loginInfo'

const { combineReducers } = require("redux");

const reducer = (history)=>combineReducers({
  login
});

export default reducer;