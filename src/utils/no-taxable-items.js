//This is a not exaustive list of non-taxable items
const noTaxableItems = [
    'chocolate',
    'salad',
    'chocolates',
    'pills',
    'book',
    'chips',
    'tomato',
    'salad',
    'vaccine',
]

const isItemTaxFree = (item) =>{
    let result = false
    item.split(' ').forEach(element => {
        if(noTaxableItems.includes(element)) result = true
    });
    return result
}

module.exports = isItemTaxFree