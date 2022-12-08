import React from "react";
import logo from "../images/DH.png";
import { FooterStyled, IcontContainer } from "./styledComponents";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  const social = [
    { id: 1, link: "https://es-la.facebook.com/", icon: <FacebookIcon /> },
    { id: 2, link: "https://www.instagram.com/", icon: <InstagramIcon /> },
    { id: 3, link: "https://web.whatsapp.com/", icon: <WhatsAppIcon /> },
  ];


  return (
    <FooterStyled>
    <a target="_blank" href={"https://www.digitalhouse.com/ar"} rel="noreferrer">
      <img src={logo} alt="DH-logo" />
    </a>
      <IcontContainer>
        {social.map(social => (
          <a key={social.id} target="_blank" href={social.link} rel="noreferrer">
            {social.icon}
          </a>
        ))}
      </IcontContainer>
    </FooterStyled>
  );
};

export default Footer;
