export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  const newArr = [...array];
  for (const value of array) {
    newArr[idx] = appendString + value;
    idx += 1;
  }

  return newArr;
}