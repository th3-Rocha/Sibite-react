import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';




const Button = styled.button`

  
  border-radius: 400px;
  border: 1px;
  background-color: transparent;
  padding: 0px;
  font-size: 15px;
  padding-left: 12px;
  height: 24px;
  width: fit-content;
  
  padding-right: 12px;
  color: ${hexToRgba(COLORS.theme)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px;
  line-height: 20px;
  word-wrap: break-word;
  border-color: ${hexToRgba(COLORS.borderLine)};
  border-style: solid;
  margin-top:0px;
  &:hover{
    background-color: ${hexToRgba(COLORS.theme,"0.15")};
    cursor: pointer;
  }
  
  transition: 0.2s;
  p{
    margin-right: 4px;
  }
  img{
    height: 17px;
  }
`



function TimeButtonAnyperson() {
      
     
    return (
      
      <Button>         
       <p>Qualquer pessoa</p>
       <img src={process.env.PUBLIC_URL + "/assets/svg/AnyPerson.svg"}></img>
      </Button>
    );
  }
  
  export default TimeButtonAnyperson;