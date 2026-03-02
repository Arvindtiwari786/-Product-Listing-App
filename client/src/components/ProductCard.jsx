const ProductCard = ({ title, image, category }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-img" />
      <span>{title}</span>
      <span>{category}</span>
    </div>
  );
};

export default ProductCard;