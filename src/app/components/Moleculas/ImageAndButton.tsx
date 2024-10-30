import React from 'react'
import { Title } from '../Atomos/Title'
import { Button } from '../Atomos/Button'
import Image from 'next/image'
import style from './moleculas.module.css'

export const ImageAndButton = ({ img, onClick }: { img: string, onClick: () => void }) => {
    return (
        <div className={style.imageAndButton}>
            <Image
                className={style.imageDetailMovie}
                alt=''
                src={img}
            />
            <Button
                className={style.buttonDetailMovie}
                onClick={onClick}
                text='Official Trailer'
                icon='PlayIcon'
            />
        </div>
    )
}
