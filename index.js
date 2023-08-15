function formatTip (value) {
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return '$' + value
}

function formatSplit (value) {
    if (value == 1) return value + ' Person'
    return value + ' People'
}

function update (){
    let bill = Number(document.getElementById ("yourBill").value)
    let percentTip = document.getElementById ("tipInput").value
    let split = document.getElementById ('splitInput').value

    let tipValue = bill * (percentTip / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split
    console.log(billEach)

    document.getElementById ('tipPercent').innerHTML = percentTip + '%'
    document.getElementById ('tipValue').innerHTML = formatTip (tipValue)
    document.getElementById ('totalWithTip').innerHTML = formatTip (billTotal)
    document.getElementById ('splitValue').innerHTML = formatSplit (split)
    document.getElementById ('billEach').innerHTML = formatTip (billTotal / split)
}
