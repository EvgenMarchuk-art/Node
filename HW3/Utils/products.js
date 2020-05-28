const path = require('path');
const fsp = require('fs').promises;

const pathToProducts = path.join(process.cwd(),'data', 'products.json');


async function getProductsFile() {
    const fileContent = await fsp.readFile(pathToProducts);
    return  JSON.parse(fileContent);
}


async function writeToProductFile(product) {
    await fsp.writeFile(pathToProducts, JSON.stringify(product))

}

module.exports.getProductsFile = getProductsFile;
module.exports.writeToProductFile = writeToProductFile;

