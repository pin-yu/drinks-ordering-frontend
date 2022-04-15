import { Sugar, Ice } from "./adjust";
export interface Drink {
  id: number;
  name: string;

  sugarsAdjustable: Sugar[];
  IcesAdjustable: Ice[];

  mediumPrice: number;
}
