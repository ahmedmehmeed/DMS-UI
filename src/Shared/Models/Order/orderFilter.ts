import { baseFilter } from "../baseFilter";

export interface orderFilter extends baseFilter  {
    username?: string;
    itemName?: string;
    itemPrice?: number;
}