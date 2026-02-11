



export interface schemeStep {
    id: number;
    main_competence: string;
    specific_competences: string;
    main_activities: string;
    specific_activities: string;
    teaching_activities: string;
    learning_activities: string;
    month:string;
    week: string;
    no_of_periods: string;
    teaching_and_learning_methods: string;
    teaching_and_learning_resources: string;
    assessment_tools: string;
    References: string;
    remarks: string;
}

export interface scheme {
    id: number;
    school_name: string;
    subject: string;
    year: string;
    term: string;
    class: string;
    status: string;
    steps: schemeStep[];
}