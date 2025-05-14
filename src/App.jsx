import { useEffect, useState } from 'react';

export default function App() {
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/get-answer')
      .then(res => res.json())
      .then(json => setAnswer(json.data))
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Latest Grader Answer</h1>
      <span id="answer">{answer}</span>
    </div>
  );
}
