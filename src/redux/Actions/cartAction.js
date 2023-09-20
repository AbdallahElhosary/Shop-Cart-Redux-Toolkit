import { ADDITEM } from "../Type";

export const addToCart = (item) => ({
    type: ADDITEM,
    payload: item,
});