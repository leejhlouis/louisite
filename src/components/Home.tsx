import React from 'react';

export default function Home() {
    return (
        <div className='h-[85vh]'>
            <div className='h-5/6 container flex justify-center items-center flex-col gap-6'>
                <h1 className='text-7xl font-bold'>Hi, I'm Louis Gustavo!</h1>
                <h2 className='text-4xl font-light'>avid coder | computer science student</h2>
            </div>
            <div className='h-1/6 mx-auto flex items-end justify-center'>
                <p>Select works</p>
            </div>
        </div>
    );
  }