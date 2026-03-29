export default function DesktopIcon({ emoji, label, onDoubleClick }) {
  return (
    <div className="desktop-icon" onDoubleClick={onDoubleClick}>
      <span style={{ fontSize: 32, lineHeight: 1 }}>{emoji}</span>
      <span>{label}</span>
    </div>
  );
}
