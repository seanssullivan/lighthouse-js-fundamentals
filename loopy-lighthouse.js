for (let num = 100; num <= 200; num++) {
  let response = "";
  if (num % 3 === 0) {
    response += "Loopy";
  }
  if (num % 4 === 0) {
    response += "Lighthouse";
  }
  
  if (response) {
    console.log(response);
  }
  else {
    console.log(num);
  }
}