// Javascript functions for NutriApp


// Handle dynamic content loading in modal for 'delete food'
$('#deleteFoodModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var clicked_food_id = button.data('foodid') // Extract info from data-* attributes

    var modal = $(this)

    var deletefoodurl = '/delete_food/' + clicked_food_id
    modal.find('.deletefromdb_form').attr('action', deletefoodurl);

})

//  Clear input values when modal is hidden.
$('#addToTodayModal').on('hide.bs.modal', function (event) {

    // var modal = $(this)

    // Remove value of input
    // $(this)(":input")

    $('#grams-input').val("");

})

// From the Bootstrap documentation: 
// Due to how HTML5 defines its semantics, the autofocus HTML attribute has no effect in Bootstrap modals. To achieve the same effect, use some custom JavaScript:
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

// Initialise toast.
$('.toast').toast();



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

var calc_energy_cal;
var calc_fat;
var calc_saturates;
var calc_carb;
var calc_sugars;
var calc_fibre;
var calc_protein;
var calc_salt;




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
    calc_energy_cal = (energy_100g_cal * val) / 100;
    calc_fat = (fat_100g * val) / 100;
    calc_saturates = (saturates_100g * val) / 100;
    calc_carb = (carb_100g * val) / 100;
    calc_sugars = (sugars_100g * val) / 100;
    calc_fibre = (fibre_100g * val) / 100;
    calc_protein = (protein_100g * val) / 100;
    calc_salt = (salt_100g * val) / 100;

    console.log(calc_salt);

}


function addMealToLocalStorage() {


    // Create an object string of nutrient values.
    var meal = '{"energy_cal_ls":"' + calc_energy_cal + '","fat_ls":"' + calc_fat + '","saturates_ls":"' + calc_saturates + '","carb_ls":"' + calc_carb + '","sugars_ls":"' + calc_sugars + '","fibre_ls":"' + calc_fibre + '","protein_ls":"' + calc_protein + '","salt_ls":"' + calc_salt + '"}';


    // Add meal to localStorage
    if ("meal_counter" in localStorage) {

        // retrieve the current meal_id key in localStorage
        var curr_meal_counter = localStorage.getItem("meal_counter");

        // Convert the meal counter value to a number.
        var curr_meal_counter_int = parseInt(curr_meal_counter);

        // increment the meal counter
        var new_meal_counter_int = curr_meal_counter_int + 1;

        // update localStorage meal counter
        localStorage.setItem("meal_counter", new_meal_counter_int);



        // Create a meal_id key to add to localStorage.
        var new_meal_id = "meal" + new_meal_counter_int;


        // Add meal to localStorage
        localStorage.setItem(new_meal_id, meal)

    } else {

        // Create a localStorage meal counter
        localStorage.setItem("meal_counter", 0);

        // console.log(localStorage.getItem("meal_counter"));

        // console.log(typeof localStorage.getItem("meal_counter"));

        // Create a meal_id key to add to localStorage.
        var first_meal_id = "meal0";

        // Add meal to localStorage
        localStorage.setItem(first_meal_id, meal)
    }

    // Hide the modal.
    $('#addToTodayModal').modal('hide')

    // Show a success toast.
    
    $('#addedmeal_toast').toast('show')


}