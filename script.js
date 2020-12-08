const dice = document.querySelectorAll('.diceIMG')
const rollBtn = document.querySelectorAll('.roll-die')
//KTE E BERA SE KUR KLIKOHEJ DISA HER NJERA PAS TJETRES PRISHEJ ANIMIMI
const dicesRolling = [false, false, false, false, false, false, false, false]

rollBtn.forEach((r, i) => {
    r.addEventListener('click', () => {
        //D2
        if(i  == 0)
            D2()
        //D4
        if(i  == 1)
            D4()
        //D6
        if(i  == 2)
            D6()
        //D8
        if(i  == 3)
            D8()
        //D10
        if(i  == 4)
            D10()
        //D12
        if(i  == 5)
            D12()
        //D20
        if(i  == 6)
            D20()
        //D100
        if(i  == 7)
            D100()
        if(!dicesRolling[i]) {
            dice[i].classList.add('rollAnm')
            dicesRolling[i] = true
            setTimeout(() => {
                dice[i].classList.remove('rollAnm')
                dicesRolling[i] = false
            }, 500)
        }
    })
})

function D2() {
    const number = Math.ceil(Math.random() * 2)
    document.getElementById('d2_input').value = number
}

function D4() {
    const number = Math.ceil(Math.random() * 4)
    document.getElementById('d4_input').value = number
}

function D6() {
    const number = Math.ceil(Math.random() * 6)
    document.getElementById('d6_input').value = number
}

function D8() {
    const number = Math.ceil(Math.random() * 8)
    document.getElementById('d8_input').value = number
}

function D10() {
    const number = Math.ceil(Math.random() * 10)
    document.getElementById('d10_input').value = number
}

function D12() {
    const number = Math.ceil(Math.random() * 12)
    document.getElementById('d12_input').value = number
}

function D20() {
    const number = Math.ceil(Math.random() * 20)
    document.getElementById('d20_input').value = number
}

function D100() {
    const number = Math.ceil(Math.random() * 100)
    document.getElementById('d100_input').value = number
}