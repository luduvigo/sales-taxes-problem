const { createBasket } = require("../src/cash-register")


test('Test first example input', async (done) => {

    const basket = await createBasket('../static/input-1.txt')
    expect(basket.elements).toHaveLength(3)
    done()
})

test('Test second example input', async (done) => {

    const basket = await createBasket('../static/input-2.txt')
    expect(basket.elements).toHaveLength(2)
    done()
})

test('Test third example input', async (done) => {

    const basket = await createBasket('../static/input-3.txt')
    expect(basket.elements).toHaveLength(4)
    done()
})

test('Test empty input', async (done) => {

    const basket = await createBasket('../static/input-empty.txt')
    expect(basket.elements).toHaveLength(0)
    done()
})

test('Test random empty rows', async (done) => {
    const basket = await createBasket('../static/input-with-random-empty.txt')
    expect(basket.elements).toHaveLength(4)
    done()
})


test('Test spaces in same row and empty rows', async (done) => {
    const basket = await createBasket('../static/input-with-spaces-in-row.txt')
    expect(basket.elements).toHaveLength(4)
    done()
})