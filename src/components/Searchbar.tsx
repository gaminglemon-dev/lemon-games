import React, { useState } from 'react';

const Searchbar = () => {
    const [query, setQuery] = useState("");

    const clearQuery = (e: HTMLElement) => {
        
    };

    return (
        <>
            <input className="bg-black/60
                              outline-none
                              ring-2 ring-white ring-offset-yellow-500 ring-offset-4
                              rounded-full w-1/2 p-5 fixed
                              left-[29%]
                              duration-300
                              text-white
                              focus:ring-offset-0 focus:w-[65%]" 
                   onChange={(e) => setQuery(e.target.value)}
                   value={query} 
                   placeholder="Enter a project title..." />
        </>
    );
}

export default Searchbar;