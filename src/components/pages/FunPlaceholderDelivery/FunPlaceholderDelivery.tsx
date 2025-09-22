// FunPlaceholderDelivery.tsx
import React from "react";
import {FunPlaceholderProps} from "../FunPlaceholder/FunPlaceholder";

export const FunPlaceholderDelivery: React.FC<FunPlaceholderProps> = ({ title = "Доставка" }) => {
    return (
        <div style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(120deg, #a1c4fd, #c2e9fb)",
            fontFamily: "'Verdana', sans-serif",
            color: "#333",
            textAlign: "center",
        }}>
            <div>
                <h1 style={{ fontSize: "3rem", marginBottom: "20px", color: "#1e3c72" }}>{title}</h1>
                <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>
                    Страница доставки скоро будет доступна!
                </p>
                <div style={{
                    width: "60px",
                    height: "60px",
                    border: "8px dashed #1e3c72",
                    borderRadius: "50%",
                    animation: "rotate 1.5s linear infinite",
                    margin: "0 auto",
                }} />
            </div>
            <style>{`
                @keyframes rotate {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};
