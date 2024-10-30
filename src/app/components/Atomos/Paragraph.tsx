import { hToPixels } from '@/app/helpers/hToPixels'
import React from 'react'

export const Paragraph = ({ size, text, className }: { size: string, text: string, className?: string }) => {

    const sizeParsed = hToPixels(size)

    return (
        <div
            style={{ fontSize: sizeParsed, fontWeight: 'normal' }}
            className={className}
        >{text}</div>
    )
}
