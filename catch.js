let foodPromise = new Promise((resolve, reject) => {
    let isFoodReady = false;
    if (isFoodReady) {
        resolve("🍔 Food is ready!");
    } else {
        reject("❌ Food is not ready!"); // ❌ This triggers an error
    }
});

foodPromise
    .then(result => console.log(result))
    .catch(error => console.log("Caught an error:", error));