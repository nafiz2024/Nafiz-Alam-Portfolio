"use client";

import { useEffect, useState } from "react";

const LOADER_DURATION_MS = 2200;

export default function IntroLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    document.body.classList.add("intro-loader-active");

    const leaveTimer = window.setTimeout(() => {
      setIsLeaving(true);
    }, LOADER_DURATION_MS - 420);

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
      document.body.classList.remove("intro-loader-active");
    }, LOADER_DURATION_MS);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
      document.body.classList.remove("intro-loader-active");
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`intro-loader-shell ${isLeaving ? "is-leaving" : "is-entering"}`}
      aria-hidden="true"
    >
      <div className="intro-loader-noise" />
      <div className="intro-loader-glow intro-loader-glow-one" />
      <div className="intro-loader-glow intro-loader-glow-two" />

      <div className="intro-loader-content">
        <h1 className="intro-loader-title">
          <span className="intro-loader-bracket">{"<"}</span>
          <span className="intro-loader-name">Nafiz</span>
          <span className="intro-loader-slash">{"/>"}</span>
        </h1>

        <div className="intro-loader-progress">
          <span className="intro-loader-progress-fill" />
        </div>

        <p className="intro-loader-tagline">FRONTEND WEB DEVELOPER</p>
      </div>
    </div>
  );
}
