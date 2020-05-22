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



// Declare global variables
var name_en;
var energy_100g_cal;
var fat_100g;
var saturates_100g;
var carb_100g;
var sugars_100g;
var fibre_100g;
var protein_100g;
var salt_100g;

var calc_energy_100g_cal;
var calc_fat_100g;
var calc_saturates_100g;
var calc_carb_100g;
var calc_sugars_100g;
var calc_fibre_100g;
var calc_protein_100g;
var calc_salt_100g;




// Handle food data loading in modal for 'add food to today'
$('#addToTodayModal').on('show.bs.modal', function (event) {
    console.log('success')
    var button = $(event.relatedTarget) // Button that triggered the modal

    // Extract info from data-* attributes and assign them to global variables.
    name_en = button.data('name_en')
    energy_100g_cal = button.data('energy_100g_cal')
    fat_100g = button.data('fat_100g')
    saturates_100g = button.data('saturates_100g')
    carb_100g = button.data('carb_100g')
    sugars_100g = button.data('sugars_100g')
    fibre_100g = button.data('fibre_100g')
    protein_100g = button.data('protein_100g')
    salt_100g = button.data('salt_100g')

    console.log(protein_100g)
    console.log(typeof protein_100g)

    var modal = $(this)
    // modal.find('label #grams-input-label').val(name_en)

    document.getElementById('grams-input-label').innerText = name_en;




    // var deletefoodurl = '/delete_food/' + clicked_food_id
    // modal.find('.deletefromdb_form').attr('action', deletefoodurl);

})



function calculateNutrients(val) {
    // Calculate the nutrition values based on the user input
    // var gramsinput = document.getElementById('grams-input');

    // calc_name_en = name_en
    calc_energy_100g_cal = (energy_100g_cal / 100) * val;
    calc_fat_100g = (fat_100g / 100) * val;
    calc_saturates_100g = (saturates_100g / 100) * val;
    calc_carb_100g = (carb_100g / 100) * val;
    calc_sugars_100g = (sugars_100g / 100) * val;
    calc_fibre_100g = (fibre_100g / 100) * val;
    calc_protein_100g = (protein_100g / 100) * val;
    calc_salt_100g = (salt_100g / 100) * val;

    console.log(calc_energy_100g_cal);

}