import React from 'react';

const Projects = ({ filter }: { filter: string }) => {
    return (
        <>
            <div>
                <div className="m-8">
                    <Navbar />
                    <Searchbar></Searchbar>
                </div>
            </div>
        </>
    )
};

export default Projects;