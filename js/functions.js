const newRowButton = document.getElementById('newRowButton')
const jokerTable = document.getElementById('jokerTable')
const rowCountElement = document.getElementById('rowCount')

let rowCount = 0

newRowButton.addEventListener('click', function() {
    addJokerRow()
})

function addJokerRow() {
    const row = jokerTable.insertRow()

    for (let i = 0; i < 7; i++) {
        const cell = row.insertCell()
        cell.textContent = Math.floor(Math.random() * 10)
        cell.classList.add('jokerCell')
    }

    rowCount++
    rowCountElement.textContent = rowCount
}
