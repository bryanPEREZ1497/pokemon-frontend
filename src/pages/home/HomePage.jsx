import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import pikachu from '../../assets/pikachu.png'
import { Col, Row } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';


export default function HomePage() {
  const {isLoggedIn} = useContext(AuthContext);

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        width: '100%',
      }}>
      <Row
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          width: '100%',
          height: '100vh',
          padding: '12rem',
        }}>
        <Col className='col mt-5'
          style={{
            width: '100%',
            height: '100%',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <h3 className='text-muted'
            style={{
              fontSize: '1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '4px',

            }}>
            Gallery of Pokemons
          </h3>
          <h1
            style={{
              fontFamily: 'Rubik',
              fontSize: '4rem',
            }}>PokeApp</h1>
          <p
            style={{
              fontSize: '1.25rem',
              lineHeight: '1.8',
              marginTop: '28px',
              fontFamily: 'Open Sans,sans-serif',
            }}>

            Mira los Pokemons, sus tipos y sus habilidades, y crea tu propio equipo
          </p>
          <Link to={`/list`}>
            <Button variant="primary" >
              {
                isLoggedIn 
                ? 'Go to list'
                : 'Login'
              }
            </Button>
          </Link>
        </Col>
        <Col
          style={{
          }}>
          <Card className=''
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '2rem',
              padding: '2rem',
              margin: 'auto',
              width: '290px',
              height: '403px',
              border: 'none',

            }}>
            <Card.Img
              variant="top"
              src={pikachu}
              alt={"pikachu"}
              style={{ maxWidth: '220px', height: 'auto' }}
            />
            <Card.Body>
              <small
                style={{
                  fontSize: '0.875rem',
                  marginTop: '20px',
                  color: '#808080',
                  fontFamily: 'Open Sans,sans-serif',
                  padding: '0',

                }}>Wellcome! I'm Pikachu. Come in and find my stats!</small>
            </Card.Body>
          </Card>
        </Col>

      </Row>
      <Row
        style={{
          backgroundColor: '#333333',
          position: 'absolute',
          width: '100%',
          padding: '2.2rem',
          margin: 'auto 0',
          color: 'white',

        }}>
        <Col style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0',

        }}>
          <p>Elaborado por <a href='https://www.linkedin.com/in/bryan-p%C3%A9rez-4190aa118/' target={"_blank"}>Bryan Perez</a></p>

        </Col>
      </Row>
    </div>
  )
}
