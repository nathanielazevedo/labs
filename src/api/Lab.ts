class Lab {
  jwt: string;
  constructor() {
    this.jwt = '123';
  }

  async getLabs() {
    try {
      const response = await fetch(
        `https://adventurous-teddy-cow.cyclic.app/labs`
      );
      if (response.ok === false) throw new Error('Invalid credentials');
      const labs = await response.json();
      return labs;
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  }
}

export default new Lab();
