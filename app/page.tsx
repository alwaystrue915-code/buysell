const TELEGRAM_URL = "https://t.me/+O2LPdVVunxVlNmU1";

function TelegramIcon() {
  return (
    <span className="tgIcon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M20.65 3.58 3.87 10.05c-1.15.46-1.14 1.1-.21 1.39l4.31 1.35 1.65 5.08c.2.55.1.77.69.77.45 0 .65-.21.9-.45l2.07-2.01 4.3 3.18c.79.44 1.36.21 1.56-.73l2.82-13.3c.29-1.16-.44-1.68-1.31-1.35Z"
          fill="#62ff00"
        />
        <path
          d="m9.56 12.48 8.82-5.56c.44-.27.84-.12.51.17l-7.29 6.58-.28 2.95-1.76-4.14Z"
          fill="#000"
        />
      </svg>
    </span>
  );
}

function JoinButton({ second = false }: { second?: boolean }) {
  return (
    <a
      className={`joinButton${second ? " second" : ""}`}
      href={TELEGRAM_URL}
      aria-label="Join now for free"
    >
      <TelegramIcon />
      <span className="buttonText">Join Now For Free</span>
    </a>
  );
}

export default function Home() {
  return (
    <div className="siteShell">
      <main className="page">
      <div className="brandBlock">
        {/* The original remote artwork is kept to preserve the existing UI exactly. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="heroArt"
          src="https://cdn.nexapk.in/image67.webp"
          alt="Wallet Earning"
        />
      </div>

      <h1>Earn with Babu</h1>

      <JoinButton />

      <section className="features" aria-label="Features">
        <p>TOP 10 BUY/SELL APPS LIST</p>
        <p>8% COMMISION <span className="moneyEmoji">💵</span></p>
        <p>FAST PAYMENT <span className="boltEmoji">⚡</span></p>
        <p>ROCKET SELLING <span className="rocketEmoji">🚀</span></p>
      </section>

      <JoinButton second />
      </main>

      <div className="bottomSpace" aria-hidden="true" />
    </div>
  );
}
