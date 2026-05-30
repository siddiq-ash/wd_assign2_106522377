// Recommendation logic
function recommendRestaurant() {
    let diet = document.getElementById("diet").value;
    let budget = document.getElementById("budget").value;
    let purpose = document.getElementById("purpose").value;

    let result = "";

    if (diet === "Halal" && budget === "Medium") {
        result = "Curry Compound";
    } 
    else if (diet === "Vegan" && budget === "Low") {
        result = "Fiesta Mexicana";
    } 
    else if (purpose === "Date" && budget === "Medium") {
        result = "Dine at Shibuya";
    } 
    else if (purpose === "Family" && budget === "Low") {
        result = "Dragon of Fire";
    } 
    else if (purpose === "Business" && budget === "High") {
        result = "Outback Grill";
    } 
    else {
        result = "Roma Dining";
    }

    document.getElementById("recommendation").innerHTML =
        `Recommended Restaurant: 
        <a href="reservation.html?restaurant=${encodeURIComponent(result)}">${result}</a>`;
}

// Registration validation
let registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        let username = document.getElementById("username").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        let gender = document.querySelector("input[name='gender']:checked");
        let dietary = document.getElementById("dietary").value;
        let country = document.getElementById("country").value;

        let error = "";

        let usernameRegex = /^[A-Za-z0-9_]+$/;
        let emailRegex = /^\S+@\S+\.\S+$/;
        let phoneRegex = /^\d{8,15}$/;
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{10,}$/;

        if (username === "") {
            error += "Username is required.<br>";
        } 
        else if (username.length < 5 || !usernameRegex.test(username)) {
            error += "Username must be at least 5 characters and only use letters, numbers, and underscores.<br>";
        }

        if (email === "" || !emailRegex.test(email)) {
            error += "Enter a valid email address.<br>";
        }

        if (phone === "" || !phoneRegex.test(phone)) {
            error += "Phone number must contain only digits and be 8 to 15 digits long.<br>";
        }

        if (password === "" || !passwordRegex.test(password)) {
            error += "Password must be at least 10 characters and include uppercase, lowercase, number, and special character.<br>";
        }

        if (confirmPassword !== password) {
            error += "Confirm password must match password.<br>";
        }

        if (!gender) {
            error += "Please select a gender.<br>";
        }

        if (dietary === "") {
            error += "Please select a dietary preference.<br>";
        }

        if (country === "") {
            error += "Please select a country or region.<br>";
        }

        if (error !== "") {
            event.preventDefault();
            document.getElementById("registerError").innerHTML = error;
        }
    });
}

// Restaurant deposits
let deposits = {
    "Roma Dining": 50,
    "Dine at Shibuya": 40,
    "Dragon of Fire": 35,
    "Curry Compound": 30,
    "Fiesta Mexicana": 25,
    "Outback Grill": 60
};

let restaurantSelect = document.getElementById("restaurant");

if (restaurantSelect) {
    function updateDeposit() {
        let restaurant = restaurantSelect.value;
        let deposit = deposits[restaurant] || 0;
        document.getElementById("deposit").value = deposit > 0 ? "$" + deposit : "";
    }

    let urlParams = new URLSearchParams(window.location.search);
    let selectedRestaurant = urlParams.get("restaurant");

    if (selectedRestaurant && deposits[selectedRestaurant]) {
        restaurantSelect.value = selectedRestaurant;
    }

    restaurantSelect.addEventListener("change", updateDeposit);
    updateDeposit();
}

// Payment display logic
let paymentSelect = document.getElementById("payment");

if (paymentSelect) {
    function updatePaymentSections() {
        let payment = paymentSelect.value;
        let voucherSection = document.getElementById("voucherSection");
        let cardSection = document.getElementById("cardSection");

        if (payment === "Voucher") {
            voucherSection.style.display = "block";
            cardSection.style.display = "none";
        } 
        else if (payment === "Online") {
            voucherSection.style.display = "none";
            cardSection.style.display = "block";
        } 
        else {
            voucherSection.style.display = "none";
            cardSection.style.display = "none";
        }
    }

    paymentSelect.addEventListener("change", updatePaymentSections);
    updatePaymentSections();
}

// Same as email checkbox
let sameEmail = document.getElementById("sameEmail");

if (sameEmail) {
    sameEmail.addEventListener("change", function() {
        let email = document.getElementById("reserveEmail").value;
        let billingEmail = document.getElementById("billingEmail");

        if (sameEmail.checked) {
            billingEmail.value = email;
        } 
        else {
            billingEmail.value = "";
        }
    });
}

// Reservation validation
let reservationForm = document.getElementById("reservationForm");

if (reservationForm) {
    reservationForm.addEventListener("submit", function(event) {
        let fullname = document.getElementById("fullname").value.trim();
        let email = document.getElementById("reserveEmail").value.trim();
        let phone = document.getElementById("reservePhone").value.trim();
        let restaurant = document.getElementById("restaurant").value;
        let date = document.getElementById("date").value;
        let people = document.getElementById("people").value;
        let payment = document.getElementById("payment").value;
        let voucher = document.getElementById("voucher").value.trim();
        let cardType = document.getElementById("cardType").value;
        let card = document.getElementById("card").value.trim();
        let billingEmail = document.getElementById("billingEmail").value.trim();

        let error = "";

        let emailRegex = /^\S+@\S+\.\S+$/;
        let phoneRegex = /^\d{10,}$/;
        let digitsOnlyRegex = /^\d+$/;

        if (fullname === "") {
            error += "Full name is required.<br>";
        }

        if (email === "" || !emailRegex.test(email)) {
            error += "Enter a valid email address.<br>";
        }

        if (phone === "" || !phoneRegex.test(phone)) {
            error += "Phone number must contain at least 10 digits.<br>";
        }

        if (restaurant === "") {
            error += "Please select a restaurant.<br>";
        }

        if (date === "") {
            error += "Reservation date and time is required.<br>";
        } 
        else {
            let selectedDate = new Date(date);
            let now = new Date();

            if (selectedDate < now) {
                error += "Reservation date cannot be in the past.<br>";
            }
        }

        if (people === "" || Number(people) <= 0) {
            error += "Number of people must be greater than 0.<br>";
        }

        if (payment === "") {
            error += "Please select a payment method.<br>";
        }

        if (payment === "Voucher") {
            if (voucher === "" || !/^\d{12}$/.test(voucher)) {
                error += "Voucher code must be 12 digits.<br>";
            }
        }

        if (payment === "Online") {
            if (cardType === "") {
                error += "Please select a card type.<br>";
            }

            if (card === "" || !digitsOnlyRegex.test(card)) {
                error += "Credit card number must contain digits only.<br>";
            } 
            else if ((cardType === "Visa" || cardType === "Mastercard") && card.length !== 16) {
                error += "Visa and Mastercard numbers must be 16 digits.<br>";
            } 
            else if (cardType === "Amex" && card.length !== 15) {
                error += "American Express numbers must be 15 digits.<br>";
            }
        }

        if (billingEmail === "" || !emailRegex.test(billingEmail)) {
            error += "Enter a valid billing email address.<br>";
        }

        if (error !== "") {
            event.preventDefault();
            document.getElementById("reservationError").innerHTML = error;
        }
    });
}