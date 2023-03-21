import React from "react";
import { ListGroup, Row, Col, FormCheck } from "react-bootstrap";

interface Props{

}
export default class TasckComponent extends React.Component<Props>{
    render() {
        const description =
        return(
            <><ListGroup>
                <ListGroup.Item action variant='secondary' className="mb-2">
                    <Row>
                        <Col sm='1'>
                            <FormCheck></FormCheck>
                        </Col>
                        <Col>
                            <span>No style</span>
                        </Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup><ListGroup></ListGroup></>
        )
    }

}