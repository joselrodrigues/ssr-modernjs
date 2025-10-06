import { useAsyncValue } from "@modern-js/runtime/router";
import React from "react";

const RemoteText = () => {
  const data = useAsyncValue() as { banners: string[] };

  return (
    <div style={{
      padding: '2rem',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      borderRadius: '12px',
      color: 'white'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        <span style={{ fontSize: '2.5rem' }}>🎨</span>
        <h1 style={{
          fontSize: '2rem',
          margin: 0,
          fontWeight: '600',
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
        }}>
          Remote Component
        </h1>
      </div>

      <div style={{
        background: 'rgba(255,255,255,0.95)',
        padding: '1.5rem',
        borderRadius: '8px',
        color: '#2d3748'
      }}>
        <h3 style={{
          fontSize: '1.1rem',
          margin: '0 0 1rem 0',
          color: '#4a5568',
          fontWeight: '600'
        }}>
          📡 Data from Remote Server:
        </h3>

        {data?.banners && data.banners.length > 0 ? (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}>
            {data.banners.map((banner, index) => (
              <span
                key={index}
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  boxShadow: '0 2px 8px rgba(102,126,234,0.4)'
                }}
              >
                {banner}
              </span>
            ))}
          </div>
        ) : (
          <p style={{
            margin: 0,
            color: '#718096',
            fontStyle: 'italic'
          }}>
            No banners available
          </p>
        )}
      </div>

      <div style={{
        marginTop: '1.5rem',
        padding: '1rem',
        background: 'rgba(255,255,255,0.2)',
        borderRadius: '8px',
        fontSize: '0.875rem'
      }}>
        <p style={{ margin: 0 }}>
          ✨ This component is loaded dynamically via Module Federation from the remote app running on port 3052
        </p>
      </div>
    </div>
  );
};

export default RemoteText;
