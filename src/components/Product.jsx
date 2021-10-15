import styled from "styled-components";
const Container = styled.div`
  width: 23%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 6px;

  >img {
    border-radius: 6px;
  }
  >span {
    text-align: center;
  }

  >div {
    display: none;
    z-index: -1;
  }

  >span:hover + div, div:hover {
    display: flex;
    flex-direction: column;
    z-index: 1;
    button {
      height: 2rem;
      border: 0px;
      border-radius: 6px;
      background-color: #2275ff;
    }
  } 
`;

export default function Product(props) {
  const { urlImg, description, price } = props.product;
  return (
    <Container>
      
      <img src={urlImg} alt="image product" />
      <span>{description}</span>
      <div>
        <b>${price}</b>
        <button onClick={props.addCart(props.product)}>
          AÑADIR AL CARRITO
        </button>
      </div>
    </Container>
  );
}
