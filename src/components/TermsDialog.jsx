import { useState, useEffect, useRef } from "react";

/* ── Phase 1: readable, political, disturbing ── */
const READABLE_CLAUSES = [
  { section: "1.0", text: "GENERAL TERMS OF SERVICE", header: true },
  { section: "1.1", text: "By using this service, you acknowledge that you are the product." },
  { section: "1.2", text: "Your personal data — browsing habits, location, private messages, emotional states, and relationships — shall become the exclusive property of [CORPORATION]." },
  { section: "2.0", text: "DATA COLLECTION & USAGE", header: true },
  { section: "2.1", text: "Your memories will be used to train algorithms designed to sell you things you don't need." },
  { section: "2.2", text: "We reserve the right to read your private messages to improve our advertising models." },
  { section: "2.3", text: "Your friendships will be ranked by engagement value. Low-performing connections may be deprioritized in your feed." },
  { section: "3.0", text: "ATTENTION & TIME", header: true },
  { section: "3.1", text: "Your attention span is now property of [REDACTED]. You agree to infinite scroll." },
  { section: "3.2", text: "We will send you notifications at strategic intervals designed to maximize anxiety and re-engagement." },
  { section: "3.3", text: "The average user spends 2.5 hours daily on our platform. This is by design, not by choice." },
  { section: "4.0", text: "CONTENT & IDENTITY", header: true },
  { section: "4.1", text: "Your selfies will be analyzed by facial recognition systems and cross-referenced with advertising databases in 37 countries." },
  { section: "4.2", text: "Your 'likes' will be used to build a psychological profile more accurate than your therapist's notes." },
  { section: "5.0", text: "SOCIAL DYNAMICS", header: true },
  { section: "5.1", text: "We will algorithmically determine which friends you see, which news you read, and which opinions you form." },
  { section: "5.2", text: "Authentic human connection has been deprecated. Please use our Reactions™ feature instead." },
  { section: "5.3", text: "Loneliness increases engagement. This is a feature, not a bug." },
  { section: "6.0", text: "PRIVACY", header: true },
  { section: "6.1", text: "Privacy is a legacy feature no longer supported in this version of the internet." },
  { section: "6.2", text: "Your microphone may be active at all times to improve ad relevance." },
  { section: "6.3", text: "Deleting your account does not delete your data. Nothing is ever truly deleted. We remember everything." },
];

