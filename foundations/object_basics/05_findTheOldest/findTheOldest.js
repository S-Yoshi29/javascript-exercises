// const findTheOldest = function (people) {
//   return people.reduce(
//     (prev, person) => {
//       let age = NaN;
//       const prevAge = prev.
//       if (Object.hasOwn(person, "yearOfDeath")) {
//         age = person.yearOfDeath - person.yearOfBirth;
//       } else {
//         age = new Date.getFullYear() - person.yearOfBirth;
//       }
//       if (age > prev.) {
//         return;
//       } else return prev;
//     },
//     0
// )

const findTheOldest = function (people) {
  const getAge = (birth, death) => {
    if (!death) {
      return new Date().getFullYear() - birth;
    } else {
      return death - birth;
    }
  };
  return people.reduce((prev, person) => {
    if (
      getAge(person.yearOfBirth, person.yearOfDeath) >
      getAge(prev.yearOfBirth, prev.yearOfDeath)
    ) {
      return person;
    } else return prev;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
