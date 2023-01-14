const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("I have promised");
    }, 1000);
  } else {
    reject("I have failed");
  }
});

//success is in .then & failure is in .catch
//Can only call .then on a resolved promise. Not on a normal string
myPromise
  .then((value) => value + "!!!!")
  .then((newValue) => console.log(newValue))
  .catch((rejectValue) => console.log(rejectValue));
