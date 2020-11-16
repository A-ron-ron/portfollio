import React from 'react';
import { About } from '../components';

export function AboutContainer() {
    return (
        <About.Container>
                        <About.Img src={process.env.PUBLIC_URL + "content/bwcity.jpg"} alt="b&W city picture" />
                        <About.Title>Arron Hogg Web Development</About.Title>
                        <About.Text>A web developer and father of 3 from Nottinghamshire in the UK.
                          Using the marvels of modern technology I'm able to offer my services to those from all over the country and parts of the world.
                        <br/><br/>
                          I have a passion for CSS designing and using HTML5 canvas to create unique interactive websites and backgrounds.
                          It would be my pleasure to build you an animated, lively and interactive website creating a unique user experience.
                        <br/><br/>
                          I take great care to ensure these unique experiences are intuitive to navigate and not cluttered,
                        providing a relaxing experience accessible to all, thus putting your customers at ease and allowing your business to grow.</About.Text>
        </About.Container>
    )
}
