const Basket = require("../src/basket")

test('Create empty basket', () =>{
    const basket = new Basket()
    expect(basket.elements).toHaveLength(0)
    expect(basket.netTotal).toBe(0)
    expect(basket.taxes).toBe(0)
    expect(basket.total).toBe(0)
})

test('Create basket with no-tax element', () =>{
    const basket = new Basket()
    basket.addElementToBasket(2, 'book', 30.00)
    expect(basket.elements).toHaveLength(1)
    expect(basket.netTotal).toBe(60)
    expect(basket.taxes).toBe(0)
    expect(basket.total).toBe(60)
})

test('Create basket with tax element', () =>{
    const basket = new Basket()
    basket.addElementToBasket(2, 'lamp', 40.00)
    expect(basket.elements).toHaveLength(1)
    expect(basket.netTotal).toBe(80.00)
    expect(basket.taxes).toBe(8.0)
    expect(basket.total).toBe(88.00)
})

test('Create basket with several elements and different configurations', () =>{
    const basket = new Basket()
    basket.addElementToBasket(2, 'book', 22.30)
    basket.addElementToBasket(3, 'imported book', 40.00)
    basket.addElementToBasket(1, 'tomato', 1.00)
    basket.addElementToBasket(1, 'imported paint', 300.00)

    expect(basket.elements).toHaveLength(4)
    expect(basket.netTotal).toBe(465.60)
    expect(basket.taxes).toBe(51.00)
    expect(basket.total).toBe(516.60)
})

test('Create basket with no-tax element', () =>{
    const basket = new Basket()
    basket.addElementToBasket(null, 'book', 30.00)
    expect(basket.elements).toHaveLength(0)
})