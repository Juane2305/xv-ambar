import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import dress from '../assets/esmeralda/dressCodeIcon.svg'
import CountdownCircles from "./CountdownCircles";
import MusicScreen from "./MusicScreen";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import LugaresXV from "./LugaresXV";
import { FocusCardsDemo } from "./FocusCardsDemo";
import decoracionImagenes from "../assets/esmeralda/decoracionImagenes.svg";

import DressCodeEsmeralda from "./DressCodeEsmeralda";
import song from '../assets/song.mp3'
import globo from '../assets/globo.png'
import corona from '../assets/corona.svg'

const Invitacion = () => {

  const targetDate = new Date("2026-02-07T21:00:00-03:00");

  const colorPrincipal = "#6b4e71";
  const colorSecundario = "#6b4e71";

  useEffect(() => {
    AOS.init({
        duration: 3000, 
        easing: 'ease-in-out',
        once: true,
      });
    
  }, []);



  return (
    <div className="w-full font-eleganteText relative overflow-hidden bg-[#f8f5f0]">

        <div className="absolute z-40">
          <MusicScreen cancion={song} />
        </div>

     <div
       className="relative flex flex-col justify-center items-center min-h-screen w-full text-center bg-center bg-cover font-eleganteText space-y-5 overflow-hidden"
       style={{ backgroundImage: "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1759336963/fe4b9a19c755b96610710fd39431cdef_pbogzd.jpg')" }}
     >
        <div data-aos="fade-in">
            <p className="text-2xl mb-5 tracking-widest text-[#fbe3d7]">Te invito a mis 15</p>
            <h1 className="text-8xl md:text-[10rem] font-brushNames text-[#f7c9b3] z-10 italic">
            Ambar
            </h1>

            <div className="flex items-center justify-center py-2 px-4 mt-5">
            <p className="font-bold text-[#fbe3d7] text-2xl tracking-widest">
                0 7 . 0 2 . 2 0 2 6
            </p>
            </div>
        </div>
      </div>
      <div className="font-brushNames text-2xl bg-white flex flex-col items-center justify-center">
        <img src={corona} alt="" className="w-52 py-7"/>
          <TextoFinal textoFinal="Dicen que cuando despertamos tenemos diez segundos para recordar lo que soñamos la noche anterior... Un sueño que hoy es realidad"/>
          <h3 className='text-gray-700 mt-5'>Mis 15 años</h3>
          <img src={corona} alt=""  className="w-52 py-7"/>
        </div>

      <div>
          <section
            id="contador"
            className="bg-white py-10 border-y-4 border-[#6b4e71]"
          >
            <CountdownCircles
              targetDate={targetDate}
              containerClasses="my-8"
              backgroundColor="#e5e7eb"
              progressColor="#6b4e71"
              textColor="black"
              valueClassName="text-3xl font-light"
              labelClassName="text-base font-thin"
            />
          </section>

        <section id="lugares" className="relative text-center bg-white">
          <LugaresXV
            iglesia="[Nombre iglesia]"
            hora_iglesia="10:00hs"
            hora_inicio="21:00hs"
            hora_fin="21:30 hs"
            salon="Monteagudo 61 (Pontevedra)"
            hora_civil="21:00hs"
          />
          <a href="https://maps.app.goo.gl/wCDupdcL1XpYLo5m9" target="_blank" rel="noopener noreferrer">
            <button className="border-2 border-gray-700 my-5 py-3 px-8 rounded-full text-gray-800 font-semibold hover:text-gray-600 transition">
              CÓMO LLEGAR
            </button>
          </a>
        </section>

          <div className="relative bg-white">
            <img
              src={decoracionImagenes}
              alt="Decoración lateral"
              className="hidden md:block absolute -left-44 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{
                width: "30rem",
                transform: "translateY(-50%) scaleX(-1)",

              }}
            />
            <img
              src={decoracionImagenes}
              alt="Decoración lateral invertida"
              className="hidden md:block absolute -right-44 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{
                 width: "30rem" ,
                }}
            />
            <section className="pb-16">
                <FocusCardsDemo
                    texto=""
                  images={[
                    {
                      index: 1,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759848278/WhatsApp_Image_2025-10-06_at_7.55.31_PM_nhdpli.jpg",
                    },
                    {
                      index: 2,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759848285/WhatsApp_Image_2025-10-06_at_7.55.31_PM_1_j8dqtj.jpg",
                    },
                  ]}
                />
            </section>
          </div>

          <div className="bg-[#6b4e71] text-center relative text-white">
            <GoogleCalendarButton
              imgClass="text-[#6b4e71]"
              buttonClass="border-white rounded-full"
              titleCalendar="XV de Ambar"
              salon="Monteagudo 61, B1761 Pontevedra, Provincia de Buenos Aires"
              fechaComienzo="20260207T210000"
              fechaFin="20260208T050000"
            />
          </div>

          <div className="relative bg-white py-10">
            <img
              src={globo}
              alt="Decoración DressCode Izq"
              className="hidden md:block absolute left-10 top-20"
              style={{
                width: "15rem",
              }}
            />
            <img
              src={globo}
              alt="Decoración DressCode Der"
              className="hidden md:block absolute right-10 top-20 "
              style={{
                width: "15rem",

              }}
            />

            <DressCodeEsmeralda dressCode="Elegante Sport" icon={dress}/>
          </div>

          <DatosBancarios
            claseIcon="text-white"
            texto="Si deseas hacerme un regalo, te dejo los datos"
            claseContenedor="bg-[#6b4e71] text-white"
            claseBoton="rounded-full hover:shadow-lg border-white bg-gray-100 text-gray-900"
            textSize="text-lg"
            background={{ backgroundColor: colorPrincipal }}
            styleBotonModal={{
              backgroundColor: "white",
              borderColor: "#9eba8a",
            }}
            claseBotonModal={{
              backgroundColor: "#6b4e71",
              borderColor: "#6b4e71",
            }}
            styleModal={{ backgroundColor: colorSecundario }}
            styleBorderModal={{ borderColor: colorPrincipal }}
            styleTextColor={{ color: colorPrincipal }}
            cbu="3840200500000043637548"
            alias=""
            banco="Wilobank"
            nombre="Evelyn Yohana Ramirez Enciso"
            claseModal="bg-[#6b4e71]"
            borderModal="border-[#6b4e71]"
            textColor="text-[#6b4e71]"
          />

          <Asistencia
            clase="py-10 bg-white bg-fixed border-b-4 border-[#6b4e71]"
            claseTitle="text-[#6b4e71]"
            claseButton="border-2 border-[#6b4e71] font-semibold hover:bg-[#6b4e71]  text-gray-700 hover:text-white rounded-full"
            linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSeEFLIepSu9FAZG5WhFbS9gh2tHljXu4EYiibcxR9ThSHripw/viewform?usp=header"
          />

        <div className="font-brushNames text-2xl bg-white py-10">
          <TextoFinal textoFinal="Su presencia ayudará a transformar mi noche inolvidable" />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
