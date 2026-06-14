cat > /Users/deniz/atlas-aerospace-intelligence/website/css/styles.css << 'EOF'
:root {
  --bg: #050A12;
  --surface: #070D17;
  --panel: #0A1421;
  --border: #0F2030;
  --border-light: #1A3550;
  --text: #FFFFFF;
  --muted: #5A7A99;
  --subtle: #0F2030;
  --accent: #00D4FF;
  --accent-dim: #004D5E;
  --gold: #C8A96E;
  --gold-dim: #5A3F15;
  --danger: #FF3B3B;
  --success: #00FF94;
  --warning: #F0A500;
  --mono: 'IBM Plex Mono', monospace;
  --sans: 'Space Grotesk', sans-serif;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--sans);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

a { color: inherit; text-decoration: none; }

body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px);
  background-size: 80px 80px;
  pointer-events: none;
  z-index: 0;
}

.inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 48px;
  position: relative;
  z-index: 1;
}

/* ── NAV ── */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  border-bottom: 1px solid var(--border);
  background: rgba(5,10,18,0.97);
  backdrop-filter: blur(24px);
}

.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 48px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: var(--mono);
  font-size: 0.85rem;
  letter-spacing: 8px;
  color: var(--text);
  font-weight: 400;
}

.logo span { color: var(--accent); }

.nav-right { display: flex; align-items: center; gap: 36px; }

.nav-link {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 2px;
  color: var(--muted);
  transition: color 0.2s;
}

.nav-link:hover { color: var(--text); }

.nav-cta {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 2px;
  color: #000;
  background: var(--accent);
  padding: 10px 24px;
  transition: opacity 0.2s;
}

.nav-cta:hover { opacity: 0.85; }

/* ── HERO ── */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 140px 48px 100px;
  border-bottom: 1px solid var(--border);
  position: relative;
  overflow: hidden;
}

.hero::after {
  content: '';
  position: absolute;
  top: 10%;
  right: -300px;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 65%);
  pointer-events: none;
}

.hero::before {
  content: '';
  position: absolute;
  bottom: -100px;
  left: -200px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(200,169,110,0.04) 0%, transparent 65%);
  pointer-events: none;
}

.hero-inner {
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 1;
}

.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border: 1px solid var(--border-light);
  background: rgba(0,212,255,0.04);
  padding: 10px 20px;
  margin-bottom: 56px;
}

.hero-tag-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--success);
  animation: pulse 2s infinite;
  flex-shrink: 0;
}

@keyframes pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(0,255,148,0.4); }
  50% { opacity: 0.6; box-shadow: 0 0 0 4px rgba(0,255,148,0); }
}

.hero-tag span {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 3px;
  color: var(--muted);
}

.hero h1 {
  font-size: clamp(3.2rem, 7vw, 6rem);
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -0.03em;
  max-width: 900px;
}

.hero-sub {
  font-size: clamp(3.2rem, 7vw, 6rem);
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -0.03em;
  color: var(--muted);
  margin-bottom: 48px;
}

.sub {
  color: var(--muted);
  font-size: 1rem;
  max-width: 480px;
  line-height: 1.9;
  margin-bottom: 56px;
}

.section-sub {
  color: var(--muted);
  font-size: 0.9rem;
  max-width: 560px;
  line-height: 1.9;
  margin-top: 16px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 100px;
}

.btn-primary {
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 2px;
  background: var(--accent);
  color: #000;
  padding: 16px 36px;
  font-weight: 500;
  transition: opacity 0.2s;
  display: inline-block;
  cursor: pointer;
  border: none;
}

.btn-primary:hover { opacity: 0.85; }

.btn-ghost {
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 2px;
  color: var(--muted);
  border: 1px solid var(--border-light);
  padding: 16px 28px;
  transition: all 0.2s;
  display: inline-block;
  cursor: pointer;
  background: none;
}

.btn-ghost:hover { border-color: var(--muted); color: var(--text); }

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  border: 1px solid var(--border);
  background: var(--border);
  gap: 1px;
}

.stat {
  padding: 28px 32px;
  background: var(--panel);
}

.stat-num {
  display: block;
  font-family: var(--mono);
  font-size: 2.2rem;
  font-weight: 300;
  color: var(--accent);
  margin-bottom: 6px;
  letter-spacing: -1px;
}

.stat-label {
  font-family: var(--mono);
  font-size: 0.55rem;
  letter-spacing: 2px;
  color: var(--muted);
}

