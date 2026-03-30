import { useState } from "react";

const trashedItems = [
  {
    name: "Your_Privacy.dat",
    size: "2.4 GB",
    icon: "📄",
    deletedBy: "Facebook Inc.",
    date: "2009",
    detail:
      "In 2009, Facebook changed its default privacy settings to make user data public. What was once yours became theirs. They didn't delete your privacy — they sold it.",
  },
  {
    name: "Chronological_Feed.exe",
    size: "128 KB",
    icon: "⚙️",
    deletedBy: "The Algorithm™",
    date: "2016",
    detail:
      "You used to see posts in the order they were made. Then platforms realized they could keep you scrolling longer by choosing what you see. Your timeline was replaced by their timeline.",
  },
  {
    name: "Personal_Blogs/",
    size: "45 items",
    icon: "📁",
    deletedBy: "Medium, Twitter, platforms",
    date: "2012",
    detail:
      "People used to have their own websites. Their own corner of the internet. Then platforms said: 'Post here instead, it's easier.' And when the platform dies, your words die with it.",
  },
  {
    name: "Attention_Span.dll",
    size: "8 hrs → 8 sec",
    icon: "🧠",
    deletedBy: "TikTok, Instagram Reels",
    date: "2020",
    detail:
      "The average attention span went from 12 seconds in 2000 to 8 seconds in 2020. Shorter than a goldfish. Not because we got dumber — because they got better at hijacking our dopamine.",
  },
  {
    name: "GeoCities/",
    size: "38 million pages",
    icon: "🌐",
    deletedBy: "Yahoo!",
    date: "2009",
    detail:
      "In 2009, Yahoo deleted GeoCities — 38 million hand-made websites. Glittery GIFs, guest books, under-construction signs. An entire era of human expression, gone in one corporate decision.",
  },
  {
    name: "Net_Neutrality.sys",
    size: "System file",
    icon: "🔒",
    deletedBy: "FCC / ISP Lobbying",
    date: "2017",
    detail:
      "The principle that all internet traffic should be treated equally. ISPs wanted to create fast lanes for those who pay more. The open highway became a toll road.",
  },
  {
    name: "RSS_Reader.app",
    size: "4.2 MB",
    icon: "📡",
    deletedBy: "Google",
    date: "2013",
    detail:
      "Google Reader let you follow any website on your own terms. No algorithm. No ads. Google killed it in 2013 — not because it didn't work, but because it didn't generate data.",
  },
  {
    name: "Free_APIs.json",
    size: "∞ → $42,000/mo",
    icon: "🔌",
    deletedBy: "Twitter/X, Reddit",
    date: "2023",
    detail:
      "APIs let developers build tools, bots, and apps that made platforms better. Then platforms locked them behind paywalls. The ecosystem they built for free was monetized without them.",
  },
  {
    name: "Your_Data.zip",
    size: "847 GB",
    icon: "📦",
    deletedBy: "Google, Meta, Amazon",
    date: "Ongoing",
    detail:
      "Every search, every click, every pause. They know what you almost bought. What you read at 3am. Who you almost texted. Your data isn't deleted — it's just not yours anymore.",
  },
  {
    name: "Forum_Communities.db",
    size: "1.2 million threads",
    icon: "💬",
    deletedBy: "Reddit IPO, platform enshittification",
    date: "2024",
    detail:
      "Forums were communities. People knew each other by username. Then platforms went public, chased growth, added ads, killed third-party apps. The community became the product.",
  },
];

export default function RecycleBin() {
  const [selected, setSelected] = useState(null);

  const selectedItem = selected !== null ? trashedItems[selected] : null;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", fontSize: 12, fontFamily: "Tahoma, sans-serif" }}>
      {/* Toolbar */}
      <div style={{
        padding: "4px 8px",
        borderBottom: "1px solid #808080",
        fontSize: 11,
        color: "#333",
        background: "#f0f0f0",
      }}>
        Recycle Bin — {trashedItems.length} item(s). These cannot be restored.
      </div>

      {/* File list */}
      <div style={{ flex: 1, overflow: "auto", background: "white" }}>
        {/* Header */}
        <div style={{
          display: "flex",
          padding: "3px 8px",
          borderBottom: "1px solid #c0c0c0",
          background: "#f0f0f0",
          fontSize: 11,
          fontWeight: "bold",
          color: "#333",
        }}>
          <span style={{ flex: 3 }}>Name</span>
          <span style={{ flex: 1 }}>Size</span>
          <span style={{ flex: 2 }}>Deleted By</span>
          <span style={{ flex: 1 }}>Date</span>
        </div>

        {trashedItems.map((item, i) => (
          <div
            key={i}
            onClick={() => setSelected(i)}
            style={{
              display: "flex",
              padding: "3px 8px",
              cursor: "pointer",
              background: selected === i ? "#000080" : i % 2 === 0 ? "white" : "#f8f8f8",
              color: selected === i ? "white" : "black",
              fontSize: 11,
              alignItems: "center",
            }}
          >
            <span style={{ flex: 3, display: "flex", alignItems: "center", gap: 4 }}>
              <span>{item.icon}</span>
              <span style={{ textDecoration: "line-through", opacity: 0.85 }}>{item.name}</span>
            </span>
            <span style={{ flex: 1, fontSize: 10, opacity: 0.7 }}>{item.size}</span>
            <span style={{ flex: 2, fontSize: 10 }}>{item.deletedBy}</span>
            <span style={{ flex: 1, fontSize: 10 }}>{item.date}</span>
          </div>
        ))}
      </div>

      {/* Detail panel */}
      <div style={{
        borderTop: "2px solid #808080",
        padding: 10,
        background: "#f5f5f5",
        minHeight: 80,
        maxHeight: 120,
        overflow: "auto",
        fontSize: 11,
        color: "#333",
        lineHeight: 1.5,
      }}>
        {selectedItem ? (
          <>
            <div style={{ fontWeight: "bold", marginBottom: 4, color: "#800000" }}>
              {selectedItem.icon} {selectedItem.name} — deleted by {selectedItem.deletedBy}, {selectedItem.date}
            </div>
            <div>{selectedItem.detail}</div>
          </>
        ) : (
          <div style={{ color: "#808080", fontStyle: "italic" }}>
            Click on an item to see what was lost.
          </div>
        )}
      </div>
    </div>
  );
}
