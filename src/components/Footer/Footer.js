import React from "react";
import "./Footer.css";
import FooterLogo from "../../images/uottahack19-black.png";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../images", false, /\.(png|jpe?g|svg)$/)
);

const footer = () => {
  return (
    <div className="Footer">
      <div className="FooterBody">
        <div className="FooterLogo">
          <img src={images["hacklogo.png"]} alt="Logo" />
        </div>
        <div className="LogoText">
          <p>CodeClash By GDSC BVP</p>
        </div>
        <div class="FooterContainer">
          <div className="MediaLinks">
            <a href="https://twitter.com/dsc_bvp" target="_blank">
              <box-icon
                name="twitter"
                class="bx-tada-hover"
                type="logo"
                color="black"
              />
            </a>
            <a href="https://www.facebook.com/DSCBVP/" target="_blank">
              <box-icon
                type="logo"
                class="bx-tada-hover"
                name="facebook-square"
                color="black"
              />
            </a>
            <a href="https://www.instagram.com/gdscbvp/" target="_blank">
              <box-icon
                name="instagram"
                class="bx-tada-hover"
                type="logo"
                color="black"
              />
            </a>

            <a href="https://www.linkedin.com/company/dsc-bvp/" target="_blank">
              <box-icon
                name="linkedin"
                class="bx-tada-hover"
                type="logo"
                color="black"
              />
            </a>
          </div>
          <div class="Signature">
            <p>Made with &#10084;&#65039; by the GDSC Tech Team!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