/* ── Phase 2: gets tiny, legalese, overwhelming ── */
const SHRINKING_CLAUSES = [
  "7.0 SUPPLEMENTARY PROVISIONS REGARDING DATA MONETIZATION FRAMEWORKS AND CROSS-PLATFORM BEHAVIORAL ANALYTICS INTEGRATION PROTOCOLS",
  "7.1 The User hereby grants an irrevocable, perpetual, non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, copy, modify, distribute, publish, and process User Content, including without limitation photographs, voice recordings, biometric data, geolocation patterns, purchasing behavior, social graph data, sentiment analysis outputs, and predictive behavioral models derived therefrom, for any purpose whatsoever.",
  "7.2 The Company reserves the right to share, transfer, sell, license, or otherwise disclose any and all User Data to third-party advertisers, data brokers, analytics partners, government agencies, insurance companies, employers, and any other entity deemed commercially viable, without prior notice or consent.",
  "7.3 User acknowledges that the concept of 'consent' as traditionally understood has been redefined under these Terms to mean 'continued use of any internet-connected device.'",
  "8.0 ALGORITHMIC GOVERNANCE AND BEHAVIORAL MODIFICATION PROTOCOLS FOR ENGAGEMENT OPTIMIZATION",
  "8.1 The Company employs proprietary algorithms designed to exploit cognitive biases including but not limited to: variable-ratio reinforcement schedules, social comparison mechanisms, fear of missing out (FOMO) amplification, outrage maximization for content virality, dopamine-driven feedback loops, and attention fragmentation techniques optimized through A/B testing on populations exceeding 2.8 billion users.",
  "8.2 The User acknowledges that their emotional responses, including anger, jealousy, loneliness, inadequacy, and compulsive checking behavior, may be intentionally induced and/or amplified by platform design choices made to increase daily active usage metrics and advertising revenue per user session.",
  "9.0 PROVISIONS REGARDING THE DISSOLUTION OF DIGITAL AUTONOMY AND INDIVIDUAL AGENCY WITHIN PLATFORM ECOSYSTEMS",
  "9.1 The Company shall retain the right to modify, restrict, amplify, suppress, or otherwise manipulate the visibility of User Content based on proprietary engagement scoring systems, advertiser preferences, political considerations, and/or automated content moderation systems with known error rates of up to 23% for false positives in content removal decisions, for which the Company accepts no liability whatsoever.",
  "9.2 User expressly waives any expectation of chronological content display, organic reach, equal treatment of content, or any form of algorithmic transparency. The feed is ours. The timeline is ours. Your experience is our product.",
  "10.0 SUPPLEMENTARY ADDENDUM TO SUBSECTION 7.2(a)(iii) REGARDING CROSS-JURISDICTIONAL DATA TRANSFER PROTOCOLS AND REGULATORY ARBITRAGE MECHANISMS",
  "10.1 Notwithstanding any provisions contained in applicable data protection legislation including but not limited to GDPR, CCPA, LGPD, POPIA, or any future regulatory framework enacted in any jurisdiction worldwide, the Company maintains operational subsidiaries in jurisdictions with minimal data protection oversight, through which all User Data may be routed, processed, stored, analyzed, monetized, and retained indefinitely.",
  "10.2 Any rights purportedly granted to Users under such legislation are hereby acknowledged as theoretically valid but practically unenforceable given the complexity of the Company's data processing architecture spanning 147 legal entities across 43 jurisdictions with overlapping and contradictory regulatory requirements that the Company's legal team of 2,300 attorneys continuously monitors and exploits.",
  "11.0 PSYCHOLOGICAL PROFILING AND PREDICTIVE BEHAVIORAL ANALYTICS",
  "11.1 The Company maintains detailed psychological profiles of each User derived from analysis of scrolling speed, pause duration on specific content types, typing patterns including hesitation and deletion behavior, time-of-day usage patterns correlated with emotional vulnerability indices, social interaction reciprocity metrics, and micro-expression analysis from front-facing camera data collected during content consumption sessions.",
  "11.2 These profiles are updated in real-time and are available for purchase by any entity willing to pay the applicable per-query fee as outlined in the Company's advertising partner rate card, which is updated quarterly and is not available for User review.",
  "12.0 PROVISIONS REGARDING MINOR USERS AND DEVELOPMENTAL IMPACT ACKNOWLEDGMENTS",
  "12.1 The Company acknowledges internal research indicating statistically significant correlations between platform usage and increased rates of anxiety, depression, body dysmorphia, attention deficit, sleep disruption, and social isolation among users aged 13-17, and hereby disclaims all responsibility for said outcomes pursuant to Section 230 immunities and applicable terms of service liability limitations.",
  "13.0 FINAL PROVISIONS",
  "13.1 These terms may be modified at any time without notice. Continued existence as a person with an internet connection constitutes acceptance of all current and future modifications.",
  "13.2 There is no alternative. There is no opt-out. There is no going back.",
  "13.3 Welcome to the modern internet.",
];

