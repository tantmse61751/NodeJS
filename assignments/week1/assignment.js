const students = [
  {
    name: 'Nam',
    age: 24,
    gender: 'male',
  },
  {
    name: 'Mai',
    age: 22,
    gender: 'female',
  },
  {
    name: 'Trang',
    age: 23,
    gender: 'female',
  },
  {
    name: 'An',
    age: 20,
    gender: 'male',
  },
  {
    name: 'Thien',
    age: 27,
    gender: 'male',
  },
];

// Assignment 3
  var maleStudentCounting = 0;
  const gender = 'gender';
  students.forEach(student => {
      if(student[gender] === 'male') {
        console.log(student.name);
        maleStudentCounting++;
      }
  });
  console.log('number of male student: ' + maleStudentCounting);

// fix Assignment 3


  // Assignment 4
  const studentNames = students.map(student => student.name);
  console.log(studentNames);

