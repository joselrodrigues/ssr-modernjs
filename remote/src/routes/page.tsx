import { Suspense } from "react";
import Button from "../components/Button";
import { getBanners } from "@/services/getBanners";
import { Await } from "@modern-js/runtime/router";

const Index = () => (
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
          🎨 Remote Application
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            opacity: 0.9,
          }}
        >
          Module Federation Demo - Remote Module Provider
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
        <Suspense
          fallback={
            <div
              style={{
                padding: "2rem",
                textAlign: "center",
                color: "#718096",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  marginBottom: "1rem",
                }}
              >
                ⏳
              </div>
              <p>Loading remote component...</p>
            </div>
          }
        >
          <Await
            resolve={getBanners()}
            errorElement={
              <div
                style={{
                  padding: "2rem",
                  background: "#fed7d7",
                  borderRadius: "8px",
                  color: "#c53030",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                  ⚠️
                </div>
                <p>Error loading data</p>
              </div>
            }
          >
            <Button />
          </Await>
        </Suspense>
      </div>
    </div>
  </div>
);

export default Index;
