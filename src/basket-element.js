const isItemTaxFree = require("./utils/no-taxable-items");

const IMPORTED_LABEL = "imported";

//BasketElement holds the information for a single element in the Basket (one element can contains multiple units)
class BasketElement {
  constructor(units, item, itemPrice) {

    if (
        (!isNaN(units)) &&
        (!isNaN(itemPrice)) &&
        (typeof item === 'string' || item instanceof String)
    ) {
        this.units = parseInt(units),
        this.item = item,
        this.itemPrice = parseFloat(itemPrice),
        this.itemTaxes = this.calculateTaxes(item, itemPrice)
        //Multiplying and dividing by 100 to get two decimal digits
        this.total = Math.round((this.itemPrice + this.itemTaxes) * this.units * 100) / 100;
    } else {
      throw new Error("Wrong params in BasketElement constructor");
    }
  }

  //Function that calculate taxes for a single unit of an item
  calculateTaxes(item, itemPrice) {
    let taxes = 0;
    if (!isItemTaxFree(item)) {
      taxes = itemPrice * 0.1;
    }
    if (item.includes(IMPORTED_LABEL)) {
      taxes += itemPrice * 0.05;
    }
    //Multiplying and dividing by 20 to get two decimal digits rounded to 0.05
    return Math.round(taxes * 20) / 20;
  }
}

module.exports = {
  BasketElement,
};
