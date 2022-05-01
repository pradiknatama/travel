import Image from "next/image";
import Container from "components/container";
import style from "./Footer.module.css";
import traveloLogo from "public/assets/travelo-logo-footer.png";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container size="lg">
        <div className="flex bg-white p-16">
          <Image
            src={traveloLogo}
            alt="Travelo Logo"
            placeholder="blur"
            height="98"
            width="136"
          />
        </div>
      </Container>
      <div className="bg-blue-100 p-3">
          <p className="text-heading-5 text-white font-bold text-center">
              Copyright 2022 Travel. All Rights Reserved.
          </p>
      </div>
    </footer>
  );
};
export default Footer;
