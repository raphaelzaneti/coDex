import React, { useState, useEffect } from "react";
import { useFavorites } from "../../hooks/useFavorites";
import CardModal from "../CardModal/CardModal";
import './Card.css'

export default function Card(props) {

    const [favoriteCard, setFavoriteCard] = useState(false)
    const {favorites, setFavorites} = useFavorites()

    const hearthActive = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z" />
    </svg>

    const hearthInactive = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z" />
    </svg>

    useEffect(() => {
        if(favoriteCard){
            setFavorites([...favorites, props.title])    
        } else{
            let updatedFavorites = favorites.filter(e => e!==props.title)

            setFavorites(updatedFavorites)
        }
        
    }, [favoriteCard])

    function handleFavorite(){
        setFavoriteCard(!favoriteCard)
        console.log(favorites)
        
    }

    return (
        <>
            <article className="card">
                <button className="card-favico" onClick={handleFavorite}>
                    {favoriteCard ? hearthActive : hearthInactive}
                </button>

                <div
                    className="card-flexcontainer"
                    type="button"
                    data-toggle="modal"
                    data-target={"#" + 'card-modal-' + props.modalId}
                    data-bs-toggle="modal"
                    data-bs-target={"#" + 'card-modal-' + props.modalId}
                >
                    <h3 className="card__title">{props.title}</h3>
                    <div className="card__image-area">
                        <img className="img-fluid" src={`data:image/png;base64,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`} alt="logo" />
                    </div>
                </div>
            </article>

            <div className="modal fade" id={'card-modal-' + props.modalId}
                tabindex="-1"
                role="dialog"
                aria-labelledby={'card-modal-' + props.modalId}
                aria-hidden="true"
            >
                <CardModal {...props} />
            </div>

        </>
    )
}