import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Research from './pages/Research';
import Publications from './pages/Publications';
import People from './pages/People';
import News from './pages/News';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Home at "/" */}
        <Route index element={<Home />} />

        {/* Optional: redirect /home -> / for cleanliness */}
        <Route path="home" element={<Navigate to="/" replace />} />

        {/* Research (relative paths keep it tidy) */}
        <Route path="research" element={<Research />} />
        <Route path="research/:areaId" element={<Research />} />
        <Route path="research/:areaId/:domainId" element={<Research />} />

        {/* Project details (one family of routes) */}
        <Route path="project/:id" element={<ProjectDetail />} />
        {/* If you need the other shape, map it to the same page: */}
        <Route path="project/:areaId/:focus" element={<ProjectDetail />} />

        {/* Other pages */}
        <Route path="publications" element={<Publications />} />
        <Route path="team" element={<People />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />

        {/* 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