/* ── SECTION TAGS ── */
.section-tag {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 4px;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.section-tag::before {
  content: '';
  display: block;
  width: 20px;
  height: 1px;
  background: var(--accent);
}

.section-header { margin-bottom: 64px; }

.section-header h2 {
  font-size: clamp(1.8rem, 3.5vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.1;
  max-width: 700px;
}

/* ── ASSESSMENT ── */
.assessment {
  padding: 140px 48px;
  border-bottom: 1px solid var(--border);
  position: relative;
  z-index: 1;
}

.quiz-shell {
  border: 1px solid var(--border-light);
  background: var(--panel);
  overflow: hidden;
  position: relative;
}

.quiz-step {
  display: none;
  padding: 56px;
  animation: fadeIn 0.3s ease;
}

.quiz-step.active { display: block; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.quiz-meta {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 32px;
}

.quiz-num {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 2px;
  color: var(--accent);
}

.quiz-label {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 3px;
  color: var(--muted);
}

.quiz-q {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.4;
  margin-bottom: 40px;
  max-width: 700px;
}

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 640px;
}

.quiz-opt {
  padding: 16px 24px;
  border: 1px solid var(--border-light);
  background: transparent;
  color: var(--muted);
  font-family: var(--sans);
  font-size: 0.875rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.15s;
  letter-spacing: 0;
}

.quiz-opt:hover {
  border-color: var(--accent);
  color: var(--text);
  background: rgba(0,212,255,0.04);
}

.quiz-opt.selected {
  border-color: var(--accent);
  color: var(--text);
  background: rgba(0,212,255,0.08);
}

.quiz-result {
  display: none;
  padding: 56px;
  animation: fadeIn 0.4s ease;
}

.quiz-result.active { display: block; }

.result-header { margin-bottom: 32px; }

.result-score-row {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-top: 20px;
}

.result-score-label {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 3px;
  color: var(--muted);
}

.result-score {
  font-family: var(--mono);
  font-size: 4rem;
  font-weight: 300;
  color: var(--text);
  letter-spacing: -2px;
  line-height: 1;
}

.result-score-max {
  font-family: var(--mono);
  font-size: 1.5rem;
  color: var(--muted);
}

.result-band {
  font-family: var(--mono);
  font-size: 0.75rem;
  letter-spacing: 3px;
  margin-bottom: 24px;
  font-weight: 500;
}

.result-text {
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.9;
  max-width: 600px;
  margin-bottom: 48px;
}

.result-cta-box {
  border-top: 1px solid var(--border);
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
}

.result-cta-label {
  font-size: 0.8rem;
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 8px;
}

.quiz-progress {
  height: 2px;
  background: var(--border);
  position: relative;
}

.quiz-progress-bar {
  height: 100%;
  background: var(--accent);
  transition: width 0.4s ease;
  width: 0%;
}

/* ── PROBLEM ── */
.problem {
  padding: 140px 48px;
  border-bottom: 1px solid var(--border);
  position: relative;
  z-index: 1;
}

.problem-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: start;
}

.problem h2 {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.problem-body p {
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.9;
  margin-bottom: 20px;
}

.problem-body strong { color: var(--text); font-weight: 500; }

/* ── INDICATORS ── */
.indicators {
  padding: 140px 48px;
  border-bottom: 1px solid var(--border);
  position: relative;
  z-index: 1;
}

.indicators .inner { max-width: 1100px; }

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid var(--border);
  border-left: 1px solid var(--border);
  background: var(--border);
  gap: 1px;
}

.card {
  background: var(--bg);
  padding: 36px 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: background 0.2s;
}

.card:hover { background: var(--panel); }

.num {
  font-family: var(--mono);
  font-size: 0.55rem;
  letter-spacing: 2px;
  color: var(--muted);
  display: block;
  transition: color 0.2s;
}

.card:hover .num { color: var(--accent); }

.card-title {
  display: block;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text);
}

.card-desc {
  display: block;
  font-size: 0.8rem;
  color: var(--muted);
  line-height: 1.7;
}

/* ── CHAIN ── */
.chain {
  padding: 140px 48px;
  border-bottom: 1px solid var(--border);
  background: var(--surface);
  position: relative;
  z-index: 1;
}

.chain-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.chain-caption {
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.9;
  margin-top: 28px;
  max-width: 420px;
}

.chain-box {
  border: 1px solid var(--border-light);
  background: var(--panel);
  overflow: hidden;
}

.chain-header {
  padding: 14px 24px;
  border-bottom: 1px solid var(--border-light);
  background: var(--surface);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chain-header-left {
  font-family: var(--mono);
  font-size: 0.55rem;
  letter-spacing: 3px;
  color: var(--muted);
}

.chain-status {
  font-family: var(--mono);
  font-size: 0.55rem;
  letter-spacing: 2px;
  color: var(--danger);
  display: flex;
  align-items: center;
  gap: 8px;
}

.chain-status::before {
  content: '';
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--danger);
  animation: pulse 1.5s infinite;
}

.chain-row {
  padding: 14px 24px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--muted);
}

.chain-row:last-child { border-bottom: none; }
.chain-row.active { color: var(--text); }

.chain-row.critical {
  color: var(--danger);
  background: rgba(255,59,59,0.04);
  border-left: 2px solid var(--danger);
}

.chain-index {
  color: var(--border-light);
  font-size: 0.55rem;
  min-width: 18px;
}

.chain-connector {
  margin-left: auto;
  color: var(--accent-dim);
}

.chain-row.active .chain-connector { color: var(--accent); }

