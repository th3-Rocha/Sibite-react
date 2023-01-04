import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';

const BarStyle = styled.div`
   
    display: flex;
    align-items: center;
    margin-top: 5px;
    border: 0px;
    &:hover{
    cursor:text;
    }
  img{
    height: 19px;
    margin-left: 8px;
  }
  //
`
const Inputer = styled.input`
    background-color: ${hexToRgba(COLORS.searchBar)};;
    border-radius: 100vw;
    font-size: 15px;
    height: 42px;
    width: 100%;
    border: 0px;
    
    color: white;
    font-weight: 400;
    &:active {
        background-color: black;   
        outline: solid 1px ${hexToRgba(COLORS.theme)};;
        outline-offset: -1px;
    }
    &:focus {
        background-color: black;   
        outline: solid 1px ${hexToRgba(COLORS.theme)};;
        outline-offset: -1px;
    }
    padding-left: 60px;
    &::placeholder{
        color: ${hexToRgba(COLORS.backText)};
    }
`
const Scope = styled.img`
    position: absolute;
    padding-left: 12px;
`
function TrendSearchbar() {
    return (
        
      <BarStyle >
        <Scope src={process.env.PUBLIC_URL + "/assets/svg/searchbar.svg" }/>
        <Inputer placeholder='Buscar no Sibiter'/>
      </BarStyle>
    );
  }
  
  export default TrendSearchbar;