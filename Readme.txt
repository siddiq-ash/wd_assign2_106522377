COS10005 – Web Development Assignment 2

Student Name: Khawaja Ashaz Siddiq 

Student ID: 106522377

MERCURY DEPLOYMENT URL LINK:
https://mercury.swin.edu.au/cos10005/s106522377/Assignment2%20/wd_assign2_106522377/indexres.html

Image references:

image in index.html,
https://jointheterritory.nt.gov.au/live/what-to-do-in-the-nt/Dining_Out

image for Roma dining:
https://ladro.com.au/

image for Dine at Shibuya:
https://en.wikipedia.org/wiki/Customs_and_etiquette_in_Japanese_dining

image for Dragon of fire:
https://www.quandoo.com.au/place/peeking-duck-chinese-restaurant-98229/menu

image for Curry Compound:
https://www.tripadvisor.com.au/Restaurant_Review-g255060-d2555402-Reviews-North_Indian_Cuisine-Sydney_New_South_Wales.html

image for Fiesta Mexicana:
https://rosamexicano.com.au/location/watergardens-vic

image for Outback Grill:
gq.com.au/lifestyle/food-drink/fine-dining-restaurants-australia/image-gallery/5e809c265e63d1ea6442d0581aff583d


WEBSITE STRUCTURE



indexres.html

* Home page introducing the Restaurant Discovery Platform.

restaurants.html

* Displays six restaurants, including cuisine type, signature dishes, deposit amount, description, images, and price range.

recommend.html

* Allows users to select dietary preference, budget, and dining purpose to receive restaurant recommendations.

register.html

* User registration form with JavaScript validation.

reservation.html

* Restaurant reservation form with deposit updates, payment options, and validation.

css/styleres.css

* External stylesheet used across all pages.

js/script.js

* Contains all JavaScript validation, recommendation logic, deposit logic, and dynamic page functionality.

images/

* Contains all images used throughout the website.


GitHub Repository:

https://github.com/[your-username]/COS10005-Assignment2


JAVASCRIPT VALIDATION LOGIC

Registration Validation

* Username must be at least 5 characters long.
* Username can only contain letters, numbers, and underscores.
* Email must follow a valid email format.
* Phone number must contain only digits and be between 8 and 15 digits.
* Password must contain:

  * At least 10 characters
  * One uppercase letter
  * One lowercase letter
  * One number
  * One special character
* Confirm Password must match Password.
* Gender must be selected.
* Form submission is blocked until all validation requirements are met.

Recommendation Logic

* User selects dietary preference, budget, and dining purpose.
* JavaScript evaluates the selections and recommends a suitable restaurant.
* The recommended restaurant can be selected and passed to the reservation page.

Reservation Validation

* Full name is required.
* Email must be valid.
* Phone number must contain at least 10 digits.
* Reservation date and time cannot be in the past.
* Number of people must be greater than 0.
* Restaurant selection is required.
* Deposit amount updates automatically based on the selected restaurant.
* Voucher payment displays a voucher field.
* Online payment displays credit card fields.
* Visa/Mastercard require 16 digits.
* American Express requires 15 digits.
* Billing email can automatically copy the reservation email using the "Same as Email" option.

KNOWN ISSUES OR LIMITATIONS

* Credit card validation only checks the format and length of the card number.
* No real payment processing is implemented.
* No database is used.
* Reservation data is not permanently stored.


Thank you for your reading!
