import { VALID_PHONE_LENGTH, knight } from '../src/layout/cell-phone';
import { iterate } from '../src/iterate';

describe('phone layout', () => {
    test('knight at space 0', () => {
        expect(iterate({ piece: knight, position: '0', maxLen: VALID_PHONE_LENGTH })).toBe(3);
    });
});
