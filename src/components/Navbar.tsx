import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Work, Mail } from '@mui/icons-material';

interface Link {
    name: string,
    path: string,
    icon: React.ReactElement,
    activity: string
}
const pages: Link[] = [
    {
        name: "Home",
        path: "/",
        icon: (<Home />),
        activity: 'active',
    },
    {
        name: "About",
        path: "/about",
        icon: (<Info />),
        activity: 'inactive',
    },
    {
        name: "Projects",
        path: "/projects",
        icon: (<Work />),
        activity: 'inactive',
    },
    {
        name: "Contacts",
        path: "/contacts",
        icon: (<Mail />),
        activity: 'inactive',
    },
];
const linkClassNames: Record<string, string> = {
    'active' : 'p-3 bg-linear-to-r from-yellow-400 to-yellow-600 flex justify-start items-center gap-2 hover:bg-yellow-500 duration-300 rounded-xl',
    'inactive' : 'p-3 flex justify-start items-center gap-2 hover:bg-gray-300/30 duration-300 rounded-xl',
};
const Navbar = () => {
    const path = useLocation().pathname;
    const [links, setLinks] = useState(pages);

    // Update active link when 
    useEffect(() => {
        setLinks(prev =>
            prev.map(link => ({
                ...link,
                activity: path === link.path ? 'active' : 'inactive',
            }))
        );
    }, [path])

    return (
        <>
            <div 
                className="text-white bg-black/50
                           rounded-3xl border-white
                           p-10 w-1/4 h-[calc(100%-4rem)]
                           fixed">
                <h2 className="font-bold text-3xl
                               mb-6">Lemon Games</h2>
                <hr className="my-2"></hr>
                <div className="flex flex-col justify-between
                                pb-8 h-full">
                    <div className="flex flex-col justify-between gap-2
                                    py-8">
                        {links.map(link => (
                            <Link 
                            to={"/" + link.name.toLowerCase()}
                            className={linkClassNames[link.activity]}>
                            {link.icon}
                            <span>{link.name}</span>
                            </Link>
                        ))}
                    </div>
                    <i className='text-center text-sm
                                  p-8'>Always learning, always coding</i>
                </div>
            </div>
        </>
    );
};

export default Navbar;