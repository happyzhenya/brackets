module.exports = function check(str, bracketsConfig) {
  // your solution
  if ( str.length % 2 == 1 ) {return false}

  for ( let i = 0; i < bracketsConfig.length; i++ ) {
    let bracketsPairs = bracketsConfig[i].join('')

    if ( str.includes(bracketsPairs) ) {
      str = str.replace(bracketsPairs, '')
      i = -1
    }
  }
  return str.length === 0
}