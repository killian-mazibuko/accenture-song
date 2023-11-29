import './Brands.css';
import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

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
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/brands');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);
  return (
    <Container>
      <h1>Trusted by leading brands</h1>
      <div className="brands">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          brands.map((brand) => (
            <div className="brand" key={brand.name}>
              <img src={brand.image} alt={brand.name} />
            </div>
          ))
        )}
      </div>
    </Container>
  );
}
export default Brands;
