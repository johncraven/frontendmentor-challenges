
// date setup
const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
const today = new Date()
const dayOfWeek = weekdays[today.getDay()]

async function getExpenses() {
    const response = await fetch("data.json");
    const json = await response.json();
    return json
}

function updateChart(expenses) {
    console.log(expenses)
    let maxVal = expenses.map(x => x.amount).reduce((a, b) => a < b ? b : a);
    let maxHeight = 75;
    let scaleFactor = maxHeight / maxVal;

    for (let expense of expenses) {
        let bar = document.querySelector(`#val-${expense.day}`);
        let height = expense.amount * scaleFactor;

        document.querySelector(`#val-${expense.day} .chart-value-detail`).textContent = `$${expense.amount}`;

        bar.style.height = `${height}%`
        if (expense.day == dayOfWeek) {
            document.querySelector(`#val-${expense.day} .bar`).style.backgroundColor = "var(--clr-secondary)";
            // bar.style.backgroundColor = "var(--clr-secondary)"
        }
    }
}

getExpenses().then(expenses => updateChart(expenses));