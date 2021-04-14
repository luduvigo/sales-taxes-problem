const fs = require('fs')
const path = require('path')
const Basket = require('./basket')

const createBasket = async (input) => {

    const itemsForBasket = await _getInputData(input)
    let rows = itemsForBasket.replace('at ', '').split('\n')
    const basket = new Basket()
    rows.forEach((row) => {
        //Clean input
        row = row.replace(/ {1,}/g,' ').trim()
        //Create and add new Basket Element
        createBasketElementFromString(row, basket)      
    });
    return basket
}

const printReceipt = (basket) => {
    basket.printReceipt()
}

const createBasketElementFromString = (inputString, basket) => {
    const elements = inputString.split(' ')
    const units = elements[0]
    const item = elements.splice(1, elements.length - 2).join(' ')
    const itemPrice = elements[elements.length - 1]
    basket.addElementToBasket(units, item, itemPrice)
    return basket
}

const _getInputData = async (fileName) => {
    const filePath = path.join(__dirname, fileName)
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (error, data) => {
            if(error) {
                reject(error)
            }
            resolve(data.toString())         
        })
    })
}

module.exports = {
    createBasket,
    printReceipt
}