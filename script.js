let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = ()=>{navbar.classList.toggle('active');
    userDetails.classList.remove('active');
}
let user = document.querySelector('#account');
let userDetails = document.querySelector('.user-container');
document.querySelector('#account').onclick = ()=>{
    userDetails.classList.toggle('active');
    navbar.classList.remove('active');
    
}
window.onscroll = () => {
    navbar.classList.remove('active');
    userDetails.classList.remove('active');
};

let hasAccount = false;
// Function to store form values in local storage
function createAccount() {
    if (hasAccount === true) {
        alert('You already hae an account.Press you user icon to see your details including your account number')
        console.log(hasAccount)
    }else{
        console.log(hasAccount)
        // Get form input values
        var fname = document.querySelector('.fullname');
        var num = document.querySelector('.phonenumber');
        var em = document.querySelector('.email');
        var ad = document.querySelector('.address');
        var kin = document.querySelector('.kin');
        var accountnumber =  num.value.substring(num.value.length - 10);

        // Store form values in local storage
        localStorage.setItem('userDetails', JSON.stringify({
            fullname: fname.value,
            phonenumber: num.value,
            email: em.value,
            address: ad.value,
            nextofkin: kin.value,
            accountNumber: accountnumber
        }));

        // Display stored user details in user-container
        displayUserDetails();
        alert(`Thank you ${fname.value} for creating an account with us.Your account number is ${accountnumber}. Click on the user icon to see your details`)
    }
}

// Function to display stored user details in user-container
function displayUserDetails() {
    var userDetails = JSON.parse(localStorage.getItem('userDetails'));
    var userContainer = document.querySelector('.user-container');

    if (userDetails && userContainer) {
        hasAccount = true
        userContainer.innerHTML = `
            
            <img src="pictures/moshimor-logo.png" alt="" width="100px" height="auto">
            <h3 class="fas fa-user"> ${userDetails.fullname}</h3>
            <h4>Details:</h4>
            <div>Name: ${userDetails.fullname}.</div>
            <div>Phone Number: ${userDetails.phonenumber}.</div>
            <div>E-mail: ${userDetails.email}.</div>
            <div>Address: ${userDetails.address}.</div>
            <div>Next of Kin: ${userDetails.nextofkin}.</div>
            <div>Your account number is: <span>${userDetails.accountNumber}</span>.</div>
            
        `;

    }
}

// Call displayUserDetails() on page load
window.onload = displayUserDetails;