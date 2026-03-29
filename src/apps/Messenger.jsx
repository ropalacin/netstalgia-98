import { useState, useEffect, useRef } from "react";

const contacts = [
  { name: "María_98", status: "online", avatar: "🙂" },
  { name: "techbro_jake", status: "online", avatar: "😎" },
  { name: "aisha_ng", status: "offline", avatar: "😊" },
  { name: "user_404", status: "offline", avatar: "👤" },
  { name: "li_wei_cn", status: "offline", avatar: "🌸" },
];

const conversations = {
  "María_98": [
    { from: "María_98", text: "hola!! entraste al internet??" },
    { from: "you", text: "siii mi mama me dejo usar la compu 1 hora" },
    { from: "María_98", text: "jaja yo tmb. oye viste la pagina de geocities q hice??" },
    { from: "you", text: "siii esta increible el fondo de estrellas" },
    { from: "María_98", text: "lo hice con un tutorial en ingles, tarde 3 horas en entenderlo" },
    { from: "you", text: "todo esta en ingles :/" },
    { from: "María_98", text: "si... a veces siento que el internet no es para nosotras" },
    { from: "you", text: "pero estamos aqui no?" },
    { from: "María_98", text: "si 😊 aunque casi nadie mas que conocemos tiene compu" },
    { from: "María_98", text: "somos las unicas del salon con internet" },
    { from: "you", text: "..." },
    { from: "María_98", text: "bueno... las unicas que pueden pagar internet" },
  ],
  "techbro_jake": [
    { from: "techbro_jake", text: "dude the internet is gonna change EVERYTHING" },
    { from: "techbro_jake", text: "information wants to be free!!!" },
    { from: "you", text: "free for who though?" },
    { from: "techbro_jake", text: "for everyone! thats the whole point" },
    { from: "you", text: "my ISP charges per minute. my friend in Nigeria pays 200% of her monthly income for access" },
    { from: "techbro_jake", text: "well yeah but that'll change" },
    { from: "techbro_jake", text: "the market will fix it" },
    { from: "you", text: "will it?" },
    { from: "techbro_jake", text: "..." },
    { from: "techbro_jake", text: "anyway check out my startup idea. its like a phone book but online" },
  ],
  "aisha_ng": [
    { from: "system", text: "aisha_ng is offline." },
    { from: "system", text: "aisha_ng has been offline since 1998." },
    { from: "system", text: "In 1998, Nigeria had approximately 100,000 internet users out of 108 million people." },
    { from: "system", text: "Monthly internet cost: $60 USD. Average monthly income: $30 USD." },
    { from: "system", text: "aisha_ng never received your messages." },
    { from: "system", text: "The internet remembers those who were on it. It forgets everyone else." },
  ],
  "user_404": [
    { from: "system", text: "This user could not be found." },
    { from: "system", text: "They might have existed. They might not have." },
    { from: "system", text: "In the 90s internet, if you weren't online, you simply didn't exist." },
    { from: "system", text: "No archive. No cache. No trace." },
    { from: "system", text: "user_404 represents the billions who were never counted." },
  ],
  "li_wei_cn": [
    { from: "system", text: "li_wei_cn is offline." },
    { from: "system", text: "Connection blocked." },
    { from: "system", text: "In 1998, China had 2.1 million internet users and strict content controls." },
    { from: "system", text: "Not all connections are equal. Not all access is access." },
    { from: "system", text: "The 'World Wide' Web had walls you couldn't see from the other side." },
  ],
};

export default function Messenger() {
  const [activeChat, setActiveChat] = useState(null);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!activeChat) return;

    const msgs = conversations[activeChat] || [];
    setVisibleMessages([]);

    let index = 0;
    function showNext() {
      if (index < msgs.length) {
        setTyping(true);
        const delay = msgs[index].from === "system" ? 1200 : 600 + Math.random() * 800;
        timeoutRef.current = setTimeout(() => {
          setTyping(false);
          setVisibleMessages((prev) => [...prev, msgs[index]]);
          index++;
          timeoutRef.current = setTimeout(showNext, 300);
        }, delay);
      }
    }

    timeoutRef.current = setTimeout(showNext, 500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeChat]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleMessages, typing]);

  return (
    <div style={{ display: "flex", height: "100%", fontSize: 12 }}>
      {/* Contact list */}
      <div style={{
        width: 140,
        borderRight: "1px solid #808080",
        overflow: "auto",
        background: "white",
      }}>
        <div style={{
          padding: "4px 8px",
          background: "#000080",
          color: "white",
          fontWeight: "bold",
          fontSize: 11,
        }}>
          Contacts
        </div>
        {contacts.map((c) => (
          <div
            key={c.name}
            onClick={() => setActiveChat(c.name)}
            style={{
              padding: "6px 8px",
              cursor: "pointer",
              background: activeChat === c.name ? "#000080" : "transparent",
              color: activeChat === c.name ? "white" : "black",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span>{c.avatar}</span>
            <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis" }}>{c.name}</span>
            <span style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: c.status === "online" ? "#00cc00" : "#808080",
              flexShrink: 0,
            }} />
          </div>
        ))}
      </div>

      {/* Chat area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {activeChat ? (
          <>
            <div style={{
              padding: "4px 8px",
              background: "#e0e0e0",
              borderBottom: "1px solid #808080",
              fontWeight: "bold",
              fontSize: 11,
            }}>
              Chat with {activeChat}
              {contacts.find((c) => c.name === activeChat)?.status === "offline" && (
                <span style={{ color: "red", fontWeight: "normal" }}> (offline)</span>
              )}
            </div>
            <div style={{
              flex: 1,
              overflow: "auto",
              padding: 8,
              background: "white",
              fontFamily: "Tahoma, sans-serif",
            }}>
              {visibleMessages.map((msg, i) => (
                <div key={i} style={{
                  marginBottom: 6,
                  color: msg.from === "system" ? "#808080" : "black",
                  fontStyle: msg.from === "system" ? "italic" : "normal",
                }}>
                  {msg.from !== "system" && (
                    <b style={{ color: msg.from === "you" ? "#000080" : "#800000" }}>
                      {msg.from === "you" ? "You" : msg.from}:
                    </b>
                  )}{" "}
                  {msg.text}
                </div>
              ))}
              {typing && (
                <div style={{ color: "#808080", fontStyle: "italic" }}>
                  {activeChat} is typing...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div style={{
              borderTop: "1px solid #808080",
              padding: 4,
              display: "flex",
              gap: 4,
            }}>
              <input
                type="text"
                placeholder={
                  contacts.find((c) => c.name === activeChat)?.status === "offline"
                    ? "This user is offline..."
                    : "Type a message..."
                }
                disabled={contacts.find((c) => c.name === activeChat)?.status === "offline"}
                style={{ flex: 1, fontSize: 11, padding: "2px 4px" }}
              />
              <button style={{ fontSize: 11, padding: "2px 8px" }}>Send</button>
            </div>
          </>
        ) : (
          <div style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#808080",
            fontStyle: "italic",
          }}>
            Select a contact to start chatting
          </div>
        )}
      </div>
    </div>
  );
}
