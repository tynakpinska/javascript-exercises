const findTheOldest = people => {
  people.sort((person1, person2) => {
    if (!person1.yearOfDeath) {
      return new Date().getFullYear() - person1.yearOfBirth >
        person2.yearOfDeath - person2.yearOfBirth
        ? -1
        : 1;
    }
    if (!person2.yearOfDeath) {
      return person1.yearOfDeath - person1.yearOfBirth >
        new Date().getFullYear() - person2.yearOfBirth
        ? -1
        : 1;
    }
    return person1.yearOfDeath - person1.yearOfBirth >
      person2.yearOfDeath - person2.yearOfBirth
      ? -1
      : 1;
  });
  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
