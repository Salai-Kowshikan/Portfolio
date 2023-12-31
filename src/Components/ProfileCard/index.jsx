import React from "react";

export default function ProfileCard() {
    return (
        <div className="bg-transparent border-white border-2 text-white rounded-lg px-6 py-4 max-h-[77svh] w-full">
            <div className="mb-4 mx-auto flex flex-col justify-center items-center">
                <img src="/profile.jpeg" alt="profile" className="rounded-lg mx-auto h-[160px] w-[120px] object-cover" />
                <div className="text-xl font-bold mb-2">Salai Kowshikan</div>
                <div className="flex flex-col justify-around w-full gap-2">
                    <span className="bg-secondary rounded-lg px-3 py-1 text-center"> Front-end Developer </span>
                    {/* <span className="bg-secondary rounded-lg px-3 py-1 text-center"> ML Enthusiast </span> */}
                </div>
            </div>
            <hr className="border-gray-600" />
            <div className="flex flex-col py-2 gap-2">
                <span> Contact me on: </span>
                <div>
                    <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <img src="/LinkedIn.svg" className="h-6 w-6 inline-block" alt="LinkedIn" />
                        <span> LinkedIn</span>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <img src="/GitHub.svg" className="h-6 w-6 inline-block" alt="GitHub" />
                        <span> GitHub </span>
                    </a>
                </div>
                <div>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <img src="/Twitter.svg" className="h-6 w-6 inline-block" alt="Twitter" />
                        <span> Twitter (X) </span>
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <img src="/Instagram.svg" className="h-6 w-6 inline-block" alt="Instagram" />
                        <span> Instagram </span>
                    </a>
                </div>
                <div>
                    <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer">
                        <img src="/Email.svg" className="h-6 w-6 inline-block" alt="Email" />
                        <span> Mail me!</span>
                    </a>
                </div>
            </div>
        </div>
    );
}