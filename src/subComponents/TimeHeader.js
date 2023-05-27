import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';


const Containnner = styled.div`
height: 107px;
font-size: 10px;

h1{
color: ${hexToRgba(COLORS.whiteText)};
}
display: flex;
flex-direction: column;
justify-content: space-between;
margin-bottom: -110px;
z-index: +10;
position: relative;
background: rgba(0, 0, 0, 0.7); // Make sure this color has an opacity of less than 1
 backdrop-filter: blur(10px); // This be the blur
`

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  height: 53px;
  font-size: 10px;
  h1{
    color: ${hexToRgba(COLORS.whiteText)};
  }
  
`
const FooterContainer = styled.div`
  display: flex;
  align-items: center;  
  justify-content: space-around;
  h1{
    color: ${hexToRgba(COLORS.whiteText)};
  }
  border: 0px;
  border-bottom: 1px;
  border-style: solid;
  border-color: ${hexToRgba(COLORS.borderLine)};
`

const FooterContainerForYou = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 55px;
  min-width: 50%;
  &:hover{
    cursor:pointer;
    background-color: 	rgba(255, 255, 255, 0.10);
  }

  justify-content: space-around;
  h1{
    font-size:medium;
    color: ${hexToRgba(COLORS.whiteText)};
  }
`
const FooterContainerFollower = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: space-around;
  min-width: 50%;
  min-height: 55px;
  &:hover{
    cursor:pointer;
    background-color: 	rgba(255, 255, 255, 0.10);
  }
  h1{
    font-size:medium;
    color: ${hexToRgba(COLORS.whiteText)};
  }
`
const YellowIndicator = styled.div`
  display: inline-block;
  height: 4px;
  width: 80px;
  justify-self: end;
  border-radius: 100px;
  background-color:  ${hexToRgba(COLORS.theme)};
`

function TimeHeader() {
      
     
    return (
      
      <Containnner>
        <Header>
          <h1>Página Inicial</h1>
        </Header>     
        <FooterContainer>

        <FooterContainerForYou>
          <h1>Para Você</h1>
          <YellowIndicator/>
        </FooterContainerForYou>

        <FooterContainerFollower>
          <h1>Seguindo</h1>
          <YellowIndicator style={{backgroundColor: "transparent"}}/>
        </FooterContainerFollower>
        </FooterContainer>
        
      </Containnner>
    );
  }
  
  export default TimeHeader;