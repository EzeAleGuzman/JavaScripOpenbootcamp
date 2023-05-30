

function fibonacci(num) {
    let list =[];
    let a = 0;
    let b = 1;

    while (list.length < num)   {
        list.push(b);
        let suma = a;
        a = b;
        b = suma + b

    }
    return list

}

console.log(fibonacci(6));