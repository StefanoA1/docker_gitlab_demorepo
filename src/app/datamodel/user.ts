export class User {
  id: number;
  name: String;
  username: String;
  password: String;
  userType: String;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
