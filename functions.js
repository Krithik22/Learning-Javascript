function bmiCalculator(weight, height){
    return weight / (height * height);
}
// There are 3 types of functions normal fns, functions with parameters and funtions with return values

var bmi = bmiCalculator(65, 1.8); 
console.log(bmi);