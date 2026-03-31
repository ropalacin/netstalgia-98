export default function UnderConstruction() {
  return (
    <div
      style={{
        height: "100%",
        overflowY: "auto",
        background: "#000",
        color: "#fff",
        fontFamily: "'Comic Sans MS', 'Tahoma', cursive, sans-serif",
        textAlign: "center",
        padding: 20,
      }}
    >
      {/* Classic header */}
      <div style={{ fontSize: 11, color: "#ffff00", marginBottom: 8 }}>
        &#9733; &#9733; &#9733; WELCOME TO MY HOMEPAGE &#9733; &#9733; &#9733;
      </div>

      <h1
        style={{
          fontSize: 20,
          color: "#ff6600",
          textShadow: "2px 2px #000",
          marginBottom: 4,
        }}
      >
        &#128679; UNDER CONSTRUCTION &#128679;
      </h1>

      <div style={{ fontSize: 20, marginBottom: 12, letterSpacing: 4 }}>
        &#9888;&#65039;&#128104;&#8205;&#128295;&#9888;&#65039;
      </div>

      {/* Animated construction bar */}
      <div
        style={{
          height: 8,
          background: "repeating-linear-gradient(45deg, #ffff00, #ffff00 10px, #000 10px, #000 20px)",
          margin: "0 auto 20px",
          maxWidth: 400,
          animation: "moveStripes 1s linear infinite",
        }}
      />

      {/* Classic 90s section */}
      <div
        style={{
          background: "#1a1a2e",
          border: "2px ridge #444",
          padding: 16,
          maxWidth: 440,
          margin: "0 auto 20px",
          textAlign: "left",
        }}
      >
        <p style={{ fontSize: 12, color: "#00ffff", marginBottom: 12 }}>
          &#128196; Last updated: March 14, 1999
        </p>
        <p style={{ fontSize: 12, color: "#ccc", marginBottom: 10, lineHeight: 1.6 }}>
          Hi!! Welcome to my page!! I know it doesnt look like much yet but im
          working on it every day after school. My mom says I spend too much time
          on the computer but she doesnt understand.
        </p>
        <p style={{ fontSize: 12, color: "#ccc", marginBottom: 10, lineHeight: 1.6 }}>
          Im learning HTML from a tutorial I found on GeoCities. Its really hard
          but also really cool??? Like I can make ANYTHING I want here. This is
          MY space. Nobody tells me what it should look like.
        </p>
        <p style={{ fontSize: 12, color: "#ffff00", marginBottom: 10, lineHeight: 1.6 }}>
          &#9733; Things I want to add: &#9733;
        </p>
        <ul style={{ fontSize: 11, color: "#aaa", marginLeft: 20, lineHeight: 1.8 }}>
          <li>A guestbook (so people can say hi!!)</li>
          <li>My favorite links</li>
          <li>MIDI music that plays automatically</li>
          <li>A page about my cat Michi</li>
          <li>More GIFs (you can never have too many)</li>
          <li>A hit counter!!</li>
        </ul>
      </div>

      {/* The poetic turn */}
      <div
        style={{
          maxWidth: 440,
          margin: "0 auto 20px",
          borderTop: "1px solid #333",
          paddingTop: 20,
        }}
      >
        <p
          style={{
            fontSize: 11,
            color: "#888",
            fontStyle: "italic",
            lineHeight: 1.8,
            fontFamily: "Tahoma, sans-serif",
            marginBottom: 16,
          }}
        >
          This page was never finished.
        </p>
        <p
          style={{
            fontSize: 11,
            color: "#999",
            lineHeight: 1.8,
            fontFamily: "Tahoma, sans-serif",
            marginBottom: 12,
          }}
        >
          And that was okay.
        </p>
        <p
          style={{
            fontSize: 11,
            color: "#777",
            lineHeight: 1.8,
            fontFamily: "Tahoma, sans-serif",
            marginBottom: 20,
          }}
        >
          In 1999, the internet was full of pages like this one. Ugly,
          incomplete, deeply personal. No one needed to be a{" "}
          <span style={{ color: "#aaa" }}>brand</span>. No one needed{" "}
          <span style={{ color: "#aaa" }}>followers</span>. You just needed a
          text editor and something to say.
        </p>

        <div
          style={{
            background: "#111",
            border: "1px solid #333",
            padding: 16,
            marginBottom: 20,
            textAlign: "left",
          }}
        >
          <p
            style={{
              fontSize: 11,
              color: "#666",
              lineHeight: 1.9,
              fontFamily: "Tahoma, sans-serif",
              marginBottom: 12,
            }}
          >
            You didn't need permission to exist online.
            <br />
            You didn't need to be polished.
            <br />
            You didn't need an algorithm to show your work to people.
            <br />
            You just... put it there. And maybe someone found it.
            <br />
            And maybe they signed your guestbook.
            <br />
            And that was enough.
          </p>
          <p
            style={{
              fontSize: 11,
              color: "#555",
              lineHeight: 1.9,
              fontFamily: "Tahoma, sans-serif",
            }}
          >
            Now every page is finished. Optimized. A/B tested.
            <br />
            Every pixel serves a conversion funnel.
            <br />
            Every word is SEO.
            <br />
            Every image is a strategy.
            <br />
            <br />
            The "Under Construction" sign disappeared
            <br />
            not because everything was built,
            <br />
            but because we stopped building for ourselves.
          </p>
        </div>

        <p
          style={{
            fontSize: 10,
            color: "#444",
            lineHeight: 1.8,
            fontFamily: "Tahoma, sans-serif",
            marginBottom: 20,
          }}
        >
          Maybe the most honest thing a website can say
          <br />
          is that it's still under construction.
          <br />
          That it's not done. That it's not optimized.
          <br />
          That it's just someone, trying to make something,
          <br />
          on a computer, after school, for no reason at all.
        </p>
      </div>

      {/* Classic footer */}
      <div style={{ fontSize: 20, marginBottom: 8, letterSpacing: 4 }}>
        &#128679;&#128679;&#128679;
      </div>
      <div
        style={{
          height: 8,
          background: "repeating-linear-gradient(45deg, #ffff00, #ffff00 10px, #000 10px, #000 20px)",
          margin: "0 auto 12px",
          maxWidth: 400,
          animation: "moveStripes 1s linear infinite",
        }}
      />

      <p style={{ fontSize: 9, color: "#555", marginBottom: 4 }}>
        Best viewed in Netscape Navigator 4.0 at 800x600
      </p>
      <p style={{ fontSize: 9, color: "#444" }}>
        &#169; 1999 — Made with love and a 56k modem
      </p>

      <style>{`
        @keyframes moveStripes {
          0% { background-position: 0 0; }
          100% { background-position: 28px 0; }
        }
      `}</style>
    </div>
  );
}
