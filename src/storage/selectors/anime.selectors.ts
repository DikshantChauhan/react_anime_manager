import { createSelector } from "reselect";
import { animeStateSelector } from "./root.selectors";

export const animeByIdsSelector = createSelector(
    [animeStateSelector],
    (animeState) =>{
        return animeState.byIds
    }
)

export const animeCurrentQuerySelector = createSelector(
    [animeStateSelector],
    (animeState) =>{
        return animeState.currentQuery
    }
)

export const animeSelectedIdSelector = createSelector(
    [animeStateSelector],
    (animeState) =>{
        return animeState.SelectedId
    }
)

export const animeIdsByQuerysSelector = createSelector(
    [animeStateSelector],
    (animeState) =>{
        return animeState.idsByQuerys
    }
)

export const animeIdsByCurrentQuerySelector = createSelector(
    [animeCurrentQuerySelector, animeIdsByQuerysSelector],
    (currentQuery, idsByQuerys) =>{
        return idsByQuerys[currentQuery]
    }
)

export const animeBySelectedIdSelecter = createSelector(
    [animeSelectedIdSelector, animeByIdsSelector],
    (id, byIds) =>{
        return byIds[id!]
    }
)

export const animeListByCurrentQuerySelector = createSelector(
    [animeIdsByCurrentQuerySelector, animeByIdsSelector],
    (idsByCurrentQuery, byIds) =>{
        if(!idsByCurrentQuery){
            return []
        }
        return idsByCurrentQuery.map((id) =>{
            return byIds[id]
        })
    }
)

