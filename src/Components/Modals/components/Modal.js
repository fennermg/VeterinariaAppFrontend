import React from 'react';

export default function Modal(props){
  return(
    <div className='fixed inset-0 bg-slate-600 bg-opacity-25 flex justify-center items-center overflow-auto'>
      <div className='top-0 right-0 w-[50vw] bg-white pl-2 fixed h-full ease-in-out duration-10000 overflow-auto '>
          {props.children}   
      </div>
    </div>
  )
}
