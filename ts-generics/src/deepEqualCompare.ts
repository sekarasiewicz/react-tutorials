export const deepEqualCompare = <Arg>(a: Arg extends any[] ? `Don't pass an Array` : Arg, b: Arg): boolean => {
  if (Array.isArray(a) && Array.isArray(b)) {
    throw new Error('Arrays are not supported');
  }

  return a === b;
}

deepEqualCompare([1, 2, 3], [1, 2, 3]);
deepEqualCompare('a', 'b');

const func = (val: {name: string} | {age: number}) => {
  if ('name' in val) {
    const cos = val.name
  } else {
    const na = val.name
    const cos = val.age
  }
}

interface Letters {
  a: number
  b: string
  c: {name: string}
}

type LettersAsUnion = keyof Letters
const letters: LettersAsUnion = "c"

// type LetterValues = Letters[keyof Letters]
type LetterValues = Letters['a' | 'b']
const lettersValues: LetterValues = 'c'
