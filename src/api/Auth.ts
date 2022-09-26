class Authentication {
  jwt: string;
  constructor() {
    this.jwt = "123";
  }

  login() {
    localStorage.setItem("token", "12345");
    return "login";
  }

  logout() {
    localStorage.removeItem("token");
    return "logout";
  }

  signup() {
    return "signup";
  }
}

export default new Authentication();
