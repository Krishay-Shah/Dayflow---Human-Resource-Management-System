// frontend/src/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const Dashboard = () => {
    // State for stats and employees
    const [stats, setStats] = useState({ total_employees: 0, on_leave: 0, new_recruits: 0 });
    const [employees, setEmployees] = useState([]);

    // Fetch data on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const statsRes = await axios.get('http://localhost:5000/api/stats');
                const empRes = await axios.get('http://localhost:5000/api/employees');

                if (statsRes.data) setStats(statsRes.data);
                setEmployees(empRes.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="dashboard-container">
            {/* Header Section */}
            <header className="header">
                <div>
                    <h1>Dayflow HRMS</h1>
                    <p className="subtitle">Enterprise Admin Dashboard</p>
                </div>
                <button className="btn-primary">+ Add Employee</button>
            </header>

            {/* KPI Stats Grid */}
            <div className="stats-grid">
                <div className="card">
                    <h3>Total Workforce</h3>
                    <p className="number">{stats.total_employees}</p>
                </div>
                <div className="card">
                    <h3>Currently On Leave</h3>
                    <p className="number" style={{ color: '#facc15' }}>{stats.on_leave}</p>
                </div>
                <div className="card">
                    <h3>New Recruits</h3>
                    <p className="number" style={{ color: '#38bdf8' }}>{stats.new_recruits}</p>
                </div>
            </div>

            {/* Employee Directory Table */}
            <div className="table-section">
                <h2>Employee Directory</h2>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Department</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.length > 0 ? (
                                employees.map((emp) => (
                                    <tr key={emp.id}>
                                        <td style={{ color: '#94a3b8' }}>#{emp.id}</td>
                                        <td style={{ fontWeight: '500' }}>{emp.name}</td>
                                        <td>{emp.role}</td>
                                        <td>{emp.department}</td>
                                        <td>
                                            <span className={`status-badge ${emp.status === 'Active' ? 'status-active' : 'status-inactive'}`}>
                                                {emp.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: 'center', padding: '30px', color: '#94a3b8' }}>
                                        Loading employee data...
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;