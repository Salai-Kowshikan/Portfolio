import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [activeButton, setActiveButton] = useState('Profile');
    const navigate = useNavigate()

    return (
        <>
            <nav className="sticky top-0 bg-black">
                <div className='flex justify-center w-full text-textc sm:gap-5'>
                    <button
                        className={`py-2 px-4 border-b-2 ${activeButton === 'Profile' ? 'border-textc' : 'border-transparent'} hover:border-textc`}
                        onClick={() => {setActiveButton('Profile')
                        navigate('/')}}
                    >
                        Profile
                    </button>
                    <button
                        className={`py-2 px-4 border-b-2 ${activeButton === 'Resume' ? 'border-textc' : 'border-transparent'} hover:border-textc`}
                        onClick={() => {setActiveButton('Resume')
                        navigate('/Resume')}}
                    >
                        Resume
                    </button>
                    <button
                        className={`py-2 px-4 border-b-2 ${activeButton === 'Projects' ? 'border-textc' : 'border-transparent'} hover:border-textc`}
                        onClick={() => {setActiveButton('Projects')
                        navigate('/Projects')}}
                    >
                        Projects
                    </button>
                    <button
                        className={`py-2 px-4 border-b-2 ${activeButton === 'Contact' ? 'border-textc' : 'border-transparent'} hover:border-textc`}
                        onClick={() => {setActiveButton('Contact')
                        navigate('/Contact')}}
                    >
                        Contact
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;