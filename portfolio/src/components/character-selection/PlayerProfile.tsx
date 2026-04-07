export function PlayerProfile() {
  return (
    <div className="player-profile">
      <div className="player-profile__avatar">
        <span className="player-profile__avatar-emoji">🧑‍💻</span>
      </div>

      <div className="player-profile__body">
        <p className="player-profile__name">David Montoya</p>
        <p className="player-profile__bio">Software developer based in Berlin</p>
      </div>

      <div className="player-profile__links">
        <a
          className="player-profile__link"
          href="https://github.com/davmtza"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <span className="player-profile__link-icon">GH</span>
        </a>
        <a
          className="player-profile__link"
          href="https://linkedin.com/in/davmtza"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <span className="player-profile__link-icon">LI</span>
        </a>
        <a
          className="player-profile__link"
          href="mailto:hello@davidmontoya.dev"
          aria-label="Email"
        >
          <span className="player-profile__link-icon">@</span>
        </a>
      </div>
    </div>
  );
}
