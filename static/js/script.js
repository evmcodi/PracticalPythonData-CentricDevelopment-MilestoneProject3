// Javascript functions for NutriApp


// Handle dynamic content loading in modal for 'delete food'
$('#deleteFoodModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var clicked_food_id = button.data('foodid') // Extract info from data-* attributes

    var modal = $(this)

    var deletefoodurl = '/delete_food/' + clicked_food_id
    modal.find('.deletefromdb_form').attr('action', deletefoodurl);

})

// From the Bootstrap documentation: 
// Due to how HTML5 defines its semantics, the autofocus HTML attribute has no effect in Bootstrap modals. To achieve the same effect, use some custom JavaScript:
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})





// Handle food data loading in modal for 'add food to today'
$('#addToTodayModal').on('show.bs.modal', function (event) {
    console.log('success')
    var button = $(event.relatedTarget) // Button that triggered the modal
    
    // Extract info from data-* attributes
    var name_en = button.data('name_en') 
    var energy_100g_cal = button.data('energy_100g_cal') 
    var fat_100g = button.data('fat_100g') 
    var saturates_100g = button.data('saturates_100g') 
    var carb_100g = button.data('carb_100g') 
    var sugars_100g = button.data('sugars_100g') 
    var fibre_100g = button.data('fibre_100g') 
    var protein_100g = button.data('protein_100g')
    var salt_100g = button.data('salt_100g')

    console.log(protein_100g)
    console.log(typeof protein_100g)

    var modal = $(this)
    // modal.find('label #grams-input-label').val(name_en)

    document.getElementById('grams-input-label').innerText = name_en;




    // var food = JSON.parse(clicked_food);

    // var name_en = food.name_en

    // console.log(name_en)
 

    // var deletefoodurl = '/delete_food/' + clicked_food_id
    // modal.find('.deletefromdb_form').attr('action', deletefoodurl);

})