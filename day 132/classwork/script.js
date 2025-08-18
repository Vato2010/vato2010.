let promise = new Promise((resolve, reject) => {
    let isphoneavaliable = true;

    if(isphoneavaliable){
        resolve("phone is available");
    } else {
        reject("sorry man, no more phones is available");
    }
});

promise
    .then(res => console.log('yes it is', res))
    .catch(err => console.log('nah sorry', err))
    .finally(() => console.log('promise is done'));