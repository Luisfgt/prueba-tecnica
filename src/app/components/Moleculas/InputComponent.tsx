import React from 'react'
import { Title } from '../Atomos/Title'
import Icons from '../Atomos/Icons'

export const InputComponent = ({ label, value, onChange, placeholder, className, name, disabled, icon, classNameIsInContainer, onClickIcon, type }: { label?: string, value: string, onChange: any, placeholder: string, className: string, name: string, disabled: boolean, icon?: string, classNameIsInContainer?: boolean, onClickIcon?: () => void, type: string }) => {

    return (
        <div
            style={{ display: 'flex', flexDirection: 'column', width: 'fit-content', gap: '0.5rem' }}
            className={classNameIsInContainer ? className : ''}
        >
            {label && <Title
                size='h4'
                text={label}
                isSubtitle={false}
            />}

            <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
            >
                <input
                    type={type}
                    style={classNameIsInContainer ? { background: 'none', border: 'none', outline: 'none', width: '100%', color: '#262626', alignItems: 'center', height: '2.5rem', minHeight: '2.5rem' } : {}}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={classNameIsInContainer ? '' : className}
                    name={name}
                    disabled={disabled}
                />
                {icon &&
                    <div
                        onClick={() => onClickIcon && onClickIcon()}
                        style={{ cursor: 'pointer' }}
                    >
                        {Icons('')[icon as keyof typeof Icons]}
                    </div>
                }
            </div>
        </div>
    )
}
