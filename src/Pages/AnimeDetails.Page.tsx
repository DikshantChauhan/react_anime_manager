import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { AnimeSelectedIdAction } from "../storage/actions/anime.actions";
import { animeBySelectedIdSelecter } from "../storage/selectors/anime.selectors";

interface Props{}

const AnimeDetailPage: React.FC<Props> = () => {
    const anime = useSelector(animeBySelectedIdSelecter)
    const perems: any = useParams()
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(AnimeSelectedIdAction(perems.id))
    }, [])// eslint-disable-line

    if(!anime){
        return (
            <h1>No data found</h1>
        )
    }
    return(
        <>
        <h1 className={`text-lg`}>{anime.title}</h1>
        <div>
            <img className={`max-w-xs`} src={anime.image_url} alt="" />
            <p>{anime.synopsis}</p>
        </div>
        </>
    )
};

AnimeDetailPage.defaultProps = {
    
}

export default React.memo(AnimeDetailPage);