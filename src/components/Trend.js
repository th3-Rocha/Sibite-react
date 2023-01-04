import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';
import TrendSearchbar from '../subComponents/TrendSearchBar';

import TrendGrid from '../subComponents/TrendGrid';

const TrendContainer = styled.div`
  width: 350px;
  height: 100vh;
  margin-left: 30px;
  margin-right: 10px;
  @media screen and (max-width: 1100px) {
    width: 310px;
  }
  @media screen and (max-width: 1070px) {
    display: none;
  }
`



function Trend() {
  return (
    <TrendContainer>
      <TrendSearchbar/>
      <TrendGrid/>
    </TrendContainer>
  );
}

export default Trend;
