import { useState } from 'react';

function ContactForm() {
  // 3 state-uri pentru input-uri
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // state pentru feedback
  const [feedback, setFeedback] = useState('');

  // funcția la submit
  function handleSubmit(e) {
    e.preventDefault(); // previne refresh-ul paginii
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      setFeedback('Completeaza toate campurile!');
    } else {
      setFeedback('Multumim, ' + name + '!');
      // opțional: golim formularul după submit
      setName('');
      setEmail('');
      setMessage('');
    }
  }

  return (
    <div>
      <h3>Formular de contact</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Nume"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <textarea
            placeholder="Mesaj"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Trimite</button>
      </form>
      {feedback && <p>{feedback}</p>}
    </div>
  );
}

export default ContactForm;