import React from 'react';

const PedidoRestaurante = () => {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-r from-[#D3C3BC] to-[#B8A998] bg-white border border-gray-300 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Pedido confirmado</h2>
        <span className="text-gray-600 p-3">#12345</span>
      </div>
      <div>
        <div>
          <span className="font-semibold">Pizza x</span>
          <span className="float-right">R$ 10.50</span>
        </div>
        <div>
          <span className="font-semibold">Pizza x</span>
          <span className="float-right">R$ 5.00</span>
        </div>
        <div>
          <span className="font-semibold">Pizza x</span>
          <span className="float-right">R$ 4.00</span>
        </div>
      </div>
      <hr className="my-4 border-t border-gray-300" />
      <div>
        <span className="font-semibold">Total:</span>
        <span className="text-xl font-semibold float-right">R$ 19.50</span>
      </div>
      <div className="mt-2">
        <span className="font-semibold">Forma de Pagamento:</span>
        <span className="block">Cartão de Crédito</span>
      </div>
      <div className="mt-6 text-center">
        <div className="bg-[#878787] text-white py-2 px-4 rounded  focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
          Agradecemos sua preferência!
        </div>
      </div>
      <div className='mt-4 flex justify-end'>
        <button className="bg-[#f75656]  border text-black  py-1 px-2 rounded  ">
            Cancelar
            </button>
        </div>
    </div>
  );
};

export default PedidoRestaurante;
