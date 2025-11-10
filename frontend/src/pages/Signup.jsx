import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    
    API.post("/auth/signup", { name, email, password })
      .then(() => {
        alert("Signup successful! Please login.");
        navigate("/login");
      })
      .catch((err) => {
        alert(err.response?.data?.message || "Signup failed");
        setLoading(false);
      });
  }

  return (
    <div style={{ height: '100vh', width: '100vw', background: 'linear-gradient(135deg, #667eea, #764ba2)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', boxSizing: 'border-box', margin: 0, overflow: 'auto' }}>
      <div style={{ width: '100%', maxWidth: '700px', background: 'white', borderRadius: '35px', padding: '80px', boxShadow: '0 40px 100px rgba(0,0,0,0.3)', boxSizing: 'border-box' }}>
        
        <h1 style={{ textAlign: 'center', fontSize: '56px', color: '#2d3748', marginBottom: '50px', fontWeight: '700' }}>🧑‍🎓 Create Account</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '18px', marginBottom: '18px', border: '2px solid #e2e8f0', borderRadius: '15px', fontSize: '18px', boxSizing: 'border-box' }}
          />
          
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '18px', marginBottom: '18px', border: '2px solid #e2e8f0', borderRadius: '15px', fontSize: '18px', boxSizing: 'border-box' }}
          />
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '18px', marginBottom: '18px', border: '2px solid #e2e8f0', borderRadius: '15px', fontSize: '18px', boxSizing: 'border-box' }}
          />
          
          <button 
            type="submit" 
            disabled={loading}
            style={{ width: '100%', padding: '20px', background: loading ? '#d8b4fe' : 'linear-gradient(to right, #f093fb, #f5576c)', color: 'white', border: 'none', borderRadius: '15px', fontSize: '19px', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer', boxSizing: 'border-box', marginTop: '10px' }}
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>

        <p style={{ textAlign: 'center', color: '#718096', marginTop: '30px', fontSize: '17px' }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '600' }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;