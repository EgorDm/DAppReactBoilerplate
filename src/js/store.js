import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import promise from 'redux-promise-middleware';

import rootSaga from './sagas';
import rootReducer from './reducers';

export default function () {
    const sagaMiddleware = createSagaMiddleware();

    const middleware = applyMiddleware(promise(), sagaMiddleware);
    const store = createStore(rootReducer, middleware);

    sagaMiddleware.run(rootSaga);

    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return {store};
};
