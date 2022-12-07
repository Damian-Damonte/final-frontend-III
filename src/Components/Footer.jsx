import React from "react";
import logo from "../images/DH.png";
import { FooterStyled, IcontContainer } from "./styledComponents";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <FooterStyled>
      <img src={logo} alt="DH-logo"/>
      <IcontContainer>
        <a target="_blank" href="https://es-la.facebook.com/" rel="noreferrer">
          <FacebookIcon />
        </a>
        <a target="_blank" href="https://www.instagram.com/" rel="noreferrer">
          <InstagramIcon />
        </a>
        <a target="_blank" href="https://web.whatsapp.com/" rel="noreferrer">
          <WhatsAppIcon />
        </a>
      </IcontContainer>
    </FooterStyled>
  );
};

export default Footer;
