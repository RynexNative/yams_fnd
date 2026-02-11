// export interface LessonPlan {
//   id: number;
//   title: string;
//   subject: string;
//   grade: string;
//   date: string;
//   duration: string;
//   status: string;
//   term: string;
//   objectives: string[];
//   content?: string;
// }

export interface LessonPlanFormData {
  title: string;
  subject: string;
  grade: string;
  date: string;
  duration: string;
  term: string;
  objectives: string;
  content: string;
}

export interface LessonPlanStep {
  id: string;
  stage: string;
  time_minutes: string;
  specific_activity: string;
  teaching_activities: string;
  learning_activities: string;
  assessment_criteria: string;
}


export interface LessonPlan {
  id: string;
  school_name: string;
  teacher: string;
  class: string;
  subject: string;
  date: string;
  time: string;
  registered_girls: number;
  registered_boys: number;
  present_girls: number;
  present_boys: number;
  main_competence: string;
  specific_competence: string;
  main_activity: string;
  specific_activity: string;
  teaching_resources: string;
  references: string;
  steps: LessonPlanStep[];
  remarks: string;
  status: string;
}
