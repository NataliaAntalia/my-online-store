import React from "react";

// Типизация пропсов
export interface FunPlaceholderProps {
    title?: string;
}

// Типизация стилей
const styles: { [key: string]: React.CSSProperties } = {
    container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        fontFamily: "'Arial', sans-serif",
        color: "#fff",
        textAlign: "center",
    },
    content: {},
    title: {
        fontSize: "3rem",
        marginBottom: "20px",
        animation: "pulse 2s infinite",
    },
    text: {
        fontSize: "1.2rem",
        marginBottom: "40px",
    },
    spinner: {
        display: "inline-block",
        position: "relative",
        width: "50px",
        height: "50px",
    },
    spinnerDiv: {
        boxSizing: "border-box",
        display: "block",
        position: "absolute",
        width: "40px",
        height: "40px",
        margin: "6px",
        border: "6px solid #fff",
        borderRadius: "50%",
        borderColor: "#fff transparent transparent transparent",
        animation: "spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
    },
};

export const FunPlaceholder: React.FC<FunPlaceholderProps> = ({ title = "Страница в разработке" }) => {
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.title}>{title}</h1>
                <p style={styles.text}>Мы работаем над этой страницей. Она скоро оживёт!</p>
                <div style={styles.spinner}>
                    <div style={{ ...styles.spinnerDiv, animationDelay: "-0.45s" }}></div>
                    <div style={{ ...styles.spinnerDiv, animationDelay: "-0.3s" }}></div>
                    <div style={{ ...styles.spinnerDiv, animationDelay: "-0.15s" }}></div>
                    <div style={styles.spinnerDiv}></div>
                </div>
            </div>
            <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
        </div>
    );
};

