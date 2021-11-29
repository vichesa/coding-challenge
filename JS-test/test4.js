// Expected Result :
// [
//   { name: 'Rahman', school_name: 'STJK' },
//   { name: 'Budi', school_name: 'STJK' }
// ]
// Direction :
// Return a formatted array for students of specific school using id of school.
const students = [
  {
    id: '1',
    name: 'Ryan',
    school: {
      id: '1',
      short_name: 'PLMK',
    },
  },
  {
    id: '2',
    name: 'Ari',
    school: {
      id: '1',
      short_name: 'PLMK',
    },
  },
  {
    id: '3',
    name: 'Rahman',
    school: {
      id: '2',
      short_name: 'STJK',
    },
  },
  {
    id: '4',
    name: 'Budi',
    school: {
      id: '2',
      short_name: 'STJK',
    },
  },
  {
    id: '5',
    name: 'Jaka',
    school: {
      id: '1',
      short_name: 'PLMK',
    },
  },
];
const schoolId = '2';

function result(students, schoolId) {
  // Your Code Here
  let res = [];
  let resp = students.map((student) => student.school.id === schoolId);
  for (i = 0; i < students.length; i++) {
    if (students[i].school.id === schoolId) {
      res.push({
        student_name: students[i].name,
        school: students[i].school.short_name,
      });
    }
  }
  return res;
}

console.log(result(students, schoolId));
