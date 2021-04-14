const { 
    createBasket,
    printReceipt,
} = require('./cash-register')
''
const FILE_INPUT_1 = '../static/input-1.txt'
const FILE_INPUT_2 = '../static/input-2.txt'
const FILE_INPUT_3 = '../static/input-3.txt'

//Create basket and print receipt for each customer
const serveCustomer = async(inputFile) => {
    const basket = await createBasket(inputFile)
    printReceipt(basket)
}

//Serve some customers getting their basket elements from provided input files
const serveCustomersQueue = async() => {
    await serveCustomer(FILE_INPUT_1)
    console.log()
    await serveCustomer(FILE_INPUT_2)
    console.log()
    await serveCustomer(FILE_INPUT_3)
}

//This executes our program 
serveCustomersQueue()
