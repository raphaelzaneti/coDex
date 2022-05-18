import React, {createContext, useState, useContext} from 'react'

const FavoritesContext = createContext()

export default function FavoritesProvider(props){
    
    const [favorites, setFavorites] = useState([])

    return(
        <FavoritesContext.Provider value={{
            favorites, 
            setFavorites
        }}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export function useFavorites(){
    const {favorites, setFavorites} = useContext(FavoritesContext)
    return {favorites, setFavorites}
}