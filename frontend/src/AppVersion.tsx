import React from "react";

const AppVersion: React.FC = () => {
  const version = import.meta.env.VITE_APP_VERSION || "dev";

  return (
    <div
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        fontSize: "0.85rem",
        fontWeight: "bold",
        color: "#333",
      }}
    >
      v{version}
    </div>
  );
};

export default AppVersion;
