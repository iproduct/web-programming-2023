function msgAfterTimeout(msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>
            // Math.random() > 0.3 ?
            // resolve(`${msg}: Hello ${who}!`)
            // : 
            reject('Error resolving promise')
            , timeout)
    })
}

msgAfterTimeout('', "Ivan", 1000)
    .then(msg => {
        console.log(`done after 1000ms:${msg}`);
        return msgAfterTimeout(msg, "Hristo", 2000)
        // throw msg + "Bar";
    })
    .then((msg) => {
        console.log(`done after 3000ms:${msg}`);
        return Promise.resolve("Demo finished");
    })
    .then(msg => console.log(msg))
    .catch(err => {
        console.log('Error: ' + err);
        return 'After finish';
    })
    .then(
        msg => console.log("Success:" + msg), //Success
        err => console.log('Error 2: ' + err) //Error
    )
// .finally(() => console.log("In finally"));