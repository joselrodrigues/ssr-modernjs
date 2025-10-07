import React from "react";
import { kit, loadRemote } from "@module-federation/modern-js/runtime";

const RemotePageComponent = kit.createRemoteSSRComponent({
  loader: () => loadRemote("remote/RemotePage"),
  loading: (
    <div
      style={{
        padding: "3rem",
        textAlign: "center",
        color: "#718096",
      }}
    >
      <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>⏳</div>
      <p>Loading remote page component...</p>
    </div>
  ),
  fallback: ({ error }: { error: Error }) => {
    return (
      <div
        style={{
          padding: "3rem",
          background: "#fed7d7",
          borderRadius: "12px",
          color: "#c53030",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>⚠️</div>
        <p>Error loading remote component</p>
        <p style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
          {error.message}
        </p>
      </div>
    );
  },
});

const RemotePage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        padding: "2rem",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <header
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              marginBottom: "0.5rem",
              textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            🏠 Host - Remote Page
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              opacity: 0.9,
            }}
          >
            This page uses a federated component from the remote module
          </p>
        </header>

        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "2rem",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          <RemotePageComponent />
        </div>

        <div
          style={{
            marginTop: "2rem",
            textAlign: "center",
          }}
        >
          <button
            onClick={() => (window.location.href = "/")}
            style={{
              padding: "1rem 2rem",
              fontSize: "1rem",
              fontWeight: "600",
              color: "#667eea",
              background: "white",
              border: "2px solid white",
              borderRadius: "12px",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(255,255,255,0.3)",
            }}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemotePage;