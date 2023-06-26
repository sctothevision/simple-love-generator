const firstName = prompt("Напишите первое имя"),
    secondName = prompt("Напишите второе имя")

const randomNumber = (Math.floor(Math.random() * 100))



if (randomNumber < 33 && firstName != null && secondName != null && firstName != "" && secondName != ""){
    alert(`Результат совместимости имён ${firstName} и ${secondName} равен ${randomNumber},поэтому Вам стоит поискать другого человека`)
} else if (randomNumber >= 33 && randomNumber < 66 && firstName != null && secondName != null && firstName != "" && secondName != "") {
    alert(`Результат совместимости имён ${firstName} и ${secondName} равен ${randomNumber},совместимость хорошая, но может быть лучше для Вас`)
}else if (randomNumber >= 66 && firstName != null && secondName != null && firstName != "" && secondName != "") {
    alert(`Результат совместимости имён ${firstName} и ${secondName} равен ${randomNumber},совместимость бесподобная`) 
}else {
    alert('Упс...Каких-то данных не хватает - попробуйте ещё раз')
}



