import { Piece } from './definitions';

type Props = {
    piece: Piece;
    position: string;
    iter?: number;
    maxLen?: number;
};

export function iterate({ piece, position, iter = 0, maxLen = 1 }: Props): number {
    if (iter === maxLen - 1) {
        return 0;
    }

    const spaces = piece[position];

    const validMoves = spaces
        .map((space) => iterate({ piece, position: space, iter: iter + 1 }))
        .reduce((acc, curr) => acc + curr, 0);

    return validMoves;
}
