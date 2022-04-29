const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dataTransction = [
    {id:1, text:"ค่าใช้จ่ายทั่วไป", amount:-500},
    {id:2, text:"ค่าหอ", amount:-4500},
    {id:3, text:"เงินเดือน", amount:+20000},
    {id:4, text:"งานเสริม", amount:+2000},
]

let transactions = dataTransction;

function init(){
    list.innerHTML = '';
    transactions.forEach(addDataToList);
    calculateMoney();
}

function addDataToList(transactions){
    const symbol = transactions.amount < 0 ? '-' : '+';
    const status = transactions.amount < 0 ? 'minus' : 'plus';
    const item = document.createElement('li');
    const result = formatnumber(Math.abs(transactions.amount));
    item.classList.add(status);
    item.innerHTML = `${transactions.text}<span>${symbol}${result}</span><button class="delete-btn" onclick="removeData(${transactions.id})">X</button>`;
    list.appendChild(item);
}

function formatnumber(n){
    return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function autoID(){
    return Math.floor(Math.random() * 1000000)
}

function calculateMoney(){
    const amounts = transactions.map(transactions => transactions.amount);
    const total = amounts.reduce((result, item) => (result += item), 0).toFixed(2);
    const income = amounts.filter(item => item > 0).reduce((result, item) => (result += item), 0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((result, item) => (result += item), 0) * -1).toFixed(2);
    
    balance.innerText = `฿`+formatnumber(total);
    money_plus.innerText=`฿`+formatnumber(income);
    money_minus.innerText=`฿`+formatnumber(expense);
}

function removeData(id){
    transactions = transactions.filter(transactions => transactions.id != id);
    init();
}

function addTransaction(e){
    e.preventDefault();
    if(text.value.trim() == '' || amount.value.trim() == ''){
        alert("คุณป้อนข้อมูลไม่ครบ !");
    }else{
        const data = {
            id:autoID(),
            text:text.value,
            amount:+amount.value,
        }
        transactions.push(data);
        addDataToList(data);
        calculateMoney();
        text.value = '';
        amount.value = '';
    }
}

form.addEventListener('submit', addTransaction);
init();