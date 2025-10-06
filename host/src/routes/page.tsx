import React from "react";

import { kit, loadRemote } from "@module-federation/modern-js/runtime";

const RemoteHome = kit.createRemoteSSRComponent({
  loader: () => loadRemote("remote/Home"),
  loading: <div>loading...</div>,
  fallback: ({ error }: { error: Error }) => {
    if (error instanceof Error && error.message.includes("not exist")) {
      return <div>fallback - not existed id</div>;
    }
    return <div>fallback</div>;
  },
});

const Index = () => {
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
            🏠 Host Application
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              opacity: 0.9,
            }}
          >
            Module Federation Demo - Main Container
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
          <div
            style={{
              marginBottom: "1.5rem",
              padding: "1rem",
              background: "#f7fafc",
              borderRadius: "8px",
              borderLeft: "4px solid #667eea",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#2d3748",
                margin: "0 0 0.5rem 0",
              }}
            >
              📦 Remote Component
            </h2>
            <p
              style={{
                color: "#718096",
                margin: 0,
                fontSize: "0.95rem",
              }}
            >
              Loading federated module from remote application...
            </p>
          </div>

          <RemoteHome />
        </div>
      </div>
    </div>
  );
};

export default Index;
