import React from 'react';

const Contador = ({ pageContext }) => {
  return (
    <div>
      <h1>Contador</h1>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </div>
  );
};

export default Contador;