let expenses = [];
let currentId = 1;

function addExpense(title, amount, category) {
  const expense = {
    id: currentId++,
    title: title,
    amount: amount,
    category: category,
  };

  expenses.push(expense);
}

function printAllExpenses() {
  expenses.forEach((i) => {
    console.log(`${i.id}. ${i.title} — ${i.amount}₽ (${i.category})`);
  });
}

function getTotalAmount() {
  let total = 0;

  expenses.forEach((i) => {
    total += i.amount;
  });

  console.log("Общая сумма расходов:", total + "₽");
  return total;
}

function getExpensesByCategory(category) {
  let filtered = expenses.filter((i) => i.category === category);

  let total = 0;
  filtered.forEach((i) => {
    total += i.amount;
  });

  console.log(`Потрачено на "${category}":`, total + "₽");
  return filtered;
}

function findExpenseByTitle(text) {
  return expenses.find((i) => i.title.includes(text));
}

function deleteExpenseById(id) {
  expenses = expenses.filter((i) => i.id !== id);
}

function printCategoryStats() {
  let stats = {};

  expenses.forEach((i) => {
    if (!stats[i.category]) {
      stats[i.category] = 0;
    }
    stats[i.category] += i.amount;
  });

  console.log("Статистика по категориям:");
  for (let category in stats) {
    console.log(category + ": " + stats[category] + "₽");
  }
}

function isValid(title, amount, category) {
  return title && amount > 0 && category;
}

const expenseTracker = {
  expenses,
  addExpense,
  getTotalAmount,
  getExpensesByCategory,
  findExpenseByTitle,
  deleteExpenseById,
};

expenseTracker.addExpense("Кофе", 200, "Еда");
expenseTracker.addExpense("Метро", 60, "Транспорт");
expenseTracker.addExpense("Обед", 500, "Еда");

printAllExpenses();
expenseTracker.getTotalAmount()
getExpensesByCategory("Еда");
console.log(findExpenseByTitle("Кофе"));
printCategoryStats();
deleteExpenseById(2);
printAllExpenses();
