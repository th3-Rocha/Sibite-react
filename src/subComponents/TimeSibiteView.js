import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';
import beckEnd from "../beckEnd.json";

const SibiteContainner = styled.div`

  background-color: black;
  width: 94.5%;
  height: fit-content;
  color: white;
  border: 0px;
  border-bottom: 1px;
  border-style: solid;
  border-color: ${hexToRgba(COLORS.borderLine)};
  padding-top: 12px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  flex-direction: row;
  &:hover{
    background-color: ${hexToRgba(COLORS.darkTimelineHighlight)};
   
  }
  
  transition: 0.2s;
`
const ImageProfile = styled.img`
    height: 48px;
    border-radius: 100vw;
    margin-right: 17px;
    cursor: pointer;
`
const TextProfile = styled.div`
   text-align: start;
   width: max-content;
   cursor: pointer;
`
const TextProfileArroba = styled.p`
   color:  ${hexToRgba(COLORS.backText)};
   font-family: sans-serif;
   font-weight: 100;
   margin-left: 4px;
   cursor: pointer;
`

const Hours = styled.p`
   color:  ${hexToRgba(COLORS.backText)};
   font-family: sans-serif;
   font-weight: 100;
   margin-left: 4px;
`

const SeparatorHours = styled.p`
   color:  ${hexToRgba(COLORS.backText)};
   font-family: sans-serif;
   font-size: 15px;
   font-weight: 500;
   padding-left: 4px;
`
const FlexSeparator = styled.div`
`

const Content = styled.div`
  margin-top: 5px;
  margin-right: 16px;
  p{
    font-weight: 100;
    margin-bottom: 10px;
  }
  img{
    :hover{
      cursor: pointer;
    }
    border-radius:20px;
    width: 31rem;
    margin-bottom: 10px;
  }
`
const AuthorName = styled.div`
display: flex;
flex-direction: row;
font-size: 15px;
align-items: center;
cursor: pointer;
`

const Actions = styled.div`
display: flex;
width: 100%;
margin-top: 0px;
margin-bottom: 15px;
gap: 3rem;
 
`
const ActionButton = styled.button`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  img{
    width: 18px;
    
  }
  background-color: transparent;
  border-style: none;
  color: ${hexToRgba(COLORS.backText)};
  align-items: center;
  &:hover{
      cursor: pointer;
    }
`

function TimeSibiteView(props) {
    const rndHour = Math.floor(Math.random() * 23) + 1;
    const rndStats = Math.floor(Math.random() * 10000) + 1;
    const rndComments = Math.floor(Math.random() * 1000) + 1;
    const rndRe = Math.floor(Math.random() * 1000) + 1;
    const rndLikes = Math.floor(Math.random() * 1000) + 1;
    return (
      
      <SibiteContainner>   
            <ImageProfile src={`https://github.com/${beckEnd.Sibites[props.sibiteNum].github}.png`} />
            <FlexSeparator>


              <AuthorName>
                  <p>{`${beckEnd.Sibites[props.sibiteNum].nameAuthor}`}</p>
                <TextProfileArroba>{`@${beckEnd.Sibites[props.sibiteNum].github}`}</TextProfileArroba>
                <SeparatorHours>·</SeparatorHours>
                <Hours>{rndHour} h</Hours>

              </AuthorName>



              <Content>
                <p>{`${beckEnd.Sibites[props.sibiteNum].text}`}</p>
                <img src = {`${beckEnd.Sibites[props.sibiteNum].mediaUrl}`} ></img>
              
              </Content>       

              <Actions>

                <ActionButton>
                  <img src={process.env.PUBLIC_URL + "/assets/svg/comment.svg"} />
                  <p>{rndComments}</p>
                </ActionButton>

                <ActionButton>
                  <img src={process.env.PUBLIC_URL + "/assets/svg/ReSibite.svg"} />
                  <p>{rndRe}</p>
                </ActionButton>


                <ActionButton>
                  <img src={process.env.PUBLIC_URL + "/assets/svg/like.svg"} />
                  <p>{rndLikes}</p>
                </ActionButton>
                
                <ActionButton>
                  <img src={process.env.PUBLIC_URL + "/assets/svg/stats.svg"} />
                  <p>{rndStats}</p>
                </ActionButton>

                <ActionButton>
                <img src={process.env.PUBLIC_URL + "/assets/svg/shareSibite.svg"} />
                  
                </ActionButton>

              </Actions>


            </FlexSeparator>
           
      </SibiteContainner>
    );
  }
  //https://xsgames.co/randomusers/avatar.php?g=male
  export default TimeSibiteView;