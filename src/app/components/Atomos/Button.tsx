import React from 'react'
import { Title } from './Title'
import Icons from './Icons'

export const Button = ({ text, className, onClick, icon, widthLogo }: { text: string, className: string, onClick: () => void, icon?: string, widthLogo?: string }) => {

    console.log(icon, 'hola estoy acá');

    return (
        <div
            className={className}
            onClick={onClick}
            style={{ cursor: 'pointer' }}
        >
            <Title
                isSubtitle={false}
                size='h6'
                text={text}
            />
            {icon && <div
                style={{ display: 'flex', justifyContent: 'center', width: widthLogo ?? '12px', height: 'auto' }}
            >{Icons('')[icon as keyof typeof Icons]}</div>}
        </div>
    )
}
