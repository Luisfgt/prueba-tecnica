'use client'
import React, { useEffect } from 'react'
import { CardsContainer } from './CardsContainer'
import style from './organismos.module.css'
import { all } from 'axios'
import { Movie } from '@/app/helpers/Interfaces'

export const MultipleCards = ({ popularCard, nowPlayingCard, upcomingCard, topRatedCard }: { popularCard: Movie[], nowPlayingCard: Movie[], upcomingCard: Movie[], topRatedCard: Movie[] }) => {

    const [favorites, setFavorites] = React.useState<Movie[]>([])

    const putInFavorites = (movie: Movie) => {
        const isFavorite = favorites.find((movieExample: Movie) => movieExample.id === movie.id)
        if (isFavorite) {
            return setFavorites((prev) => prev.filter((movieExample: Movie) => movieExample.id !== movie.id))
        }
        return setFavorites((prev) => [...prev, movie])
    }

    return (
        <div className={style.multipleCards}>
            <CardsContainer
                favorites={favorites}
                putInFavorites={(movie: Movie) => putInFavorites(movie)}
                cards={popularCard}
                titleCategory='Popular'
                key={'popular'}
            />
            <CardsContainer
                favorites={favorites}
                putInFavorites={(movie: Movie) => putInFavorites(movie)}
                cards={nowPlayingCard}
                titleCategory='Now Playing'
                key={'nowPlaying'}
            />
            <CardsContainer
                favorites={favorites}
                putInFavorites={(movie: Movie) => putInFavorites(movie)}
                cards={upcomingCard}
                titleCategory='Upcoming'
                key={'upcoming'}
            />
            <CardsContainer
                favorites={favorites}
                putInFavorites={(movie: Movie) => putInFavorites(movie)}
                cards={topRatedCard}
                titleCategory='Top Rated'
                key={'topRated'}
            />
            <CardsContainer
                favorites={favorites}
                putInFavorites={(movie: Movie) => putInFavorites(movie)}
                cards={favorites}
                titleCategory='Favorites'
                key={'favorites'}
            />

        </div>
    )
}
