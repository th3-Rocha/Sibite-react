import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';
import MenuButton from '../subComponents/MenuButton'
import MenuSibitarButton from '../subComponents/MenuSibitarButton';
import MenuProfileButton from '../subComponents/MenuProfileButton';



const MenuContainer = styled.div`
  width: 100vw;
  max-width: 251px;
  padding-left: 12px;
  padding-right: 12px;
  @media screen and (max-width: 1360px) {
    max-width: 88px;
    align-items: center;
    
  }
  height: 100vh;
  border-right: 1px;
  border-right-color: ${hexToRgba(COLORS.borderLine)};
  border-right-style: solid;

  display: flex;
  flex-direction: column;
  gap: 8px;
`
const ImgLogo = styled.img`
  max-width: 30px;
  margin-top: 15px;
  padding-left: 12px;
  padding-bottom: 16px;
  @media screen and (max-width: 1360px) {
    padding-left: 0px ;
  }
`



function Menu() {
  return (
    <MenuContainer>
       <ImgLogo src={process.env.PUBLIC_URL + "/assets/Sibite-logo.png"}/>
        <MenuButton name = "Página Inicial" art = "Home"/>
        <MenuButton name = "Explorar" art = "Explorer"/>
        <MenuButton name = "Notificações" art = "Notifications"/>
        <MenuButton name = "Mensagens" art = "Mensage"/>
        <MenuButton name = "Itens salvos" art = "Saved"/>
        <MenuButton name = "Listas" art = "List"/>
        <MenuButton name = "Perfil" art = "Perfil"/>
        <MenuButton name = "Mais" art = "More"/>
        <MenuSibitarButton/>
        <MenuProfileButton/>
    </MenuContainer>
  );
}

export default Menu;