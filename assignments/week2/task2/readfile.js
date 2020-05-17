const fs = require("fs");
const formatDistanceStrict = require("date-fns/formatDistanceStrict");
const vnLocale = require("date-fns/locale/vi");

const p = new Promise((resolve, reject) => {
  fs.readFile("products.json", (err, data) => {
    if (err) {
      reject(err); // in the case of error, control flow goes to the catch block with the error occured.
      console.log(err);
    } else {
      resolve(JSON.parse(data)); // in the case of success, control flow goes to the then block with the content of the file.
      // console.log(JSON.parse(data));
    }
  });
})
  .then((value) => {
    console.log(`Number of Product: ${value.length}`);
    value.forEach((p) => {
      console.log(
        `${p.id} - ${p.name} - ${
          formatPriceWithCommas(p.price) + "VND"
        } - Cập nhật cách đây ${calculateDistanceDate(
          convertToDate(p.dateUpdated)
        )}`
      );
    });
  })
  .catch((err) => {
    console.log(err); //  handle error here.
  });

function convertToDate(str) {
  return new Date(str);
}

function formatPriceWithCommas(price) {
  price = price.toString();
  const pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(price)) {
    price = price.replace(pattern, "$1,$2");
  }
  return price;
}

function calculateDistanceDate(dateUpdated) {
  return formatDistanceStrict(dateUpdated, new Date(), {
    locale: vnLocale,
  });
}

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
