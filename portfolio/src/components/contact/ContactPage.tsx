import { useState, useEffect } from 'react';
import { useI18n } from '../../i18n/I18nContext';
import questionStarted from '../../images/avatars/question_started.png';
import questionProcess from '../../images/avatars/question_process.png';
import questionAnswered from '../../images/avatars/question_answered.png';

type ContactState = 'intro' | 'process' | 'submitted';

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function TypewriterText({ text, durationMs = 1500 }: { text: string; durationMs?: number }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed('');
    if (!text) return;
    const intervalMs = durationMs / text.length;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, intervalMs);
    return () => clearInterval(id);
  }, [text, durationMs]);

  return <span>{displayed}</span>;
}

const avatarMap: Record<ContactState, string> = {
  intro: questionStarted,
  process: questionProcess,
  submitted: questionAnswered,
};

export function ContactPage() {
  const { t } = useI18n();
  const c = t.pages.contact;

  const [state, setState] = useState<ContactState>('intro');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitError, setSubmitError] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError('');
  };

  const onSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setEmailError(c.emailError);
      return;
    }

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', 'dae5ffa1-24a2-46bb-a7c1-cebda290e178');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setState('submitted');
    } else {
      setSubmitError(true);
    }
  };

  return (
    <div className={`contact${state === 'process' ? ' contact--reversed' : ''}`}>
      <div className="contact__inner">
      <div className="contact__avatar-col">
        <img key={state} className="contact__avatar" src={avatarMap[state]} alt="" />
      </div>

      <div className="contact__content">
        {state === 'intro' && (
          <div className="contact__bubble-wrap">
            <div className="contact__bubble">
              <span className="contact__bubble-name">David</span>
              <TypewriterText text={c.introMessage} />
            </div>
            <button className="contact__submit" onClick={() => setState('process')}>
              {c.yes}
            </button>
          </div>
        )}

        {state === 'process' && (
          <div className="contact__process-wrap">
            <div className="contact__panel">
              <form id="contact-form" className="contact__form" onSubmit={onSubmit}>
                <div className="contact__field">
                  <label className="contact__label">{c.name}</label>
                  <input className="contact__input" type="text" name="name" required />
                </div>

                <div className="contact__field">
                  <label className="contact__label">{c.email}</label>
                  <input
                    className={`contact__input${emailError ? ' contact__input--error' : ''}`}
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  {emailError && <span className="contact__field-error">{emailError}</span>}
                </div>

                <div className="contact__field contact__field--grow">
                  <label className="contact__label">{c.message}</label>
                  <textarea className="contact__textarea" name="message" required />
                </div>

                {submitError && <p className="contact__error">{c.error}</p>}
              </form>
            </div>
            <button className="contact__submit" type="submit" form="contact-form">
              {c.continue}
            </button>
          </div>
        )}

        {state === 'submitted' && (
          <div className="contact__bubble-wrap">
            <div className="contact__bubble">
              <span className="contact__bubble-name">David</span>
              <TypewriterText text={c.submittedMessage} />
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
