import React, { useState } from "react";
import "./AppShowcase.css";

const apps = [
  { name: "App 1", icon: "📱", desc: "A mobile-first productivity app that helps you stay organized." },
  { name: "App 2", icon: "🎧", desc: "Music streaming with a beautiful interface and smart playlists." },
  { name: "App 3", icon: "⚙️", desc: "Backend tools that make performance optimization automatic." },
  { name: "App 4", icon: "🎮", desc: "A casual game that experiments with AR interactions." },
  { name: "App 5", icon: "💡", desc: "Innovation-focused idea tracker with collaboration features." },
  // Add up to 20 apps here...
];

export default function AppsShowcase() {
  const [selected, setSelected] = useState(apps[0]);

  return (
    <section className="showcase-container">
      <div className="description-section">
        <h2>{selected.name}</h2>
        <p>{selected.desc}</p>
      </div>

      <div className="apps-grid">
        {apps.map((app, index) => (
          <button
            key={index}
            className={`app-card ${selected.name === app.name ? "active" : ""}`}
            onClick={() => setSelected(app)}
          >
            <span className="icon">{app.icon}</span>
            <p className="label">{app.name}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
