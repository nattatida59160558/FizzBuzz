const fizzBuzz = require('./fizzBuzz')

/*test("A number is fizz if it is divisible by 3 or if it has a 3 in it"), () => {
    expect(fizzBuzz(1)).toBe(1)
})*/
test("5 มี 5 อยู่และ หาร 5 ลงตัว Buzz",()=>{
    expect(fizzBuzz(5)).toBe('Buzz')
    
})

test("3 หาร 3  Fizz",()=>{
    expect(fizzBuzz(3)).toBe('Fizz')
    
})

test("13 มี 3 Fizz",()=>{
    expect(fizzBuzz(13)).toBe('Fizz')
    
})

test("15 หาร 3 5 FizzBuzz",()=>{
    expect(fizzBuzz(15)).toBe('FizzBuzz')
    
})

test("35 หาร 5 Buzz",()=>{
    expect(fizzBuzz(35)).toBe('Buzz')
    
})

test("30 หาร 3 5 FizzBuzz",()=>{
    expect(fizzBuzz(30)).toBe('FizzBuzz')
    
})

test("100 หาร 5 Buzz",()=>{
    expect(fizzBuzz(100)).toBe('Buzz')
    
})

test("105 หาร 3 5 Buzz",()=>{
    expect(fizzBuzz(105)).toBe('FizzBuzz')
    
})
test("6 หาร 3 Fizz",()=>{
    expect(fizzBuzz(6)).toBe('Fizz')
    
})


