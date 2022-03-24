import { StrictDict } from 'utils';
import { getConfig } from '@edx/frontend-platform';

export const routePath = `${getConfig().PUBLIC_PATH}:courseId`;

export const views = StrictDict({
  grades: 'grades',
  bulkManagementHistory: 'bulkManagementHistory',
});

export const modalFieldKeys = StrictDict({
  adjustedGradePossible: 'adjustedGradePossible',
  adjustedGradeValue: 'adjustedGradeValue',
  assignmentName: 'assignmentName',
  reasonForChange: 'reasonForChange',
  todaysDate: 'todaysDate',
  updateModuleId: 'updateModuleId',
  updateUserId: 'updateUserId',
  updateUserName: 'updateUserName',
  open: 'open',
});

export const localFilterKeys = StrictDict({
  assignmentGradeMax: 'assignmentGradeMax',
  assignmentGradeMin: 'assignmentGradeMin',
  courseGradeMax: 'courseGradeMax',
  courseGradeMin: 'courseGradeMin',
});

/**
 * column configuration for bulk management tab's data table
 */
export const bulkManagementColumns = [
  {
    key: 'filename',
    label: 'Журнал успеваемости',
    columnSortable: false,
    width: 'col-5',
  },
  {
    key: 'resultsSummary',
    label: 'Загрузить сводку',
    columnSortable: false,
    width: 'col',
  },
  {
    key: 'user',
    label: 'Кто',
    columnSortable: false,
    width: 'col-1',
  },
  {
    key: 'timeUploaded',
    label: 'Когда',
    columnSortable: false,
    width: 'col',
  },
];

export const gradeOverrideHistoryColumns = StrictDict({
  adjustedGrade: 'adjustedGrade',
  date: 'date',
  grader: 'grader',
  reason: 'reason',
});

/**
 * Display strings for various app components.
 * Note: this is a temporary storage location for these strings, before we put them in
 * messages files for translation.
 */
export const messages = StrictDict({
  BulkManagementTab: StrictDict({
    csvUploadLabel: 'Загрузите CSV с оценками',
    heading: 'Эта функция используется для загрузки CSV для массового управления, изменения оценок локально и последующей загрузки сюда.',
    importBtnText: 'Импортировать оценки',
    successDialog: 'Обработка CSV. Загрузка файлов может занять несколько минут.',
    hints: [
      'Результаты представлены в таблице ниже.',
      'Обработка оценки может занять несколько секунд.',
    ],
  }),
});
