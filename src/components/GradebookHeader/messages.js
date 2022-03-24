import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  backToDashboard: {
    id: 'gradebook.GradebookHeader.backButton',
    defaultMessage: 'Назад к панели инструментов',
    description: 'Button text to take user back to LMS dashboard in Gradebook Header',
  },
  gradebook: {
    id: 'gradebook.GradebookHeader.appLabel',
    defaultMessage: 'Журнал успеваемости',
    description: 'Top-level app title in Gradebook Header component',
  },
  frozenWarning: {
    id: 'gradebook.GradebookHeader.frozenWarning',
    defaultMessage: 'Оценки по этому предмету теперь заблокированы. Редактирование оценок больше не допускается.',
    description: 'Warning message in Gradebook Header for frozen messages',
  },
  unauthorizedWarning: {
    id: 'gradebook.GradebookHeader.unauthorizedWarning',
    defaultMessage: 'Вы не имеете права просматривать журнал оценок по этому курсу.',
    description: 'Warning message in Gradebook Header when user is not allowed to view the app',
  },
  toActivityLog: {
    id: 'gradebook.GradebookHeader.toActivityLogButton',
    defaultMessage: 'Просмотр истории массового управления',
    description: 'Button text for button navigating to Bulk Managment Activity Log',
  },
  toGradesView: {
    id: 'gradebook.GradebookHeader.toGradesView',
    defaultMessage: 'Вернуться в журнал успеваемости',
    description: 'Button text for button navigating to Grades view.',
  },
});

export default messages;
