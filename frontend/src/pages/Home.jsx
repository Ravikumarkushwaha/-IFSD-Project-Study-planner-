import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { user } = useAuth();

  return (
    <div style={{ height: '100vh', width: '100vw', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', boxSizing: 'border-box', margin: 0 }}>
      <div style={{ background: 'white', borderRadius: '35px', padding: '80px', width: '100%', maxWidth: '700px', textAlign: 'center', boxShadow: '0 40px 100px rgba(60, 148, 172, 0.3)' }}>
        
        <h1 style={{ fontSize: '56px', color: '#2d3748', margin: '0 0 25px 0', fontWeight: '700' }}>🎓 Study Planner</h1>
        <p style={{ fontSize: '19px', color: '#718096', margin: '0 0 50px 0', lineHeight: '1.6' }}>Plan, schedule, and stay organized with your study goals.</p>

        {user ? (
          <>
            <p style={{ fontSize: '19px', color: '#4a5568', margin: '0 0 35px 0' }}>
              You are logged in as <strong style={{ color: '#667eea' }}>{user.name}</strong>
            </p>
            <Link to="/dashboard" style={{ display: 'block', padding: '20px', background: 'linear-gradient(to right, #667eea, #764ba2)', color: 'white', textDecoration: 'none', borderRadius: '15px', fontSize: '19px', fontWeight: '600' }}>
              Go to Dashboard
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" style={{ display: 'block', padding: '20px', background: 'linear-gradient(to right, #667eea, #764ba2)', color: 'white', textDecoration: 'none', borderRadius: '15px', fontSize: '19px', fontWeight: '600', marginBottom: '18px' }}>
              Login
            </Link>
            <Link to="/signup" style={{ display: 'block', padding: '20px', background: 'linear-gradient(to right, #f093fb, #f5576c)', color: 'white', textDecoration: 'none', borderRadius: '15px', fontSize: '19px', fontWeight: '600' }}>
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;