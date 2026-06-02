"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "./healthcare-loader.json";
import "./MedicalLoader.css";

export default function MedicalLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const visited = sessionStorage.getItem("medflow-loader");

    if (visited) {
      setLoading(false);
      return;
    }

    sessionStorage.setItem("medflow-loader", "true");

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return children;

  return (
    <div className="medical-loader-overlay">
      <div className="medical-loader-bg"></div>

      <div className="medical-loader-content">
        <div className="medical-loader-logo">
          <Lottie
            animationData={animationData}
            loop={true}
          />
        </div>

        <h1 className="medical-loader-title">
          MedFlow
        </h1>

        <p className="medical-loader-subtitle">
          Intelligent Medical Billing Solutions
        </p>

        <div className="medical-loader-progress">
          <div className="medical-loader-bar" />
        </div>
      </div>
    </div>
  );
}