import React, { useState, useEffect } from "react";
import './Main.css'
import axios from "axios";

import CardList from '../../components/CardList/CardList'
import FavoriteCards from "../../components/FavoriteCards/FavoriteCards";
import FavoritesProvider from "../../hooks/useFavorites";

export default function Main(props) {

    const url = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/690e8f3f-5439-4031-8add-2ba41ec31c69/csvjson.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220518T120839Z&X-Amz-Expires=86400&X-Amz-Signature=8e894bd7ae499e187587a6efc98f77ea647d3a7dc353e5b8a84dc5dcb31f8815&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22csvjson.json%22&x-id=GetObject'

    const [languagesList, setLanguagesList] = useState(null)

    function getLanguages() {
        axios.get(url).then(async json => {
            await setLanguagesList(json.data)
        })
    }

    useEffect(getLanguages, [])

    return (
        <FavoritesProvider>
            <main className="main-container">
                <FavoriteCards langs={languagesList} />
                <CardList langs={languagesList} keyChar="main-" title="Choose your favorite programming language:" />
            </main>
        </FavoritesProvider>
    )
}