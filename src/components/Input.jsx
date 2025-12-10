import React from 'react'

export default function Input({
    label,
    type = "text",
    placeholder = "",
    name,
    value,
    onChange,
    autoComplete,
    ...rest
}) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">{label}</label>
            <input
                className="p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
                type={type}
                placeholder={placeholder}
                name={name}
                autoComplete={autoComplete}
                value={value}
                onChange={onChange}
                {...rest}
                required
            />
        </div>
    )
}
