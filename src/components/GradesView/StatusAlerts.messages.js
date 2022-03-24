import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  editSuccessAlert: {
    id: 'gradebook.GradesView.editSuccessAlert',
    defaultMessage: 'Оценка была успешно отредактирована.  Вы можете увидеть небольшую задержку перед появлением обновлений в журнале оценок.',
    description: 'An alert text for successfully editing  a grade',
  },
  maxGradeInvalid: {
    id: 'gradebook.GradesView.maxCourseGradeInvalid',
    defaultMessage: 'Максимальная оценка по предмету должна быть от 0 до 100',
    description: 'An alert text for selecting a maximum course grade greater than 100',
  },
  minGradeInvalid: {
    id: 'gradebook.GradesView.minCourseGradeInvalid',
    defaultMessage: 'Минимальная оценка по предмету должна быть от 0 до 100',
    description: 'An alert text for selecting a minimum course grade less than 0',
  },
});

export default messages;
