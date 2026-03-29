export default function StartMenu({ apps, onAppClick, onClose }) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
        }}
        onClick={onClose}
      />
      <div className="start-menu">
        <div className="start-menu-sidebar">Netstalgia98</div>
        <div className="start-menu-items">
          {apps.map((app) => (
            <button
              key={app.id}
              className="start-menu-item"
              onClick={() => {
                onAppClick(app.id);
                onClose();
              }}
            >
              <span style={{ fontSize: 16 }}>{app.emoji}</span>
              {app.label}
            </button>
          ))}
          <div className="start-menu-divider" />
          <button className="start-menu-item" onClick={onClose}>
            <span style={{ fontSize: 16 }}>🔌</span>
            Shut Down...
          </button>
        </div>
      </div>
    </>
  );
}
