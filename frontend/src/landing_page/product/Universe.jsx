import React from "react";

function Universe() {
  return (
    <div className="container my-5 py-5 text-center">
      <div className="row justify-content-center align-items-center">
        {/* Section Heading */}
        <h1 className="display-6 fw-normal mb-3" style={{ color: "#424242" }}>
          The InvestraX Universe
        </h1>
        <p className="text-muted mb-5 fs-6" style={{ color: "#666" }}>
          Extend your trading and investment experience even further with our partner platforms
        </p>

        {/* Row 1: Smallcase, Streak, Sensibull */}
        <div className="col-md-4 p-3 mb-4 d-flex flex-column align-items-center">
          <div style={{ height: "55px", display: "flex", alignItems: "center" }}>
            <img 
              src="/media/InvestraX.png" 
              alt="Smallcase" 
              style={{ maxHeight: "40px", width: "auto", objectFit: "contain" }} 
            />
          </div>
          <p className="text-muted small mt-3 px-4" style={{ fontSize: "0.85rem", maxWidth: "250px" }}>
            Thematic investment platform
          </p>
        </div>

        <div className="col-md-4 p-3 mb-4 d-flex flex-column align-items-center">
          <div style={{ height: "55px", display: "flex", alignItems: "center" }}>
            <img 
              src="/media/InvestraX.png" 
              alt="Streak" 
              style={{ maxHeight: "35px", width: "auto", objectFit: "contain" }} 
            />
          </div>
          <p className="text-muted small mt-3 px-4" style={{ fontSize: "0.85rem", maxWidth: "250px" }}>
            Algo & strategy platform
          </p>
        </div>

        <div className="col-md-4 p-3 mb-4 d-flex flex-column align-items-center">
          <div style={{ height: "55px", display: "flex", alignItems: "center" }}>
            <img 
              src="/media/InvestraX.png" 
              alt="Sensibull" 
              style={{ maxHeight: "35px", width: "auto", objectFit: "contain" }} 
            />
          </div>
          <p className="text-muted small mt-3 px-4" style={{ fontSize: "0.85rem", maxWidth: "250px" }}>
            Options trading platform
          </p>
        </div>
        <div className="col-md-4 p-3 mb-4 d-flex flex-column align-items-center">
          <div style={{ height: "55px", display: "flex", alignItems: "center" }}>
            <img 
              src="/media/InvestraX.png" 
              alt="InvestraX Fund House" 
              style={{ maxHeight: "45px", width: "auto", objectFit: "contain" }} 
            />
          </div>
          <p className="text-muted small mt-3 px-4" style={{ fontSize: "0.85rem", maxWidth: "250px" }}>
            Asset management
          </p>
        </div>

        <div className="col-md-4 p-3 mb-4 d-flex flex-column align-items-center">
          <div style={{ height: "55px", display: "flex", alignItems: "center" }}>
            <img 
              src="/media/InvestraX.png" 
              alt="GoldenPi" 
              style={{ maxHeight: "40px", width: "auto", objectFit: "contain" }} 
            />
          </div>
          <p className="text-muted small mt-3 px-4" style={{ fontSize: "0.85rem", maxWidth: "250px" }}>
            Bonds trading platform
          </p>
        </div>

        <div className="col-md-4 p-3 mb-4 d-flex flex-column align-items-center">
          <div style={{ height: "55px", display: "flex", alignItems: "center" }}>
            <img 
              src="/media/InvestraX.png" 
              alt="Ditto" 
              style={{ maxHeight: "40px", width: "auto", objectFit: "contain" }} 
            />
          </div>
          <p className="text-muted small mt-3 px-4" style={{ fontSize: "0.85rem", maxWidth: "250px" }}>
            Insurance
          </p>
        </div>
      </div>
      <button 
        className="btn btn-primary btn-lg mt-5 px-5 py-2 fs-6 fw-medium"
        style={{ backgroundColor: "#387ed1", border: "none", borderRadius: "3px" }}
      >
        Sign up now
      </button>
    </div>
  );
}

export default Universe;