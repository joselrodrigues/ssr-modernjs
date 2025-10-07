import { useAsyncValue } from "@modern-js/runtime/router";

const Button = () => {
  const data = useAsyncValue() as { banners: string[] };

  return (
    <div
      style={{
        padding: "2rem",
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        borderRadius: "12px",
        color: "white",
      }}
    >
      <h2 style={{ margin: "0 0 1rem 0" }}>Remote Component</h2>

      {data?.banners && data.banners.length > 0 ? (
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {data.banners.map((banner, index) => (
            <span
              key={index}
              style={{
                padding: "0.5rem 1rem",
                background: "rgba(255,255,255,0.2)",
                borderRadius: "20px",
              }}
            >
              {banner}
            </span>
          ))}
        </div>
      ) : (
        <p>No banners available</p>
      )}
    </div>
  );
};

export default Button;
