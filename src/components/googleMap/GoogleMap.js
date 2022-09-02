import { useEffect } from "react";
import "./GoogleMap.css";

const GoogleMap = () => {
  useEffect(() => {
    const ifameData = document.getElementById("iframeId");

    const lat = 27.6926374;
    const lon = 85.3365489;
    ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  });

  return (
    <div className="google-map">
      <h1 className="sectionTitle">Google Map</h1>
      <div className="g-map">
        <iframe
          title="google map"
          id="iframeId"
          height="100%"
          width="100%"
        ></iframe>
      </div>
    </div>
  );
};
export default GoogleMap;
