import React, { PureComponent } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Navegador extends PureComponent {
  render() {
    return (
      <Container>
        <Row className="mx-0 mt-4">
          <Col xxl={3} xl={3} lg={8} md={10} sm={12} className="border py-4">
            <h1 className="lh-1 fs-4 py-2">
              Innovación, Creatividad y Sociedad
            </h1>
            <div className="d-grid gap-2">
              <Button variant="primary" size="md">
                Ingresar a computación
              </Button>
            </div>
            <h2 className="fs-4 pt-4">Menú diario </h2>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Computation Home</li>
              <li class="list-group-item">Aims & Scope</li>
              <li class="list-group-item">Editorial Board</li>
              <li class="list-group-item">Reviewer Board</li>
              <li class="list-group-item">Journal Statistics</li>
              <li class="list-group-item">Journal History</li>
              <li class="list-group-item">Conferences</li>
              <li class="list-group-item">Editorial Office</li>
              <li class="list-group-item">10th Anniversary of Computation</li>
            </ul>
            <h2 className="fs-4 pt-4">Navegador de revistas</h2>
          </Col>
          <Col xxl={9} xl={9} lg={4} md={2} sm={12}>
            contenido
          </Col>
        </Row>
      </Container>
    );
  }
}
