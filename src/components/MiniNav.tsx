import React, { createContext } from 'react';

const theme = createContext("light")
const MiniNav = () => {
    return (
        <>
            <div className='fixed left-[29%] w-16 h-16 p-6 rounded-full
                            bg-black/50'>

            </div>
        </>
    );
};

export { MiniNav;