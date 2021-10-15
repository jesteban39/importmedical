import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { RiWechatFill } from "react-icons/ri";

import styled from "styled-components";
const Container = styled.div`
  background-color: blue;
`;
export default function Contact() {
  return (
    <Container>
      <button>
        <FiPhoneCall />
        <span>Llámanos</span>
      </button>
      <button>
        <FaWhatsapp />
        <span>WhatsApp</span>
      </button>
      <button>
        <RiWechatFill />
        <span>Chatea con nosotros</span>
      </button>
      <div>
        <span>TE AYUDAMOS CON TU CPMPRA</span>
      </div>
    </Container>
  );
}
