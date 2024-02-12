import { Piece } from './definitions';

type Props = {
    piece: Piece;
    position: string;
    iter?: number;
    maxLen?: number;
};

export function iterate({ piece, position, iter = 0, maxLen = 1 }: Props): number {
    // console.log({ piece, position, iter, maxLen });

    if (iter === maxLen - 1) {
        // console.log({ position, iter, maxLen, return: 0 });
        return 1;
    }

    const spaces = piece[position];

    const validMoves = spaces
        .map((space) => iterate({ piece, position: space, iter: iter + 1, maxLen }))
        .reduce((acc, curr) => acc + curr, 0);

    // console.log({ position, iter, maxLen, validMoves });

    return validMoves;
}
