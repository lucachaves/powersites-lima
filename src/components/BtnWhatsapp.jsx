import React from 'react';

import wa from '../assets/btn-whatsapp.png';

const BtnWhatsapp = () => {
  return (
    <div className="bg-white shadow rounded px-5 py-2 flex flex-col sm:flex-row items-center mt-6 sm:mt-0">
      <img src={wa} alt="whatsapp"/>
      <div className="ml-2">
        <h3 className="font-bold text-2xl">Orçar seu Projeto!</h3>
        <p className="text-xs">Projeto e orçamento sem compromisso.</p>
        <p className="font-bold">(35) 9999-9999</p>
      </div>
    </div>
  );
};

export default BtnWhatsapp;