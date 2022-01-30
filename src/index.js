module.exports = function check(str, bracketsConfig) {
  // your solution
  if (bracketsConfig % 2===1) {
    return false;
  }
  const openBraskets=[];
  for (let i = 0; i <str.lenght; i ++){
     
     let brasketsPairIndex=bracketsConfig.findIndex(el=>el.incudes(str[i]));
     if (-1===brasketsPairIndex) {break};
     if (0===bracketsConfig[brasketsPairIndex].indexOf(srt[i])){
      openBraskets.push(brasketsPairIndex)
     } else{
       if (openBraskets.pop()!==brasketsPairIndex){return false}
     }

  }
  return 0===openBraskets.lenght;
}
