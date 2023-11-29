import './Brands.css';
import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';
import SearchBox from './SearchBox';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, brands: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Brands() {
  const [{ loading, error, brands }, dispatch] = useReducer(reducer, {
    brands: [],
    loading: true,
    error: '',
  });
  const [sortBy, setSortBy] = useState('arrangement');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('off');

  const updateState = (sortByP, nameP, descP) => {
    setSortBy(sortByP);
    setName(nameP);
    setDesc(descP);
  };

  useEffect(() => {
    const fetchData = async (sortBy = '', name = '', desc = '') => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(
          `http://localhost:5000/api/brands?sortBy=${sortBy}&name=${name}&desc=${desc}`
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData(sortBy, name, desc);
  }, [sortBy, name, desc]);
  return (
    <Container>
      <Row className="heading">
        <Col>
          <img src="/images/rectangle.svg" alt="rectangle" /> You’ll be in good
          company
        </Col>
      </Row>
      <Row>
        <SearchBox updateState={updateState} />
      </Row>
      <Row>
        {' '}
        <h2>
          <strong>Trusted by leading brands</strong>
        </h2>
        <div className="brands">
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            brands.map((brand) => (
              <div className="brand" key={brand.name}>
                <img src={brand.image} alt={brand.name} />
              </div>
            ))
          )}
        </div>
      </Row>
    </Container>
  );
}
export default Brands;
