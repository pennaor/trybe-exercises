const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = () => grades.map(
  (gradeArr, i) => (
    {
      name: students[i],
      average: gradeArr.reduce(
        (total, grade) => total + grade, 0,
      ) / grades[i].length,
    }
  ),
);

module.exports = studentAverage;
