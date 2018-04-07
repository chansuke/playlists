import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';

export default function configureStore(middlewares: any[]) {
  const creatStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return creatStoreWithMiddleware(reducers);
}
