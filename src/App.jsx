import { useState, useCallback } from "react";
import "98.css";
import "./styles/desktop.css";

import DesktopIcon from "./components/DesktopIcon";
import Taskbar from "./components/Taskbar";
import StartMenu from "./components/StartMenu";
import Window from "./components/Window";
import FileExplorer from "./apps/FileExplorer";
import RetroNavigator from "./apps/RetroNavigator";
import Messenger from "./apps/Messenger";
import Notepad from "./apps/Notepad";

const APPS = [
  {
    id: "explorer",
    label: "My Computer",
    emoji: "🖥️",
    title: "My Computer - C:\\",
    width: 500,
    height: 380,
  },
  {
    id: "navigator",
    label: "Internet Explorer",
    emoji: "🌐",
    title: "Netstalgia Navigator",
    width: 620,
    height: 480,
  },
  {
    id: "messenger",
    label: "MSN Messenger",
    emoji: "💬",
    title: "MSN Messenger",
    width: 500,
    height: 400,
  },
  {
    id: "readme",
    label: "readme.txt",
    emoji: "📝",
    title: "readme.txt - Notepad",
    width: 420,
    height: 320,
  },
];

let windowCounter = 0;

export default function App() {
  const [windows, setWindows] = useState([]);
  const [startOpen, setStartOpen] = useState(false);

  const openWindow = useCallback((appId, extraProps = {}) => {
    const app = APPS.find((a) => a.id === appId);
    if (!app) return;

    windowCounter++;
    const offset = (windowCounter % 6) * 30;

    setWindows((prev) => {
      const unfocused = prev.map((w) => ({ ...w, focused: false }));
      return [
        ...unfocused,
        {
          id: `${appId}-${windowCounter}`,
          appId: app.id,
          title: extraProps.title || app.title,
          width: extraProps.width || app.width,
          height: extraProps.height || app.height,
          x: 60 + offset,
          y: 30 + offset,
          focused: true,
          minimized: false,
          extraProps,
        },
      ];
    });
  }, []);

  function closeWindow(id) {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }

  function focusWindow(id) {
    setWindows((prev) =>
      prev.map((w) => ({ ...w, focused: w.id === id }))
    );
  }

  function minimizeWindow(id) {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, minimized: true, focused: false } : w
      )
    );
  }

  function toggleWindow(id) {
    setWindows((prev) =>
      prev.map((w) => {
        if (w.id !== id) return { ...w, focused: false };
        if (w.minimized) return { ...w, minimized: false, focused: true };
        if (w.focused) return { ...w, minimized: true, focused: false };
        return { ...w, focused: true };
      })
    );
  }

  function handleOpenFile(name, content) {
    openWindow("readme", {
      title: `${name} - Notepad`,
      width: 450,
      height: 350,
      content,
    });
  }

  function renderApp(win) {
    switch (win.appId) {
      case "explorer":
        return <FileExplorer onOpenFile={handleOpenFile} />;
      case "navigator":
        return <RetroNavigator />;
      case "messenger":
        return <Messenger />;
      case "readme":
        return (
          <Notepad
            content={
              win.extraProps?.content ||
              "=== NETSTALGIA 98 ===\n\nBienvenidx a este escritorio.\n\nExplora las carpetas, abre el navegador,\nchatea en el messenger.\n\nCada ventana cuenta una parte de la historia\nde quiénes estaban (y quiénes no) en el\ninternet de los 90s.\n\nDouble-click the icons to begin."
            }
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className="desktop">
      <div className="desktop-area">
        {APPS.map((app) => (
          <DesktopIcon
            key={app.id}
            emoji={app.emoji}
            label={app.label}
            onDoubleClick={() => openWindow(app.id)}
          />
        ))}
      </div>

      {windows.map((win) => (
        <Window
          key={win.id}
          id={win.id}
          title={win.title}
          width={win.width}
          height={win.height}
          x={win.x}
          y={win.y}
          focused={win.focused}
          minimized={win.minimized}
          onFocus={() => focusWindow(win.id)}
          onClose={() => closeWindow(win.id)}
          onMinimize={() => minimizeWindow(win.id)}
        >
          {renderApp(win)}
        </Window>
      ))}

      {startOpen && (
        <StartMenu
          apps={APPS}
          onAppClick={(id) => openWindow(id)}
          onClose={() => setStartOpen(false)}
        />
      )}

      <Taskbar
        windows={windows.map((w) => ({
          id: w.id,
          title: w.title,
          focused: w.focused,
        }))}
        onWindowClick={toggleWindow}
        onStartClick={() => setStartOpen(!startOpen)}
        startOpen={startOpen}
      />
    </div>
  );
}
