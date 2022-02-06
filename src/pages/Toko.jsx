import React from 'react';
import { ChevronLeftIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom';

export default function Toko() {

    let navigate = useNavigate();

    return (
        <div className='bg-violet-500 min-h-screen flex flex-col items-center'>
            <div className='min-w-full flex justify-start p-4'>
                <button onClick={() => navigate('/')}>
                    <ChevronLeftIcon className='w-8 h-8 text-white' />
                </button>
            </div>
            <h1 className='text-white text-xl font-medium'>Toko</h1>
            <div className="w-fit mt-4 relative text-gray-600">
                <input
                    className="border-2 border-gray-300 bg-white w-full h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Masukan nama hadiah"
                />

                <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                    <SearchIcon className="text-gray-600 h-4 w-4 fill-current" >
                    </SearchIcon>
                </button>
            </div>


            <div className='w-70% sm:w-60% md:w-70% bg-white mt-4 p-4 rounded-lg'>
                {/* Card continer */}
                <div className='w-full flex flex-wrap'>
                    <div className='flex items-center sm:w-50% md:w-full p-4 mt-4 mb-4 bg-custom-coral rounded-md shadow-click sm:mx-1% md:mx-2%'>
                        <div className='sm:w-12 md:w-24 sm:mr-4 md:mr-5 sm:ml-0 md:ml-5' >
                            <img src="/icon_tugas.png" alt="icon" />
                        </div>
                        <div className='w-2/5 flex flex-col text-left'>
                            <h1 className='text-white font-custom-font font-bold md:text-xl sm:text-xs'>Permen</h1>
                            <p className='text-white font-custom-font md:text-lg sm:text-xs sm:mt-1 md:mt-2'>100 poin</p>
                        </div>
                        <div className='w-2/5 flex justify-end text-right sm:ml-2 md:ml-8'>
                            <button className='flex items-center max-w-fit text-white text-sm font-medium bg-custom-blue p-1 mb-1 mt-2 rounded-md'>
                                <ShoppingCartIcon className='w-4 h-4 mt-1 mb-1 md:ml-3 md:mr-3 sm:ml-0 sm:mr-0' />
                                <p className='text-white font-custom-font md:text-lg sm:text-xs mt-1 mb-1 md:mr-3 sm:mr:0'>Beli</p>
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center sm:w-50% md:w-full p-4 mt-4 mb-4 bg-custom-coral rounded-md shadow-click sm:mx-1% md:mx-2%'>
                        <div className='sm:w-12 md:w-24 sm:mr-4 md:mr-5 sm:ml-0 md:ml-5' >
                            <img src="/icon_tugas.png" alt="icon" />
                        </div>
                        <div className='w-2/5 flex flex-col text-left'>
                            <h1 className='text-white font-custom-font font-bold md:text-xl sm:text-xs'>Coklat</h1>
                            <p className='text-white font-custom-font md:text-lg sm:text-xs sm:mt-1 md:mt-2'>500 poin</p>
                        </div>
                        <div className='w-2/5 flex justify-end text-right sm:ml-2 md:ml-8'>
                            <button className='flex items-center max-w-fit text-white text-sm font-medium bg-custom-blue p-1 mb-1 mt-2 rounded-md'>
                                <ShoppingCartIcon className='w-4 h-4 mt-1 mb-1 md:ml-3 md:mr-3 sm:ml-0 sm:mr-0' />
                                <p className='text-white font-custom-font md:text-lg sm:text-xs mt-1 mb-1 md:mr-3 sm:mr:0'>Beli</p>
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center sm:w-50% md:w-full p-4 mt-4 mb-4 bg-custom-coral rounded-md shadow-click md:mx-2%'>
                        <div  className='sm:w-12 md:w-24 sm:mr-4 md:mr-5 sm:ml-0 md:ml-5' >
                            <img src="/icon_tugas.png" alt="icon" />
                        </div>
                        <div className='w-2/5 flex flex-col text-left'>
                            <h1 className='text-white font-custom-font font-bold md:text-xl sm:text-xs'>Pensil</h1>
                            <p className='text-white font-custom-font md:text-lg sm:text-xs sm:mt-1 md:mt-2'>1500 poin</p>
                        </div>
                        <div className='w-2/5 flex justify-end text-right sm:ml-2 md:ml-8'>
                            <button className='flex items-center max-w-fit text-white text-sm font-medium bg-custom-blue p-1 mb-1 mt-2 rounded-md'>
                                <ShoppingCartIcon className='w-4 h-4 mt-1 mb-1 md:ml-3 md:mr-3 sm:ml-0 sm:mr-0' />
                                <p className='text-white font-custom-font md:text-lg sm:text-xs mt-1 mb-1 md:mr-3 sm:mr:0'>Beli</p>
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center sm:w-50% md:w-full p-4 mt-4 mb-4 bg-custom-coral rounded-md shadow-click md:mx-2%'>
                        <div  className='sm:w-12 md:w-24 sm:mr-4 md:mr-5 sm:ml-0 md:ml-5' >
                            <img src="/icon_tugas.png" alt="icon" />
                        </div>
                        <div className='w-2/5 flex flex-col text-left'>
                            <h1 className='text-white font-custom-font font-bold md:text-xl sm:text-xs'>Buku</h1>
                            <p className='text-white font-custom-font md:text-lg sm:text-xs sm:mt-1 md:mt-2'>2500 poin</p>
                        </div>
                        <div className='w-2/5 flex justify-end text-right sm:ml-2 md:ml-8'>
                            <button className='flex items-center max-w-fit text-white text-sm font-medium bg-custom-blue p-1 mb-1 mt-2 rounded-md'>
                                <ShoppingCartIcon className='w-4 h-4 mt-1 mb-1 md:ml-3 md:mr-3 sm:ml-0 sm:mr-0' />
                                <p className='text-white font-custom-font md:text-lg sm:text-xs mt-1 mb-1 md:mr-3 sm:mr:0'>Beli</p>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
