import React from 'react'
import { Title } from '../Atomos/Title'
import Icons from '../Atomos/Icons'
import style from './moleculas.module.css'

export const SelectComponent = ({ options, onSelect, state }: { options: any[], onSelect: (element: any) => void, state: any }) => {

    const [openSelect, setOpenSelect] = React.useState(false)
    console.log(options, 'hola estoy acá soy Luis');


    return (
        <div
            className={style.searchAndMenu}
        >
            <div
                className={style.selectContainer}
                style={{ cursor: 'pointer' }}
                onClick={() => setOpenSelect(!openSelect)}
            >
                <Title
                    isSubtitle={true}
                    size='h5'
                    text={state.name ? state.name : 'Select'}
                />
                <div
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', transform: openSelect ? 'rotate(-180deg)' : 'rotate(-90deg)', width: '10px', transition: 'all 0.3s ease-in-out' }}
                >
                    {Icons('').BackIcon2}
                </div>
            </div>
            <div
                className={style.selectContainerOptions}
            >
                {openSelect && (
                    options?.map((element: any) =>
                        <div
                            style={{ cursor: 'pointer' }}
                            key={element.id}
                            className={style.selectOption}
                            onClick={() => {
                                setOpenSelect(false)
                                onSelect(element)
                            }}
                        >
                            <Title
                                isSubtitle={true}
                                size='h5'
                                text={element.name}
                            />
                        </div>
                    )
                )}
            </div>
        </div>
    )
}
