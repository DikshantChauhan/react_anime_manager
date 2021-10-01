import { EachAnime } from './../../apis/anime.api';
import { ANIME } from './../actionKey';
import { Reducer, AnyAction } from "redux";

interface AnimeState{
    byIds: { [id: number]: EachAnime }
    currentQuery: string;
    idsByQuerys: { [query: string]: number[] }
    SelectedId?: number
}

const initialValue: AnimeState = {
    byIds: {},
    currentQuery: "",
    idsByQuerys: {},
    SelectedId: undefined,
}

export const AnimeReducer: Reducer<AnimeState> = (state = initialValue, action: AnyAction) =>{
    switch(action.type){
        
        case ANIME.CURRENTQUERY: {
            return { 
                ...state, 
                currentQuery: action.payload,
            }
        }

        case ANIME.SELECTED_ID: {
            return { 
                ...state, 
                SelectedId: action.payload,
            }
        }

        case ANIME.LIST_FETCHED_BY_QUERY: {
            const payload = action.payload as EachAnime[]
            if(!payload){
                return state
            }
            const normalizedData = payload.reduce((pre, curr) =>{
                return { ...pre, [curr.mal_id]: curr }
            }, {})
            const mapIds = payload.map((item) =>{
                return item.mal_id
            })
            return { 
                ...state, 
                byIds: { ...state.byIds, ...normalizedData },
                idsByQuerys: { ...state.idsByQuerys, [state.currentQuery]: mapIds },
            }
        }

        case ANIME.ANIME_FETCHED_BY_ID: {
            const anime: EachAnime = action.payload
            if(!anime){
                return state
            }
            return {
                ...state,
                byIds: { ...state.byIds, [anime.mal_id]: anime }
            }
        }

        default:
            return state
    }
}