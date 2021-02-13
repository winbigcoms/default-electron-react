import { createActions, handleActions } from "redux-actions";
import {put, takeEvery} from 'redux-saga/effects'

const {start,success,fail} = createActions(
  {
    SUCCESS:(id)=>({id})
  },
  'START',
  'FAIL'
);

const initState = {
  id:"",
  isLogin:false
};

const login = handleActions(
  {
    START:()=>({
      id:"",
      isLogin:false
    }),
    SUCCESS:(state,action)=>({
      id: action.payload.id,
      isLogin:true
    }),
    FAIL:(state,action)=>({
      id:"",
      isLogin:false
    })
  },
  initState
)

export default login;

const START_lOGIN_SAGA="START_lOGIN_SAGA";

export const loginStart = ()=>({
  type:START_lOGIN_SAGA
})

function* startLoginSaga(){
  try{
    yield put(start());
    yield put(success("imform"));
  }catch(e){
    yield put(fail("error"))
  }
}

export function*loginSaga(){
  yield takeEvery(START_lOGIN_SAGA,startLoginSaga);
}