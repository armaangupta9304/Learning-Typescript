export enum Job {
    STUDENT,
    INTERN,
    OWNER,
    COLLEGE_STUDENT
}

export type Gender = 'male' | 'female' | 'non-binary' | 'gay' | 'lesbo' | 'pan' | 'others'; 

export enum Pronouns {
    HE_HIM,
    SHE_HER,
    THEY_THEM,
    HE_SHE,
    SHE_HE
}

export interface Person {
    name: string;
    age: number;
    phoneNumber?: string;
    address: string;
    socials?: Person[];
    behaviour?: (Behaviour | null);
    role: Job;
    gender: Gender,
    pronouns?: Pronouns;
};

export interface Acts {
    name: string;
    level: number;
}

export interface Behaviour {
    weeb?: boolean;
    student: boolean;
    hobbies: Acts[];
    nature?: Array<string>;
}
