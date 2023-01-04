import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';
import config from "../config.json";


const ToFollowProfiles = styled.button`
  

  background-color:transparent;
  width: 100%;
  padding: 12px;
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  
  border: 0px;
  margin-top:0px;
  
  align-items: center;
  &:hover{
    background-color: ${hexToRgba(COLORS.trendHighLight)};
    cursor: pointer;
  }
  
  
  transition: 0.2s;

  p{
    margin: 0px 20px 0px 20px;
    font-weight: 700;
    font-size: 15px;
  }
  margin-top: auto;
  margin-bottom: 0px;
  
`
const ImageProfile = styled.img`
    height: 48px;
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

const ProfileToFollow = styled.button`
    background-color: white;
    border-radius: 100px;
    
    padding: 8px;
    padding-left: 17px;
    padding-right: 17px;
    border: 0px;
    &:hover{
    cursor: pointer;
  }
`
const ProfileImgText = styled.div`
  display: flex;
  align-items: center;
`

function TrendtoFollowProfiles(props) {
    return (
      <ToFollowProfiles>
        <ProfileImgText>
          <ImageProfile src={`https://github.com/${config.favs[props.number].github}.png`} />
          <TextProfile>
            <p>{`${config.favs[props.number].name}`}</p>
            <TextProfileArroba>{`@${config.favs[props.number].github}`}</TextProfileArroba>
          </TextProfile>
        </ProfileImgText>
        <ProfileToFollow>Seguir</ProfileToFollow>
      </ToFollowProfiles>
    );
  }
  
  export default TrendtoFollowProfiles;