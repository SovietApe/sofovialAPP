import React from 'react';
import "../styles/components/pages/NosotrosPage.css"
//media
import adrian from '../public/images/adrian.png'
import leandro from '../public/images/leandro.png'
import hernan from '../public/images/hernan.png'
import nosotros from '../public/images/nosotros.jpg'
//fin media
const NosotrosPage = (props) => {
    return (
    <body class='body1'>
        <main className='holder'>
            <img class='imghb' src={nosotros} alt="sofovial_juntada"/>
            <div class="espacio1">
                <div class="container1">
                    <figure id="titulo1">
                        Nuestro Equipo
                    </figure>
                    <div class="personas">
                        <div class="persona">
                            <img src={hernan} alt="Hernan-Alegria"/>
                            <h5>Hernan Alegria</h5>
                            <h6>Gestor de Contenido</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam eius soluta? Expedita consequatur, debitis optio odio aut quas iure laudantium dicta natus ex rem dolore veniam assumenda animi ullam?
                            </p>
                        </div>
                        <div class="persona">
                            <img src={leandro} alt="Leandro-Alegria"/>
                            <h5>Leandro Alegria</h5>
                            <h6>Editor de Video</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam eius soluta? Expedita consequatur, debitis optio odio aut quas iure laudantium dicta natus ex rem dolore veniam assumenda animi ullam?
                            </p>
                        </div>
                        <div class="persona">
                            <img src={adrian} alt="Adrian-Corvalan"/>
                            <h5>Adrian Corvalan</h5>
                            <h6>Diseñador</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam eius soluta? Expedita consequatur, debitis optio odio aut quas iure laudantium dicta natus ex rem dolore veniam assumenda animi ullam?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </body>

    );
}
export default NosotrosPage;
