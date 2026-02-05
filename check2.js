function myFunction() {
  console.log("Starting a task...");
    setTimeout(() => {
  let sum = 0;

  for (let i = 0; i < 100000000; i++) {
    sum += 1;
  }

    console.log("Task time finished");
    console.log("Result:", sum);
    console.log("Inside setTimeout (async task)");

}, 0);
}

myFunction();
console.log("After the function call");

