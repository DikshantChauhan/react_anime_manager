import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AnimeCurrentQueryAction } from "../storage/actions/anime.actions";

interface Props{
    className?: string
}

const SearchBar: React.FC<Props> = ({ className }) => {
    const [ inputValue, setInputValue ] = useState("")
    const dispatch = useDispatch()
    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        dispatch(AnimeCurrentQueryAction(inputValue))
    }
    return(
        <form onSubmit={handelSubmit} className={`${className}`}>
            <input 
                type="text" 
                placeholder="Search..." 
                className={`max-w-md w-full transform scale-95 transition-all focus:scale-100 focus:border-green-600 rounded-md p-2 outline-none border-2 border-black`}
                onChange={ (e) =>{ setInputValue(e.target.value) } }
            />
        </form>
    )
};

SearchBar.defaultProps = {
    
}

export default React.memo(SearchBar);