import React from 'react'

export const InputComponent = ({ label, value, onChange, placeholder, className, name, disabled }: { label?: string, value: string, onChange: any, placeholder: string, className: string, name: string, disabled: boolean }) => {
    return (
        <div>
            {label && <label>{label}</label>}

            <input type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={className}
                name={name}
                disabled={disabled}
            />
        </div>
    )
}
