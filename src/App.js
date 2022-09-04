import React, { useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';

function App() {
  return (
    <div>
      <main>
          <About></About>
          <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
