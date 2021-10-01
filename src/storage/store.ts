import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { AnimeReducer } from './reducers/anime.reducer'
import { rootSaga } from './sagas/root.sagas';

const reducer = combineReducers({
    anime: AnimeReducer,
})

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
      // other store enhancers if any
    )
);

sagaMiddleware.run(rootSaga)

export type AppState = ReturnType<typeof reducer>

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector; 