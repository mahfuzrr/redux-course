import {applyMiddleware, createStore} from 'redux';
import rootReducers from './rootReducers';

const MyLogger = (store) => (next) => (action) =>{
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`);

    const updateState = [action].reduce(rootReducers, store.getState());

    console.log(`Next state: ${JSON.stringify(updateState)}`);
    //return next(action);
}

const store = createStore(rootReducers, applyMiddleware(MyLogger));

export default store;