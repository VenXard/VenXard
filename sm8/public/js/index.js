
function openModal() {
    const modal = document.querySelector(".modal");
    modal.classList.add('open');
    console.log(modal);
  }

  
  function closeModal() {
    const modal = document.querySelector(".modal");
    modal.classList.remove('open');
    console.log(modal);
  }



  async function deleteProfile(event, userId, token) {

    

    event.preventDefault();
  
    console.log(userId)
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${userId}`, {
        method: 'DELETE'
      });
      const deletedUsed = await response.json();

    

      closeModal()

      alert(`Удалили`);

      const profile= document.querySelector(".profile-content");
    profile.classList.add('delete');
    console.log(profile);

      
    } catch (error) {
      console.error('Упс, ошибочка', error);
      return;
    }
  }


// бургер
function openMenu() {
    const modal = document.querySelector(".menu");
    modal.classList.add('openburger');
    console.log(menu)
}

function closeMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.remove('openburger');
    console.log(menu)
}






function openLeft() {
  const contentLeft = document.querySelector(".content-left");
  const users = document.querySelectorAll(".User"); 
  const textContents = document.querySelectorAll(".text-content");

  contentLeft.style.width = "300px"; 
  users.forEach(user => user.classList.add('openLeft'));
  textContents.forEach(textContent => textContent.classList.add('openLeft'));
}

function closeLeft() {
  const contentLeft = document.querySelector(".content-left");
  const users = document.querySelectorAll(".User");
  const textContents = document.querySelectorAll(".text-content");

  users.forEach(user => user.classList.remove('openLeft'));
  textContents.forEach(textContent => textContent.classList.remove('openLeft'));
  contentLeft.style.width = "65px";
}


function toggleAccordion(element) {
  const contentAcc = element.closest(".content-accordion"); 
  const textAcc = contentAcc.querySelector(".main-accordion"); 
  const imgAcc = contentAcc.querySelector("img"); 

  if (contentAcc.style.height === "125px") { 
    contentAcc.style.height = "30px"; 
    textAcc.style.height = "0px"; 
    imgAcc.style.transform = "rotate(0deg)";
   
  } else {
    contentAcc.style.height = "125px";
    textAcc.style.height = "80px"; 
    imgAcc.style.transform = "rotate(40deg)";
  }
}


// const modal = document.getElementById('modal2');
// const closeButton = document.getElementById('closeModal2');

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.intersectionRatio >= 0.5) { // 50% видимости
//             modal.style.display = 'block'; // Открываем модальное окно
//             observer.disconnect(); // Остановка наблюдения
//         }
//     });
// }, { threshold: 0.5 }); // Порог 50%

// // Ждём, пока страница полностью загрузится
// window.addEventListener('load', () => {
//     const targetElement = document.querySelector('.poloska');
//     observer.observe(targetElement); // Наблюдение за элементом 
// });

// closeButton.addEventListener('click', () => {
//     modal.style.display = 'none';
// });

const modal = document.getElementById('modal2');
        const closeButton = document.getElementById('closeButton2');
        const closeModalButton = document.getElementById('closeModal2');
        const countdown = document.getElementById('countdown2');
        const secondsLeftElement = document.getElementById('secondsLeft2');
        let secondsLeft = 5;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio >= 0.5) { // 50% видимости
                    modal.style.display = 'block';
                    observer.disconnect();

                    let countdownInterval = setInterval(() => {
                        secondsLeft--;
                        secondsLeftElement.textContent = secondsLeft;
                        if (secondsLeft <= 0) {
                            clearInterval(countdownInterval);
                            closeButton.style.display = 'block';
                            countdown.style.display = 'none';
                        }
                    }, 1000);
                }
            });
        }, { threshold: 0.5 }); // Порог 50%

        // Ждём, пока страница полностью загрузится
        window.addEventListener('load', () => {
            const targetElement = document.querySelector('.poloska');
            observer.observe(targetElement); // Наблюдение за элементом 
        });

        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        closeModalButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });