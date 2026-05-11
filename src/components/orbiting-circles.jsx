"use client";

import { Children } from "react";

export function OrbitingCircles({
  children,
  className = "",
  iconSize = 40,
  radius = 120,
  reverse = false,
  speed = 1,
}) {
  const items = Children.toArray(children);

  return (
    <div
      className={`orbiting-circles-shell ${className}`.trim()}
      style={{
        "--orbit-radius": `${radius}px`,
        "--orbit-diameter": `${radius * 2}px`,
        "--orbit-icon-size": `${iconSize}px`,
        "--orbit-duration": `${Math.max(10, 22 / Math.max(speed, 0.2))}s`,
        "--orbit-direction": reverse ? "reverse" : "normal",
        "--orbit-counter-direction": reverse ? "normal" : "reverse",
      }}
      aria-hidden="true"
    >
      <div className="orbiting-circles-ring">
        {items.map((child, index) => (
          <div
            key={index}
            className="orbiting-circles-item"
            style={{
              "--orbit-angle": `${(360 / items.length) * index}deg`,
            }}
          >
            <div className="orbiting-circles-node">{child}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
