import { useState } from "react";

const pages = {
  "home": {
    title: "Welcome to the Internet — Netstalgia Edition",
    content: `
      <div style="text-align:center; padding: 20px; font-family: 'Times New Roman', serif;">
        <h1 style="color: #000080;">🌐 Welcome to the World Wide Web</h1>
        <p><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="400" height="3" style="background: repeating-linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet); display:block; margin: 10px auto;" /></p>
        <marquee style="color: purple; font-size: 14px;">★ You are visitor #000,042 ★ Last updated: December 15, 1998 ★</marquee>
        <br/><br/>
        <table border="1" cellpadding="10" align="center" style="font-size: 13px;">
          <tr>
            <td><a href="#" style="color: blue;">📊 Who Was Online?</a></td>
            <td><a href="#" style="color: blue;">💰 The Cost of Access</a></td>
          </tr>
          <tr>
            <td><a href="#" style="color: blue;">🌍 Languages of the Web</a></td>
            <td><a href="#" style="color: blue;">📡 The Digital Divide</a></td>
          </tr>
        </table>
        <br/>
        <p style="font-size: 12px; color: gray;">Best viewed with Netscape Navigator 4.0 at 800x600</p>
        <p style="font-size: 11px;">
          <a href="#" style="color: blue;">Sign my Guestbook!</a> |
          <a href="#" style="color: blue;">Webring</a> |
          <a href="#" style="color: blue;">Links</a> |
          <a href="#" style="color: blue;">🇦🇷 Taringa!</a>
        </p>
      </div>
    `,
  },
  "whowasonline": {
    title: "Who Was Online in 1998?",
    content: `
      <div style="padding: 16px; font-family: 'Times New Roman', serif; font-size: 13px;">
        <h2 style="color: #800000;">📊 Who Was Online in 1998?</h2>
        <hr/>
        <p><b>Total internet users worldwide:</b> ~147 million (3.6% of world population)</p>
        <br/>
        <table border="1" cellpadding="6" style="font-size: 12px; border-collapse: collapse;">
          <tr style="background: #000080; color: white;">
            <th>Region</th><th>% of Internet Users</th><th>% of World Population</th>
          </tr>
          <tr><td>North America</td><td>57%</td><td>5%</td></tr>
          <tr style="background:#f0f0f0;"><td>Europe</td><td>23%</td><td>12%</td></tr>
          <tr><td>Asia/Pacific</td><td>15%</td><td>57%</td></tr>
          <tr style="background:#f0f0f0;"><td>Latin America</td><td>3%</td><td>8%</td></tr>
          <tr><td>Africa</td><td>0.5%</td><td>13%</td></tr>
          <tr style="background:#f0f0f0;"><td>Middle East</td><td>0.3%</td><td>4%</td></tr>
        </table>
        <br/>
        <p style="color: #800000;"><b>The "free and open web" was mostly American, mostly English, mostly male, mostly white, mostly affluent.</b></p>
        <p>When we feel nostalgic about the early web, we are nostalgic about an experience that <b>96.4% of humanity did not share.</b></p>
        <br/>
        <p><a href="#" style="color: blue;">← Back to Home</a></p>
      </div>
    `,
  },
  "cost": {
    title: "The Cost of Being Online",
    content: `
      <div style="padding: 16px; font-family: 'Times New Roman', serif; font-size: 13px;">
        <h2 style="color: #800000;">💰 The Cost of Access in 1998</h2>
        <hr/>
        <table border="1" cellpadding="6" style="font-size: 12px; border-collapse: collapse;">
          <tr style="background: #000080; color: white;">
            <th>Country</th><th>Monthly ISP Cost</th><th>Avg Monthly Income</th><th>% of Income</th>
          </tr>
          <tr><td>🇺🇸 USA</td><td>$20</td><td>$2,500</td><td>0.8%</td></tr>
          <tr style="background:#f0f0f0;"><td>🇧🇷 Brazil</td><td>$40</td><td>$400</td><td>10%</td></tr>
          <tr><td>🇮🇳 India</td><td>$15</td><td>$50</td><td>30%</td></tr>
          <tr style="background:#f0f0f0;"><td>🇳🇬 Nigeria</td><td>$60</td><td>$30</td><td>200%</td></tr>
        </table>
        <br/>
        <p>That's before counting the computer itself, the phone line, and the per-minute charges many countries imposed.</p>
        <p style="color: #800000;"><b>"Internet for everyone" was a promise. Not a reality.</b></p>
        <br/>
        <p><a href="#" style="color: blue;">← Back to Home</a></p>
      </div>
    `,
  },
  "languages": {
    title: "Languages of the Web",
    content: `
      <div style="padding: 16px; font-family: 'Times New Roman', serif; font-size: 13px;">
        <h2 style="color: #800000;">🌍 Languages of the Web (1998)</h2>
        <hr/>
        <p><b>~80% of all web content was in English.</b></p>
        <p>English speakers: ~5% of world population.</p>
        <br/>
        <div style="background: #ffffcc; border: 1px solid #cccc00; padding: 12px; margin: 8px 0;">
          <p><b>Unicode support was minimal.</b> Many browsers couldn't display:</p>
          <ul>
            <li>Arabic (right-to-left text)</li>
            <li>Chinese, Japanese, Korean characters</li>
            <li>Hindi, Thai, and most South Asian scripts</li>
            <li>Accented characters (even é was sometimes broken)</li>
          </ul>
          <p>The web was built in ASCII. If your language didn't fit, <b>you didn't fit.</b></p>
        </div>
        <br/>
        <p>Domain names were ASCII-only until 2003 (Internationalized Domain Names).</p>
        <p style="color: #800000;"><b>The "World Wide Web" spoke mostly one language.</b></p>
        <br/>
        <p><a href="#" style="color: blue;">← Back to Home</a></p>
      </div>
    `,
  },
  "divide": {
    title: "The Digital Divide",
    content: `
      <div style="padding: 16px; font-family: 'Times New Roman', serif; font-size: 13px;">
        <h2 style="color: #800000;">📡 The Digital Divide</h2>
        <hr/>
        <p>In 1998:</p>
        <ul>
          <li>A 56k modem cost ~$100 USD</li>
          <li>A basic PC cost ~$1,000 USD</li>
          <li>Loading a single image could take 30 seconds</li>
          <li>One hour online = one hour of phone line occupied</li>
        </ul>
        <br/>
        <div style="background: #000; color: #00ff00; font-family: monospace; padding: 16px; font-size: 12px;">
          <p>C:\\> CONNECTING TO ISP...</p>
          <p>C:\\> *dial-up sounds*</p>
          <p>C:\\> CONNECTED AT 28.8 kbps</p>
          <p>C:\\> WARNING: Phone line in use</p>
          <p>C:\\> WARNING: $0.10/minute charges apply</p>
          <p>C:\\> WARNING: Mom needs the phone</p>
        </div>
        <br/>
        <p style="color: #800000;"><b>Access was a privilege. Not a right. Not yet.</b></p>
        <br/>
        <p><a href="#" style="color: blue;">← Back to Home</a></p>
      </div>
    `,
  },
};

