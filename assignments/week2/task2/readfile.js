const fs = require('fs');

new Promise((resolve,reject)=>{
    fs.readFile('products.json',(err, data)=>{
        if (err) {
            reject(err); // in the case of error, control flow goes to the catch block with the error occured.
            console.log(err);
        }
        else {
            resolve(data);  // in the case of success, control flow goes to the then block with the content of the file.
            let json = JSON.stringify(data);
            console.log(json.toString);
        }
    });
})
.catch((err)=>{
    throw err; //  handle error here.
});







// let products = new Array;
// function readContent(products) {
//     fs.readFile('products.json', (err, data) => {
//         if(err) throw err;
//         let product = JSON.parse(data);
//         addToList(products, product);
//     });
//     return products;
// }

// function addToList(products, content) {
//     products.push(content);
//     console.log(content);
// };

// products = readContent(products);

// console.log('This is after the read call');
