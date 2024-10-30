'use client'
import React from 'react'
import style from './organismos.module.css'
import Icons from '../Atomos/Icons'
import { Button } from '../Atomos/Button'
import { ModalLogin } from './ModalLogin'

export const NavBar = () => {

    const [logged, setLogged] = React.useState(false)
    const [modalLogin, setModalLogin] = React.useState(false)

    return (
        <div
            className={style.navBar}
        >
            <div
                className={style.buttonsAndLogo}
            >
                <div>
                    {Icons('').Logo}
                </div>
                <Button
                    className={style.buttonNavBar}
                    onClick={() => console.log('hola')
                    }
                    text='Popular'
                    key={'popular1'}
                />
                <Button
                    className={style.buttonNavBar}
                    onClick={() => console.log('adios')
                    }
                    text='Favorites'
                    key={'favorite1'}
                />
            </div>
            <div
                className={style.icon}
                onClick={() => setModalLogin(!modalLogin)}
            >
                {!logged ? Icons('').ProfileNoLog : Icons('').Profile}
            </div>
            {modalLogin &&
                <ModalLogin
                    closeModal={() => setModalLogin(false)}
                    openModal={modalLogin}
                />
            }
        </div>
    )
}
