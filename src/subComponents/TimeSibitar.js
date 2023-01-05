import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';
import config from "../config.json";
import TimeButtonAnyperson from './TimeButtonAnyperson';
import TimeButtonAnypersonTwo from './TimeButtonAnypersonTwo';


const Container = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
  padding-bottom: 4px;
  height: 181px;
  display: flex;
  border: 0px;
  border-bottom: 1px;
  border-color: ${hexToRgba(COLORS.borderLine)};
  border-style: solid;

`

const ImageProfile = styled.img`
    height: 48px;
    border-radius: 100vw;
    
`


const FlexContainer = styled.div`
  display: flex;    
  flex-direction: column;
width: 100%;
`

const SubContainer = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
  height: 129px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 0px;
  
  border-bottom: 1px;
  border-color: ${hexToRgba(COLORS.borderLine)};
  border-style: solid;
  input{
    font-size: 20px;
    background-color: transparent;
    
    border-style: none;
    color: white;

    &:focus {
        outline:0px ;
    }
    &::placeholder{
        color: ${hexToRgba(COLORS.backText)};
    }
  }
`
const BottomContainer = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
align-content: center;
margin-top: 12px;
`
const EmoteContainer = styled.div`
    display: flex;
    margin-left: 2px;
    margin-right: 2px;
`
const EmoteButton = styled.button`
    background-color: transparent;
    border: 0px;
    padding-top: 6px;
    padding-bottom: 6px;
    border-style: none;
    border-radius: 10000px;
    img{
        height: 20px;
    }
    &:hover{
    background-color: ${hexToRgba(COLORS.theme,"0.15")};
    cursor: pointer;
  }
`
const Sibitar = styled.button`

  background-color: ${hexToRgba(COLORS.theme)};
  border-radius: 400px;
  font-size: 15px;
  padding-left: 16px;
  padding-right: 16px;
  color: white;
  border: 0px;
  margin-left:12px;
  height: 34px;
  &:hover{
    background-color: ${hexToRgba(COLORS.themeDark)};
    cursor: pointer;
  }
  
  transition: 0.0s;

 

`
function TimeSibitar() {
   
    return (
      
      <Container>         
            <ImageProfile src={`https://github.com/${config.github}.png`} />
            <FlexContainer>

                <SubContainer>
                    <TimeButtonAnyperson></TimeButtonAnyperson>
                    <input placeholder='O que está acontecendo?'></input>
                    <TimeButtonAnypersonTwo></TimeButtonAnypersonTwo>
                </SubContainer>
                <BottomContainer>
                    <EmoteContainer>
                        <EmoteButton>
                            <img src={process.env.PUBLIC_URL + "/assets/svg/img.svg"}/>
                        </EmoteButton>
                        <EmoteButton>
                            <img src={process.env.PUBLIC_URL + "/assets/svg/gif.svg"}/>
                        </EmoteButton>
                        <EmoteButton>
                            <img src={process.env.PUBLIC_URL + "/assets/svg/progammer.svg"}/>
                        </EmoteButton>
                        <EmoteButton>
                            <img src={process.env.PUBLIC_URL + "/assets/svg/emote.svg"}/>
                        </EmoteButton>
                        <EmoteButton>
                            <img src={process.env.PUBLIC_URL + "/assets/svg/progammer2.svg"}/>
                        </EmoteButton>
                        <EmoteButton>
                            <img src={process.env.PUBLIC_URL + "/assets/svg/location.svg"}/>
                        </EmoteButton>
                    </EmoteContainer>
                    <Sibitar>Sibitar</Sibitar>
                    
                </BottomContainer>
             
                
            </FlexContainer>
          
      </Container>
    );
  }
  
  export default TimeSibitar;