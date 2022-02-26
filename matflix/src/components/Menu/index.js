import React from 'react';
import App from     '../../App';
import Logo from '../../assets/img/Logo.png';
import './Menu.css'
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <nav className='Menu'>
            <a href='/'>

            </a>
            <img className ="Logo" src={Logo} alt="Matflix logo" />

            <Button as="a" className='ButtonLink' href='/'>
            Novo vídeo    
            </Button>
        </nav>
    );
}

export default Menu;    