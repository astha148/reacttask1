import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function WordCount() {
  const [wordCount, setWordCount]=useState(0);
  const [text, setText] = useState('');
  const words = text.trim().split(/\s+/).length;

  const handleTextChange = (event) => {
    setText(event.target.value);
    setWordCount(words);
  };

  return (
    <div class="mt-5 bg-primary-subtle border border-5 border-success container p-3">
      <center>
        <h1>React Task-1</h1><br/>
        <h3>Responsive Paragraph Word Counter</h3>
        <textarea rows={10} cols={50} value={text} onChange={handleTextChange}/>
        <p>Word Count: {wordCount}</p>
      </center>
    </div>
  );
}

export default WordCount;
