// PayPal interview question

// write a function in JavaScript that takes as input a string of words and returns the word that occurs the most frequently.
// input: "the, cat jumped over the fence"
// output: the


var repeatedWordInTheString = function(s){
  if(s.length === 0) return "Empty string";
  let s_arr = s.split(" ");
  let result = {};
  s_arr.map((data,index)=>{
    data =data.replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g, '');
    result[data] = (result[data] || 0) + 1;
  });
  let result_arr = Object.values(result);
  const max = Math.max(...result_arr);
  if(max>1){
    let maxRepeatedString = Object.keys(result).find(key=>result[key]===max);
    return maxRepeatedString;
  }
  return "There is no repeated word in the string";
}
console.log(repeatedWordInTheString(stringHere));

// Output >> stringHere -> ""  - "Empty string"
                           "the cat jumped over the fence" - "the"
                           "the, cat jumped over the fence" - "the"
                           "cat jumped over the fence" - "There is no repeated word in the string"
