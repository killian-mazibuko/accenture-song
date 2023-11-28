import data from './data';
import './Brands.css';
function Brands() {
  return (
    <div>
      <h1>Trusted by leading brands</h1>
      <div className="brands">
        {data.brands.map((brand) => (
          <div className="brand" key={brand.name}>
            <img src={brand.image} alt={brand.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Brands;
