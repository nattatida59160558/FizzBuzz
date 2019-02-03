function fizzBuzz(num) {
    var sum = ''
    if (num % 3 == 0) {
        sum = sum + 'Fizz'
    }if (num % 5 == 0) {
        sum = sum + 'Buzz'
    }
    else if(num % 3 != 0 && num % 5 != 0){
        sum = ''
        if (num % 10 == 3 || parseInt(num / 100) == 3|| parseInt(num / 10 )== 3) {
            sum = sum + 'Fizz'
        }if (num % 10 == 5 || parseInt(num / 100 )== 5|| parseInt(num / 10 )== 5) {
            sum = sum + 'Buzz'
        }else if(sum==''){
            return num
        }
        return sum
    }
    return sum

}
for(var i=1;i<106;i++){
    console.log(fizzBuzz(i))
}
module.exports = fizzBuzz;