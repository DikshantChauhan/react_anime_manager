import { AppState } from "../store";

export const animeStateSelector = (state: AppState) =>{
    return state.anime
}