import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./middlewares/saga";
import reducer from "./modules/reducer"

const SagaMiddleware = createSagaMiddleware();

const Store = ()=>{
  const store = createStore(
    reducer(),
    {},
    composeWithDevTools(
      applyMiddleware(SagaMiddleware)
    )
  )
  SagaMiddleware.run(rootSaga);
  return store;
}

export default Store;