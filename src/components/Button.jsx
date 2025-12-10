import React from 'react'

export default function Button({
    value,
    disable
}) {
    return (
        <button className="mt-2 bg-blue-600 hover:bg-blue-500 transition w-full py-2 rounded-xl font-semibold text-lg"
        disabled={disable}
        >
            {value}
        </button>
    )
}
