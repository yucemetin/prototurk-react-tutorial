import React from 'react'

export default function Tab({ children, isActive, setActive }) {
    return (
        <div>
            <nav>
                {children.map((child, index) =>
                    <button onClick={() => setActive(index)}
                        className={isActive === index ? 'bg-green-500'
                            : 'bg-gray-300'}
                        key={index}>{child.props.title}</button>)}
            </nav>
            {children[isActive]}
        </div>
    )
}


Tab.Panel = function ({ children, title }) {
    return (
        <div>{children}</div>
    )
}
