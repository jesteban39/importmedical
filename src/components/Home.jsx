import React, { useState } from "react";

import Welcome from "./Welcome";
import Product from "./Product";
import Promos from "./Promos";
import Promo from "./Promo";
import Categories from "./Categories";

import styled from "styled-components";
const Container = styled.div`
  background-color: #dddddd;
  display: flex;
  flex-direction: column;
  .promos {
    display: flex;
  }
  .products {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
    }
  }
`;

export default function Home() {
  const [products, setP] = useState([
    {
      id: 1,
      description:
        "Silla de Ruedas Motorizada gris metalizada abatible",
      urlImg:
        "https://impormedical.com.co/images/virtuemart/product/K100-13.jpg",
      price: 1110000,
    },
    {
      id: 11,
      description:
        "Silla de Ruedas Motorizada gris metalizada abatible",
      urlImg:
        "https://impormedical.com.co/images/virtuemart/product/KBE-980LQA-35.jpg",
      price: 1110000,
    },
    {
      id: 12,
      description:
        "Silla de Ruedas Motorizada gris metalizada abatible",
      urlImg:
        "https://impormedical.com.co/images/virtuemart/product/g5new.jpg",
      price: 1110000,
    },
    {
      id: 15,
      description:
        "Silla de Ruedas Motorizada en aluminio confort plus",
      urlImg:
        "https://impormedical.com.co/images/virtuemart/product/moto4.jpg",
      price: 1110000,
    },
  ]);

  const addCart = (product) => {};

  return (
    <Container>
      <Welcome />
      <Categories />
      <div className="products">
        <h1>NUEVA COLECCION</h1>
        <div>
          {products.map((product) => (
            <Product
              key={product.id}
              addCart={addCart}
              product={product}
            />
          ))}
        </div>
      </div>
      <Promos />
      <section>
        <div>
          <button>SILLAS DE RUEDAS</button>
          <button>TERAPIA EN EL HOGAR</button>
          <button>MOVILIDAD</button>
        </div>
        <img src="https://www.iberomed.es/blog/wp-content/uploads/2019/05/tipos-de-silla-de-ruedas-1280x640.jpg" />
        <div className="products">
          <h1>SILLAS DE RUEDAS</h1>
          <div className="products">
            {products.map((product) => (
              <Product
                key={product.id}
                addCart={addCart}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="promos">
        <Promo
          urlImg="https://previews.123rf.com/images/lsantilli/lsantilli1301/lsantilli130100133/17417261-ni%C3%B1o-que-toma-respiratoria-terapia-de-inhalaci%C3%B3n.jpg"
          description="Empresas en crecimiento"
        />
        <Promo
          urlImg="https://thumbs.dreamstime.com/z/se%C3%B1oras-mayores-tomando-vino-y-hablando-de-noticias-en-sus-vidas-concepto-estilo-vida-activo-la-edad-media-vivir-plena-174610024.jpg"
          description="Complemento línea de oxímetria"
        />
      </div>
      <div className="products">
        <h1>AYUDAS PARA LA MARCHA</h1>
        <div>
          {products.map((product) => (
            <Product
              key={product.id}
              addCart={addCart}
              product={product}
            />
          ))}
        </div>
      </div>
      <div className="products">
        <h1>TERAPIA RESPIRATORIAS</h1>
        <div>
          {products.map((product) => (
            <Product
              key={product.id}
              addCart={addCart}
              product={product}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
