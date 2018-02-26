/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var result = 0;
  console.log(preferences.length);
  var numbers = [];	
  
  for(var i = 1; i < preferences.length+1; i++) {
	    
	  var a = preferences [i-1];
	  var b = preferences [a-1];
	  if (preferences [b-1] == i && a != b) {
			result++; numbers.push(a-1,b-1);
	   	}	
      }
	 
	return (Math.round(result/3));
			  
};
 