pages["taringa"] = {
  title: "Taringa! - Inteligencia Colectiva",
  content: `
    <div style="font-family: Verdana, Arial, sans-serif; font-size: 12px; background: #f4f4f4; min-height: 100%;">
      <!-- Header -->
      <div style="background: #1a6496; color: white; padding: 8px 16px; display: flex; align-items: center; justify-content: space-between;">
        <div>
          <b style="font-size: 18px; letter-spacing: -1px;">T!</b>
          <span style="font-size: 14px; margin-left: 8px;">Taringa!</span>
          <span style="font-size: 10px; margin-left: 4px; opacity: 0.8;">Inteligencia Colectiva</span>
        </div>
        <div style="font-size: 10px;">
          Bienvenido, <b>user_netstalgia</b> | <a href="#" style="color: #ccc;">Salir</a>
        </div>
      </div>

      <!-- Posts -->
      <div style="max-width: 600px; margin: 12px auto; display: flex; flex-direction: column; gap: 8px;">

        <div style="background: white; border: 1px solid #ddd; padding: 12px;">
          <div style="display: flex; gap: 8px; align-items: flex-start;">
            <span style="font-size: 24px;">💿</span>
            <div>
              <a href="#" style="color: #1a6496; font-size: 13px; font-weight: bold; text-decoration: none;">Megapost: 200 discos que TENES que escuchar antes de morir [Descarga directa]</a>
              <div style="font-size: 10px; color: #888; margin-top: 4px;">
                por <b style="color: #1a6496;">el_pistolero_89</b> | hace 3 horas | 847 puntos
              </div>
              <div style="font-size: 11px; color: #555; margin-top: 6px;">
                Buenas lince! Aca les traigo tremendo megapost con todos los discos esenciales. Van a encontrar de todo: Rock, Metal, Punk, Grunge... Si te gusta, deja puntos!
              </div>
              <div style="margin-top: 8px; font-size: 10px; color: #888;">
                💬 234 comentarios | ⭐ +847 | 🔄 Compartir
              </div>
            </div>
          </div>
        </div>

        <div style="background: white; border: 1px solid #ddd; padding: 12px;">
          <div style="display: flex; gap: 8px; align-items: flex-start;">
            <span style="font-size: 24px;">🔧</span>
            <div>
              <a href="#" style="color: #1a6496; font-size: 13px; font-weight: bold; text-decoration: none;">Como armar tu PC gamer con $500 pesos [Tutorial paso a paso]</a>
              <div style="font-size: 10px; color: #888; margin-top: 4px;">
                por <b style="color: #1a6496;">mastercraft_2003</b> | hace 5 horas | 423 puntos
              </div>
              <div style="font-size: 11px; color: #555; margin-top: 6px;">
                Hola taringueros! Hoy les ense\u00f1o como armarse una compu gamer gastando lo minimo. El truco es comprar las partes por separado en Galeria Jardin...
              </div>
              <div style="margin-top: 8px; font-size: 10px; color: #888;">
                💬 156 comentarios | ⭐ +423 | 🔄 Compartir
              </div>
            </div>
          </div>
        </div>

        <div style="background: white; border: 1px solid #ddd; padding: 12px;">
          <div style="display: flex; gap: 8px; align-items: flex-start;">
            <span style="font-size: 24px;">📸</span>
            <div>
              <a href="#" style="color: #1a6496; font-size: 13px; font-weight: bold; text-decoration: none;">Miren lo que encontre en el cyber de mi barrio [FOTOS]</a>
              <div style="font-size: 10px; color: #888; margin-top: 4px;">
                por <b style="color: #1a6496;">polentero_full</b> | hace 8 horas | 312 puntos
              </div>
              <div style="font-size: 11px; color: #555; margin-top: 6px;">
                Gente no van a creer esto. Fui al cyber de la esquina y el chabon tenia pegado en la pared un cartel que decia "PROHIBIDO TARINGA"...
              </div>
              <div style="margin-top: 8px; font-size: 10px; color: #888;">
                💬 89 comentarios | ⭐ +312 | 🔄 Compartir
              </div>
            </div>
          </div>
        </div>

        <div style="background: white; border: 1px solid #ddd; padding: 12px;">
          <div style="display: flex; gap: 8px; align-items: flex-start;">
            <span style="font-size: 24px;">🎮</span>
            <div>
              <a href="#" style="color: #1a6496; font-size: 13px; font-weight: bold; text-decoration: none;">Top 10 juegos que jugabas en el ciber cuando no tenias PC</a>
              <div style="font-size: 10px; color: #888; margin-top: 4px;">
                por <b style="color: #1a6496;">counter_strike_fan</b> | hace 12 horas | 1.2K puntos
              </div>
              <div style="font-size: 11px; color: #555; margin-top: 6px;">
                1. Counter Strike 1.6 (obvio)<br/>
                2. Age of Empires II<br/>
                3. GTA San Andreas<br/>
                4. Mu Online<br/>
                Los que iban al ciber a jugar al counter, den\u0020puntos...
              </div>
              <div style="margin-top: 8px; font-size: 10px; color: #888;">
                💬 567 comentarios | ⭐ +1.2K | 🔄 Compartir
              </div>
            </div>
          </div>
        </div>

        <div style="background: #fff8dc; border: 1px solid #ddd; padding: 12px;">
          <div style="display: flex; gap: 8px; align-items: flex-start;">
            <span style="font-size: 24px;">💡</span>
            <div>
              <a href="#" style="color: #1a6496; font-size: 13px; font-weight: bold; text-decoration: none;">Hoy me di cuenta que Taringa era nuestra version de internet</a>
              <div style="font-size: 10px; color: #888; margin-top: 4px;">
                por <b style="color: #1a6496;">nostalgia_2024</b> | hace 1 dia | 2.4K puntos
              </div>
              <div style="font-size: 11px; color: #555; margin-top: 6px;">
                Piensen en esto: mientras el mundo usaba Reddit, Digg, y forums en ingles, nosotros teniamos Taringa. Era todo en espa\u00f1ol, era nuestro, era un quilombo hermoso. Habia posts de todo: tutoriales para crackear el Photoshop, megaposts de musica, memes antes de que se llamaran memes. Era la inteligencia colectiva de verdad. No era perfecto pero era NUESTRO.
              </div>
              <div style="margin-top: 8px; font-size: 10px; color: #888;">
                💬 1.2K comentarios | ⭐ +2.4K | 🔄 Compartir
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Sidebar-style bottom -->
      <div style="max-width: 600px; margin: 0 auto 20px; background: white; border: 1px solid #ddd; padding: 12px;">
        <div style="font-size: 11px; color: #1a6496; font-weight: bold; margin-bottom: 8px;">TOP USERS DE HOY</div>
        <div style="font-size: 11px; color: #555;">
          1. el_pistolero_89 - Great Master 🏆<br/>
          2. counter_strike_fan - Gold User ⭐<br/>
          3. polentero_full - New Full User 🔰<br/>
        </div>
      </div>
    </div>
  `,
};

