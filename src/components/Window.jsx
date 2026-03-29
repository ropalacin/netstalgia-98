import Draggable from "react-draggable";
import { useRef } from "react";

export default function Window({
  id,
  title,
  children,
  width = 500,
  height = 350,
  x = 80,
  y = 40,
  focused,
  minimized,
  onFocus,
  onClose,
  onMinimize,
}) {
  const nodeRef = useRef(null);

  return (
    <Draggable
      handle=".title-bar"
      nodeRef={nodeRef}
      defaultPosition={{ x, y }}
      bounds="parent"
    >
      <div
        ref={nodeRef}
        className={`window-wrapper ${focused ? "focused" : ""} ${minimized ? "minimized" : ""}`}
        onMouseDown={onFocus}
      >
        <div className="window" style={{ width, height }}>
          <div className="title-bar">
            <div className="title-bar-text">{title}</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" onClick={onMinimize} />
              <button aria-label="Maximize" />
              <button aria-label="Close" onClick={onClose} />
            </div>
          </div>
          <div className="window-body">{children}</div>
        </div>
      </div>
    </Draggable>
  );
}
