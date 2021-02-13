import { all } from 'redux-saga/effects';
import { loginSaga } from '../modules/loginInfo';

export default function* rootSaga(){
  yield all([loginSaga()])
}