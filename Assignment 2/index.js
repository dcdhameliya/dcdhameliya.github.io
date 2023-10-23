// Function to reverse a string
function reverse(str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed)
    return reversed;
}


// Function to check if a series of number is a palindrome
function palindrome(number) {
    if (number < 0 || (number % 10 === 0 && number !== 0)) {
        return false;
    }

    let reversedNumber = 0;
    let originalNumber = number;

    while (number > 0) {
        const digit = number % 10;
        reversedNumber = reversedNumber * 10 + digit;
        number = Math.floor(number / 10);
    }

    return originalNumber == reversedNumber;
}

// Function to count a total of bill
function totalBill(bill,tip) {
    return bill + tip*bill/100;
}