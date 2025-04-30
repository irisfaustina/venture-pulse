import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Dealflow from './pages/Dealflow';
import Analytics from './pages/Analytics';
import Network from './pages/Network';
import Meetings from './pages/Meetings';
import Documents from './pages/Documents';
import CompanyProfile from './pages/CompanyProfile';
import ExpertProfile from './pages/ExpertProfile';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dealflow" element={<Dealflow />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/network" element={<Network />} />
            <Route path="/network/expert/:id" element={<ExpertProfile />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/company/:id" element={<CompanyProfile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;