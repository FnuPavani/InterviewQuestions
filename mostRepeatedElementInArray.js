// eBay interview question
/* 
In eBay, we have been selling different items over the years. Now we have decided to rank the items. Assume that you are given a stream/list of items, that are bought on eBay,
the stream contains the categories of items purchased by the buyers, so if a particular item appears most number of times in the stream then it is ranked #1 and so on. 
Write a method which can take in a stream of items (this can be a simple list of itemId which are integers) and return the item (or itemId) which is purchased
most number of times i.e., #1 item.
*/

const mostRepeatedElement = function(arr){
  let count = 0;
  let repeated = 0;
  arr.reduce((acc,data)=> {
    if(data in acc){
      acc[data]++;
    } else {
      acc[data] = 1;
    }
    if(acc[data]>count){
      count = acc[data];
      repeated = data;
    }
    return acc;
  },{})
  return "The number "+repeated+" is repeated "+count+" many times";
}
console.log(mostRepeatedElement([2, 1, 53, 3, 1, 532, 2, 0, 291, 3, 1, 1, 3, 2]))

// Output >> "The number 1 is repeated 4 many times"
