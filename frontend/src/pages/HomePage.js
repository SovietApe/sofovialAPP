import React from 'react';
import '../styles/components/pages/HomePage.css'
import homeimg from '../public/images/home_img.JPG'
const HomePage = (props) => {
    return (
        <body class='body-'>
            <main className='base'>
                <div id="vacio"></div>
                <section className='titulo'>
                    <div class='tcontainer'>
                        <div class='h1'>
                            <h1>Sociedad de Fomento del Video Alternativo</h1>
                        </div>
                        <div class='p1c'>
                            <div class='p1'>
                                <p>Fundada en el año 1989</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class='descimg'>
                    <div class='di-container'>
                        
                            <p className='descp'>
                                Sofovial puede definirse como un colectivo de trabajo comunicacional solidario que generó en la región un tipo de prácticas y organización  articuladoras de experiencias y saberes habitualmente distantes, una creativa relación entre el Video Proceso, la Educación Popular y la Estrategia de APS (Atención Primaria de la Salud).
                                Desde tal conjunción acompaña desde 1989 el que hacer cotidiano de muchísimas instituciones y organizaciones sociales, aportando producciones y capacitación tanto en el campo de la Salud como en los alcances políticos/estratégicos de la Comunicación Alternativa.
                            </p>
            
                            <img src={homeimg} alt='Niños con bandera' />
                    </div>
                </section>
            </main>
        </body >
    );
}

export default HomePage;