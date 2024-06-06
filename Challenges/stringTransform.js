function transformString(input) {
    const length = input.length;
    let result = input;
  
    if (length % 15 === 0) {
      result = result.split('').reverse().join('');
  
      result = result
        .split('')
        .map((char) => char.charCodeAt(0))
        .join(' ');
    } else if (length % 3 === 0) {
      result = result.split('').reverse().join('');
    } else if (length % 5 === 0) {
      result = result
        .split('')
        .map((char) => char.charCodeAt(0))
        .join(' ');
    }
  
    return result;
}