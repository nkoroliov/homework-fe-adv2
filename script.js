let numberN = Number(prompt("Введіть число N"));         
while (Number.isInteger(numberN) === false || numberN < 0 || numberN == '')  {
    alert("Поле вводу незаповнене або введене число не є цілим, введіть ціле число N")
    numberN = Number(prompt("Введене число не є цілим, введіть ціле число N"));
}

let numberM = Number(prompt("Введіть число M"));  
while (Number.isInteger(numberM) === false || numberM < 0 || numberN == '')  {
    alert("Поле вводу незаповнене або введене число не є цілим, введіть ціле число M")
    numberM = Number(prompt("Введене число не є цілим, введіть ціле число M"));
}

while (numberN > numberM){
    alert("Число N є більше чим число M, введіть коректне значення")
    numberM = Number(prompt("Введіть число M"));
}

let evenNumber = confirm('Пропустити парні числа?');

let result = 0;

if(evenNumber == true){
    for(let i = numberN; i <= numberM; i++){
        if((i % 2) != 0)
            result += i;    
    }
}
    else if(evenNumber == false){
        for(let i = numberN; i <= numberM; i++){
            result += i;    
    }
}

console.log(`Пропустити парні числа?: ${evenNumber}
Результат: ${result}`);