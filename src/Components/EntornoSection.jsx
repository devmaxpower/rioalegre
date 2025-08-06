import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactPlayer from 'react-player/vimeo';

import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const entornoImages = import.meta.glob('../assets/img/entorno/img*.jpg', { eager: true });
const imageSlides = Object.values(entornoImages).map((mod) => mod.default);



const EntornoSection = () => {
  useEffect(() => {
    const tabsContainer = document.querySelector('#tabs');
    const buttons = tabsContainer.querySelectorAll('.botonera a');

    const handleClick = (e) => {
      e.preventDefault();

      buttons.forEach((b) => b.classList.remove('btn-activo'));
      document.querySelectorAll('#tabs > div').forEach((tab) => {
        tab.classList.remove('tab-activo');
      });

      const targetHref = e.currentTarget.getAttribute('href');
      const targetTab = document.querySelector(targetHref);

      e.currentTarget.classList.add('btn-activo');
      if (targetTab) targetTab.classList.add('tab-activo');
    };

    if (buttons.length > 0) {
      buttons[0].classList.add('btn-activo');
      const firstTabId = buttons[0].getAttribute('href');
      const firstTab = document.querySelector(firstTabId);
      if (firstTab) firstTab.classList.add('tab-activo');
    }

    buttons.forEach((btn) => {
      btn.addEventListener('click', handleClick);
    });

    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener('click', handleClick);
      });
    };
  }, []);

  const slides = ['Slide 1', 'Slide 2', 'Slide 3'];

  return (
    <section id='entorno'>
      <article className='contenedor'>
        <h2>Descubre el entorno de tu nuevo hogar</h2>
        <p>Hermoso entorno con abundante vegetación y acceso al Rio Pedregoso.</p>
        <p>Cercano a ríos y lagos de la zona.</p>
      </article>
      <article id="tabs" className='contenedor'>
        <ul className="botonera">
          <li><a href="#terreno">Galería</a></li>
          <li><a href="#entorno-tab">Video</a></li>
        </ul>

        <div id="terreno" className="tab tab-activo">
          
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true, dynamicBullets: true, }}
            observer={true}
            observeParents={true}
            spaceBetween={20}
            slidesPerView={1}
          >
            {imageSlides.map((imgSrc, i) => (
              <SwiperSlide key={i}>
                <img src={imgSrc} alt={`Imagen entorno ${i + 1}`} className="slide-image" />
              </SwiperSlide>
            ))}

          </Swiper>
        </div>

        <div id="entorno-tab" className="tab">
          <div className="video-wrapper" style={{ position: 'relative', paddingTop: '56.25%' }}>
      <ReactPlayer
        url="https://vimeo.com/1085062541/993f005cd0"
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
        controls={true}
          config={{
            vimeo: {
              playerOptions: {
                title: false,
                byline: false,
                portrait: false,
                dnt: true, // "Do Not Track" para evitar seguimiento
              }
            }
          }}
      />
    </div>
          {/* <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            observer={true}
            observeParents={true}
            spaceBetween={20}
            slidesPerView={1}
          >
            {imageSlides.map((imgSrc, i) => (
              <SwiperSlide key={i}>
                <img src={imgSrc} alt={`Imagen entorno ${i + 1}`} className="slide-image" />
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>
      </article>
    </section>
  );
};

export default EntornoSection;
