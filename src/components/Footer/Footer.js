import React, { useEffect } from "react";
import "./Footer.css";

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

const Footer = () => {
  useEffect(() => {
    buildMap();
    window.addEventListener("resize", buildMap);
    return () => {
      window.removeEventListener("resize", buildMap);
    };
  }, []);

  const buildMap = () => {
    const sw = document.body.clientWidth;
    const bp = 550;
    const map = document.querySelector(".map");

    const embedMap =
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.4605923955137!2d77.1106319765421!3d28.67586557564117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d038e0dee2897%3A0x84bb3fed8b1c51f9!2sBharati%20Vidyapeeth&#39;s%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1711891840529!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

    if (sw > bp) {
      //If Large Screen
      if (!document.querySelector(".map-container")) {
        //If map doesn't already exist
        buildEmbed(embedMap, map);
      }
    }
  };

  const buildEmbed = (embed, map) => {
    //Build iframe view
    const mapContainer = document.createElement("div");
    mapContainer.classList.add("map-container");
    mapContainer.innerHTML = embed;
    map.prepend(mapContainer);
  };

  return (
    <div className="Footer">
      <div className="FooterBody">
        <div className="FooterLogo">
          <img src={images["hacklogo.png"]} alt="Logo" />
        </div>
        <div className="LogoText">
          <p>CodeClash By GDSC BVP</p>
          <p>Venue: BHarati Vidyapeeth College of Engineering, New Delhi</p>
        </div>
        <div className="FooterContainer">
          <div className="MediaLinks">
            <a href="https://twitter.com/dsc_bvp" target="_blank">
              <box-icon
                name="twitter"
                class="bx-tada-hover"
                type="logo"
                color="#F9AB00"
              />
            </a>
            <a href="https://www.facebook.com/DSCBVP/" target="_blank">
              <box-icon
                type="logo"
                class="bx-tada-hover"
                name="facebook-square"
                color="#F9AB00"
              />
            </a>
            <a href="https://www.instagram.com/gdscbvp/" target="_blank">
              <box-icon
                name="instagram"
                class="bx-tada-hover"
                type="logo"
                color="#F9AB00"
              />
            </a>
            <a href="https://www.linkedin.com/company/dsc-bvp/" target="_blank">
              <box-icon
                name="linkedin"
                class="bx-tada-hover"
                type="logo"
                color="#F9AB00"
              />
            </a>
          </div>
          <div className="map" />
          <div className="Signature">
            <p>Made with &#10084;&#65039; by the GDSC Tech Team!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
