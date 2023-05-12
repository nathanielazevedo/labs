class Authentication {
  jwt: string;
  constructor() {
    this.jwt = '123';
  }

  async login(formData: { email: string; password: string }) {
    try {
      const response = await fetch('http://localhost:6001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok === false) throw new Error('Invalid credentials');
      const user = await response.json();
      delete user.password;
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  }

  logout() {
    localStorage.removeItem('user');
    return true;
  }

  async register(formData: {
    email: string;
    password: string;
    lab_name: string;
  }) {
    const response = await fetch('http://localhost:6001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const user = await response.json();
    delete user.password;
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }
}

export default new Authentication();
