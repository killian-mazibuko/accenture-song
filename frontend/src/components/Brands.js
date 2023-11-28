import './Brands.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Brands() {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    async function getBrands() {
      const resp = await axios.get('http://localhost:5000/api/brands');
      setBrands(resp.data);
    }
    getBrands();
  }, []);
  return (
    <div>
      <h1>Trusted by leading brands</h1>
      <div className="brands">
        {brands.map((brand) => (
          <div className="brand" key={brand.name}>
            <img src={brand.image} alt={brand.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Brands;
