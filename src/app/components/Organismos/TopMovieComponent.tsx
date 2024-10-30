'use client'
import React from 'react'
import { Title } from '../Atomos/Title'
import { Paragraph } from '../Atomos/Paragraph'
import Icons from '../Atomos/Icons'
import { RatingComponent } from '../Moleculas/RatingComponent'
import style from './organismos.module.css'
import Image from 'next/image'
import { Movie } from '@/app/helpers/Interfaces'

export const TopMovieComponent = ({ movie }: { movie: Movie }) => {

    const baseUrl = "https://image.tmdb.org/t/p/";
    const size = "original";
    const posterUrl = `${baseUrl}${size}${movie.poster_path}`;
    
    const [isFavorite, setIsFavorite] = React.useState(false)

    return (
        <div
            className={style.topMovieComponent}
        >
            <img
                src={posterUrl}
                alt=""
                className={style.imageTopMovie}
                width={100}
                height={100}
            />
            <div
                className={style.blackFilter}>

            </div>
            <div
                className={style.titlesAndRating}
            >
                <div
                    className={style.titleAndParagraph}
                >
                    <Title
                        isSubtitle={true}
                        size='h1'
                        text={movie.title}
                    />
                    <Paragraph
                        size='h3'
                        text={movie.overview}
                    />
                </div>
                <div
                    className={style.favoriteAndRating}
                >
                    <div
                        onClick={() => setIsFavorite(!isFavorite)}
                        style={{ cursor: 'pointer' }}
                        className={style.favoriteStyle}
                    >{Icons(isFavorite ? '#F0B90B' : '#F6F6F6').Corazon}</div>
                    <RatingComponent
                        value={movie.vote_average}
                        isWithoutText={true}
                    />
                </div>
            </div>
        </div>
    )
}
