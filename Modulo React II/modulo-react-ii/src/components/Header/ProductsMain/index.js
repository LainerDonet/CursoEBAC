import Product from "./Product";

const ProductsMain = () => {
  return (
    <main>
        <h2>Products</h2>
        <h3>Check all our Products</h3>
        <Product name="orange" description="fruta"/>
        <Product name="apple" description="fruta"/>
        <Product name="banana" description="fruta"/>
    </main>
  );
}
export default ProductsMain;