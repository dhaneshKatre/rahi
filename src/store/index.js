import { 
    createStore,
    compose,
    applyMiddleware
} from 'redux';

import reducers from '../reducers';

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware()
    )
);

export default store;