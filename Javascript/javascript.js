const divList = document.querySelector('.listHolder');
const addInput = document.getElementById("addInput");
const addBtn = document.querySelector('#addBtn');


function addLists() {
  if (addInput.value === '') {
    alert('Enter the list name please!!!');
  } else {
    const ul = divList.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = addInput.value;
    ul.appendChild(li);
    }
}
function emptyTextArea() {
  addInput.value = '';
};

function storeTextToLocalStorage() {

  localStorage.setItem(Date.now() ,addInput.value);
};

addBtn.addEventListener('click', () => {
  /* Move html value to the unordered list */
    addLists();
  /*Store text in localstorage*/
    storeTextToLocalStorage(); 
  /* empty the text area */
    emptyTextArea();

});
