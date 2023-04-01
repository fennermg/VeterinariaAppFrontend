import React, { Fragment } from "react";
import { useState } from "react";

const Modal = () => {
  const [isVisible, setisVisible] = useState(true);

  function close() {
    setisVisible(false)
  }

  return (isVisible? 
    <div className="fixed inset-0 bg-slate-600 bg-opacity-25 flex justify-center items-center">
      <div className="top-0 right-0 w-[50vw] bg-white pl-2 fixed h-full ease-in-out duration-10000">
        <button onClick={(close)}>Cerrar</button>
        <button>Crear Otro Modal</button>
      </div>
    </div>
    : null
  );
};

export default Modal;
