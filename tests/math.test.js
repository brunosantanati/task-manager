const { calculateTip } = require('../src/math')

/*test('Hello world!', () => {

})

test('This should fail!', () => {
    throw new Error('Failure!')
})*/

test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
})