/* ── TIERS ── */
.pricing {
  padding: 140px 48px;
  border-bottom: 1px solid var(--border);
  position: relative;
  z-index: 1;
}

.tiers-stack {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  background: var(--border);
  gap: 1px;
}

.tier-row {
  background: var(--bg);
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 0;
  align-items: center;
  padding: 48px;
  transition: background 0.2s;
  position: relative;
}

.tier-row:hover { background: var(--panel); }

.highlight-row {
  background: var(--panel) !important;
  border-left: 2px solid var(--accent);
}

.elite-row {
  background: rgba(200,169,110,0.03) !important;
  border-left: 2px solid var(--gold);
}

.tier-highlight-badge {
  position: absolute;
  top: 0;
  right: 48px;
  font-family: var(--mono);
  font-size: 0.5rem;
  letter-spacing: 3px;
  color: #000;
  background: var(--accent);
  padding: 5px 14px;
}

.tier-left {
  display: flex;
  align-items: flex-start;
  gap: 32px;
  padding-right: 48px;
}

.tier-num {
  font-family: var(--mono);
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--border-light);
  line-height: 1;
  flex-shrink: 0;
  margin-top: 4px;
  transition: color 0.2s;
}

.tier-num.accent { color: var(--accent); }
.tier-num.gold { color: var(--gold); }

.tier-label {
  font-family: var(--mono);
  font-size: 0.55rem;
  letter-spacing: 4px;
  color: var(--muted);
  margin-bottom: 10px;
}

.tier-name {
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-bottom: 12px;
  color: var(--text);
}

.tier-desc {
  font-size: 0.8rem;
  color: var(--muted);
  line-height: 1.7;
  max-width: 280px;
}

.tier-middle {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 48px;
  border-left: 1px solid var(--border);
  border-right: 1px solid var(--border);
}

.tier-feature {
  font-size: 0.8rem;
  color: var(--muted);
  padding-left: 16px;
  border-left: 1px solid var(--border-light);
  line-height: 1.5;
}

.tier-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding-left: 48px;
  min-width: 220px;
}

.tier-amount {
  font-family: var(--mono);
  font-size: 2rem;
  font-weight: 300;
  color: var(--text);
  letter-spacing: -1px;
  line-height: 1;
}

.tier-amount span { font-size: 0.9rem; color: var(--muted); letter-spacing: 0; }
.tier-amount.gold { color: var(--gold); }

.tier-sub {
  font-family: var(--mono);
  font-size: 0.55rem;
  letter-spacing: 1px;
  color: var(--muted);
  line-height: 1.7;
  text-align: right;
}

.tier-btn {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 2px;
  color: var(--muted);
  border: 1px solid var(--border-light);
  padding: 12px 24px;
  text-align: center;
  transition: all 0.2s;
  display: block;
  width: 100%;
  white-space: nowrap;
}

.tier-btn:hover { border-color: var(--muted); color: var(--text); }

.accent-btn {
  background: var(--accent) !important;
  color: #000 !important;
  border-color: var(--accent) !important;
}

.accent-btn:hover { opacity: 0.85; color: #000 !important; }

.gold-btn {
  border-color: var(--gold-dim) !important;
  color: var(--gold) !important;
}

.gold-btn:hover { border-color: var(--gold) !important; background: rgba(200,169,110,0.06) !important; }

/* ── FOOTER ── */
footer {
  padding: 80px 48px;
  position: relative;
  z-index: 1;
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
}

.footer-left { display: flex; flex-direction: column; gap: 20px; }

footer p {
  color: var(--muted);
  font-size: 0.75rem;
  line-height: 1.8;
  max-width: 520px;
}

.footer-link {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 2px;
  color: var(--muted);
  transition: color 0.2s;
}

.footer-link:hover { color: var(--accent); }

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  .tier-row { grid-template-columns: 1fr; gap: 32px; padding: 36px 28px; }
  .tier-left { padding-right: 0; }
  .tier-middle { padding: 24px 0; border-left: none; border-right: none; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .tier-right { align-items: flex-start; padding-left: 0; min-width: unset; }
  .tier-sub { text-align: left; }
  .tier-btn { width: auto; }
  .tier-highlight-badge { right: 28px; }
}

@media (max-width: 768px) {
  .inner, nav .nav-inner { padding-left: 24px; padding-right: 24px; }
  .hero, .assessment, .problem, .indicators, .chain, .pricing, footer { padding-left: 24px; padding-right: 24px; }
  .hero { padding-top: 100px; }
  .problem-inner, .chain-inner { grid-template-columns: 1fr; gap: 48px; }
  .grid { grid-template-columns: 1fr; }
  .hero-stats { grid-template-columns: 1fr; background: none; border: 1px solid var(--border); gap: 0; }
  .stat { border-bottom: 1px solid var(--border); }
  .hero h1, .hero-sub { font-size: 2.6rem; }
  .hero-actions { flex-direction: column; align-items: flex-start; }
  .footer-inner { flex-direction: column; }
  .quiz-step, .quiz-result { padding: 32px 24px; }
  .nav-right .nav-link { display: none; }
}
EOF