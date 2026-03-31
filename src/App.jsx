import { useState, useCallback, useEffect, useRef } from "react";
import "98.css";
import "./styles/desktop.css";

import DesktopIcon from "./components/DesktopIcon";
import Taskbar from "./components/Taskbar";
import StartMenu from "./components/StartMenu";
import Window from "./components/Window";
import NotRespondingDialog from "./components/NotRespondingDialog";
import FileExplorer from "./apps/FileExplorer";
import RetroNavigator from "./apps/RetroNavigator";
import Messenger from "./apps/Messenger";
import Notepad from "./apps/Notepad";
import RecycleBin from "./apps/RecycleBin";
import TermsDialog from "./components/TermsDialog";
import DataConsole from "./components/DataConsole";

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
  {
    id: "recyclebin",
    label: "Recycle Bin",
    emoji: "🗑️",
    title: "Recycle Bin",
    width: 580,
    height: 420,
  },
  {
    id: "dataconsole",
    label: "system32.exe",
    emoji: "💀",
    title: "C:\\WINDOWS\\system32\\surveillance.exe",
    width: 520,
    height: 340,
  },
];

let windowCounter = 0;

export default function App() {
  const [windows, setWindows] = useState([]);
  const [startOpen, setStartOpen] = useState(false);
  const [notResponding, setNotResponding] = useState(null);
  const [showTerms, setShowTerms] = useState(true);
  const errorShownRef = useRef(false);

  // Show "not responding" dialog once, randomly between 20-60s after first window opens
  useEffect(() => {
    if (windows.length === 0 || errorShownRef.current) return;
    const delay = 20000 + Math.random() * 40000;
    const timer = setTimeout(() => {
      if (errorShownRef.current) return;
      errorShownRef.current = true;
      // Pick a random open window
      const openWindows = windows.filter((w) => !w.minimized);
      if (openWindows.length > 0) {
        const target = openWindows[Math.floor(Math.random() * openWindows.length)];
        setNotResponding(target);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [windows]);

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
      case "recyclebin":
        return <RecycleBin />;
      case "dataconsole":
        return <DataConsole />;
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

      {showTerms && (
        <TermsDialog onAccept={() => setShowTerms(false)} />
      )}

      {notResponding && (
        <NotRespondingDialog
          appTitle={notResponding.title}
          onClose={() => {
            closeWindow(notResponding.id);
            setNotResponding(null);
          }}
          onWait={() => setNotResponding(null)}
        />
      )}
    </div>
  );
}
