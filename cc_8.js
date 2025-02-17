//Task 1 Function Declaration 
function calculateSalary(baseSalary, bonus,taxRate) {
    const netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    console.log(`Net Salary: $${netSalary.toFixed(2)}`)
} // Function that computes net salary
calculateSalary(5000, 500, 0.1); // Expected output: "Net Salary: $5000.00"
calculateSalary(7000, 1000, 0.15); // Expected output: "Net Salary: $6950.00"


//Task 2 Function Expression 
function calculateDiscount(price, discountRate) {
    let finalPrice = price - (price * discountRate);
    return `Final Price: $${finalPrice.toFixed(2)}`
} // Function that determines final price 
console.log(calculateDiscount(100, 0.2)); // Expected output: "Final Price: $80.00"
console.log(calculateDiscount(250, 0.15)); // Expected output: "Final Price: $212.50


//Task 3 Arrow Function 
const calculateServiceFee = (amount, serviceType) => {
    let feeRate = 0;
    if (serviceType === "Premium") feeRate = 0.15;
    else if (serviceType === "Standard") feeRate = 0.10;
    else if (serviceType === "Basic") feeRate = 0.05;
    const fee = amount * feeRate;
    console.log(`Service Fee: $${fee.toFixed(2)}`)
} // Arrow Function that applies different fee based on type of service. 

calculateServiceFee(200, "Premium"); // Expected output: "Service Fee: $30.00"
calculateServiceFee(500, "Standard"); // Expected output: "Service Fee: $50.00"


//Task 4 Parameters and Arguments 
function calculateRentalCost(days, carType, insurance = false) {
        let dailyRate = 0
        if (carType === "Economy") dailyRate = 40;
        else if (carType === "Standard") dailyRate = 60;
        else if (carType === "Luxury") dailyRate = 100; 
        let totalCost = days *dailyRate;
        if (insurance) { totalCost += days * 20};
    console.log(`Total Rental Cost: $${totalCost}`)
} // Function that calculates car rental costs including insurance 
calculateRentalCost(3, "Economy", true); // Expected output: "Total Rental Cost: $180"
calculateRentalCost(5, "Luxury", false); // Expected output: "Total Rental Cost: $500"


//Task 5 Returning Values 
function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal, rate, time);
    return `Total Payment: $${totalPayment.toFixed(2)}`   
} // Function that returns total loan payment 
console.log(calculateLoanPayment(1000, 0.05, 2)); // Expected output: "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3)); // Expected output: "Total Payment: $6050.00"