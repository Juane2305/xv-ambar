import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import sun from '../assets/sun.svg'

const Places = ({ salon, hora_inicio }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,     
    });
  }, []);

  return (
    <section className={`relative w-full py-12 flex flex-col items-center`}>
      <div style={{ width: 190, height: 190 }} data-aos="fade-in" className="text-center flex justify-center">
        <img src={sun} alt="" className="size-36 animate-[spin_8s_linear_infinite]"/>
      </div>{" "}

      {/* Contenedor principal (card) */}
      <div
        className="max-w-xl mx-auto px-8 flex flex-col items-center"
        data-aos="fade-in"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase tracking-wider mb-4">
          Fiesta
        </h2>
        <p className="text-xl sm:text-xl text-gray-600 leading-relaxed text-center">
          ¡Te esperamos en <span className="font-semibold">{salon}</span>!<br />
          Daremos inicio a la fiesta desde las{" "}
          <span className="font-semibold">{hora_inicio}</span>.
        </p>
      </div>
    </section>
  );
};

export default Places;