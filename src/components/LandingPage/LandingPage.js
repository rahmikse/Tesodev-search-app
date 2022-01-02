import React from 'react'
import Header from "../../components/Header/Header"
import "../../App.css"
import SearchButton from "../../components/Search/SearchButton"
import SearchInput from "../../components/Search/SearchInput";
const LandingPage = () => {
    return (
        <div>
            <Header/>
            <SearchInput/>
            <SearchButton/>
            
        </div>
    )
}

export default LandingPage
