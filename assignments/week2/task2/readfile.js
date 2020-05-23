
const FS = require("fs");
const FORMAT_DISTANCE_STRICT = require("date-fns/formatDistanceStrict");
const VN_LOCAL = require("date-fns/locale/vi");

const P = new Promise((resolve, reject) => {
    FS.readFile("products.json", (err, data) => {
        if (err) {
            reject(err);
            console.log(err);
        } else {
            resolve(JSON.parse(data)); // in the case of success, control flow goes to the then block with the content of the file.
        }
    });
})
  .then((value) => {
      console.log(`Number of Product: ${value.length}`);
      value.forEach((p) => {
          console.log(
              `${p.id} - ${p.name} - ${formatPriceWithCommas(p.price) + "VND"} - Cập nhật cách đây ${calculateDistanceDate(convertToDate(p.dateUpdated))}`
          );
      });
  })
    .catch((err) => {
        console.log(err);
  });

function convertToDate(dateStr) {
    return new Date(dateStr);
}

function calculateDistanceDate(date) {
    return FORMAT_DISTANCE_STRICT(date, new Date(), {locale: VN_LOCAL});
}

function formatPriceWithCommas(price) {
    price = price.toString();
    const pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(price)) {
      price = price.replace(pattern, "$1,$2");
    }
    return price;
}
