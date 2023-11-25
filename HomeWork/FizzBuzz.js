function FizzBuzz(num){
    let result = "";
    for(let i=1; i<=num; i++){
        if(i%3==0 && i%5==0){
            result += "FizzBuzz";
        }else if(i%3==0 || i%5==0){
            result += "Fizz";
        }else{
            result += i;
        }
        if(i<num)
            result += ", ";
    }
    return result;
}
console.log(FizzBuzz(5));