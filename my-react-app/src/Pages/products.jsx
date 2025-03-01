import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Nike Jordan",
    price: "Rp 700.000",
    image: "/images/shoes-2.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad`,
  },
  {
    id: 2,
    name: "Nike Air",
    price: "Rp 500.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad`,
  },
  {
    id: 3,
    name: "Adidas Samba",
    price: "Rp 2.000.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad`,
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};
export default ProductsPage;