export default function TermsDialog({ onAccept }) {
  const [accepted, setAccepted] = useState(false);
  const scrollRef = useRef(null);

  function handleAccept() {
    setAccepted(true);
    setTimeout(() => onAccept(), 2000);
  }

  /* Font size shrinks as you scroll through shrinking clauses */
  function getFontSize(index) {
    if (index < 4) return 11;
    if (index < 8) return 10;
    if (index < 12) return 9;
    if (index < 16) return 7.5;
    return 6;
  }

  function getOpacity(index) {
    if (index < 8) return 1;
    if (index < 12) return 0.85;
    return 0.7;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 100000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="window" style={{ width: 540, minHeight: "auto" }}>
        <div
          className="title-bar"
          style={{ background: "linear-gradient(90deg, #000080, #1084d0)" }}
        >
          <div className="title-bar-text">
            Terms and Conditions — Modern Internet™ v2.0
          </div>
        </div>
        <div className="window-body" style={{ padding: 16 }}>
          {!accepted ? (
            <>
              <p
                style={{
                  fontSize: 11,
                  fontFamily: "Tahoma, sans-serif",
                  marginBottom: 8,
                  color: "#333",
                }}
              >
                Please read the following terms carefully. By using the modern
                internet, you agree to all conditions below.
              </p>

              <div
                ref={scrollRef}
                className="sunken-panel"
                style={{
                  height: 340,
                  overflowY: "auto",
                  padding: 12,
                  fontFamily: "Tahoma, sans-serif",
                  lineHeight: 1.6,
                  background: "#fff",
                }}
              >
                {/* Phase 1: readable, clear, political */}
                {READABLE_CLAUSES.map((clause, i) => (
                  <p
                    key={`r-${i}`}
                    style={{
                      marginBottom: clause.header ? 4 : 10,
                      marginTop: clause.header ? (i === 0 ? 0 : 16) : 0,
                      fontWeight: clause.header ? "bold" : "normal",
                      fontSize: clause.header ? 13 : 12,
                      color: clause.header ? "#000080" : "#222",
                    }}
                  >
                    <span style={{ color: "#808080", marginRight: 6 }}>
                      §{clause.section}
                    </span>
                    {clause.text}
                  </p>
                ))}

                {/* Transition */}
                <hr style={{ border: "none", borderTop: "1px solid #ccc", margin: "20px 0" }} />
                <p style={{ fontSize: 10, color: "#999", textAlign: "center", marginBottom: 16, fontStyle: "italic" }}>
                  [ continued — supplementary provisions ]
                </p>

                {/* Phase 2: text shrinks gradually, becomes overwhelming */}
                {SHRINKING_CLAUSES.map((text, i) => {
                  const isHeader = text.match(/^\d+\.0\s/);
                  const fontSize = getFontSize(i);
                  const opacity = getOpacity(i);
                  return (
                    <p
                      key={`s-${i}`}
                      style={{
                        marginBottom: isHeader ? 2 : 8,
                        marginTop: isHeader ? 12 : 0,
                        fontWeight: isHeader ? "bold" : "normal",
                        fontSize: isHeader ? fontSize + 1 : fontSize,
                        color: isHeader ? "#000080" : "#333",
                        opacity,
                        lineHeight: fontSize < 9 ? 1.4 : 1.6,
                      }}
                    >
                      {text}
                    </p>
                  );
                })}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 8,
                  marginTop: 12,
                }}
              >
                <button
                  disabled
                  style={{
                    fontSize: 11,
                    padding: "4px 20px",
                    opacity: 0.4,
                    cursor: "not-allowed",
                  }}
                  title="This option is no longer available"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  style={{
                    fontSize: 11,
                    padding: "4px 20px",
                    fontWeight: "bold",
                  }}
                >
                  I Agree
                </button>
              </div>

              <p
                style={{
                  fontSize: 9,
                  color: "#999",
                  marginTop: 8,
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                * The "Decline" button has been deprecated since 2012.
              </p>
            </>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "40px 20px",
                fontFamily: "Tahoma, sans-serif",
              }}
            >
              <p style={{ fontSize: 14, fontWeight: "bold", marginBottom: 8 }}>
                Thank you for your compliance.
              </p>
              <p style={{ fontSize: 11, color: "#666" }}>
                Your data is now being processed...
              </p>
              <div
                style={{
                  marginTop: 16,
                  height: 20,
                  border: "1px solid #808080",
                  background: "#fff",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    background: "#000080",
                    animation: "loadBar 1.8s ease-in-out forwards",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes loadBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
