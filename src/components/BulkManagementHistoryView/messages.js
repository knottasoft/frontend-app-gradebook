import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'gradebook.BulkManagementHistoryView.heading',
    defaultMessage: 'История массового управления',
    description: 'Heading text for BulkManagement History Tab',
  },
  helpText: {
    id: 'gradebook.BulkManagementHistoryView',
    defaultMessage: 'Ниже приведен журнал предыдущих импортов оценок.  Чтобы загрузить CSV-файл вашего журнала успеваемости и импортировать оценки для переопределения, вернитесь в журнал успеваемости.  Обратите внимание, что после импорта оценок может потребоваться несколько секунд для обработки переопределения.',
    description: 'Bulk Management History View help text',
  },
  successDialog: {
    id: 'gradebook.BulkManagementHistoryView.successDialog',
    defaultMessage: 'Обработка CSV. Загрузка файлов может занять несколько минут.',
    description: 'Success Dialog message in BulkManagement Tab File Upload Form',
  },
});

export default messages;
