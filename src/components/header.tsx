import React from "react";

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div style={styles.icon}>🙂</div>
        <p style={styles.welcomeText}>¡Bienvenido <span>&lt;User&gt;</span>!</p>
        <h4 style={styles.dateText}>Fecha importante más cerca</h4>
        <button style={styles.button}>|||</button>
      </nav>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    padding: "10px",
    width: "100%",
    fontFamily: "Arial, sans-serif",
    boxSizing: "border-box",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    fontSize: "24px",
  },
  welcomeText: {
    flex: 1,
    marginLeft: "10px",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center" as "center", // Corregimos textAlign
    textDecoration: "underline",
  },
  dateText: {
    flex: 2,
    fontSize: "16px",
    fontStyle: "italic",
    textAlign: "center" as "center", // Corregimos textAlign
  },
  button: {
    backgroundColor: "transparent",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
  },
};

export default Header;
