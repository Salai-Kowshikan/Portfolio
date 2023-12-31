import React, { useState } from 'react';

const Navbar = () => {
    const [activeButton, setActiveButton] = useState('Profile');

    return (
        <>
        <nav className="sticky top-0 bg-black">
            <div className='flex justify-center w-full text-textc sm:gap-5'>
                <button 
                    className={`py-2 px-4 border-b-2 ${activeButton === 'Profile' ? 'border-textc' : 'border-transparent'} hover:border-textc`} 
                    onClick={() => setActiveButton('Profile')}
                > 
                    Profile 
                </button>
                <button 
                    className={`py-2 px-4 border-b-2 ${activeButton === 'Resume' ? 'border-textc' : 'border-transparent'} hover:border-textc`} 
                    onClick={() => setActiveButton('Resume')}
                > 
                    Resume 
                </button>
                <button 
                    className={`py-2 px-4 border-b-2 ${activeButton === 'Projects' ? 'border-textc' : 'border-transparent'} hover:border-textc`} 
                    onClick={() => setActiveButton('Projects')}
                > 
                    Projects 
                </button>
                <button 
                    className={`py-2 px-4 border-b-2 ${activeButton === 'Contact' ? 'border-textc' : 'border-transparent'} hover:border-textc`} 
                    onClick={() => setActiveButton('Contact')}
                > 
                    Contact 
                </button>
            </div>
        </nav>
        </>
    );
};

export default Navbar;