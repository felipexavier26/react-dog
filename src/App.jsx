import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dog from './dog/Dog';
import DogDetails from './dog/DogDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dog />} />
        <Route path="/dog/:code" element={<DogDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
