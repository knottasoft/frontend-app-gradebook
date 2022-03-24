import { StrictDict } from 'utils';

const EMAIL_HEADING = 'Почта';
const TOTAL_COURSE_GRADE_HEADING = 'Итоговая оценка (%)';
const USERNAME_HEADING = 'Имя пользователя';

const GradeFormats = StrictDict({
  absolute: 'absolute',
  percent: 'percent',
});

const Headings = StrictDict({
  email: 'Почта',
  totalGrade: 'Итоговая оценка (%)',
  username: 'Имя пользователя',
});

export {
  EMAIL_HEADING,
  TOTAL_COURSE_GRADE_HEADING,
  USERNAME_HEADING,
  GradeFormats,
  Headings,
};
