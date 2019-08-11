import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundVector from "../images/bg.svg"

import WhyModal from "../components/WhyModal"
import Graphics from "../components/Graphics"

import { Container, Row, Col, Button } from "reactstrap"
import Fade from "react-reveal/Fade"

const IndexPage = props => {
  const [displayModalBtn, setDisplayModalBtn] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setDisplayModalBtn(true)
    }, 3000)
  }, [])

  let stripe = window.Stripe("pk_test_Ys9qsdCBkLY8mW4rEYPZnNLw00vwD3ZAkb")

  const redirectToCheckout = async e => {
    e.preventDefault()
    const { error } = await stripe.redirectToCheckout({
      items: [{ sku: "sku_FZuQ9bzTWb2Cuc", quantity: 1 }],
      successUrl: `${props.location.href}thanks/`,
      cancelUrl: `${props.location.href}`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Fade>
        <img
          src={BackgroundVector}
          alt="Background vector"
          className="bg-vector"
        />
      </Fade>
      {displayModalBtn ? <WhyModal method={redirectToCheckout} /> : null}
      <Fade left delay={2000} duration={500}>
        <Container className="min-vh-100 d-flex flex-column justify-content-center">
          <Row>
            <Col
              lg={{ size: 6, order: 2 }}
              className="d-flex justify-content-center align-items-center"
            >
              <Graphics />
            </Col>
            <Col lg={{ size: 6, order: 1 }}>
              <h1>Would you like to buy me coffee and cake?</h1>
              <p className="lead mt-4 order-1">
                Mmmmmm....I love coffee and cake!
              </p>
              <Button
                size="lg"
                color="primary"
                outline
                className="py-4 px-3 font-weight-bold"
                onClick={redirectToCheckout}
              >
                "Sure, I'll buy you coffee and cake!"
              </Button>
              <p className="font-italic mt-3">
                <span className="font-weight-bold">Pssst...</span>this is just
                to demonstrate that I can set up your website to take secure
                payments! However, if you still want to buy me a coffee anyway,
                then I salute you!
                <small>
                  ....<span className="font-weight-bold">but</span> the checkout
                  is in 'test' mode and will not process any payments!
                </small>
              </p>

              <small>
                <p className="mt-3">
                  This demonstration uses <a href="#">Stripe</a> to process
                  payments! For more information, please visit{" "}
                  <a href="http://www.stripe.com">stripe.com</a>.
                </p>
              </small>
            </Col>
          </Row>
          <footer className="text-center my-3">
            <span>
              <small>© {new Date().getFullYear()} David Andrews</small>
            </span>
          </footer>
        </Container>
      </Fade>
    </Layout>
  )
}

export default IndexPage
