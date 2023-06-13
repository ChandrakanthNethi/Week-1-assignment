const calculateTotalSpentByCategory = require("./expenditure-analysis")
;
const transactions = [
    { itemName: 'Item 1', category: 'Category 1', price: 10, timestamp: '2023-06-13' },
    { itemName: 'Item 2', category: 'Category 2', price: 15, timestamp: '2023-06-13' },
    { itemName: 'Item 3', category: 'Category 1', price: 20, timestamp: '2023-06-13' },
    { itemName: 'Item 4', category: 'Category 2', price: 5, timestamp: '2023-06-13' },
    { itemName: 'Item 5', category: 'Category 1', price: 12, timestamp: '2023-06-13' },
  ];
  
  const totalSpentByCategory = calculateTotalSpentByCategory(transactions);
  console.log(totalSpentByCategory);
  