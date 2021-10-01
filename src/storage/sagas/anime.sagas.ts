import { AnimeFetchedByIdAction, AnimeListFetchedByQueryAction } from './../actions/anime.actions';
import { EachAnime, getAnimeById } from './../../apis/anime.api';
import { AnyAction } from 'redux';
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { ANIME } from "../actionKey";
import { getAnimeByQuery } from '../../apis/anime.api';

export function* currentQueryWatchSaga(action: AnyAction){
    const response: EachAnime[] = yield call(getAnimeByQuery, action.payload)
    yield put(AnimeListFetchedByQueryAction(response))
}

export function* SelectedIdWatchSaga(action: AnyAction){
    const response: EachAnime = yield call(getAnimeById, action.payload)
    yield put(AnimeFetchedByIdAction(response))
}

export function* animeSaga(){
    yield takeEvery(ANIME.CURRENTQUERY, currentQueryWatchSaga)
    yield takeEvery(ANIME.SELECTED_ID, SelectedIdWatchSaga)
}