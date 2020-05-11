import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
/**
 * 미들웨어를 설정하는 일을하는 store
 * 
 * 여기서는 비동기 처리를 해봄
 */
export default function configureStore(reducer, initialState = {}) {
    
    const storeEnhancers = compose(
        applyMiddleware(thunk)
    );

    return createStore(reducer, initialState, storeEnhancers);
};

