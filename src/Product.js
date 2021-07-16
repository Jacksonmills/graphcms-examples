import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function Product({ products }) {
  const { slug } = useParams();

  const product = products.find((product) => product.slug === slug);
  const price = product.price;

  return (
    <Wrapper>
      <h1>{product.name}</h1>
      <div>{price}</div>
      <p>{product.description}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default Product;
