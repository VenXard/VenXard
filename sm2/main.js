let name = prompt ("Как тебя зовут?");

        let age = prompt ("Сколько тебе лет?");

        if (age < 20) {
            alert ("Тебе меньше 20")
        } 
        else {
            for (let i = 0; i < 5; i++) {
                alert ("Привет!")
            }
        }

        let want = confirm ("Хочешь учить Java?")
        
        if (want) {
            alert ("Супер!")
        }