import React from "react";

interface SimpleNameProps {
  children: React.ReactNode;
}

const SimpleName: React.FC<SimpleNameProps> = ({ children }) => {
  return <p style={{ color: "red" }}>{children}</p>;
};

export default SimpleName;
