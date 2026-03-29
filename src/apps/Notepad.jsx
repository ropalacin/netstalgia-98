export default function Notepad({ content = "Welcome to Netstalgia." }) {
  return (
    <div style={{ padding: 8, fontFamily: "monospace", fontSize: 13, whiteSpace: "pre-wrap", height: "100%" }}>
      {content}
    </div>
  );
}
