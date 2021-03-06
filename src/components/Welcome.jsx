import React from "react";

import styled from "styled-components";
const Container = styled.div`
  position: relative;
  img {
    width: 100%;
  }
  div {
    width: 30%;
    position: absolute;
    top: 2rem;
    left: 3rem;
    p {
      font-size: 45px;
      color: white;
      > b > b {
        color: #ffff00;
      }
    }
    button {
      width: 12rem;
      height: 2rem;
      border: 0px;
      border-radius: 6px;
      background-color: #2275ff;
      color: white;
      font-size: 21px;
    }
  }
`;

export default function Welcome() {
  return (
    <Container>
      <img
        src="https://impormedical.com.co/images/categorias/MOVILIDAD2-1920X580.jpg"
        alt="image"
      />
      <div>
        <p>
          <b>
            <b>MÁS</b> DE 800 MIL FAMILIAS HABILITADAS
          </b>
        </p>
        <button>VER PRODUCTOS</button>
      </div>
    </Container>
  );
}
