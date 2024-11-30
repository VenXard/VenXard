
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
    const modal = document.querySelector(".menu");
    modal.classList.remove('openburger');
    console.log(menu)
}