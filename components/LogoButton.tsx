"use client";
import React from "react";

export default function LogoButton() {
  return (
    <button
      className="logo-button"
      aria-label="Scroll to top"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      <img src="/logo-small.svg" alt="Credit Sphere" />
    </button>
  );
}
