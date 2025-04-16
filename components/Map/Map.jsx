import "./Map.scss";

const Map = () => {
  return (
    <div className="map">
      <iframe
        className="map__frame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566.8240945954187!2d86.06952331509433!3d26.35362648336676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eddb9d8f6f0c63%3A0x2b4b3e1b0c8d7c5e!2sMadhubani%2C%20Bihar%20847211%2C%20India!5e0!3m2!1sen!2sus!4v1696409486045!5m2!1sen!2sus"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Madhubani Bihar Location"
      ></iframe>
    </div>
  );
};

export default Map;