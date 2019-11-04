//Hint: Use jQuery methods: .submit(), 
//preventDefault(), toggleClass(), closest()
//using 'this' and event delegation


$(document).ready(function() {


//enter items they need to purchase 
//by entering text and hitting "Return" 

const addItems = function() {
    const text = $('#shopping-list-entry').val();
    if (text) {
      $('.shopping-list').prepend(`
      <li>
        <span class="shopping-item">${text}</span>
        <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
            <span class="button-label">check</span>
            </button>
         <button class="shopping-item-delete">
            <span class="button-label">delete</span>
         </button>
        </div>
      </li>`);
    }
    $('#shopping-list-entry').val("");
  };

  //or clicking the "Add item" button
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    addItems();
  });


//check and uncheck items on the list by 
//clicking the "Check" button
$('.shopping-list').on('click','.shopping-item-toggle',
function() {
    let listItem = $(this).closest('li')
    .find('.shopping-item')
    listItem.toggleClass('shopping-item__checked')
  });



//permanently remove items from the list
    $('.shopping-list').on('click',
    '.shopping-item-delete', function(event){
        $(this).closest('li').remove();
    });




});
