import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';
import TimeHeader from '../subComponents/TimeHeader';
import TimeSibitar from '../subComponents/TimeSibitar';
import TimeShowMoreSibites from '../subComponents/TimeShowMoreSibites';
import TimeSibiteView from '../subComponents/TimeSibiteView';
import React, { useState, useEffect } from "react";

const Timelinecontainner = styled.div`
  
  height: 100vh;
  min-width: 16.3vw;
  max-width: 600px;
  border-right: 1px;
  border-right-color: ${hexToRgba(COLORS.borderLine)};
  border-right-style: solid;
  
`
const Scroll = styled.div`
   display: flex;
    flex-direction: column;
    overflow-y:scroll;
    overflow-x:hidden;
    ::-webkit-scrollbar {
        display: none;
    }
    max-height: 100vh;


`


function Menu() {
  const [scrollDir, setScrollDir] = useState("scrolling down");

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;
  
    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
  
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };
  
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };
  
    window.addEventListener("scroll", onScroll);
    console.log(scrollDir);
  
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  const element = document.getElementById('Scroller');
  if (element) {
    element.scroll(0, 100,{ behavior: 'smooth' });
  }
  console.log(scrollDir);
  return (
    <Timelinecontainner>
      <TimeHeader/>

      <Scroll id="Scroller">
        <TimeSibitar/>
        <TimeShowMoreSibites/>
        
        {(() => {
            const Sibites = [];

            for (let i = 0; i <= 5; i++) {
              Sibites.push(<TimeSibiteView sibiteNum = {`${i}`} ></TimeSibiteView>);
            }

            return Sibites;
          })()}
          
      </Scroll>
      

    </Timelinecontainner>
  );
}

export default Menu;
