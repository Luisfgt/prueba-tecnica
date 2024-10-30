import React, { useState } from 'react'
import { Button } from '../Atomos/Button'
import style from './organismos.module.css'
import { Paragraph } from '../Atomos/Paragraph'
import { Title } from '../Atomos/Title'
import LoginIllustration from '../../../../public/LogInIllustration.png'
import SignUpIllustration from '../../../../public/SignUpIllustration.png'
import { InputComponent } from '../Moleculas/InputComponent'

export const ModalLogin = ({ openModal, closeModal, setLogged }: { openModal: boolean, closeModal: () => void, setLogged: (logged: boolean) => void }) => {

    const [signUpOrLogin, setSignUpOrLogin] = React.useState('SignUp')
    const [infoToLogIn, setInfoToLogIn] = React.useState({
        email: '',
        password: ''
    })
    const [type, setType] = useState(true)

    const onChange = (e: any) => {
        setInfoToLogIn((prev) => (
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        ))
    }

    return (
        <div className={style.backSite}>
            <div className={style.modalLoginContainer}>
                <section
                    className={style.firstSection}
                >
                    <Button
                        className={style.buttonBack}
                        text='Back'
                        onClick={() => closeModal()}
                        icon='BackIcon'
                        widthLogo='20px'
                    />
                    <div
                        className={style.containerBuittons}
                    >
                        <div
                            className={style.buttonsContainer}
                        >
                            <Button
                                className={style.buttonLoginAndRegister}
                                text='Sign up'
                                onClick={() => setSignUpOrLogin('SignUp')}
                            />
                            <Button
                                className={style.buttonLoginAndRegister}
                                text='Log In'
                                onClick={() => setSignUpOrLogin('LogIn')}
                            />
                            <div
                                style={signUpOrLogin === 'SignUp' ? { left: 0 } : { left: '50%' }}
                                className={style.buttonLoginAndRegisterAnimation}
                            > </div>
                        </div>
                        <div
                            className={style.buttonAndParagraph}
                            style={{ paddingTop: signUpOrLogin === 'SignUp' ? '20rem' : '2rem' }}
                        >
                            {signUpOrLogin === 'SignUp' ? <Button
                                className={style.buttonInitRegister}
                                text='Register with your Email'
                                onClick={() => console.log('hola')}
                                icon='EmailIcon'
                            />
                                :
                                <div
                                    className={style.inputContainer}>
                                    <Paragraph
                                        className={style.paragraph}
                                        size='h5'
                                        text='We love having you back'
                                    />
                                    <InputComponent
                                        className={style.inputOfLogIn}
                                        name='email'
                                        type='email'
                                        disabled={false}
                                        placeholder='Email'
                                        value={infoToLogIn.email}
                                        onChange={(e: string) => onChange(e)}
                                        key={'email2'}
                                        classNameIsInContainer={true}
                                    />
                                    <InputComponent
                                        type={type ? 'password' : 'text'}
                                        className={style.inputOfLogIn}
                                        name='password'
                                        disabled={false}
                                        placeholder='Password'
                                        value={infoToLogIn.password}
                                        onChange={(e: string) => onChange(e)}
                                        key={'email'}
                                        icon='Visibility'
                                        classNameIsInContainer={true}
                                        onClickIcon={() => setType(!type)}
                                    />
                                    <Button
                                        className={style.buttonInitRegister}
                                        text='Continue'
                                        icon='Ticket'
                                        onClick={() => {
                                            closeModal()
                                            setLogged(true)
                                        }}
                                    />
                                </div>
                            }
                            <Paragraph
                                className={style.paragraph}
                                size='h5'
                                text='For any questions, reach out to support@Quickbetdmovies.com'
                            />
                        </div>
                    </div>
                </section>
                <section
                    className={style.secondSection}
                >
                    <div
                        className={style.titleAndParagraph2}
                    >
                        <div
                            style={{ width: '50%' }}
                        >
                            <Title
                                isSubtitle={false}
                                size='h1'
                                text='Welcome to Quickbet Movies!'
                            />
                        </div>
                        <Paragraph
                            className={style.paragraphSecond}
                            size='h3'
                            text='🎬 Ready to unlock a universe of cinematic delights? Sign up now and start your journey with us!'
                        />
                    </div>
                    <img
                        className={style.illustrationStyle}
                        src={SignUpIllustration.src} alt="" />
                </section>
            </div>
        </div>
    )
}
