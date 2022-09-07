import React from 'react'
import classNames from "classnames"

export default function Button({ text, variant = 'default' }) {
    return (
        <button className={classNames({
            'p-4 h-10 flex items-cente rounded': true,
            'bg-gray-300': variant === 'default',
            'bg-green-600 text-white': variant === 'success',
            'bg-red-600 text-white': variant === 'danger',
            'bg-yellow-300 text-yellow-800': variant === 'warning',
        })}>{text} {variant}</button>
    )
}
