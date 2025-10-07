const Spa = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "2rem",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "3rem",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              color: "#667eea",
              marginBottom: "1rem",
            }}
          >
            🎯 SPA Route
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#4a5568",
            }}
          >
            This is a simple SPA page in your remote application
          </p>
        </div>
      </div>
    </div>
  );
};

export default Spa;
