// Javascript functions for NutriApp


// Handle dynamic content loading in modal for 'delete food'
$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var clicked_food_id = button.data('foodid') // Extract info from data-* attributes
    
    var modal = $(this)
    // modal.find('.deletefromdb_form').text('New message to ' + clicked_food_id)
    // modal.find('.modal-body input').val(clicked_food_id)
    var deletefoodurl = '/delete_food/' + clicked_food_id
    modal.find('.deletefromdb_form').attr('action', deletefoodurl);

})