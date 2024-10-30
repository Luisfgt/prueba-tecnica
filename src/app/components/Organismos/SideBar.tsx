'use client'
import React from 'react'
import { SearchComponent } from '../Moleculas/SearchComponent'
import { Title } from '../Atomos/Title'
import { SelectComponent } from '../Moleculas/SelectComponent'
import style from './organismos.module.css'


export const SideBar = ({ options }: { options: any[] }) => {

    const [selectedOption, setSelectedOption] = React.useState([])

    return (
        <section
            className={style.sideBar}
        >
            <div
                className={style.labelAndInput}
            >
                <Title
                    isSubtitle={false}
                    size='h4'
                    text='Search'
                />
                <SearchComponent
                    searchFunction={(value) => console.log(value)}
                />
            </div>
            <div
                className={style.labelAndInput}
            >
                <Title
                    isSubtitle={false}
                    size='h4'
                    text='Generes'
                />
                <SelectComponent
                    onSelect={(element) => {
                        setSelectedOption(element)}}
                    options={options}
                    state={selectedOption}
                />
            </div>
        </section>
    )
}
