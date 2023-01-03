import styled, { css } from 'styled-components'
import Menu from '../components/Menu';
import Timeline from '../components/Timeline'
import Trend from '../components/Trend';


const Out = styled.div`
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
 
`

function App() {
    return (
     <Out>
        <Menu></Menu>
        <Timeline></Timeline>
        <Trend></Trend>
     </Out>
    );
  }
  
  export default App;
  