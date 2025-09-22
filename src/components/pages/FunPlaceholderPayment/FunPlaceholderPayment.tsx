// FunPlaceholderPayment.tsx
import React from "react";
import {FunPlaceholderProps} from "../FunPlaceholder/FunPlaceholder";

export const FunPlaceholderPayment: React.FC<FunPlaceholderProps> = ({ title = "Оплата" }) => {
    return (
        <div style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#fef9ef",
            fontFamily: "'Tahoma', sans-serif",
            color: "#d35400",
            textAlign: "center",
        }}>
            <div>
                <h1 style={{ fontSize: "3rem", marginBottom: "20px", animation: "slideIn 1s forwards" }}>{title}</h1>
                <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>
                    Оплата будет доступна совсем скоро!
                </p>
                <div style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#d35400",
                    borderRadius: "10px",
                    animation: "bounce 1s infinite alternate",
                    margin: "0 auto",
                }} />
            </div>
            <style>{`
                @keyframes slideIn {
                    from { transform: translateY(-50px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes bounce {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-20px); }
                }
            `}</style>
        </div>
    );
};
