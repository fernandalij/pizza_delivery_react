import React, { useState } from 'react';
import Modal from './Modal';
import { Botao } from './botao';

type Props = {
    pizza: Pizzas,
    onClick: () => void
}
export const Pizza = ({ pizza, onClick }: Props) => {

    return (
        <div>
            <div onClick={onClick} className="cursor-pointer hover:opacity-80">
                <img src={pizza.img} alt="" className="w-full border rounded-md p-4" />
                <Botao/>
            </div>
        </div>
    )
}


