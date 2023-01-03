import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';
import config from "../config.json";


const ButtonStyle = styled.button`
  

  background-color:black;
  border-radius: 100vw;
  padding: 12px;
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: space-around;
  
  border: 0px;
  margin-top:16px;
  
  align-items: center;
  &:hover{
    background-color: ${hexToRgba(COLORS.highlight)};
    cursor: pointer;
  }
  
  
  transition: 0.2s;

  p{
    margin: 0px 20px 0px 20px;
    font-weight: 700;
    font-size: 15px;
  }
  @media screen and (max-width: 1360px) {
    p{
      display: none;
    }
  }
  
  margin-top: auto;
  margin-bottom: 12px;
  
`
const ImageProfile = styled.img`
    height: 40px;
    border-radius: 100vw;
    
`
const TextProfile = styled.div`
   text-align: start;
   width: max-content;
`
const TextProfileArroba = styled.p`
   color:  ${hexToRgba(COLORS.backText)};
   font-family: sans-serif;
   font-weight: 100;
`

const ProfileSvg = styled.img`
   height: 20px;
   @media screen and (max-width: 1360px) {    
    display: none;
   }
`
const ProfileImgText = styled.div`
  display: flex;
  justify-items: start;
`

function MenuProfileButton(props) {
    return (
      <ButtonStyle>
        <ProfileImgText>
          <ImageProfile src={`https://github.com/${config.github}.png`} />
          <TextProfile>
            <p>{`${config.name}`}</p>
            <TextProfileArroba>{`@${config.github}`}</TextProfileArroba>
          </TextProfile>
        </ProfileImgText>
        
        
        <ProfileSvg src={process.env.PUBLIC_URL + "/assets/svg/ProfileMore.svg"} />
      </ButtonStyle>
    );
  }
  
  export default MenuProfileButton;