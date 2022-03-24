import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  label: {
    id: 'gradebook.GradesView.search.label',
    defaultMessage: 'Поиск обучающегося',
    description: 'Text prompting a user to use this functionality to search for a learner',
  },
  hint: {
    id: 'gradebook.GradesView.search.hint',
    defaultMessage: 'Поиск по имени пользователя, электронной почте или студенческому ключу',
    description: 'A hint explaining the ways a user can search',
  },
});

export default messages;
