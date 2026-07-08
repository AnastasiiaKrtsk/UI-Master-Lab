export const promise = new Promise((resolve) => {
  resolve('It worked! ');
});

promise.then((res) => console.log(res));
