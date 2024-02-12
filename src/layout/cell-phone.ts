import { Piece } from '../definitions';

// For phone layout
export const VALID_PHONE_LENGTH = 10;

export type Space = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '*' | '#';

export const knight: Piece<Space> = {
    '0': ['4', '6'],
    '1': ['8', '6'],
    '2': ['7', '9'],
    '3': ['4', '8'],
    '4': ['3', '9', '0'],
    '5': [],
    '6': ['1', '7', '0'],
    '7': ['2', '6'],
    '8': ['1', '3'],
    '9': ['2', '4'],
    '*': false,
    '#': false,
};
