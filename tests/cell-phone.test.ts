import { VALID_PHONE_LENGTH, knight } from '../src/layout/cell-phone';
import { iterate } from '../src/iterate';

describe('phone layout', () => {
    test('knight at space 0, 1 digit', () => {
        expect(iterate({ piece: knight, position: '0', maxLen: 1 })).toBe(1);
    });

    test('knight at space 0, 2 digits', () => {
        expect(iterate({ piece: knight, position: '0', maxLen: 2 })).toBe(2);
    });

    test('knight at space 0, 2 digits', () => {
        expect(iterate({ piece: knight, position: '0', maxLen: 3 })).toBe(6);
    });

    test('knight at space 0', () => {
        expect(iterate({ piece: knight, position: '0', maxLen: VALID_PHONE_LENGTH })).toBe(1760);
    });

    test('knight at space #', () => {
        expect(iterate({ piece: knight, position: '#', maxLen: VALID_PHONE_LENGTH })).toBe(0);
    });
});
