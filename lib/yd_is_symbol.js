import { yd_core_getTag } from './yd_core_getTag.js';
export const yd_is_symbol = (value) => {
    return yd_core_getTag(value) === '[object Symbol]';
};