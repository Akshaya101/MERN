const btn = document.getElementById('btn');
btn.addEventListener('click',function(e){
    e.preventDefault();
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const uname = document.getElementById('uname').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const pincode = document.getElementById('pincode').value;
    const state = document.getElementById('state').value;
    const object = {
        firstName: fname,
        lastName: lname,
        userName: uname,
        DateOfBirth: dob,
        email: email,
        address: address,
        city: city,
        pincode: pincode,
        state: state
    }
    console.log('before adding user input');
    console.log(object);
    const inputFromUser = prompt('enter your favourite band');
    object.onfly = inputFromUser;
    console.log('after adding user input');
    console.log(object);
    JSON.stringify(object);
    console.log('object converted to JSON');
    console.log(JSON.stringify(object));
})