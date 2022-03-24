import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  scoreView: {
    id: 'gradebook.GradesView.scoreViewLabel',
    defaultMessage: 'Просмотр оценок',
    description: 'The label for the dropdown list that allows a user to select the Score format',
  },
  absolute: {
    id: 'gradebook.GradesView.absoluteOption',
    defaultMessage: 'Абсолютное значение',
    description: 'A label within the Score Format dropdown list for the Absolute Grade Score option',
  },
  percent: {
    id: 'gradebook.GradesView.percentOption',
    defaultMessage: 'Процент',
    description: 'A label within the Score Format dropdown list for the Percent Grade Score option',
  },
});

export default messages;
