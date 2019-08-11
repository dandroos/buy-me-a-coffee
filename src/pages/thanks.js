import React from "react";
import { Link } from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from '../components/layout'
import BackgroundImg from "../images/coffee.svg";
import Image from "../images/smile.svg";

import { Container, Button } from "reactstrap";
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'

export default function Thanks() {
  return (
    <Layout>
      <Slide down duration={500}>
        <img className="bg-coffee" src={BackgroundImg} alt="Coffee background" />
      </Slide>
      <Fade left delay={500} duration={500}>
        <Container className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center">
          <Fade down delay={1000} duration={500}>
            <div>
              <img src={Image} alt="Smile emoji" className="svg-smile" />
            </div>
          </Fade>
          <h1 className="p-4">Thank you!</h1>
          <p className="lead">That was very generous of you!</p>
          <p>
            I will hold you in my thoughts while I drink my life-giving coffee and
            eat my delicious cake!
          </p>
            <AniLink swipe to="/" className="btn btn-primary btn-lg">
                Back to the start!
            </AniLink>
        </Container>
      </Fade>
    </Layout>
  );
}
