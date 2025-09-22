// FunPlaceholderBonuses.tsx
import React from "react";
import {FunPlaceholderProps} from "../FunPlaceholder/FunPlaceholder";

export const FunPlaceholderBonuses: React.FC<FunPlaceholderProps> = ({ title = "Бонусы" }) => {
    return (
        <div style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "radial-gradient(circle, #f5f7fa, #c3cfe2)",
            fontFamily: "'Courier New', monospace",
            color: "#34495e",
            textAlign: "center",
        }}>
            <div>
                <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>{title}</h1>
                <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>
                    Бонусы скоро будут активны!
                </p>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    marginTop: "20px",
                }}>
                    <div style={{ width: "20px", height: "20px", backgroundColor: "#34495e", borderRadius: "50%", animation: "dot1 1s infinite alternate" }} />
                    <div style={{ width: "20px", height: "20px", backgroundColor: "#34495e", borderRadius: "50%", animation: "dot2 1s infinite alternate" }} />
                    <div style={{ width: "20px", height: "20px", backgroundColor: "#34495e", borderRadius: "50%", animation: "dot3 1s infinite alternate" }} />
                </div>
            </div>
            <style>{`
                @keyframes dot1 { 0% { transform: translateY(0); } 100% { transform: translateY(-15px); } }
                @keyframes dot2 { 0% { transform: translateY(0); } 100% { transform: translateY(-10px); } }
                @keyframes dot3 { 0% { transform: translateY(0); } 100% { transform: translateY(-5px); } }
            `}</style>
        </div>
    );
};
