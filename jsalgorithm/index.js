//question1----Convert Fahr to Celsius

function convertFahrToCelsius(F){
    if (!isNaN(F) === false){
        if (Array.isArray(F)){
            return JSON.stringify(F) + 'is not a valid number but a/an array' 
        }
        return JSON.stringify(F) + 'is not a valid number but a/an ${typeof F}'
    }
    return((F - 32) * 5 / 9).toFixed(4)
}

let result = convertFahrToCelsius(0)

let result1 = convertFahrToCelsius("0")

let result2 = convertFahrToCelsius([1, 2, 3])

let result3 = convertFahrToCelsius({temp: 0 })





console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);






//question 2 ----checkYuGiOh

const checkYuGiOh = (n) => {
    let arr =[];
    if (!isNaN(n) === false){
        return 'invalid parameter: ' + JSON.stringify(n)
    }else{
        for(let i = 1; i <=n; i++){
            if (n === 1){
                return 1
            }else{
                if(i % 2 === 0 && i %3 === 0 && i % 5 === 0){
                    arr.push("yu-gi-oh");
                }else if(i % 2 === 0 && i % 3 === 0){
                    arr.push(yu-gi);
                }else if(i % 2 === 0 && i % 5 === 0){
                    arr.push("yu-oh");
                }else if(i % 3 === 0 && i % 5 === 0){
                    arr.push("gi-oh");
                }else if(i % 2 === 0){
                    arr.push("yu");
                }else if(i % 3 === 0){
                    arr.push("gi");
                }else if(i % 5 === 0){
                    arr.push("oh");
                }else{
                    arr.push(i);
                }

            }
        }
        return arr;
    }
};

let result4 = checkYuGiOh(10)
console.log(result4);

let result5 = checkYuGiOh("5")
console.log(result5);

let result6 = checkYuGiOh("fizzbuz is meh")
console.log(result6);