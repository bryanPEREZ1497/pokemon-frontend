
import React, { useEffect, useState } from 'react'


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Character from '../../components/Character';
import usePokemonService from '../../hooks/usePokemonService';

export default function CharacterList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('')
  const { getPokemons } = usePokemonService();

  useEffect(
    () => {
      loadPokemons();
    }, []
  )

  function handleClick() {
    if (search.length !== 0) {
      loadPokemons(search);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
  }

  async function loadPokemons(search = '') {
    const response = await getPokemons(search);
    setLoading(false);
    setPokemons(response.data);
  }

  return (
    <Container
      style={{
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}>
      {
        loading
          ? <h1>Loading ...</h1>
          :
          <>
            <Row
              style={{
              }}>
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={3}>
                <form onSubmit={submitHandler}>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      aria-describedby="button-addon2"
                      className='form-control'
                      value={search}
                      onChange={
                        (e) => {
                          setSearch(e.target.value);
                        }
                      } />
                    <Button
                      type='submit'
                      variant="primary"
                      onClick={handleClick}>
                      <span className="material-symbols-outlined">
                        search
                      </span>
                    </Button>
                  </div>
                </form>
              </Col>
            </Row>
            <Row
              style={{
                // backgroundColor: 'rgba(255, 255, 255, 0.5)',
              }}>
              {pokemons.map(character => {
                return (
                  <Col
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={3}
                    style={{ marginTop: '1.2rem' }}
                    key={character._id}>
                    <Character character={character} />
                  </Col>
                )
              })}
            </Row>
          </>
      }

    </Container>
  )
}
