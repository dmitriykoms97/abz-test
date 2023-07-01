import { useMemo } from 'react';
import { createStore } from 'redux';

import rootReducer from './reducers/index';

let store;

function initStore (preloadedState) {
    return createStore(
        rootReducer,
        preloadedState
    );
}

export const initializeStore = (preloadedState = {}, actions = []) => {
    const _store = store ?? initStore(preloadedState);

    actions.forEach(action => _store.dispatch(action));

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store;
    // Create the store once in the client
    if (!store) store = _store;

    return _store;
};

export function useStore (initialState, actions) {
    const store = useMemo(() => initializeStore(initialState, actions), [initialState, actions]);
    return store;
}
