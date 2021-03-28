export const AUTHORIZE_ERROR = "AUTHORIZE_ERROR";
export const LOGIN_ERROR = "Username or Password is incorrect";
export const REGISTER_ERROR = "Something went wrong";

export class UserService {
  async getUserInfo() {
    const url = "/user/info";
    const response = await fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          throw AUTHORIZE_ERROR;
        }
        return response.json();
      })
      .then((response) => response)
      .catch((err) => err);

    return response;
  }
  async authorize(username, password) {
    const url = `/login?username=${username}&password=${password}`;
    const result = await fetch(url, { method: "POST" }).then((response) => {
      if (response.status !== 200) {
        return LOGIN_ERROR;
      }
      const res = this.getUserInfo();
      return res;
    });
    return result;
  }
  async register(credintials) {
    const url = `/user/register`;
    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credintials),
    }).then((response) => response);
    return result;
  }
  async getAllUsers() {
    const url = "/user";
    const response = await fetch(url).then((response) => response.json());
    const options = response.map((item) => ({
      value: item.id,
      label: item.firstName + " " + item.lastName,
    }));

    return options;
  }
}
