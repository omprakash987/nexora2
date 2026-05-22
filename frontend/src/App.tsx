import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Home initialSection="about" />} />
          <Route path="contact" element={<Home initialSection="contact" />} />
          <Route path="services" element={<Home initialSection="services" />} />
          <Route path="workflow" element={<Home initialSection="workflow" />} />
          <Route path="why-choose-us" element={<Home initialSection="why-choose-us" />} />
          <Route path="projects" element={<Home initialSection="projects" />} />
          <Route path="stats" element={<Home initialSection="stats" />} />
          <Route path="team" element={<Home initialSection="team" />} />
          <Route path="testimonials" element={<Home initialSection="testimonials" />} />
          <Route path="faq" element={<Home initialSection="faq" />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="services/:id" element={<ServiceDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
