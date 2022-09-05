let data = JSON.parse(localStorage.getItem("data")) || [];
let currentName = localStorage.getItem("currentName")
let currentEmail = localStorage.getItem("currentEmail")

currentName = currentName.split('')
currentName[0] = currentName[0].toUpperCase()
currentName = currentName.join('')

document.querySelector('#welcome').innerText = 'Welcome ' + currentName

// click transfer
document.querySelector('#transferForm').addEventListener('submit', function (event) {
    event.preventDefault()
    transferMoney()
    updateBalance()
})

// click loan
document.querySelector('#loanForm').addEventListener('submit', function (event) {
    event.preventDefault()
    getLoan()
    updateBalance()
})

let date = new Date().getDate()
let month = new Date().getMonth() + 1
let year = new Date().getFullYear()
let today = `${date}/${month}/${year}`

///////////// transfer money ///////////////
function transferMoney() {
    let form = document.querySelector('#transferForm')

    let person = form.transferTo.value
    let amount = form.transferAmount.value

    data.forEach(element => {
        if (person === element.email) {
            element.balance.push(+amount)
            element.time.push(today)
        }

        if (currentEmail === element.email) {
            element.balance.push(-amount)
            element.time.push(today)
        }
    });

    localStorage.setItem("data", JSON.stringify(data))

    form.transferTo.value = ''
    form.transferAmount.value = ''
}

///////////// get loan ///////////////
function getLoan() {
    let form = document.querySelector('#loanForm')

    let amount = form.loanAmount.value

    data.forEach(element => {

        if (currentEmail === element.email) {
            element.balance.push(+amount)
            element.time.push(today)
        }
    });

    localStorage.setItem("data", JSON.stringify(data))

    form.loanAmount.value = ''
}

///////////// update balance //////////
function updateBalance() {
    document.querySelector('#balanceChart').innerHTML = ''
    data.forEach(element => {
        if (element.email === currentEmail) {
            for (let i = 0; i < element.balance.length; i++) {
                let ind = document.createElement('p')
                let type = document.createElement('p')
                let date = document.createElement('p')
                let bal = document.createElement('h3')
                let div = document.createElement('div')

                ind.innerText = i + 1
                if (element.balance[i] < 0) {
                    type.innerText = 'WITHDRAW'
                    type.setAttribute('id', 'withdraw')
                } else if (element.balance[i] > 0) {
                    type.innerText = 'DEPOSITE'
                    type.setAttribute('id', 'deposit')
                }
                date.innerText = element.time[i]
                bal.innerText = element.balance[i]

                div.append(ind, type, date, bal)
                document.querySelector('#balanceChart').insertAdjacentElement('afterbegin', div)

            }
        }
    });

}
updateBalance()