import { Modal } from './Modal'
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MiIconoGift from './DatosBancariosIcon';


const DatosBancarios = ({texto, claseContenedor, claseBoton, borderModal, textColor, textSize, claseIcon, cbu, alias, banco, nombre, claseBotonModal, claseModal, moneda_extranjera, tipo_cuenta, numero_cuenta, titular_extranjera, banco_extranjera, styleBotonModal, styleModal, styleBorderModal, styleTextColor, background}) => {

  const [copiado, setCopiado] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("ambarrusso");
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className={`pt-20 flex flex-col justify-center items-center py-20 gap-y-5 ${claseContenedor}`} style={background} >
      <div data-aos= 'fade-up'>
        <MiIconoGift/>
      </div>
        <div className={`flex flex-col items-center justify-center`}>
          {/* <p className={`text-center px-5 md:px-0 ${textSize}`} data-aos= 'fade-up'>{texto}</p> */}
          {/* <Modal 
            claseBoton={claseBoton} 
            claseBotonModal={claseBotonModal} 
            claseModal={claseModal} 
            borderModal={borderModal} 
            textColor={textColor} 
            styleBotonModal={styleBotonModal} 
            styleModal={styleModal} 
            styleBorderModal={styleBorderModal} 
            styleTextColor={styleTextColor} 
            cbu={cbu} 
            alias={alias} 
            banco={banco} 
            nombre={nombre} 
            moneda_extranjera={moneda_extranjera} 
            tipo_cuenta={tipo_cuenta} 
            numero_cuenta={numero_cuenta} 
            titular_extranjera={titular_extranjera} 
            banco_extranjera={banco_extranjera}/> */}
          <div className="flex flex-col items-center justify-center mt-4 space-y-2" data-aos="fade-up">
            <p className="text-center text-lg">Tu presencia es mi mejor regalo, pero si deseas regalarme algo te dejo las siguientes opciones:</p>
            <div className="flex flex-col items-center bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl shadow-md mt-2">
              <p className="font-semibold text-lg">Alias:</p>
              <div className="flex items-center gap-2">
                <span className="select-all text-base">ambarrusso</span>
                <button
                  onClick={handleCopy}
                  className={`text-white ${copiado ? 'bg-green-500' : 'bg-pink-400 hover:bg-pink-500'} px-3 py-1 rounded-md text-sm transition-all`}
                >
                  {copiado ? '✔ Copiado' : 'Copiar'}
                </button>
              </div>
            </div>
            <p className="italic mt-2 text-center text-lg">• Un detalle que desees darme</p>
          </div>
        </div>
    </div>
  )
}

export default DatosBancarios