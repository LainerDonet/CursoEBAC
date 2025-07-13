const Product = ({name, description, img }) => {
  return (
    <article>
        <img src={img} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
    </article>
  );
}
export default Product;