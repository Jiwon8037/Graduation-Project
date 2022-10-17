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
        <h5>2조 Horizon 강지원 박수영 윤성현 이태욱 박소은</h5>
        <h5>FRONT END</h5>
        <a href="https://github.com/Jiwon8037/Graduation-Project">
          <img className="git" alt="github" src={imgGit} />
        </a>
        <h5>BACK END</h5>
        <a href="https://github.com/FouinK/Graduation_project-SpringBoot-">
          <img className="git" alt="github" src={imgGit} />
        </a>
        <br/>
      </div>
    </FooterTemplate>
  );
};

export default Footer;
