import React from "react";
import Background from "../components/Background";
import WhyModal from "../components/WhyModal";
import Graphics from "../components/Graphics";
import Footer from "../components/Footer";
import { Container, Row, Col, Button } from "reactstrap";



function Welcome(props) {

  // const stripe = Stripe('pk_test_Ys9qsdCBkLY8mW4rEYPZnNLw00vwD3ZAkb');

  // const handleClick = () =>{
  //   stripe.redirectToCheckOut({
  //     items: [
  //       {sku: '', quantity: 1}
  //     ],
  //     successUrl: '%PUBLIC_URL%'
  //   })
  // }

  console.log(props)

  return (
      <div>
        <Background />
        <WhyModal />
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
              <p className="font-italic">
                <span className="font-weight-bold">Pssst...</span>this is just to
                demonstrate that I can set up your website to take secure
                payments! However, if you still want to buy me a coffee anyway,
                then I salute you!
              </p>
              <Button
                size="lg"
                color="primary"
                outline
                className="py-4 px-3 font-weight-bold"
              >
                "Sure, I'll buy you coffee and cake!"
              </Button>
              <small>
                <p className="mt-3">
                  This demonstration uses <a href="#">Stripe</a> to process
                  payments without complicated merchant accounts. Their rates for
                  payment processing are very competetive (better than PayPal),
                  which makes them a very popular choice!
                </p>
              </small>
            </Col>
          </Row>
          <Footer />
        </Container>
      </div>
  );
}

export default Welcome
