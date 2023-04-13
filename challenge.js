//Write your code here 
function balanced_brackets(str){
  const empty = []
  //opening
  const openingBrackets = "[{("
  //closing
  const closingBrackets = "]})"
  //pairs
  const pairsBrackets = {
')':'(',
 '}':'{',
 ']':'['
  }
  for (const char of str){
    //condition 
    if(openingBrackets.includes(char)){
      empty.push(char)
    }else if(closingBrackets.includes(char)){
      const lastBrackets = empty.pop()
      if(lastBrackets!==pairsBrackets[char]){
        return false;
      }
      
    }
  }
  
return empty.length === 0;
 
}

console.log(balanced_brackets('(hello)[world]'))
// => true

console.log(balanced_brackets('([)]'))
// => false

console.log(balanced_brackets('[({}{}{})([])]'))
// => true

module.exports =balanced_brackets