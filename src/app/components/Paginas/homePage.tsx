import React from 'react'
import style from './homePage.module.css'
import { NavBar } from '../Organismos/NavBar'
import { Movie } from '@/app/helpers/Interfaces'
import { TopMovieComponent } from '../Organismos/TopMovieComponent'
import { SideBar } from '../Organismos/SideBar'
import { MultipleCards } from '../Organismos/MultipleCards'

export const HomePage = ({ cards, genres, popularCard, nowPlayingCard, upcomingCard, topRatedCard }: { cards: Movie[], genres: string[], popularCard: Movie[], nowPlayingCard: Movie[], upcomingCard: Movie[], topRatedCard: Movie[] }) => {
    return (
        <div
            className={style.homePage}
        >
            <NavBar />
            <TopMovieComponent
                movie={cards[0]}
            />
            <SideBar
                options={genres}
            />
            <MultipleCards
                nowPlayingCard={nowPlayingCard}
                popularCard={popularCard}
                upcomingCard={upcomingCard}
                topRatedCard={topRatedCard}
            />
        </div>
    )
}
