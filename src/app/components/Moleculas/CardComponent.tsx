import Image from 'next/image'
import React, { useEffect } from 'react'
import { Title } from '../Atomos/Title'
import { RatingComponent } from './RatingComponent'
import { FavoriteComponent } from './FavoriteComponent'
import style from './moleculas.module.css'
import { Movie } from '@/app/helpers/Interfaces'

export const CardComponent = ({ movieInfo, isVersion2, favorites, putInFavorites }: { movieInfo: Movie, isVersion2: boolean, favorites: Movie[], putInFavorites: (movie: Movie) => void }) => {

    const { title, release_date, id, poster_path, vote_average } = movieInfo
    const [isFavortite, setIsFavorite] = React.useState(false)

    const baseUrl = "https://image.tmdb.org/t/p/";
    const size = "original";
    const posterUrl = `${baseUrl}${size}${poster_path}`;
    const newDate = new Date(release_date);
    const parsedReleaseDate = newDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    useEffect(() => {
        const verifyFavorite = () => {
            const isFavorite = favorites.find((movie: Movie) => movie.id === id)
            if (isFavorite) {
                setIsFavorite(true)
            }
            return
        }
        verifyFavorite()
    }, [favorites])

    return (
        <div
            className={isVersion2 ? style.cardContainer2 : style.cardContainer1}
        >
            <div
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}
            >
                <img
                    alt={title}
                    src={posterUrl}
                    className={style.imageCard}
                />
            </div>
            <section
                className={isVersion2 ? style.cardComponentVersion2 : style.cardComponentVersion1}
            >
                <Title
                    key={id}
                    isSubtitle={false}
                    size='h5'
                    text={title}
                />
                {!isVersion2 && <Title
                    key={id + 1}
                    isSubtitle={true}
                    size='h7'
                    text={parsedReleaseDate}
                />}
                {!isVersion2 && <div
                    style={{ display: 'flex', gap: '1rem', width: '100%', justifyContent: 'center' }}
                >
                    <RatingComponent
                        value={vote_average}
                    />
                    <FavoriteComponent
                        isFavorite={isFavortite}
                        onClick={() => {
                            putInFavorites(movieInfo)
                            setIsFavorite(!isFavortite)
                        }}
                    />
                </div>}
            </section>
        </div>
    )
}
