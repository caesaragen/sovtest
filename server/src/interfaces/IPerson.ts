export interface Result {
    name: string;
    height: string;
    mass: string;
    gender: string;
    homeworld: string;
  }
  
  export interface IPerson {
    count: number;
    next: string | null;
    previous?: any;
    results: Result[];
  }