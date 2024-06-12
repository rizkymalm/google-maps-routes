export function findObj(array, attr, value) {
  for (var i = 0; i < array.length; i += 1) {
    if (Array.isArray(array[i][attr])) {
      if (array[i][attr].indexOf(value) !== -1) {
        return i;
      }
    } else {
      if (array[i][attr] === value) {
        return i;
      }
    }
  }
}
