// Define as constant
const privateData = new WeakMap();

// Class
export class ConfigModel {
  // --------------------------
  // PROPERTIES:
  constructor() {
    privateData.set(this, {
      name: 'Name'
    });
  }
  // --------------------------
  // METHODS:

  changeData() {
    // do stuff...
  }
  // --------------------------
  // GETTER/SETTERS:

  set name(value) {
    privateData.set(this, {name: value});
  }

  get name() {
    return privateData.get(this).name;
  }
}