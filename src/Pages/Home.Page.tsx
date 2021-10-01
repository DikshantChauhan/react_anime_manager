import React from "react";
import Container from "../Components/Container";
import SearchBar from "../Components/SearchBar";

interface Props{}

const HomePage: React.FC<Props> = () => {
    return(
        <>
        <p className={`text-5xl font-semibold font-oni-chan text-center`}>Onii Cha...</p>
        <SearchBar className="my-5 text-center" />
        <Container />      
        </>
    )
};

HomePage.defaultProps = {
    
}

export default React.memo(HomePage);