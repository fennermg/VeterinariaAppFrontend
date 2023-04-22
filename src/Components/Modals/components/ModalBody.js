import React from 'react';

export default function ModalBody(props){
    return(
        <div className='fixed inset-0 bg-slate-600 bg-opacity-25 flex justify-center items-center overflow-auto '>
            {props.children}
        </div>
    );
}