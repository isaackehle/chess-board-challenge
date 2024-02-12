import { Piece } from './definitions';

type Props<T extends string> = {
    piece: Piece<T>;
    position: T;
    iter?: number;
    maxLen?: number;
};

export function iterate<T extends string>({ piece, position, iter = 0, maxLen = 1 }: Props<T>): number {
    // console.log({ piece, position, iter, maxLen });

    if (iter === maxLen - 1) {
        // console.log({ position, iter, maxLen, return: 0 });
        return 1;
    }

    const spaces = piece[position];

    if (spaces === false) return 0;

    const validMoves = spaces
        .map((space) => iterate({ piece, position: space, iter: iter + 1, maxLen }))
        .reduce((acc, curr) => acc + curr, 0);

    // console.log({ position, iter, maxLen, validMoves });

    return validMoves;
}
