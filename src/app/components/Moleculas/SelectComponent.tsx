import React from 'react'
import { Title } from '../Atomos/Title'
import Icons from '../Atomos/Icons'
import style from './moleculas.module.css'

export const SelectComponent = ({ options, onSelect, state }: { options: any[], onSelect: (element: any) => void, state: any }) => {

    const [openSelect, setOpenComponent] = React.useState(false)

    return (
        <div>
            <div>

                <Title
                    isSubtitle={false}
                    size='h5'
                    text='Select'
                />
                <div
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', transform: 'rotate(90deg)' }}
                    onClick={() => setOpenComponent(!openSelect)}
                >
                    {Icons().BackIcon2}
                </div>
            </div>
            {openSelect && (
                options.map((element: any) =>
                    <div
                        key={element.id}
                        className={style.selectOption}
                    >
                        <Title
                            isSubtitle={false}
                            size='h5'
                            text={element.name}
                        />
                    </div>
                )
            )}
        </div>
    )
}
