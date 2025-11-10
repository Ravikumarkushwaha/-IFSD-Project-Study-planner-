import { useState, useEffect } from "react";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user, logout } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  function fetchTasks() {
    API.get("/tasks")
      .then((response) => setTasks(response.data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) {
      alert("Please enter a task title!");
      return;
    }

    API.post("/tasks", { title, description, deadline })
      .then(() => {
        setTitle("");
        setDescription("");
        setDeadline("");
        fetchTasks();
      })
      .catch((err) => {
        console.error(err);
        alert("Error adding task.");
      });
  }

  function handleDelete(id) {
    if (window.confirm("Delete this task?")) {
      API.delete(`/tasks/${id}`).then(() => fetchTasks());
    }
  }

  function toggleComplete(id, currentStatus) {
    API.put(`/tasks/${id}`, { isCompleted: !currentStatus }).then(() => fetchTasks());
  }

  const inputStyle = { width: "100%", padding: "15px", marginBottom: "15px", border: "2px solid #4a5568", borderRadius: "12px", fontSize: "16px", boxSizing: "border-box", background: "#3a3a3a", color: "white" };

  return (
    <div style={{ height: "100vh", width: "100vw", background: "linear-gradient(135deg, #667eea, #764ba2)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", boxSizing: "border-box", margin: 0, overflow: "auto" }}>
      <style>{`input::placeholder, textarea::placeholder { color: #cbd5e0 !important; opacity: 1; }`}</style>

      <div style={{ width: "100%", maxWidth: "700px", background: "white", borderRadius: "30px", padding: "50px", boxShadow: "0 40px 100px rgba(0,0,0,0.3)", boxSizing: "border-box" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
          <p style={{ color: "#4a5568", margin: 0, fontSize: "18px", fontWeight: "500" }}>Welcome, {user?.name}</p>
          <button onClick={logout} style={{ padding: "10px 20px", background: "linear-gradient(to right, #f093fb, #f5576c)", color: "white", border: "none", borderRadius: "12px", fontSize: "15px", fontWeight: "600", cursor: "pointer" }}>
            Logout
          </button>
        </div>

        <h1 style={{ textAlign: "center", fontSize: "42px", color: "#2d3748", marginBottom: "40px", fontWeight: "700" }}>📅 Schedule Your Tasks</h1>

        <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
          <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} style={inputStyle} />
          <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} style={{ ...inputStyle, resize: "none" }} rows="3" />
          <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} style={inputStyle} />
          <button type="submit" style={{ width: "100%", padding: "16px", background: "linear-gradient(to right, #f093fb, #f5576c)", color: "white", border: "none", borderRadius: "12px", fontSize: "17px", fontWeight: "600", cursor: "pointer", boxSizing: "border-box" }}>
            ➕ Add Task
          </button>
        </form>

        {tasks.length === 0 ? (
          <p style={{ textAlign: "center", color: "#a0aec0", padding: "40px", fontSize: "16px" }}>No tasks yet — start scheduling!</p>
        ) : (
          <div>
            {tasks.map((task, index) => (
              <div key={task._id} style={{ background: task.isCompleted ? "linear-gradient(to right, #d1fae5, #a7f3d0)" : "linear-gradient(to right, #ede9fe, #ddd6fe)", padding: "18px", borderRadius: "12px", marginBottom: "12px" }}>
                <h3 style={{ margin: "0 0 8px 0", color: "#2d3748", fontSize: "18px", fontWeight: "bold" }}>Task {index + 1}: {task.title}</h3>
                {task.description && <p style={{ margin: "0 0 8px 0", color: "#718096", fontSize: "15px" }}>{task.description}</p>}
                <p style={{ margin: "0 0 12px 0", color: "#667eea", fontSize: "14px", fontWeight: "500" }}>
                  {task.deadline ? task.deadline.split("T")[0] : "No deadline"}
                </p>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button onClick={() => toggleComplete(task._id, task.isCompleted)} style={{ padding: "10px 16px", background: "linear-gradient(to right, #34d399, #10b981)", color: "white", border: "none", borderRadius: "10px", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}>
                    {task.isCompleted ? "Undo" : "Mark Done"}
                  </button>
                  <button onClick={() => handleDelete(task._id)} style={{ padding: "10px 16px", background: "linear-gradient(to right, #f093fb, #f5576c)", color: "white", border: "none", borderRadius: "10px", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;