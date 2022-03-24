import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  assignmentHeader: {
    id: 'gradebook.GradesView.EditModal.headers.assignment',
    defaultMessage: 'Задание',
    description: 'Edit Modal Assignment header',
  },
  currentGradeHeader: {
    id: 'gradebook.GradesView.EditModal.headers.currentGrade',
    defaultMessage: 'Текущая оценка',
    description: 'Edit Modal Current Grade header',
  },
  originalGradeHeader: {
    id: 'gradebook.GradesView.EditModal.headers.originalGrade',
    defaultMessage: 'Первоначальная оценка',
    description: 'Edit Modal Original Grade header',
  },
  studentHeader: {
    id: 'gradebook.GradesView.EditModal.headers.student',
    defaultMessage: 'Студент',
    description: 'Edit Modal Student header',
  },
  title: {
    id: 'gradebook.GradesView.EditModal.title',
    defaultMessage: 'Редактировать оценки',
    description: 'Edit Modal title',
  },
  closeText: {
    id: 'gradebook.GradesView.EditModal.closeText',
    defaultMessage: 'Отменить',
    description: 'Edit Modal close button text',
  },
  visibility: {
    id: 'gradebook.GradesView.EditModal.contactSupport',
    defaultMessage: 'Показывать последние действия (не более 5). Чтобы увидеть больше, обратитесь в службу поддержки',
    description: 'Edit Modal visibility hint message',
  },
  saveVisibility: {
    id: 'gradebook.GradesView.EditModal.saveVisibility',
    defaultMessage: 'Примечание: После сохранения ваши изменения будут видны студентам.',
    description: 'Edit Modal saved changes effect hint',
  },
  saveGrade: {
    id: 'gradebook.GradesView.EditModal.saveGrade',
    defaultMessage: 'Сохранить оценки',
    description: 'Edit Modal Save button label',
  },
});

export default messages;
