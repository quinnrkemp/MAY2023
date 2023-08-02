// CHALLENGE NAME- PILLARS

// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. 
// Your function accepts three arguments:

// 1. number of pillars (≥ 1);
// 2. distance between pillars (10 - 30 meters);
// 3. width of the pillar (10 - 50 centimeters).

// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

// ******MY ANSWER*******

function pillars(numPill, dist, width) {
    let a= dist*100
    let b= numPill-1
    let c= (numPill-2) * width
    let result= (b * a) + c 
    if ( result < 1 ) {
      return 0
    }
    else {  
    return result
    }
    // your code here
  }
  
  