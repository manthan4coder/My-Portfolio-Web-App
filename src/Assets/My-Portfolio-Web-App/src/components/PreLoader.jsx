//
import "../css/PreLoader.css";
import images from "../assets";

const PreLoader = () => {
  return (
    <div id="page">
      <div id="container">
        <div id="ring"></div>
        <div id="ring"></div>
        <div id="ring"></div>
        <div id="ring"></div>
        <div id="h3">
          <img
            style={{ width: "70px", height: "70px" }}
            src={images.homeLogo}
            alt="loaderLogo"
          />
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
