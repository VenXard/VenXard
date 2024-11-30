
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