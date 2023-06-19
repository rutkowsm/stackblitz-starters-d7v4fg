import React, { useState, useCallback } from 'react';

const NumberList = () => {
  const [numbers, setNumbers] = useState([]);

  const handleAddNumber = useCallback(() => {
    setNumbers((prevNumbers) => [...prevNumbers, prevNumbers.length + 1]);
  }, []);

  const handleResetList = useCallback(() => {
    setNumbers([]);
  }, []);

  return (
    <div>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <button onClick={handleAddNumber}>Dodaj liczbę</button>
      <button onClick={handleResetList}>Zresetuj listę</button>
    </div>
  );
};

export default NumberList;
