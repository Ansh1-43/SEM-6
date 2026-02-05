function myFunction() {
  console.log("Starting a task...");
  
  let sum = 0;

  for (let i = 0; i < 100000000; i++) {
    sum += 1;
  }

  console.log("Task time finished");
  return sum;
}

console.log("Before the function call");

let result = myFunction();

console.log("After the function call");
console.log("Result:", result);
