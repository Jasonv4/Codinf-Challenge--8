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