const pageKeys = Object.keys(pages);

export default function RetroNavigator() {
  const [currentPage, setCurrentPage] = useState("home");
  const [addressBar, setAddressBar] = useState("http://www.netstalgia.net/");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState(["home"]);
  const [historyIndex, setHistoryIndex] = useState(0);

  function navigateTo(pageId) {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(pageId);
      const urls = {
        home: "http://www.netstalgia.net/",
        whowasonline: "http://www.netstalgia.net/who-was-online",
        cost: "http://www.netstalgia.net/cost-of-access",
        languages: "http://www.netstalgia.net/languages",
        divide: "http://www.netstalgia.net/digital-divide",
        taringa: "http://www.taringa.net/",
      };
      setAddressBar(urls[pageId] || "http://www.netstalgia.net/");
      const newHistory = [...history.slice(0, historyIndex + 1), pageId];
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
      setLoading(false);
    }, 800 + Math.random() * 1500);
  }

  function goBack() {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setCurrentPage(history[newIndex]);
    }
  }

  function goForward() {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setCurrentPage(history[newIndex]);
    }
  }

  function handleLinkClick(e) {
    e.preventDefault();
    const text = e.target.textContent.trim();
    if (text.includes("Who Was Online")) navigateTo("whowasonline");
    else if (text.includes("Cost")) navigateTo("cost");
    else if (text.includes("Languages")) navigateTo("languages");
    else if (text.includes("Digital Divide")) navigateTo("divide");
    else if (text.includes("Taringa")) navigateTo("taringa");
    else if (text.includes("Back to Home")) navigateTo("home");
  }

  const page = pages[currentPage];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Toolbar */}
      <div style={{ padding: "4px 8px", borderBottom: "1px solid #808080", display: "flex", gap: 4, alignItems: "center" }}>
        <button onClick={goBack} disabled={historyIndex <= 0} style={{ fontSize: 11, padding: "2px 6px" }}>
          ◀ Back
        </button>
        <button onClick={goForward} disabled={historyIndex >= history.length - 1} style={{ fontSize: 11, padding: "2px 6px" }}>
          Fwd ▶
        </button>
        <button onClick={() => navigateTo("home")} style={{ fontSize: 11, padding: "2px 6px" }}>
          🏠
        </button>
        <div style={{
          flex: 1,
          background: "white",
          border: "1px inset",
          padding: "2px 4px",
          fontSize: 11,
        }}>
          {addressBar}
        </div>
      </div>

      {/* Loading bar */}
      {loading && (
        <div style={{ height: 4, background: "#e0e0e0", overflow: "hidden" }}>
          <div style={{
            height: "100%",
            width: "30%",
            background: "#000080",
            animation: "loading 1.5s ease-in-out infinite",
          }} />
          <style>{`
            @keyframes loading {
              0% { margin-left: 0%; }
              50% { margin-left: 70%; }
              100% { margin-left: 0%; }
            }
          `}</style>
        </div>
      )}

      {/* Page content */}
      <div
        style={{ flex: 1, overflow: "auto", background: "white" }}
        onClick={handleLinkClick}
        dangerouslySetInnerHTML={{ __html: page?.content || "" }}
      />

      {/* Status bar */}
      <div style={{
        borderTop: "1px solid #808080",
        padding: "2px 8px",
        fontSize: 10,
        color: "#808080",
        background: "#f0f0f0",
      }}>
        {loading ? "Loading..." : "Done"}
      </div>
    </div>
  );
}
