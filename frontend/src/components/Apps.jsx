import React from "react";

const appsData = [
  {
    name: "Kite",
    description: "Fast and elegant trading platform",
    color: "#f56834",
    letter: "K",
    icon: "/media/InvestraX.png",
  },
  {
    name: "Coin",
    description: "Direct mutual fund investments",
    color: "#387ed1",
    letter: "C",
    icon: "/media/InvestraX.png",
  },
  {
    name: "Console",
    description: "Portfolio and reporting dashboard",
    color: "#8e44ad",
    letter: "Co",
    icon: "/media/InvestraX.png",
  },
  {
    name: "Varsity",
    description: "Learn stock market for free",
    color: "#2980b9",
    letter: "V",
    icon: "/media/InvestraX.png",
  },
  {
    name: "Sensibull",
    description: "Options trading platform",
    color: "#e67e22",
    letter: "S",
    icon: "/media/InvestraX.png",
  },
  {
    name: "Streak",
    description: "Algo trading without coding",
    color: "#27ae60",
    letter: "St",
    icon: "/media/InvestraX.png",
  },
];

const Apps = () => {
  return (
    <div className="apps-page">
      <h3 className="dashboard-page-title">Apps</h3>
      <p className="apps-subtitle">Explore InvestraX's ecosystem of trading and investment apps</p>
      <div className="apps-grid">
        {appsData.map((app, index) => (
          <div key={index} className="app-card">
            <div className="app-icon-wrap">
              <img
                src={app.icon}
                alt={app.name}
                className="app-icon"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                className="app-icon-fallback"
                style={{ background: app.color, display: "none" }}
              >
                {app.letter}
              </div>
            </div>
            <h4 className="app-name">{app.name}</h4>
            <p className="app-desc">{app.description}</p>
            <button className="app-btn">Open</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
