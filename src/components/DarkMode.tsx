'use client';

import React from 'react';
import ClickEffect from './ui/ClickEffect';

interface DarkModeProps {
    onToggleDarkMode: (darkMode: boolean) => void;
    darkMode: boolean;
}

const DarkMode: React.FC<DarkModeProps> = ({ onToggleDarkMode, darkMode }) => {
    const handleDarkMode = () => {
        onToggleDarkMode(!darkMode);
    };

    return (
        <ClickEffect>
            <button
                onClick={handleDarkMode}
                className='text-black dark:text-white size-12'
            >
                <ToggleMode />
            </button>
        </ClickEffect>
    );
};

export default DarkMode;

const ToggleMode = () => (
    <svg
        width='35'
        height='35'
        viewBox='0 0 50 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M7.75417 6.65209L6.72084 9.43333C6.47084 10.1063 5.93959 10.6375 5.26667 10.8875L2.48542 11.9208C1.95001 12.1208 1.95001 12.8792 2.48542 13.0771L5.26667 14.1104C5.93959 14.3604 6.47084 14.8917 6.72084 15.5646L7.75417 18.3458C7.95417 18.8813 8.71251 18.8813 8.91042 18.3458L9.94376 15.5646C10.1938 14.8917 10.725 14.3604 11.3979 14.1104L14.1792 13.0771C14.7146 12.8771 14.7146 12.1188 14.1792 11.9208L11.4 10.8875C10.7271 10.6375 10.1958 10.1063 9.94584 9.43333L8.91251 6.65209C8.71251 6.11667 7.95417 6.11667 7.75417 6.65209ZM43.575 27.0708C44.8313 27.0833 45.8479 28.1458 45.675 29.3896C45.1917 32.8521 43.6208 36.1958 40.9604 38.875C34.4396 45.375 23.8979 45.375 17.3771 38.875C10.8771 32.3542 10.8771 21.8125 17.3771 15.2917C20.0542 12.6313 23.4 11.0583 26.8625 10.5771C28.1042 10.4021 29.1667 11.4188 29.1792 12.675C29.2146 16.3521 30.6375 20.0104 33.4375 22.8125C36.2375 25.6125 39.8979 27.0354 43.575 27.0708Z'
            fill='currentColor'
        />
    </svg>
);
