const RL = require("readline");
const FS = require("fs");
const FORMAT = require('date-fns/format');
const XLSX = require('xlsx');

const WB = XLSX.utils.book_new();

const P = new Promise((resolve, reject) => {
    FS.readFile('products.json', (error, data) => {
        if(error) {
            reject(err);
            console.log(err);
        } else {
            resolve(JSON.parse(data));
        }
    });
})
.then((value) => {
    value.forEach(p => {
        const updated = FORMAT(new Date(p.dateUpdated), 'MM/dd/yyyy'); 
        p.updated = updated;
        delete p.dateUpdated;
    });
    buildWorkBook(WB, 'products.xlsx', buildWorkSheet(value), 'Page 1', true);
});

function buildWorkSheet(data) {
    return XLSX.utils.json_to_sheet(data);
}

function buildWorkBook(wb, wbName, ws, wsName, isSaveFile) {
    XLSX.utils.book_append_sheet(wb, ws, wsName);
    if(isSaveFile) {
        XLSX.writeFile(wb, wbName);
        console.log(`Save file [${wbName}] - successfully`)
    } else {
        return wb;
    }
}