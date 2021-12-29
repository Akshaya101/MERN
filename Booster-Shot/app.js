console.log('page attached properly')
//obtain the target elements from the document
let btn = document.getElementById('btn')

//button submitting
btn.addEventListener('click', function (e) {

    //tapping into the properties
    //values would only be obtained once the submit button is clicked
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let age = document.getElementById('age').value
    let jobType = document.getElementById('dropdown').value

    document.querySelector('.hellomsg').textContent = "Hello " + fname + " !"
    //convert age to number
    age = Number(age)

    if (isNaN(age)) {
        alert('Age has to be a Number!')
    }

    if (age >= 60) {
        document.querySelector('.msg').textContent = "You are eligible for a booster shot!"
    }
    else if (jobType === "frontline worker" || jobType === "healthcare worker") {
        document.querySelector('.msg').textContent = "You are eligible for a booster shot!"
    }
    else {
        document.querySelector('.msg').textContent = "You are not eligible for a booster shot!"
    }
})
