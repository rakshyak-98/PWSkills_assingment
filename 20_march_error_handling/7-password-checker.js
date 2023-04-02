class User {
  constructor(username, password) {
    this.$username = username;
    this.$password = password;
  }
  getPassword() {
    const re = /./g;
    return this.$password.replaceAll(re, "*");
  }
  setPassword(newPassword) {
    try {
      if (newPassword.length <= 8) {
        throw new Error("Password must be at least 8 character long");
      }
      if (/[A-Z]/g.test(newPassword) && /[0-9]/g.test(newPassword)) {
        this.$password = newPassword;
      } else {
        throw new Error(
          "Password should contains at-least one number and one uppercase letter."
        );
      }
    } catch (error) {
      console.log("Error: ".concat(error.message));
    }
  }
}

const user = new User("rakshyak", "password1234");
user.setPassword("raksh");
