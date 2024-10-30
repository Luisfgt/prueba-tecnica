import React from 'react'
import { Title } from '../Atomos/Title'
import Icons from '../Atomos/Icons'
import style from './moleculas.module.css'

export const FavoriteComponent = ({ onClick, isFavorite }: { onClick: () => void, isFavorite: boolean }) => {

    return (
        <div
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 'fit-content', alignItems: 'center', gap: '0.2rem' }}
            onClick={onClick}
        >
            <Title
                isSubtitle={true}
                size='h7'
                text='Favorites'
            />
            <div
                className={style.favoriteStyle}
            >
                {isFavorite ? Icons('#F0B90B').Corazon : Icons('#F6F6F6').Corazon}
            </div>
        </div>
    )
}
