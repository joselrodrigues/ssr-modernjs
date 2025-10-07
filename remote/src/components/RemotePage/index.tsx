const RemotePage = () => {
  return (
    <div
      style={{
        padding: "3rem",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: "16px",
        color: "white",
        boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "1rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          🎯 Remote Page Component
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            opacity: 0.9,
          }}
        >
          This component is loaded from the remote module via Module Federation
        </p>
      </div>

      <div
        style={{
          background: "rgba(255,255,255,0.15)",
          padding: "2rem",
          borderRadius: "12px",
        }}
      >
        <h3 style={{ marginBottom: "1rem" }}>Features:</h3>
        <ul style={{ lineHeight: "2", fontSize: "1.1rem" }}>
          <li>✨ Exported from remote module (port 3052)</li>
          <li>🔗 Imported dynamically in host module</li>
          <li>🚀 Module Federation in action</li>
          <li>⚡ Independent deployment</li>
        </ul>
      </div>
    </div>
  );
};

export default RemotePage;