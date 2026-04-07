import { useState } from 'react';
import { useI18n } from '../../i18n/I18nContext';

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

export function ContactPage() {
  const { t } = useI18n();
  const c = t.pages.contact;

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    setStatus(data.success ? 'success' : 'error');
  };

  if (status === 'success') {
    return (
      <div className="contact">
        <div className="contact__panel contact__panel--sent">
          <p className="contact__sent-msg">{c.success}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact">
      <div className="contact__panel">
        <div className="contact__header">
          <span className="contact__title">{c.title}</span>
        </div>

        <form className="contact__form" onSubmit={onSubmit}>
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

          {status === 'error' && <p className="contact__error">{c.error}</p>}

          <button className="contact__submit" type="submit">{c.submit}</button>
        </form>
      </div>
    </div>
  );
}
