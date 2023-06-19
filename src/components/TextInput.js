import React, { useState, useCallback } from 'react';

const TextInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    setSubmittedValue(inputValue);
  }, [inputValue]);

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      {submittedValue && <p>Submitted Value: {submittedValue}</p>}
    </div>
  );
};

export default TextInput;
