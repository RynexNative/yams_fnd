


export type PermissionDTO =

  // add / request
  | "can_request_tenant"
  | "can_add_scheme"
  | "can_join_school"
  | "can_apply_school"


  // deleting


  // editing


  // view
  | "view_lesson_plan"
  | "can_view_dashboard"
  | "can_view_lesson_plan"
  | "can_view_scheme"
  | "can_view_draft"

  | "can_view_library"
  | "can_view_attendance"
  | "can_view_classes"
  | "can_view_exams"

  | "can_view_fees"
  | "can_view_message"
  | "can_view_meetings"
  | "can_view_calendar"

  | "can_view_student"
  | "can_view_settings"
  | "can_view_school"
  | "can_view_draf"
  // manage
  | "can_manage_lesson_plan"
  | "can_manage_dashboard"
  | "can_manage_lesson_plan"
  | "can_manage_scheme"
  | "can_manage_draft"

  | "can_manage_library"
  | "can_manage_attendance"
  | "can_manage_classes"
  | "can_manage_exams"

  | "can_manage_fees"
  | "can_manage_message"
  | "can_manage_meetings"
  | "can_manage_calendar"

  | "can_manage_student"
  | "can_manage_settings"
  | "can_manage_schem"
  | "can_manage_draf"

  | undefined

