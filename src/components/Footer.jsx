import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Footer() {
    return (
        <Row
            style={{
                backgroundColor: '#333333',
                width: '100%',
                paddingTop: '2.2rem',
                paddingBottom: '2.2rem',
                color: 'white',
            }}>
            <Col style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <p>Elaborado por <a href='https://www.linkedin.com/in/bryan-p%C3%A9rez-4190aa118/' target={"_blank"}>Bryan Perez</a></p>

            </Col>
        </Row>
    )
}
