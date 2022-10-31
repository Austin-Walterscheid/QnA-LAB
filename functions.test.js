const {returnTwo, greeting, add} = require(`./functions.js`)

test(`This should return 2`, () => {
    expect(returnTwo()).toBe(2)
})

test(`this should retun Hello, James`, () => {
    expect(greeting(`James`)).toBe(`Hello, James.`)
})

test(`This should return Hello Jill`, () => {
    expect(greeting(`Jill`)).toBe(`Hello, Jill.`)
})

test(`expect add (5,9) to be 14`, () => {
    expect(add(5,9)).toBe(14)
})