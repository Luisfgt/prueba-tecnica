import React from 'react'
import { Title } from '../Atomos/Title'
import Icons from '../Atomos/Icons'
import style from './moleculas.module.css'

export const SearchComponent = ({ state, searchFunction }: { state: any, searchFunction: (value: string) => void }) => {

    const [valueOfSearch, setValueOfSearch] = React.useState('')


    return (
        <div
            className={style.searchComponent}
        >
            <input type="text"
                placeholder='Search'
                value={valueOfSearch}
                onChange={(e) => setValueOfSearch(e.target.value)}
                onKeyDown={() => searchFunction(valueOfSearch)}
                className={style.searchInput}
            />
            <div
            style={{padding: '1rem'}}
            >
                {Icons().SearchIcon}
            </div>
        </div>
    )
}
