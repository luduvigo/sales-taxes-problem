const { BasketElement } = require("./basket-element")

class Basket{

    constructor() {
        this.elements = [],
        this.netTotal = 0
        this.taxes = 0
        this.total = 0
    }

    //Add new element to the basket
    addElementToBasket(units, item, itemPrice){
        try {
            if(units && item && itemPrice){
                const element = new BasketElement(units, item, itemPrice)
                this.elements.push(element)
                this.netTotal += element.itemPrice * element.units
                this.taxes += element.itemTaxes * element.units
                this.total = Math.round((this.netTotal + this.taxes) * 100)/ 100
            }
        } catch (error){
            //Discard if error is thrown and ask the customer to fix the input
            console.log(`${item} not added. Wrong info passed. Scan again`)
        }
    }

    //Function that prints in the stdout the receipt generated for the basket 
    printReceipt(){
        if(this.elements.length){
            this.elements.forEach(element => {
                console.log(`${element.units} ${element.item}: ${element.total.toFixed(2)}`)
            });
            console.log(`Sales Taxes: ${this.taxes.toFixed(2)}`)
            console.log(`Total: ${this.total.toFixed(2)}`)
        }
    }
}

module.exports = Basket
