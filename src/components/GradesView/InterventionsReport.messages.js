import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'gradebook.GradesView.InterventionsReport.title',
    defaultMessage: 'Отчет о вмешательствах',
    description: 'The title for the Intervention report subsection',
  },
  description: {
    id: 'gradebook.GradesView.InterventionsReport.description',
    defaultMessage: 'Нужно найти студентов, которые, возможно, отстают?  Загрузите отчет о вмешательствах, чтобы получить показатели вовлеченности, такие как попытки и посещения разделов.',
    description: 'The description for the Intervention report subsection',
  },
  downloadBtn: {
    id: 'gradebook.GradesView.InterventionsReport.downloadBtn',
    defaultMessage: 'Скачать вмешательства',
    description: 'The labeled button to download the Intervention report from the Grades View',
  },
});

export default messages;
