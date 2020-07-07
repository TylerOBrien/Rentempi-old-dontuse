/**
 * Exports
*/

/**
 * 
 */
export function removeEmptyFormFields(fields) {
  return Object.fromEntries( Object.entries(fields).filter(entry => !!entry[1]?.length) );
}

/**
 * 
 */
export function plural(str) {
  if (str?.length && str[str.length-1] !== 's') {
    if (str[str.length-1] === 'y') {
      str = str.slice(0, str.length-1) + 'ies';
    } else {
      str = str + 's';
    }
  }

  return str;
}

/**
 * 
 */
export function singular(str) {
  if (str?.length && str[str.length-1] === 's') {
    if (str.length > 3 && str.slice(-3) === 'ies') {
      str = str.slice(0, str.length-3) + 'y';
    } else {
      str = str.slice(0, str.length-1);
    }
  }

  return str;
}

/**
 * 
 */
export function ucfirst(str) {
  return str && str[0].toUpperCase() + str.slice(1);
}

/**
 * 
 */
export function centsToCurrencyString(cents) {
  return `$${ (cents / 100).toFixed(2) }`;
}

/**
 * 
 */
export function getObjectExcept(object, except) {
  const clone = { ...object };

  (
    Array.isArray(except) ? except : [except]
  )
    .forEach(key => { delete clone[key]; });

  return clone;
}

/**
 * 
 */
export function getTruthyStrings(strings, delimeter=' ') {
  return !Array.isArray(strings) ? strings
    : strings.map(str =>
        Array.isArray(str)
          ? getTruthyStrings(str)
          : str)
      .filter(str => str)
      .join(delimeter);
}