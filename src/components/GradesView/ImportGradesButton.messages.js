import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  csvUploadLabel: {
    id: 'gradebook.BulkManagementHistoryView.csvUploadLabel',
    defaultMessage: 'Загрузите CSV с оценками',
    description: 'A labeled button to upload a CSV containing course grades.',
  },
  importGradesBtnText: {
    id: 'gradebook.GradesView.importGradesBtnText',
    defaultMessage: 'Импортировать оценки',
    description: 'A labeled button to import grades in the BulkManagement Tab File Upload Form',
  },
});

export default messages;
