import React from "react";
import FooterTemplate from "./FooterTemplate";
import imgGit from "./logo-github.png";
import imgSku from "./logo-sku.png";

const Footer = () => {
  return (
    <FooterTemplate>
      <div className="footerDiv">
        <img className="sku" alt="sku" src={imgSku} />
        <h5>경기도 안양시 만안구 성결대학로 성결관 101호 물리실습실</h5>
        <h5>2조 Horizon 강지원</h5>
        <a href="https://github.com/Jiwon8037">
          <img className="git" alt="github" src={imgGit} />
        </a>
      </div>
    </FooterTemplate>
  );
};

export default Footer;
