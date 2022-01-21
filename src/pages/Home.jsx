import React from 'react';
import { PlayIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom';

export default function Home() {

    let navigate = useNavigate();

    return (
        <div className='bg-violet-500 min-h-screen flex flex-col items-center justify-center'>
            <img className='mb-4 lg:w-1/3' src="/ilustrasi.svg" alt="ilustrasi" />
            <button onClick={() => navigate('/tugas')} className='flex items-center bg-white shadow-notclick text-custom-coral text-xl py-3 px-6 rounded-full mb-3 hover:bg-custom-coral hover:text-white'><PlayIcon className='w-6 h-6 mr-2 ' />Bermain</button>
            <button className='flex items-center bg-white shadow-notclick text-custom-coral text-xl py-2 px-4 rounded-full mb-3 hover:bg-custom-coral hover:text-white'><ShoppingCartIcon className='w-6 h-6 mr-2 ' />Toko</button>
            <button className='flex items-center bg-white shadow-notclick text-custom-coral text-xl py-2 px-4 rounded-full hover:bg-custom-coral hover:text-white'><UserIcon className='w-6 h-6 mr-2 ' />Profil</button>
        </div>
    );
}


