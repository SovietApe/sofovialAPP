import React from 'react';
import "../../styles/components/layout/Header.css"
import Logo from '../../public/images/logo.png'
const Header = (props) => {
    return(
        <header>
            <a class="logo" href="/">
                <img class="logo-img" src={Logo} width='100' alt='logo' />
            </a>
            <nav class="menu">
                    <ul>
                        <a href="/">Home</a>
                        <a href="/Nosotros">nosotros</a>
                        <a href="/Novedades">novedades</a>
                        <a href="/Contacto">contacto</a>
                    </ul>
            </nav>
        </header>
    );
}

export default Header;

