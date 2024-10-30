import React from 'react'
import { Title } from '../Atomos/Title'
import style from './moleculas.module.css'

export const RatingComponent = ({ value, isWithoutText }: { value: number, isWithoutText?: boolean }) => {
    
    return (
        <div>
            {!isWithoutText && <Title
                isSubtitle={true}
                size='h7'
                text='Rating'
            />}
            <div
                style={{ height: !isWithoutText ? '30px' : '92px', width: !isWithoutText ? '26px' : '92px' }}
                className={style.circleContainer}
            >
                {
                    !isWithoutText ? <svg
                        width={'100%'}
                        height={'100%'}
                    >
                        <circle cx="50%" cy="50%" r={!isWithoutText ? "40%" : "48%"} pathLength={100} style={{ stroke: value < 5 ? '#732323' : (value <= 7 ? '#804400' : '#274F27') }} className={style.backgroundCircle2} />
                        <circle cx="50%" cy="50%" r={!isWithoutText ? "40%" : "48%"} pathLength={100} style={{ '--percentage': value * 10, stroke: value < 5 ? '#E54545' : (value <= 7 ? '#FF8800' : '#4DA14F') } as React.CSSProperties} className={style.circle2} />
                    </svg> :
                        <svg
                            width={'100%'}
                            height={'100%'}
                        >
                            <circle cx="50%" cy="50%" r={!isWithoutText ? "40%" : "48%"} pathLength={100} style={{ stroke: value < 5 ? '#732323' : (value <= 7 ? '#804400' : '#274F27') }} className={style.backgroundCircle} />
                            <circle cx="50%" cy="50%" r={!isWithoutText ? "40%" : "48%"} pathLength={100} style={{ '--percentage': value * 10, stroke: value < 5 ? '#E54545' : (value <= 7 ? '#FF8800' : '#4DA14F') } as React.CSSProperties} className={style.circle} />
                        </svg>
                }
                <div
                    style={{ position: 'absolute' }}
                >
                    <Title
                        isSubtitle={true}
                        size={!isWithoutText ? 'h7' : 'h2'}
                        text={`${Math.floor(+value * 10)}%`}
                    />
                </div>
            </div>
        </div>
    )
}
