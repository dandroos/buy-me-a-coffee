import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import Image from "../images/asleep.svg"

export default function WhyModal(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Button
        id="why-modal-btn"
        className="rounded-0"
        onClick={toggle}
        color="primary"
      >
        Why should I?
      </Button>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Why should I buy you coffee and cake?</ModalHeader>
        <ModalBody>
        <img className="svg-asleep" src={Image} alt="Man asleep at laptop" />
          <p className="mt-3">
            Hmmmm excellent question...this is just an excuse to show a modal!  How about because I am a very sweet-toothed insomniac who needs unhealthy fuel to keep on producing cool content?  Will that do? :)
          </p>
          <small>
            <span className="font-italic">For the purposes of this demonstration, the checkout is in 'test' mode and will therefore not process payment anyway!</span>
          </small>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.method}>
            Go on then....
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Whaaaaat?
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
