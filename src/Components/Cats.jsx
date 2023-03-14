import React from 'react';
import { API_KEY, API_URL } from '../User/UserDetails'
import CatDetails from './CatDetails';
import { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap'

const Cats = () => {
  const perPage = 12;
  const url_api = `${API_URL}images/search?breed_ids=beng&limit=${perPage}`;

  const [cats, setCats] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  const requestApi = async () => {
    const headers = {
      "Content-Type": "application/json"
      , "x-api-key": API_KEY,
    };

    try {
      setIsLoading(true);

      const response = await fetch(url_api, { headers });
      const dataCats = await response.json()

      setCats(dataCats)
      console.log(dataCats)

    } catch (e) {
      console.log(e.message)

    } finally {
      setIsLoading(false);
    }

  };
// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    requestApi();
  },[])

  return (
    <>
      <Container>
        <Row className='justify-content-center'>
          {
            isLoading
              ? (<Spinner animation='grow' />)
              : cats 
              ? (<>
                {Object.values(cats).map((cat) => (<Col key={cat.id} md={3} className="p-1">
                  <CatDetails catDetails={cat} />

                </Col>))}
              </>) 
              : (<h3 className='text-center text-danger fw-bold'>Impossible to retrieve cats</h3>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Cats;