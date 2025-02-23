import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './contexts/AuthContext';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import CorporateDashboard from './pages/corporate/Dashboard';
import RecyclerDashboard from './pages/recycler/Dashboard';

function PrivateRoute({ children, userType }) {
  const { currentUser } = useAuth();
  
  if (!currentUser) {
    return <Navigate to="/auth" />;
  }
  
  // Add user type check here when implemented
  return children;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/auth" element={<Login />} />
          <Route 
            path="/corporate/*" 
            element={
              <PrivateRoute userType="corporate">
                <CorporateDashboard />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/recycler/*" 
            element={
              <PrivateRoute userType="recycler">
                <RecyclerDashboard />
              </PrivateRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;