import profilePic from '../../images/david_profile_pic.jpg';
import linkedinIcon from '../../images/LinkedIn_icon.svg.webp';
import githubIcon from '../../images/github_logo.png';
import mediumIcon from '../../images/Medium_logo_Monogram.svg.png';

export function PlayerProfile() {
  return (
    <div className="player-profile">
      <div className="player-profile__avatar">
        <img src={profilePic} alt="David Montoya" />
      </div>

      <div className="player-profile__body">
        <p className="player-profile__name">David Montoya</p>
        <p className="player-profile__bio">Software developer based in Berlin</p>
      </div>

      <div className="player-profile__links">
        <a
          className="player-profile__link"
          href="https://www.linkedin.com/in/davidmoncas/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="player-profile__link-img" />
        </a>
        <a
          className="player-profile__link"
          href="https://github.com/davidmoncas"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img src={githubIcon} alt="GitHub" className="player-profile__link-img" />
        </a>
        <a
          className="player-profile__link"
          href="https://medium.com/@davidmontoya_25535"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Medium"
        >
          <img src={mediumIcon} alt="Medium" className="player-profile__link-img" />
        </a>
      </div>
    </div>
  );
}
