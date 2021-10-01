import axios from "axios";
import { BASE_URL } from "./base";

export interface EachAnime{
    airing: boolean
    end_date: string
    episodes: number
    image_url: string
    mal_id: number
    members: number
    rated: string
    score: number
    start_date: string
    synopsis: string
    title: string
    type: string
    url: string
}

export const getAnimeByQuery = (name: string) =>{
    const url = BASE_URL + "/search/anime"
    const data: Promise<EachAnime[] | undefined> = axios.get(url, { params: {q: name} })
        .then((response) =>{
            return response.data.results
        })
    return data
}

export const getAnimeById = (id: number) =>{
    const url = BASE_URL + `/anime/${id}`
    return axios.get(url).then((response) =>{
        return response.data as EachAnime
    })

}