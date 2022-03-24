import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  emailHeading: {
    id: 'gradebook.GradesView.table.headings.email',
    defaultMessage: 'Электронная почта',
    description: 'Gradebook table email column header',
  },
  totalGradeHeading: {
    id: 'gradebook.GradesView.table.headings.totalGrade',
    defaultMessage: 'Итоговая оценка (%)',
    description: 'Gradebook table total grade column header',
  },
  usernameHeading: {
    id: 'gradebook.GradesView.table.headings.username',
    defaultMessage: 'Имя пользователя',
    description: 'Gradebook table username column header',
  },
  studentKeyLabel: {
    id: 'gradebook.GradesView.table.labels.studentKey',
    defaultMessage: 'Ключ студента*',
    description: 'Gradebook table Student Key label',
  },
  usernameLabel: {
    id: 'gradebook.GradesView.table.labels.username',
    defaultMessage: 'Имя пользователя',
    description: 'Gradebook table username label',
  },
  totalGradePercentage: {
    id: 'gradebook.GradesView.table.totalGradePercentage',
    defaultMessage: 'Итоговые значения оценок всегда отображаются в процентах',
    description: 'Gradebook table message that total grades are displayed in percent format',
  },
});

export default messages;
