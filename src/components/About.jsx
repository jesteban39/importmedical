import styled from "styled-components";
const Container = styled.div``;

export default function About() {
  return (
    <Container>
      <div>
        <h6>SOBRE NOSOTROS</h6>
        <span>¿Quienes somos?</span>
        <span>Nuestra historia</span>
        <span>Nuestra informacion</span>
      </div>
      <div>
        <h6>CATEGORIAS DESTACADAS</h6>
        <span>Profecionales de la salud</span>
        <span>Proteccion e igiene</span>
        <span>Control y prevencion</span>
        <span>Movilidad</span>
        <span>Independecia y cuidado en el hogar</span>
        <span>Terapia respiratoria</span>
        <span>Confort</span>
      </div>
      <div>
        <h6>SERVICIO AL CLIENTE</h6>
        <span>Politica de entregas</span>
        <span>Politica de devoluciones</span>
        <span>Politica de garantias</span>
        <span>Politicas de cancelacion</span>
        <span>WhatsApp 123 123 3434</span>
        <span>PBX 01 8000 123 345</span>
        <span>e-Mail: info@impormedica.com</span>
      </div>
      <div>
        <h6>SUSCRIBASE A NUESTRO NEWSALETTER</h6>
        <input type="text" />
        <label>
          <input type="radio" />
          Aceptacion de terminos y condiciones
        </label>
        <span>Nuestros metodos de pago</span>
        <div>
          <image src="" alt='logo metodo de pago'/>
          <image src="" alt='logo metodo de pago'/>
          <image src="" alt='logo metodo de pago'/>
          <image src="" alt='logo metodo de pago'/>
          <image src="" alt='logo metodo de pago'/>
          <image src="" alt='logo metodo de pago'/>
          <image src="" alt='logo metodo de pago'/>
          <image src="" alt='logo metodo de pago'/>
        </div>
      </div>
    </Container>
  );
}
