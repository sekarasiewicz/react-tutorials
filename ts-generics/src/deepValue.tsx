export const deepValue = <
  TObj, TFirstKey extends keyof TObj,
  TSecondKey extends keyof TObj[TFirstKey]>(obj: TObj, firstKey: TFirstKey, secondKey: TSecondKey
): TObj[TFirstKey][TSecondKey] => {
  return obj[firstKey][secondKey]
}

const obj = {
  foo: {
    a: true,
    b: 2
  },
  bar: {
    c: "12",
    d: 18
  }
}

const value = deepValue(obj, 'foo', 'a')

const returnWhatWasPassIn = <TVal,>(val: TVal): TVal => {
  return val
}
