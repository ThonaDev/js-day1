let isFoodReady = true;

let foodPromise = new Promise(function(resolve, reject) {
    if (isFoodReady) {
        resolve("Food is ready!");
    } else {
        reject("Food is not ready!");
    }
});

// Using the promise
foodPromise
    .then(function(result) {
        console.log(result);   // success
    })
    .catch(function(error) {
        console.log(error);    // error
    });


    