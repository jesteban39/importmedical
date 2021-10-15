import React, { useState } from "react";

import Category from "./Category";

import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;

export default function Categories() {
  const [categories, setC] = useState([
    {
      id: 1,
      urlImg:
        "https://ae01.alicdn.com/kf/H2eb1cdfa3f504fa0ac015d15cad5477d0/Xiangzhushou-Pasamanos-para-ba-o-barandal-de-ba-o-seguro-y-antideslizante-de-acero-inoxidable-200KG.jpg_Q90.jpg_.webp",
      description: "Seguridad en el baño",
    },
    {
      id: 13,
      urlImg:
        "https://cdn2.totalcode.net/metropolis/product-zoom/es/tapabocas-quirurgico-cajax50und-4.webp",
      description: "Tapabocas",
    },
    {
      id: 18,
      urlImg:
        "https://impormedical.com.co/images/virtuemart/product/K100-13.jpg",
      description: "Sillas de ruedas",
    },
    {
      id: 31,
      urlImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtaUEsOY-wQjMK-03oEWyEAjYgAudyMOcHw&usqp=CAU",
      description: "Ayudas para la marcha",
    },
    {
      id: 21,
      urlImg:
        "https://impormedical.com.co/images/virtuemart/category/CONFORT_1920X580.jpg",
      description: "Comodidad y confort",
    },
  ]);
  return (
    <Container>
      {categories.map((category) => (
        <Category category={category} />
      ))}
    </Container>
  );
}
