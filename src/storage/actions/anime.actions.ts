import { EachAnime } from './../../apis/anime.api';
import { ANIME } from './../actionKey';

export const AnimeCurrentQueryAction = (query: string) =>{
    return {
        type: ANIME.CURRENTQUERY,
        payload: query
    }
}

export const AnimeSelectedIdAction = (id: number) =>{
    return {
        type: ANIME.SELECTED_ID,
        payload: id
    }
}

export const AnimeListFetchedByQueryAction = (list: EachAnime[]) =>{
    return {
        type: ANIME.LIST_FETCHED_BY_QUERY,
        payload: list
    }
}

export const AnimeFetchedByIdAction = (anime: EachAnime) =>{
    return {
        type: ANIME.ANIME_FETCHED_BY_ID,
        payload: anime
    }
}