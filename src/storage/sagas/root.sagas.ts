import { all, fork } from 'redux-saga/effects'
import { animeSaga } from './anime.sagas'

export function* rootSaga(){
    yield all([
        fork(animeSaga),
    ])
} 