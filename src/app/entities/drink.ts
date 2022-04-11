export interface Drinks {
  name: string;

  noSugar: boolean;
  quarterSugar: boolean;

  noIce: boolean;
  lessIce: boolean;

  mediumPrice?: number;
  largePrice?: number;
}