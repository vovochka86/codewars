Array.prototype.numberOfOccurrences = function(val) {
var count = 0;

for (var i =0, n= this.length; i<n; i+=1){
   if (this[i]===val) {count+=1};
}
return count;
}
