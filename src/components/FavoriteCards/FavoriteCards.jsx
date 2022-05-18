import React, {useState, useEffect} from "react";
import CardList from '../../components/CardList/CardList'
import { useFavorites } from "../../hooks/useFavorites";

export default function FavoriteCards(props){

    const {favorites, setFavorites} = useFavorites()

    const allLangs = props.langs
    
    let favoriteLangs = favorites.length < 1 ? [] : allLangs.filter(e => {
        if(favorites.some(lang => lang===e["Intended use"]))
            return e
    })


    return(
        <section className="main-container">
                <h1 onClick={console.log(favoriteLangs)}>Favorite languages</h1>
                <CardList keyChar={'fav-'} langs ={favoriteLangs} title="Favorite languages:" />
                
        </section>
    )
}