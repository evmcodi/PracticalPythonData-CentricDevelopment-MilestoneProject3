// Javascript to run on page load.


retrieveMeals();




function retrieveMeals() {

    // set total calorie variable
    var total_calories = 0;

    // get the current meal_counter value
    var curr_meal_counter = localStorage.getItem("meal_counter");

    // convert to integer
    var meal_counter_int = parseInt(curr_meal_counter);


    for (let i = 1; i <= meal_counter_int; i++) {
        
        // address and retrieve the value of the corresponding meal key

        // Create a string that can be used to address the corresponding localStorage key.
        let meal_id = "meal" + i;

        console.log(meal_id)

        // get the meal value
        let meal = localStorage.getItem(meal_id);

        console.log(meal)


        // convert to a javascript object
        var obj = JSON.parse(meal);

        console.log(obj.name_en)


        // Add a list item element to "main" element container
        $('#dailynutritionlist').append('<li class="list-group-item"><div class="d-flex"><div class="p-2">'+obj.name_en+'</div><div class="p-2"> - </div><div class="p-2">'+obj.grams+'g</div><div class="ml-auto p-2">'+obj.energy_cal_ls+' cal</div></div></li>')
        

        // Calculate total calorie consumption
        total_calories = total_calories + parseInt(obj.energy_cal_ls);

        console.log(total_calories)
    }


    // Add total calories to page view
    $('#totalcalorieview').text(total_calories);
    
    
}
