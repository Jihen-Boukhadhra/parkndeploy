const AppVersion = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "1rem",
        right: "1rem",
        fontSize: "0.9rem",
        color: "#666",
      }}
    >
      Version: {import.meta.env.VITE_APP_VERSION || "dev"}
    </div>
  );
};

export default AppVersion;
