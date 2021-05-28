export const LookCard = ({ name, products = [] }) => {
  return (
    <div className="look">
      {name}
      <div className="look-row">
        <div className="look-image" />
        <div className="look-products">
          {products.map((p, i) => (
            <div key={i} className="look-product" />
          ))}
        </div>
      </div>
    </div>
  );
};
