$(document).ready(function() {
    var namePattern = /^[A-Za-z\s]+$/;
    var mobilePattern = /^\d{10}$/;
    var pincodePattern = /^\d{6}$/;

    function validateFullName() {
        var fullName = $('#fullName').val().trim();
        if (!namePattern.test(fullName)) {
            $('#nameError').text('Full name can only contain alphabets and spaces.');
            return false;
        } else {
            $('#nameError').text('');
            return true;
        }
    }

    function validateMobileNumber() {
        var mobileNumber = $('#mobileNumber').val().trim();
        if (!mobilePattern.test(mobileNumber)) {
            $('#mobileError').text('Mobile number must be exactly 10 digits.');
            return false;
        } else {
            $('#mobileError').text('');
            return true;
        }
    }

    function validatePincode() {
        var pincode = $('#pincode').val().trim();
        if (!pincodePattern.test(pincode)) {
            $('#pincodeError').text('Pincode must be exactly 6 digits.');
            return false;
        } else {
            $('#pincodeError').text('');
            return true;
        }
    }

    function validateForm() {
        var isFullNameValid = validateFullName();
        var isMobileNumberValid = validateMobileNumber();
        var isPincodeValid = validatePincode();

        return isFullNameValid && isMobileNumberValid && isPincodeValid;
    }

    $('#fullName').on('input', validateFullName);
    $('#mobileNumber').on('input', validateMobileNumber);
    $('#pincode').on('input', validatePincode);

    $('form').on('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    // Back to top functionality
    $('.backtop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });

    $(document).ready(function() {
        // Explicitly hide the xmark when the document is ready
        $('.fa-xmark').hide();
    
        // Sidebar toggle functionality
        $('.nav-1 div').click(function() {
            $('.sidebar').toggleClass('active');
            $('.fa-xmark').toggle(); // Toggle visibility of the xmark
            $('.black').toggleClass('active');
            $('body').toggleClass('stop-scroll');
        });
    
        // Close sidebar when xmark is clicked
        $('.fa-xmark').click(function() {
            $('.sidebar').removeClass('active');
            $('.fa-xmark').hide();  // Ensure the xmark is hidden when sidebar is closed
            $('.black').removeClass('active');
            $('body').removeClass('stop-scroll');
        });
});
});