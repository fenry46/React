import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Nike Air Dunk">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </CardProduct.Body>
        <CardProduct.Footer price="RP 500.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/shoes-2.jpg" />
        <CardProduct.Body title="Adidas Stan Smith">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </CardProduct.Body>
        <CardProduct.Footer price="RP 700.000" />
      </CardProduct>
    </div>
  );
};
export default ProductsPage;
