//defining named Functions

function add(x, y) {

    return x + y;
}

function isPrime(n)  {

    let flag = true;
    for(let i=2 ; i<=n/2; i++){

        if(n%i === 0){
            flag = false;
            break;


        }
    }
     return flag;
     //return flag ? "Prime number" : "Not a prime number"
} 