import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px;
  img {
    width: 200px;
    height: 200px;
    border-radius: 6px;
  }
`;
export default function Category(props) {
  const { urlImg, description } = props.category;
  return (
    <Container>
      <img src={urlImg} alt="image category" />
      <span>{description}</span>
    </Container>
  );
}
