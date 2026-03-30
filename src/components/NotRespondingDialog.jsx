import { useState, useEffect } from "react";

export default function NotRespondingDialog({ appTitle, onClose, onWait }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.3)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="window" style={{ width: 380, minHeight: "auto" }}>
        <div className="title-bar" style={{ background: "linear-gradient(90deg, #000080, #1084d0)" }}>
          <div className="title-bar-text">Microsoft Windows</div>
        </div>
        <div className="window-body" style={{ padding: 16 }}>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <span style={{ fontSize: 32, lineHeight: 1 }}>⚠️</span>
            <div style={{ fontSize: 12, fontFamily: "Tahoma, sans-serif" }}>
              <p style={{ marginBottom: 8, fontWeight: "bold" }}>
                {appTitle || "This program"} is not responding.
              </p>
              <p style={{ marginBottom: 8, color: "#333" }}>
                If you click End Now, you will lose any unsaved data.
                To wait for the program to respond, click Wait.
              </p>
              <p style={{ fontSize: 11, color: "#666" }}>
                The program may respond again if you wait.
              </p>
            </div>
          </div>
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
            marginTop: 16,
          }}>
            <button
              onClick={onClose}
              style={{ fontSize: 11, padding: "4px 20px", fontWeight: "bold" }}
            >
              End Now
            </button>
            <button
              onClick={onWait}
              style={{ fontSize: 11, padding: "4px 20px" }}
            >
              Wait
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
