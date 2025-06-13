const academy = {
  name: "Tech Academy",
  courses: ["JavaScript", "Python", "Web Development"],
  socialLink: "https://www.techacademy.ge",
  reviews: {
    user1: {
      name: "Giorgi",
      status: "parent",
      review: "ძალიან კმაყოფილი ვარ კურსებით!"
    },
    user2: {
      name: "Nino",
      status: "child",
      review: "კარგი მასწავლებლები და მეგობრული გარემო."
    },
    user3: {
      name: "Lasha",
      status: "parent",
      review: "შთაბეჭდილებული დავრჩი შედეგით."
    }
  }
};

console.log(Object.entries(academy));
console.log(Object.keys(academy));
console.log(Object.values(academy));
console.log(academy.hasOwnProperty("courses"));
console.log(academy.hasOwnProperty("members"));

const additionalData = {
  member: 120
};

const mergedAcademy = Object.assign({}, academy, additionalData);
console.log(mergedAcademy);

Object.freeze(mergedAcademy);
console.log(Object.isFrozen(mergedAcademy));
