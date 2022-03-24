import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  description: {
    id: 'gradebook.GradesView.ImportSuccessToast.description',
    defaultMessage: 'Импорт прошел успешно! Оценки будут обновлены в ближайшее время.',
    description: 'A message congratulating a successful Import of grades',
  },
  showHistoryViewBtn: {
    id: 'gradebook.GradesView.ImportSuccessToast.showHistoryViewBtn',
    defaultMessage: 'Просмотр журнала активности',
    description: 'The text on a button that loads a view of the Bulk Management Activity Log',
  },
});

export default messages;
