import React, { useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <main>
          <About></About>
          <Portfolio></Portfolio>
          <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
