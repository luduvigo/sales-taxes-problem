const { BasketElement } = require("../src/basket-element")

test('Should create new element with no taxes - chips', () => {
    const basketElement = new BasketElement(1, 'chips', 3.60)
    expect(basketElement.itemPrice).toEqual(3.60)
    expect(basketElement.itemTaxes).toEqual(0)
    expect(basketElement.total).toEqual(3.60)
})

test('Should reate new element with VAT taxes - laptop', () => {
    const basketElement = new BasketElement(1, 'laptop', 1160.60)
    expect(basketElement.itemPrice).toEqual(1160.60)
    expect(basketElement.itemTaxes).toEqual(116.10)
    expect(basketElement.total).toEqual(1276.70)

})

test('Should create new element with duty taxes - imported chips', () => {
    const basketElement = new BasketElement(1, 'imported chips', 3.60)
    expect(basketElement.itemPrice).toEqual(3.60)
    expect(basketElement.itemTaxes).toEqual(0.20)
    expect(basketElement.total).toEqual(3.80)

})

test('Should create new element with VAT and duty taxes - imported laptop', () => {
    const basketElement = new BasketElement(1, 'imported laptop', 1160.60)
    expect(basketElement.itemPrice).toEqual(1160.60)
    expect(basketElement.itemTaxes).toEqual(174.1)
    expect(basketElement.total).toEqual(1334.70)
})

test('Should send Error if null units', () => {
    try {
        new BasketElement(null, 'imported laptop', 1160.60)
    } catch (error){
        expect(error).not.toBeNull()
    }
})

test('Should send Error if null item', () => {
    try {
        new BasketElement(2, null, 11.60)
        
    } catch (error){
        expect(error).not.toBeNull()
    }
})

test('Should send Error if we pass a string as unitPrice', () => {
    try {
        new BasketElement(null, 'imported laptop', 'rock')
    } catch (error){
        expect(error).not.toBeNull()
    }
})

test('Should check item with duty taxes', () => {
    const basketElement = new BasketElement(3, 'box of imported chocolates', 11.25)
    expect(basketElement.itemPrice).toEqual(11.25)
    expect(basketElement.itemTaxes).toEqual(0.60)
    expect(basketElement.total).toEqual(35.55)
})