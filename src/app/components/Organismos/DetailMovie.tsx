import React, { useEffect } from 'react'
import { ImageAndButton } from '../Moleculas/ImageAndButton'
import { Title } from '../Atomos/Title'
import { Paragraph } from '../Atomos/Paragraph'
import { Movie, MovieDetail } from '@/app/helpers/Interfaces'
import { RatingComponent } from '../Moleculas/RatingComponent'
import style from './organismos.module.css'
import Icons from '../Atomos/Icons'
import { CardsContainer } from './CardsContainer'
import Image from 'next/image'
import axios from 'axios'

export const DetailMovie = ({ movieId, API_MOVIES_URL, API_MOVIES, favorites }: { movieId: string, API_MOVIES_URL: string, API_MOVIES: string, favorites: Movie[] }) => {

    const [movie, setMovie] = React.useState<MovieDetail>([] as unknown as MovieDetail)
    const [recomendation, setRecommentation] = React.useState<Movie[]>([])


    const baseUrl = "https://image.tmdb.org/t/p/";
    const size = "original";
    const posterUrl = `${baseUrl}${size}${movie?.poster_path}`;
    const secondImageUrl = `${baseUrl}${size}${movie?.backdrop_path}`;

    useEffect(() => {

        const getMovie = async () => {
            try {
                const movie = await axios.get(`${API_MOVIES_URL}movie/${movieId}?`,
                    {
                        params: {
                            api_key: API_MOVIES,
                            language: 'en-US'
                        }
                    }
                )
                return setMovie(movie.data)

            } catch (error) {
                console.log(error);
            }
        }

        const getMovieRecomendation = async () => {
            try {
                const movie = await axios.get(`${API_MOVIES_URL}movie/${movieId}/recommendations?`,
                    {
                        params: {
                            api_key: API_MOVIES,
                            language: 'en-US'
                        }
                    }
                )
                return setRecommentation(movie.data)

            } catch (error) {
                console.log(error);
            }
        }
        getMovieRecomendation()
        getMovie()

    }, [])

    return (
        <div
            className={style.detailContainer}
        >
            <div
                className={style.detailMovieCard}
            >
                <ImageAndButton
                    img={posterUrl}
                    onClick={() => console.log('hola')}
                />
                <div
                    style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '1rem' }}
                >
                    <div
                        style={{ display: 'flex', gap: '0.5rem', width: '50%' }}
                    >
                        <Title
                            isSubtitle={false}
                            size='h1'
                            text={movie?.title}
                        />
                        <div
                            style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
                        >
                            <Title
                                isSubtitle={false}
                                size='h5'
                                text={movie?.release_date}
                            />
                            <Title
                                isSubtitle={false}
                                size='h5'
                                text={`${movie?.runtime} min`}
                            />
                        </div>
                    </div>
                    <Title
                        isSubtitle={false}
                        size='h2'
                        text='Overview:'
                    />
                    <Paragraph
                        size='h4'
                        text={movie?.overview}
                    />
                    <section
                        className={style.ratingAndFavorite}
                    >
                        <div
                            className={style.ratingAndTitle}
                        >
                            <RatingComponent
                                value={movie?.vote_average}
                            />
                            <div
                                style={{ display: 'flex', gap: '0.1rem', flexDirection: 'column' }}
                            >
                                <Title
                                    isSubtitle={false}
                                    size='h4'
                                    text='Users'
                                />
                                <Title
                                    isSubtitle={false}
                                    size='h4'
                                    text='Score'
                                />
                            </div>
                        </div>
                        <div>
                            {Icons('#F6F6F6').Corazon}
                        </div>
                    </section>

                </div>
                <div
                    className={style.blackFilter}
                >
                    <Image
                        src={secondImageUrl}
                        alt=''
                        style={{ widows: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </div>
            <div
                className={style.detailMovieCards}
            >
                <CardsContainer
                    putInFavorites={(movie: Movie) => console.log(movie)}
                    favorites={favorites}
                    cards={recomendation}
                    titleCategory='Recommendations'
                />
            </div>
        </div>
    )
}
