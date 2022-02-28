import React from 'react';
import Logo from '../../assets/img/Logo.png'
import { ButtonLink, LogoImage, MenuWrapper } from './style';
//import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <MenuWrapper className='Menu'>
            <a href='/'>
            <LogoImage src="Logo" src={Logo} alt="Matflix logo" />
            </a>

            <ButtonLink as="a" className='ButtonLink' href='/'>
            Novo Vídeo  
            </ButtonLink>
        </MenuWrapper>
    );
}

export default Menu;    