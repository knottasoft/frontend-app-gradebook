import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  filterStepHeading: {
    id: 'gradebook.GradesView.filterHeading',
    defaultMessage: 'Шаг 1: Фильтр отчета об оценках',
    description: 'Filter controls container heading string',
  },
  gradebookStepHeading: {
    id: 'gradebook.GradesView.gradebookStepHeading',
    defaultMessage: 'Шаг 2: Просмотр или изменение индивидуальных оценок',
    description: 'Alert text for invalid minimum course grade',
  },
  mastersHint: {
    id: 'gradebook.GradesView.mastersHint',
    defaultMessage: "доступно только для обучающихся на уровне Masters",
    description: 'Masters feature availability hint on Grades Tab',
  },
});

export default messages;
