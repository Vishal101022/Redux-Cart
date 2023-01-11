import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummyProduct = [
  {
    id: 1,
    price: 24,
    title: 'book',
    description: 'friction book'
  },
  {
    id: 2,
    price: 5,
    title: 'pen',
    description: 'ball pen with refill'
  }

]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyProduct.map(product =>(
            <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
