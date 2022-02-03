import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment, useEffect } from 'react';

function App() {

  const bem = {
    bl: "",
    el: "",
    md: "",

    block: function (block) {
      bem.bl = block;
      return this;
    },

    element: function (element) {
      bem.el = "__" + element;
      return this;
    },

    modifier: function (modifier) {
      bem.md = "--" + modifier;
      return this;
    },

    build: function () {
      if (bem.bl === "") {
        return "Block cannot be empty!";
      }
      else {
        let output = bem.bl + bem.el + bem.md;
        bem.bl = "";
        bem.el = "";
        bem.md = "";
        console.log(output)
        return output;
      }
    }
  }

  useEffect(() => {
    // "list__item–active
  }, [])



  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col className="col-12 d-flex justify-content-center mt-5">
            <h1>BEM methodology</h1>
          </Col>
          <Col className="col-12 d-flex justify-content-center mt-5">
            <h1>--------------------------------------------------------</h1>
          </Col>
          <Col className="col-12 d-flex justify-content-center mt-5">
            <h1>input: {`bem.block("list").element("item").modifier("active").build()`}</h1>
          </Col>
          <Col className="col-12 d-flex justify-content-center mt-5">
            <h1>output: {bem.block("list").element("item").modifier("active").build()}</h1>
          </Col>
          <Col className="col-12 d-flex justify-content-center mt-5">
            <h1>--------------------------------------------------------</h1>
          </Col>
          <Col className="col-12 d-flex justify-content-center mt-5">
            <h1>input: {`bem.element("item").modifier("active").build()`}</h1>
          </Col>
          <Col className="col-12 d-flex justify-content-center mt-5">
            <h1>output: {bem.element("item").modifier("active").build()}</h1>
          </Col>

        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
