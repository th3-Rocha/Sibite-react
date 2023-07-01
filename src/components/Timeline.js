import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';
import TimeHeader from '../subComponents/TimeHeader';
import TimeSibitar from '../subComponents/TimeSibitar';
import TimeShowMoreSibites from '../subComponents/TimeShowMoreSibites';
import TimeSibiteView from '../subComponents/TimeSibiteView';
import React, { useState, useEffect } from "react";
import axios from "axios";
const cors = require('cors');

const Timelinecontainner = styled.div`
  
  height: 100vh;
  min-width: 0;
  max-width: 600px;
  @media screen and (max-width: 499px) {
    max-width: 100vw;
  }
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
//const [dataText, setDataText] = useState([]);
//const [isLoading, setLoading] = useState(true);
let Sibites = 10;

let randomGender = 1;


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
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);
  const element = document.getElementById('Scroller');
  if (element) {
    element.scroll(0, 100,{ behavior: 'smooth' });
  }
  const [dataImgProfile, setDataImgProfile] = useState([]);
  const [dataImg, setDataImg] = useState([]);
  const [dataText, setDataText] = useState([]);
  const [dataNickName, setDataNickName] = useState([]);
  const [isLoading, setLoading] = useState(true);
  //random text
  useEffect(() => {
    async function fetchDataText() {
      try {
        const promises = [];
        for (let i = 0; i < Sibites; i++) {
          let rndSetences = Math.floor(Math.random() * 5) + 1;
          promises.push(axios.get('http://metaphorpsum.com/sentences/' + rndSetences));
        }
        const responses = await Promise.all(promises);
        responses.map((response) => setDataText(arr => [...arr,response.data]));
        
        setLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchDataText();
  }, []);
  //random NickNames https://api.parser.name/?api_key=7a0937e369401fcb8b4bc028fc4a7823&endpoint=generate&country_code=BR
  useEffect(() => {
    async function fetchDataNickName() {
      try {
        const promises = [];
        for (let i = 0; i < Sibites; i++) {
          promises.push(axios.get('https://random-word-api.herokuapp.com/word'));
        }
        const responses = await Promise.all(promises);
         responses.map((response) => setDataNickName(arr => [...arr, response.data]));
         console.log(dataNickName[0])
        setLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchDataNickName();
  }, []);
  //randoms pics
  useEffect(() => {
    async function fetchDataImg() {
      try {
        for (let i = 0; i < Sibites; i++) {
          let rndSize = Math.floor(Math.random() * (1000 - 400 + 1) + 400)
          if( 0 == Math.round(Math.random())){
            setDataImg(arr => [...arr,'https://picsum.photos/' + rndSize]);
            
          }else{
            setDataImg(arr => [...arr,'']);
          }
        }
        setLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchDataImg();
  }, []);
  //randoms profile
  useEffect(() => {
    var textArray = [
      'male',
      'female'
  ];
  
  for (let i = 0; i < Sibites; i++) {
    randomGender =  Math.round(Math.random());
    let rndId = Math.floor(Math.random() * (75 - 0 + 1) + 0)
    if(randomGender == 0){ //male
      setDataImgProfile(arr => [...arr,'https://xsgames.co/randomusers/assets/avatars/male/' + rndId +'.jpg']);
    }
    else{
      setDataImgProfile(arr => [...arr,'https://xsgames.co/randomusers/assets/avatars/female/' + rndId +'.jpg']);
    }
  }
    
  }, []);
  //traduzir

  function callSibites(NumberOfSibites) {
    const sibites = [];
    
    for (let i = 0; i < NumberOfSibites; i++) {
      console.log(dataImg[0])
      sibites.push(
        <TimeSibiteView
          key={`sibite-${i}`}
          sibiteNum={`${i}`}
          webProfileImage={dataImgProfile[i]}
          webImage={dataImg[i] || ""}
          webText={dataText[i]}
          nickName={dataNickName[i]}
          profileName={dataNickName[i]}
        />
      );
    }
    return sibites;
  }

  return (
    
    <Timelinecontainner>
      <TimeHeader/>
      <Scroll id="Scroller">
        <TimeSibitar/>
        <TimeShowMoreSibites/>
         {isLoading ? 'Loading...' : callSibites(Sibites)}
      </Scroll>
      

    </Timelinecontainner>
  );
}

export default Menu;
