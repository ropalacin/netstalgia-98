import { useState, useEffect } from "react";

export default function Taskbar({
  windows,
  onWindowClick,
  onStartClick,
  startOpen,
}) {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTime()), 30000);
    return () => clearInterval(interval);
  }, []);

  function getTime() {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div className="taskbar">
      <button
        className={`start-button ${startOpen ? "active" : ""}`}
        onClick={onStartClick}
      >
        ⊞ Start
      </button>

      <div className="taskbar-windows">
        {windows.map((w) => (
          <button
            key={w.id}
            className={`taskbar-window-btn ${w.focused ? "active" : ""}`}
            onClick={() => onWindowClick(w.id)}
          >
            {w.title}
          </button>
        ))}
      </div>

      <div className="taskbar-clock">{time}</div>
    </div>
  );
}
