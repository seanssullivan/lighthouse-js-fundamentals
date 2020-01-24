function loopyLighthouse(range, multiples, words) {
  for (let num = range[0]; num <= range[1]; num++) {
    let response = "";
    if (num % multiples[0] === 0) {
      response += words[0];
    }
    if (num % multiples[1] === 0) {
      response += words[1];
    }
    
    if (response) {
      console.log(response);
    } else {
      console.log(num);
    }    
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);