import React from 'react'
import pascal from "../assets/pascal.svg";


const dressCodeEsmeralda = ({dressCode}) => {
  return (
    <div className="p-6 text-center rounded-md max-w-md mx-auto">
        <h2 className="text-[#4b5147] font-vintageText text-4xl mb-3">Código de Vestimenta</h2>
        <p className="text-[#4b5147] mb-4 text-3xl">{dressCode}</p>
        <div
            data-aos="fade-in"
            className="text-center flex justify-center mb-10"
          >
            <img src={pascal} alt="" className="size-40" />
          </div>
          <p className='text-[#4b5147] mb-4 text-xl'>(Lila y violeta está reservado para la quinceañera)</p>
  </div>
  )
}

export default dressCodeEsmeralda;