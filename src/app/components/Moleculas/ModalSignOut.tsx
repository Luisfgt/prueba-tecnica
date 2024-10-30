import React from 'react'
import style from './moleculas.module.css'

export const ModalSignOut = ({ openModal, closeModal, setLogged }: { openModal: boolean, closeModal: () => void, setLogged: (logged: boolean) => void }) => {

    return (
        <div
            onClick={() => {
                closeModal()
                setLogged(false)
            }}
            className={style.buttonSignOut}
        >
            Sign Out
        </div>
    )
}
