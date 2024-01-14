const Person = function (first, last) {
  let firstName = first;
  let lastName = last;

  this.getFullName = function () {
    return `${firstName} ${lastName}`;
  };
  this.getFirstName = function () {
    return firstName;
  };
  this.getLastName = function () {
    return lastName;
  };
  this.setFirstName = function (first) {
    firstName = first;
  };
  this.setLastName = function (last) {
    lastName = last;
  };
  this.setFullName = function (first, last) {
    firstName = first;
    lastName = last;
  };
  return "";
};

const person = new Person("Tito", "Jackson");
console.log(person.getFullName());
console.log(person.firstName);
console.log(Object.keys(Person).length);
console.log(Object.keys(Person));
