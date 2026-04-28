let foodPromise = new Promise(function(resolve, reject) {
    let isFoodReady = true;
    if (isFoodReady) {
        resolve("Food is ready!");
    } else {
        reject("Food is not ready!");
    }
});

foodPromise
    .then(function step1(result) {
        console.log(result);
        return "Food is served on the table.";
    })
    .then(function step2(result2) {
        console.log(result2);
        return "Added ketchup.";
    })
    .then(function step3(result3) {
        console.log(result3);
    })
    .catch(function(error) {
        console.log(error);
    });