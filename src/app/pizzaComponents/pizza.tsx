import { useState } from 'react';
import pizzaJson from '../data/pizza.json' 
export const Pizza = () => {
    return(
    <div>
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pizzaJson.map(pizza => (
                <div key={pizza.id} className="flex flex-col items-center mx-auto max-w-sm border border-gray-200 rounded-lg overflow-hidden shadow-md" >
                    <a >
                        <img src={pizza.img} className="w-40 h-40 object-cover rounded-full mb-4" />
                    </a>
                   
                    <div className="text-center">
                    <div className="font-bold">{pizza.name}</div>
                    <div className="text-gray-700">{pizza.description}</div>
                    <div className="font-bold mt-2">R$ {pizza.price.toFixed(2)}</div>
                    </div>
                </div>
                ))}
            </div>
        </div>

    </div>
    )
}


