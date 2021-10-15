import styled from "styled-components";
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  grid-template-rows: repeat(2, 1fr);
  .item1 {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .item5 {
    grid-column-start: 2;
    grid-column-end: 4;
  }
  .item3 {
    grid-column-start: 4;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  .promo {
    margin: 6px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      margin: 0px;
      z-index: -1;
    }
    > div {
      left: 0px;
      top: 0px;
      bottom: 0px;
      right: 0px;
      position: absolute;
      z-index: 999;
      color: white;
      padding: 30%;
      border-radius: 6px;
      background-color: #00000093;
      span {
        font-size: 36px;
      }
    }
  }
`;
export default function Welcome() {
  return (
    <Container>
      <div className="promo item1">
        <img
          src="https://impormedical.com.co/images/assests/IM/portada-control-prevenc.jpg"
          alt="image"
        />
        <div>
          <span>¿Porque elegirnos?</span>
          <button>Conoce más de nosotros</button>
        </div>
      </div>
      <div className="promo item2">
        <img
          src="http://blog.medicomart.in/wp-content/uploads/2016/06/66.jpg"
          alt="image"
        />
        <div>
          <span>Tienda surtida</span>
        </div>
      </div>
      <div className="promo item3">
        <img
          src="https://st2.depositphotos.com/3433891/6705/i/600/depositphotos_67052281-stock-photo-doctor-reading-a-book.jpg"
          alt="image"
        />
        <div>
          <span>Gente informada</span>
        </div>
      </div>
      <div className="promo item4">
        <img
          src="https://de10.com.mx/sites/default/files/2021/09/02/taller_reparacion_tokio_2020.jpg"
          alt="image"
        />
        <div>
          <span>Usuario interesado</span>
        </div>
      </div>
      <div className="promo item5">
        <img
          src="https://cdn.euroinnova.edu.es/img/subidasEditor/fotolia_64349866_subscription_monthly_xxl-1614243790.webp"
          alt="image"
        />
        <div>
          <span>Servicio integral</span>
        </div>
      </div>
    </Container>
  );
}
