class Member {
  jwt: string;
  constructor() {
    this.jwt = '123';
  }

  async getMember(id: string) {
    try {
      const response = await fetch(
        `https://adventurous-teddy-cow.cyclic.app/getUser/${id}`
      );
      if (response.ok === false) throw new Error('Invalid credentials');
      const user = await response.json();
      delete user.password;
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  }
}

export default new Member();
