import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Portfolio } from '../components';
import {Link} from "react-router-dom"
import * as ROUTES from '../constants/routes';
import DelayLink from '../hooks/linkDelay';
import styled, { css } from 'styled-components';

export function PortfolioContainer() {

  const [expanded, setExpanded] = useState(false)

function handleClick(){
  setExpanded(!expanded)
}

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

let picSize

function PicSizeFun(){
  const [width, height] = useWindowSize();
  if(width > 1100){
    picSize = "D"
  } else picSize = "M"
}
PicSizeFun()


    return (
        <Portfolio.Container>
                <Portfolio>
                    <Portfolio.Pane>
                        <Portfolio.Title>Netflix Clone</Portfolio.Title>
                        <Portfolio.Text>A clone of netflix built from scratch in React.js using React-Router and Styled components.
                        Either make your own log in account or use: Email: Admin1@admin.com Password: Password</Portfolio.Text>
                    </Portfolio.Pane>
                    <Portfolio.Pane>
                        <DelayLink to={ROUTES.Netflix}><Portfolio.Img src={process.env.PUBLIC_URL + `content/netclone${picSize}.jpg`} alt="" expanded={ expanded } onClick={handleClick} /></ DelayLink>
                    </Portfolio.Pane>
                </Portfolio>
                <Portfolio>
                    <Portfolio.Pane>
                        <Portfolio.Title>Photo E-commerce site</Portfolio.Title>
                        <Portfolio.Text>This is an e-commerce site I built in React to sell photos I have taken.</Portfolio.Text>
                    </Portfolio.Pane>
                    <Portfolio.Pane>
                        <DelayLink to={ROUTES.Ft}><Portfolio.Img src={process.env.PUBLIC_URL + `content/ft${picSize}.jpg`} alt="" expanded={ expanded } onClick={handleClick} /></ DelayLink>
                    </Portfolio.Pane>
                </Portfolio>
                <Portfolio>
                    <Portfolio.Pane>
                        <Portfolio.Title>Travel agency form</Portfolio.Title>
                        <Portfolio.Text>A form for selecting a weekend away holiday, the idea being that the page instantly responds to the forms input.</Portfolio.Text>
                    </Portfolio.Pane>
                    <Portfolio.Pane>
                        <DelayLink to={ROUTES.Travel}><Portfolio.Img src={process.env.PUBLIC_URL + `content/travelators${picSize}.jpg`} alt="" expanded={ expanded } onClick={handleClick} /></ DelayLink>
                    </Portfolio.Pane>
                </Portfolio>
                <Portfolio>
                    <Portfolio.Pane>
                        <Portfolio.Title>Interactive background</Portfolio.Title>
                        <Portfolio.Text>Orriginally built as a background for a gambling site this is built using HTML Canvas, the shapes bounce off each other using programmed physics and explode into coins when clicked.</Portfolio.Text>
                    </Portfolio.Pane>
                    <Portfolio.Pane>
                        <DelayLink to={ROUTES.Ig}><Portfolio.Img src={process.env.PUBLIC_URL + `content/ibg${picSize}.jpg`} alt="" expanded={ expanded } onClick={handleClick} /></ DelayLink>
                    </Portfolio.Pane>
                </Portfolio>
                <Portfolio>
                    <Portfolio.Pane>
                        <Portfolio.Title>Speed typing game</Portfolio.Title>
                        <Portfolio.Text>How fast can you type? Find out if you've got what it takes!</Portfolio.Text>
                    </Portfolio.Pane>
                    <Portfolio.Pane>
                        <DelayLink to={ROUTES.Speed}><Portfolio.Img src={process.env.PUBLIC_URL + `content/speed${picSize}.jpg`} alt="" expanded={ expanded } onClick={handleClick} /></ DelayLink>
                    </Portfolio.Pane>
                </Portfolio>
                <Portfolio>
                    <Portfolio.Pane>
                        <Portfolio.Title>Movie search App</Portfolio.Title>
                        <Portfolio.Text>A simple React application for searching for movies, using an API call.</Portfolio.Text>
                    </Portfolio.Pane>
                    <Portfolio.Pane>
                        <DelayLink to={ROUTES.Movie}><Portfolio.Img src={process.env.PUBLIC_URL + `content/movieSearch${picSize}.jpg`} alt="" expanded={ expanded } onClick={handleClick} /></ DelayLink>
                    </Portfolio.Pane>
                </Portfolio>
        </Portfolio.Container>
    )
}
