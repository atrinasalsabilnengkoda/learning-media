import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom';

export default function Profil() {

    let navigate = useNavigate();

    return (
        <div className='bg-violet-500 min-h-screen flex flex-col items-center'>
            <div className='min-w-full flex justify-start p-4'>
                <button onClick={() => navigate('/')}>
                    <ChevronLeftIcon className='w-8 h-8 text-white' />
                </button>
            </div>
            <h1 className='text-white text-xl font-medium'>Profil-ku</h1>
            
            <div className='w-90% bg-white mt-4 p-4 rounded-lg'>
                {/* Card continer */}
                <div className=' w-full flex flex-wrap'>
                    <div className='w-full flex flex-col items-center justify-center mt-3'>
                        <img className='object-center' src="/icon_profil.png" alt="icon" />
                        <h1 className='font-custom-font font-bold text-2xl mt-3'>Chandra Bayu Aji</h1>
                        <h1 className='font-custom-font text-lg mt-3'>Kelas : 3A</h1>
                    </div>
                    <div className='flex items-center w-full p-4 mt-4 mb-4 bg-custom-coral rounded-md shadow-click md:mx-2%'>
                        <div className=' flex flex-col text-left'>
                            <h1 className='text-white font-custom-font font-bold text-lg'>Total Poin : 200</h1>
                            <h2 className='text-white font-custom-font text-lg mt-2'>Total Game : 5</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
