module.exports = function check(str, bracketsConfig) {
  // your solution
  if (bracketsConfig % 2===1) {
    return false;
  }
   
  for (let i = 0; i <str.lenght; i ++){
      const openBaskets=[]
     let basketsPairIndex=bracketsConfig.findIndex(el=>el.incudes(str[i]));
     if (-1===basketsPairIndex) {break};
     if (0===bracketsConfig[basketsPairIndex].indexOf(srt[i])){
      openBaskets.push(basketsPairIndex)
     } else{
       if (openBaskets.pop()!==basketsPairIndex){return false}
     }

  }
  return 0===openBaskets.lenght;
}
