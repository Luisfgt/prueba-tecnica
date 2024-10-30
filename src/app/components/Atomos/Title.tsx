

import { hToPixels } from '@/app/helpers/hToPixels'
import React from 'react'


export const Title = ({ size, isSubtitle, text }: { size: string, isSubtitle: boolean, text: string }) => {

    const sizeParsed = hToPixels(size)

    return (
        <div
            style={{ fontSize: sizeParsed, fontWeight: !isSubtitle ? 'bold' : 'normal' }}
        >
            {text}
        </div>
    )
}
