import api from './api';

const authService = {
  login: async (email, password) => {
    // Simulated API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      access_token: "MOCK_JWT_TOKEN",
      role: email.includes('admin') ? 'ADMIN' : 'EMPLOYEE',
      user: { email, name: 'User Name' }
    };
  },
  register: async (userData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true };
  }
};

export default authService;