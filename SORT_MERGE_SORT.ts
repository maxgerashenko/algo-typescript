let arr = [6,4,7,3,9,2,1];
function Merge(a, b){
  let c = [];
  let i = 0;
  let j = 0;
  
  while(i<a.length || j<b.length) {
    let min = (j === b.length || (a[i] <= b[j] && i < a.length )) ? 
      a[i++] : b[j++];
    c.push(min);
  }

  return c;
}

let n = 0; 
function MergeSort(arr) {
  if(arr.length === 1){
    return arr;
  }

  let split = arr.length/2 | 0;  
  let a = MergeSort(arr.slice(0,split));
  let b = MergeSort(arr.slice(split, arr.length));
  return Merge(a,b);
}

console.log(arr)
console.log(MergeSort(arr));
