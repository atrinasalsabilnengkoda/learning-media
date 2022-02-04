import React from 'react';
import { ChevronLeftIcon, SearchIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom';

export default function Tugas() {

    let navigate = useNavigate();

    return (
        <div className='bg-violet-500 min-h-screen flex flex-col items-center'>
            <div className='min-w-full flex justify-start p-4'>
                <button onClick={() => navigate('/')}>
                    <ChevronLeftIcon className='w-8 h-8 text-white' />
                </button>
            </div>
            <h1 className='text-white text-xl font-medium'>Tugas</h1>
            <div className="w-fit mt-4 relative text-gray-600">
                <input
                    className="border-2 border-gray-300 bg-white w-full h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Masukan kode kelas"
                />

                <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                    <SearchIcon className="text-gray-600 h-4 w-4 fill-current" >
                    </SearchIcon>
                </button>
            </div>


            <div className='w-90% bg-white mt-4 p-4 rounded-lg'>
                <p className='max-w-fit text-white text-sm font-medium bg-custom-blue p-2 mb-4 rounded'>Kode : AADC</p>

                {/* Card continer */}
                <div className=' w-full flex flex-wrap'>
                    <button as='card' className='flex items-center w-full p-4 mb-4 bg-custom-coral rounded-md shadow-click md:w-48% md:mx-1% ' onClick={() => navigate('/game1')}>
                        <img src="/ilustrasi_buku.svg" alt="buku" />
                        <div className='flex flex-col ml-4 text-left'>
                            <h2 className='text-white font-custom-font font-medium text-lg'>1-Membaca 01</h2>
                            <p className='text-white font-custom-font text-xs mt-2'>Game ini akan mengajarkan kamu mencocokan kata dalam bahasa Arab dengan gambar yang sesuai melalui puzzle</p>
                        </div>
                    </button>
                    <button as='card' className='flex items-center w-full p-4 mb-4 bg-custom-coral rounded-md shadow-click md:w-48% md:mx-1% ' onClick={() => navigate('/game3')}>
                        <img src="/ilustrasi_buku.svg" alt="buku" />
                        <div className='flex flex-col ml-4 text-left'>
                            <h2 className='text-white font-custom-font font-medium text-lg'>2-Membaca 02</h2>
                            <p className='text-white font-custom-font text-xs mt-2'>Game ini akan mengajarkan kamu mencocokan gambar dengan kata dalam bahasa Arab yang sesuai melalui puzzle</p>
                        </div>
                    </button>
                    <button as='card' className='flex items-center w-full p-4 mb-4 bg-custom-coral rounded-md shadow-click md:w-48% md:mx-1% ' onClick={() => navigate('/game4')}>
                        <img src="/ilustrasi_buku.svg" alt="buku" />
                        <div className='flex flex-col ml-4 text-left'>
                            <h2 className='text-white font-custom-font font-medium text-lg'>3-Mendengar 01</h2>
                            <p className='text-white font-custom-font text-xs mt-2'>Game ini akan mengajarkan kamu mencocokan kata dalam bahasa Arab melalui puzzle</p>
                        </div>
                    </button>
                    <button as='card' className='flex items-center w-full p-4 mb-4 bg-custom-coral rounded-md shadow-click md:w-48% md:mx-1% ' onClick={() => navigate('/game2')}>
                        <img src="/ilustrasi_buku.svg" alt="buku" />
                        <div className='flex flex-col ml-4 text-left'>
                            <h2 className='text-white font-custom-font font-medium text-lg'>3-Mendengar 02</h2>
                            <p className='text-white font-custom-font text-xs mt-2'>Game ini akan mengajarkan kamu mencocokan kata dalam bahasa Arab melalui puzzle</p>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    )
}
