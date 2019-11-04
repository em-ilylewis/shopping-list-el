//Hint: jQuery methods: .submit(), 
//preventDefault(), toggleClass(), closest()
//using 'this' and event delegation


$(document).ready(function() {


/*enter items they need to purchase 
//by entering text and hitting "Return" 
//or clicking the "Add item" button

const addItems = function() {
    $('#js-shopping-list-form').submit(event){
        event.preventDefault();
    addItems();
    }
}
*/


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
