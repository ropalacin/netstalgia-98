import { useState, useEffect, useRef } from "react";

const USER_HASH = "xk" + Math.floor(Math.random() * 9000 + 1000) + "m";

const LOG_POOL = [
  // Data extraction
  () => `> scanning cookies... ${Math.floor(Math.random() * 847)} trackers found`,
  () => `> extracting behavioral_pattern #${Math.floor(Math.random() * 9999)}...`,
  () => `> fingerprinting browser... hash: 0x${Math.random().toString(16).slice(2, 10)}`,
  () => `> geolocation acquired: ${(Math.random() * 180 - 90).toFixed(4)}, ${(Math.random() * 360 - 180).toFixed(4)}`,
  () => `> user_${USER_HASH} scroll_speed: ${(Math.random() * 3).toFixed(2)}px/ms — classifying attention_type...`,
  () => `> mouse_movement_pattern logged — emotional_state: ${["anxious", "bored", "lonely", "curious", "distracted", "vulnerable"][Math.floor(Math.random() * 6)]}`,
  () => `> packaging user_data for auction... 23 advertisers bidding`,
  () => `> selling browsing_history to data_broker_${Math.floor(Math.random() * 200)}... $${(Math.random() * 0.05).toFixed(4)}`,

  // Profiling
  () => `> user_${USER_HASH} paused ${(Math.random() * 8).toFixed(1)}s on content — updating interest_profile`,
  () => `> cross-referencing social_graph... ${Math.floor(Math.random() * 400)} connections mapped`,
  () => `> psychological_profile updated: openness=${(Math.random()).toFixed(2)} neuroticism=${(Math.random()).toFixed(2)}`,
  () => `> user_${USER_HASH} prefers indie_music — forwarding to spotify_ads_api`,
  () => `> calculating attention_value: $${(Math.random() * 0.01).toFixed(4)}/second`,
  () => `> predicting next_purchase with ${(Math.random() * 30 + 70).toFixed(1)}% confidence`,
  () => `> building shadow_profile for ${Math.floor(Math.random() * 12)} non-registered contacts`,

  // Engagement manipulation
  () => `> deploying dopamine_trigger #${Math.floor(Math.random() * 500)}...`,
  () => `> notification_scheduler: optimal anxiety_window in ${Math.floor(Math.random() * 30 + 5)} minutes`,
  () => `> A/B test #${Math.floor(Math.random() * 9999)}: testing outrage_amplification variant_B`,
  () => `> feed_algorithm: deprioritizing organic_content... boosting sponsored_${Math.floor(Math.random() * 999)}`,
  () => `> engagement dropping — injecting FOMO_content into feed`,
  () => `> infinite_scroll_hook: user_${USER_HASH} exceeded intended_session by ${Math.floor(Math.random() * 45 + 10)}min`,

  // Surveillance
  () => `> microphone_status: [ACTIVE] — ambient audio analyzed for ad_keywords`,
  () => `> front_camera: micro_expression captured — sentiment: ${["sad", "neutral", "anxious", "happy", "frustrated"][Math.floor(Math.random() * 5)]}`,
  () => `> keystroke_dynamics logged — typing_pattern added to biometric_db`,
  () => `> wifi_probe: ${Math.floor(Math.random() * 8 + 2)} nearby devices detected — social_proximity mapped`,

  // Corporate
  () => `> user_consent: "I Agree" — logged at ${new Date().toISOString()}`,
  () => `> data_retention_policy: INDEFINITE — no deletion_request pending`,
  () => `> transferring user_profile to subsidiary_${Math.floor(Math.random() * 147)} (jurisdiction: ${["Cayman Islands", "Ireland", "Singapore", "Delaware", "Luxembourg"][Math.floor(Math.random() * 5)]})`,
  () => `> regulatory_check: GDPR — status: technically_compliant (via loophole_${Math.floor(Math.random() * 50)})`,
  () => `> quarterly_report: user_${USER_HASH} generated $${(Math.random() * 200 + 50).toFixed(2)} in ad_revenue`,
  () => `> reminder: user is not the customer. user is the inventory.`,
];

export default function DataConsole() {
  const [lines, setLines] = useState([
    "> initializing surveillance_module...",
    "> connecting to ad_network_cluster...",
    `> user identified as: ${USER_HASH}`,
    "> status: TRACKING",
    "---",
  ]);
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const generator = LOG_POOL[Math.floor(Math.random() * LOG_POOL.length)];
      const newLine = generator();
      setLines((prev) => {
        const next = [...prev, newLine];
        // Keep last 200 lines
        return next.length > 200 ? next.slice(-200) : next;
      });
    }, 1200 + Math.random() * 2000);

    return () => clearInterval(intervalRef.current);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div
      ref={scrollRef}
      style={{
        height: "100%",
        overflowY: "auto",
        background: "#0a0a0a",
        color: "#00ff41",
        fontFamily: "'Courier New', monospace",
        fontSize: 11,
        padding: 8,
        lineHeight: 1.5,
      }}
    >
      {lines.map((line, i) => (
        <div
          key={i}
          style={{
            opacity: line === "---" ? 0.3 : 0.9,
            color: line.includes("ACTIVE")
              ? "#ff4444"
              : line.includes("selling") || line.includes("auction") || line.includes("ad_revenue")
              ? "#ffaa00"
              : line.includes("reminder:")
              ? "#ff6666"
              : "#00ff41",
          }}
        >
          {line}
        </div>
      ))}
      <div
        style={{
          display: "inline-block",
          width: 7,
          height: 14,
          background: "#00ff41",
          animation: "blink 1s step-end infinite",
          marginLeft: 2,
          verticalAlign: "bottom",
        }}
      />
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
