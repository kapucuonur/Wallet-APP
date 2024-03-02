let balance = 0;
let totalIncome = 0;
let totalExpense = 0;


function updateSummary() {
    document.getElementById('income').textContent = totalIncome.toFixed(2);
    document.getElementById('expense').textContent = totalExpense.toFixed(2);
    document.getElementById('remaining').textContent = balance.toFixed(2);
}

function updateBalance() {
    document.getElementById('balance').textContent = balance.toFixed(2);
}

function addTransaction() {
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (!date || !description || isNaN(amount)) {
        alert('Please fill all fields and enter a valid amount!');
        return;
    }

    if (type === 'income') {
        balance += amount;
        totalIncome += amount;
    } else {
        balance -= amount;
        totalExpense += amount;
    }

    updateBalance();
    updateSummary();

    const summaryTransactionList = document.getElementById('summary-transaction-list');
    const summaryListItem = document.createElement('li');
    summaryListItem.textContent = `${date} - ${description}: ${amount.toFixed(2)} € (${type})`;
    summaryTransactionList.appendChild(summaryListItem);

    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = '';

    // Reset input fields after adding transaction
    document.getElementById('date').value = '';
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}

function clearTransactions() {
    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = '';
    balance = 0;
    totalIncome = 0;
    totalExpense = 0;
    updateBalance();
    updateSummary();
}



