type Piece = Record<string, string[]>

const knight: Piece = {
  "0": ["4", "6"],
  "1": ["8", "6"],
  "2": ["7", "9"],
  "3": ["4", "8"],
  "4": ["3", "9", "0"],
  "5": [],
  "6": ["1", "7", "0"],
  "7": ["2", "6"],
  "8": ["1", "3"],
  "9": ["2", "4"],
};


const VALID_PHONE_LENGTH = 10


function iterate(piece: Piece, position: string, iter: number = 0): number {

  if (iter === VALID_PHONE_LENGTH - 1) {
    return 0;
  }

  const spaces = piece[position];

  const validMoves = spaces.map((space) => iterate(piece, space, iter + 1)).reduce((acc, curr) => acc + curr, 0);
  return validMoves;
} 



console.log(iterate(knight, "0"));
