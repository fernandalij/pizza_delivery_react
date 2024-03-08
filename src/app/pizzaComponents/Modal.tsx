// Modal.js
import { pizzas } from '@/data/pizzas';
import { describe } from 'node:test';
import React, { ReactNode, useState } from 'react';
interface ModalProps {
  name: string
  price:number 
  des: string
  image: string
  closeModal: () => void
}

const Modal = ({ closeModal, image, des, name, price }: ModalProps) => {

  

  return (
    <>
      <>
        <div className="fixed top-10 left-20 right-20 bottom-20 flex justify-center items-center bg-white border rounded-lg bg-opacity-90 ">
          <img src={image} className="w-80 h-80" />
          <div className=" p-4 w-80 h-80">
            <div >Descrição {des}</div>
            <div >Nome {name}</div>
            <div >Valor {price}</div>
          </div>
          <div onClick={closeModal} className="absolute top-5 right-5 w-10 h-10 cursor-pointer text-red-600 text-bold text-6xl">🗴</div>
        </div>
      </>
    </>
  );
};

export default Modal;
