import styled from "styled-components";
import { BsCart3, BsSearch } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import {
  FaWheelchair,
  FaPumpMedical,
  FaLaptopMedical,
} from "react-icons/fa";
import { RiHeartAddLine } from "react-icons/ri";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    justify-content: space-between;
  }
  input {
    width: 600px;
    height: 40px;
  }
`;

export default function NavBar() {
  return (
    <Container>
      <div>
        <img src="./logoImpormedica.jpg" alt="logo inpormedical" />
        <input type="text" />
        <a>MIS PEDIDOS</a>
        <div>
          <span>hola aliad@ </span>
          <a>INGRESA</a>
        </div>
        <div>
          <span>{"0"}</span>
          <BsCart3 />
          <span>Carrito</span>
        </div>
      </div>
      <div>
        <div>
          <TiThMenu />
        </div>
        <div>
          <FaWheelchair />
          <span>MOVILIDAD</span>
        </div>
        <div>
          <RiHeartAddLine />
          <span>CUIDADO EN EL HOGAR</span>
        </div>
        <div>
          <FaLaptopMedical />
          <span>PROFECIONALES DE LA SALUD</span>
        </div>
        <div>
          <FaPumpMedical />
          <span>TAPABOCAS Y DESINFECCION</span>
        </div>
      </div>
    </Container>
  );
}
