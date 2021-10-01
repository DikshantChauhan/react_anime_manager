import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AnimeSelectedIdAction } from "../storage/actions/anime.actions";
import { animeListByCurrentQuerySelector } from "../storage/selectors/anime.selectors";

interface Props{
}

const Container: React.FC<Props> = () => {
    const [clickedIndex, setClickedIndex] = useState<number | undefined>(undefined)
    const animeList = useSelector(animeListByCurrentQuerySelector)
    const dispatch = useDispatch()

    return(
        <div className={`flex flex-wrap items-start justify-center mx-auto`}>
            {animeList?.map((item, index) =>{
                return (
                    <div  
                        key={index} 
                        className={`relative flex flex-col justify-between w-56 self-stretch border border-black rounded-md p-2 m-2 mb-4 transform hover:scale-95 hover:border-green-600 cursor-pointer transition-all`}
                        onMouseEnter={() =>{setClickedIndex(index)}}
                        onMouseLeave={() =>{setClickedIndex(undefined)}}
                        style={{minHeight: '20rem'}}
                    >
                        <img src={item.image_url} className={`w-full`} alt="" />
                        <h1>{item.title}</h1>
                        <div onTouchEnd={() =>{setClickedIndex(undefined)}} className={`${clickedIndex===index ? "opacity-100":"opacity-0"} transition-all absolute flex flex-col top-0 left-0 right-0 bottom-0 bg-white bg-opacity-90 rounded-md cursor-default`}>
                            <button className={`py-4 px-4 text-xl font-semibold cursor-pointer hover:bg-white hover:text-green-600 rounded-md`}>
                                Add to Favirote
                            </button>
                            <button className={`py-4 px-4 text-xl font-semibold cursor-pointer hover:bg-white hover:text-green-600 rounded-md`}>
                                Watch later
                            </button>
                            <button className={`py-4 px-4 text-xl font-semibold cursor-pointer hover:bg-white hover:text-green-600 rounded-md`}>
                                Watching
                            </button>
                            <Link 
                                to={`/anime/detail/${item.mal_id}`} 
                                onClick={() =>{ dispatch(AnimeSelectedIdAction(item.mal_id)) }} 
                                className={`py-4 px-4 text-xl font-semibold cursor-pointer hover:bg-white hover:text-green-600 rounded-md`}
                            >
                                Details
                            </Link>
                        </div>
                    </div>
                )
            })}    
        </div>
    )
};

Container.defaultProps = {
    
}

export default React.memo(Container);