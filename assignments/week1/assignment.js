const students = [
  {
    name: "Nam",
    age: 24,
    gender: "male",
  },
  {
    name: "Mai",
    age: 22,
    gender: "female",
  },
  {
    name: "Trang",
    age: 23,
    gender: "female",
  },
  {
    name: "An",
    age: 20,
    gender: "male",
  },
  {
    name: "Thien",
    age: 27,
    gender: "male",
  },
];

// Assignment 3
// var maleStudentCounting = 0;
// const gender = "gender";
// students.forEach((student) => {
//   if (student[gender] === "male") {
//     console.log(student.name);
//     maleStudentCounting++;
//   }
// });
// console.log("number of male student: " + maleStudentCounting);

// fix Assignment 3

// function callback(value, result) {
//   const countByType = result[students[i][type]];
//   result[students[i][type]] = (countByType || 0) + 1;
// }

const reduce = (arr, callback, result = {}) => {
  for (let i = 0; i < arr.length; i++) {
    result = callback(i, arr[i], result);
  }
  return result;
};

const countByType = (type) => {
  return reduce(students, (index, value, result) => {
    const countType = result[value[type]];
    result[value[type]] = (countType || 0) + 1;
    return result; 
  });
};

console.log(countByType("gender"));

// Assignment 4
// const studentNames = students.map((student) => student.name);
// console.log(studentNames);
