import { Metadata } from 'next';
import React from 'react';
import Chart from './Chart';


export const metadata: Metadata = {
  title: "Pages To Read | BookVibe",
  icons:{
    icon: '/book.ico'
  }
};

const PagesToRead = () => {
    return (
        <div className='flex justify-center items-center bg-gray-100/80 mx-50 my-20 rounded-3xl p-15'>
            <div className='w-full flex justify-center items-center'>
                <Chart />
            </div>
        </div>
    );
};

export default PagesToRead;