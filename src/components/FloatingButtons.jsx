import React from "react";

const FloatingButtons = () => {
  return (
    <>
      {/* CALL BUTTON - LEFT */}
      <a href="tel:+918838200688">
        <div style={callStyle}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
            alt="call"
            style={iconStyle}
          />
        </div>
      </a>

      {/* WHATSAPP BUTTON - RIGHT */}
      <a
        href="https://wa.me/917339446008?text=Hello%20I%20need%20details"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div style={whatsappStyle}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="whatsapp"
            style={iconStyle}
          />
        </div>
      </a>
    </>
  );
};

const commonStyle = {
  position: "fixed",
  bottom: "20px",
  width: "65px",
  height: "65px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 5px 20px rgba(0,0,0,0.4)",
  cursor: "pointer",
  zIndex: 999,
  animation: "pulse 2s infinite",
};

const callStyle = {
  ...commonStyle,
  left: "20px",
  background: "linear-gradient(45deg, #0095ffff, #f7f7f7ff)",
};

const whatsappStyle = {
  ...commonStyle,
  right: "20px",
  background: "linear-gradient(45deg, #00ff08ff, #ffffffff)",
};

const iconStyle = {
  width: "30px",
  height: "30px",
  color:"white",
};

export default FloatingButtons;