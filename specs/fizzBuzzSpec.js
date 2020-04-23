describe("fizzBuzz function", function() {
    beforeEach(function(){
        fizzbuzz = new fizzBuzz();
        
    })

    describe("does stuff", function() {
        it("Returns Fizz if number is divisible by 3", function(){
            expect(fizzBuzz(3)).toBe("Fizz")
            })
        it("Returns Buzz if number divisible by 5", function(){
            expect(fizzBuzz(5)).toBe("Buzz")
        })
        it("Returns Buzz if number divisible by 3 and 5", function(){
            expect(fizzBuzz(15)).toBe("FizzBuzz")
        })
    })
   

})