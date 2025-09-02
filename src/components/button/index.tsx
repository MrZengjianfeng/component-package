import React from "react";

interface IProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  [key: string]: any;
}

const Button = (prosp: IProps) => {
  const { label, onClick, variant = "primary", ...rest } = prosp;
  const styles = {
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: variant === "primary" ? "#007bff" : "#6c757d",
    color: "white",
    fontSize: "14px",
  };

  return (
    <button style={styles} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
