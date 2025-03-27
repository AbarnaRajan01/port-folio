import { TypedObject } from "sanity";

export interface skillCard {
    name:string;
    proficiency:number;
    image:any;
    currentSlug:string;
}

export interface newSkill{
    name:string;
    content:TypedObject[],
    image:any;
    currentSlug:string;
}

export interface projectCard {
    _id: string;
    title: string;
    description: string;
    currentSlug:string
    technologies: string
    image: any;
    liveDemo: string;
    github: string;
    _createdAt: string;
  }
  
  export interface Resume {
    resumeUrl: string;
  }
  
  