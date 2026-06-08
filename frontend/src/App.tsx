import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import PlaceholderPage from './pages/PlaceholderPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/lesson/:id" element={<PlaceholderPage title="Lesson Content" />} />
        <Route path="/path/:pathId" element={<PlaceholderPage title="Learning Path" />} />
      </Routes>
    </Router>
  );
}

export default App;
