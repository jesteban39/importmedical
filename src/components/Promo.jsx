import styled from "styled-components";
const Container = styled.div`
  position: relative;
  margin: 1rem;
  div,
  img {
    border-radius: 6px;
    width: 100%;
    height: 100%;
  }
  img {
  }
  div {
    top: 0px;
    left: 0px;
    position: absolute;
    z-index: 999%;
    background-color: #00000060;
    color: white;
    font-size: 60px;
  }
`;
export default function Welcome({ urlImg, description }) {
  return (
    <Container>
      <img src={urlImg} alt="image" />
      <div>
        <p>{description}</p>
        <button>VER PRODUCTOS</button>
      </div>
    </Container>
  );
}
