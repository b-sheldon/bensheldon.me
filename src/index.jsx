import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import './style.scss';
import Welcome from './components/welcome';
import NavBar from './components/nav-bar';
import Projects from './components/projects';
import About from './components/about';

const Test = (props) => {
  const { id } = useParams();
  return <div> ID: {id} </div>;
};
const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const MainContent = (props) => {
  return (
    <div className="w-full h-full" onScroll={() => console.log('scrolling')}>
      <Welcome />
      <About />
      <Projects />
    </div>
  );
};
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="relative bg-blue-dark text-blue-lighter">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/test/:id" element={<Test />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById('main'));
root.render(<App />);
