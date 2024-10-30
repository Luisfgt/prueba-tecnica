import React from 'react'
import { Title } from '../Atomos/Title'
import { CardComponent } from '../Moleculas/CardComponent'
import style from './organismos.module.css'
import { Movie } from '@/app/helpers/Interfaces'

export const CardsContainer = ({ cards, titleCategory, favorites, putInFavorites }: { cards: Movie[], titleCategory: string, favorites: Movie[], putInFavorites: (movie: Movie) => void }) => {

    console.log(cards);

    if (favorites.length === 0 && titleCategory === 'Favorites') return
    return (
        <div
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
            <Title
                isSubtitle={false}
                size='h2'
                text={titleCategory}
            />
            <div className={style.cardsOverview}>
                <div className={style.cardsContainer}>
                    {cards?.map((movie: Movie) => {
                        const uniqueKey = `${crypto.randomUUID()} + ${movie.id} + ${titleCategory}`;
                        return (
                            <CardComponent
                                favorites={favorites}
                                putInFavorites={putInFavorites}
                                key={uniqueKey}
                                movieInfo={movie}
                                isVersion2={false}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
