/**
 * Robin Rana       T00743614
 * COMP2681         Final Project
 * Description: This is the main JavaScript file for the Señor Froggy website.
 * It includes the variables, arrays, date & time functions, countdown timer,
 * mobile navigation, form validation, subroutines / functions, array operations,
 * and running time commands.
 */
// Variables
let currentDate = new Date();
let isNavOpen = false;
const restaurantName = "Señor Froggy";
const yearEstablished = 1979;
const currentYear = currentDate.getFullYear();
const yearsInBusiness = currentYear - yearEstablished;

// Arrays
const menuItems = ["Burritos", "Bowl Platters", "Tacos", "Enchiladas", "Nachos"];
const specialDays = ["Monday", "Wednesday", "Friday", "Weekend"];
const contactMethods = ["Phone", "Email", "In-Person", "Online Form"];

// Date & Time functions
function updateDateTime() {
    const now = new Date();
    const dateTimeElement = document.getElementById("dateTime");
    const updatedElement = document.getElementById("updated");
    
    if (dateTimeElement) {
        // Format: Day, Month DD, YYYY at HH:MM:SS
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        dateTimeElement.textContent = "Current Date & Time: " + now.toLocaleString('en-US', options);
    }
    
    if (updatedElement) {
        updatedElement.textContent = now.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}

// Countdown timer to next event
function countdownToEvent() {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const eventDate = new Date(nextYear, 0, 1); // January 1st of next year
    const timeDiff = eventDate - now;
    
    // Arithmetic operators
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

// Mobile navigation
function toggleMobileNav() {
    const navLinks = document.querySelector('.nav-links');
    const navicon = document.getElementById('navicon');
    
    if (navLinks && navicon) {
        // Logical operators
        isNavOpen = !isNavOpen;
        
        if (isNavOpen) {
            navLinks.classList.add('active');
            navicon.style.transform = 'rotate(90deg)';
        } else {
            navLinks.classList.remove('active');
            navicon.style.transform = 'rotate(0deg)';
        }
    }
}

// Form validation
function validateForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const inquiryType = document.getElementById('inquiryType');
    const message = document.getElementById('message');
    const terms = document.querySelector('input[name="terms"]');
    const charCount = document.getElementById('charCount');
    
    // Character count for message
    if (message && charCount) {
        message.addEventListener('input', function() {
            const length = message.value.length;
            charCount.textContent = length + ' / 1000 characters';
            
            // Comparison operators
            if (length > 900) {
                charCount.style.color = '#c0392b';
            } else if (length > 500) {
                charCount.style.color = '#ff9800';
            } else {
                charCount.style.color = '#666';
            }
        });
    }
    
    // Set minimum date for date input
    if (document.getElementById('date')) {
        const dateInput = document.getElementById('date');
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
    
    // Form submission validation
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let isValid = true;
        let errorMessages = [];
        
        // Validate name (using conditional statements)
        if (!name || name.value.trim().length < 2) {
            isValid = false;
            errorMessages.push("Please enter a valid name (at least 2 characters).");
            if (name) {
                name.style.borderColor = '#c0392b';
            }
        } else {
            if (name) name.style.borderColor = '#4caf50';
        }
        
        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailPattern.test(email.value)) {
            isValid = false;
            errorMessages.push("Please enter a valid email address.");
            if (email) {
                email.style.borderColor = '#c0392b';
            }
        } else {
            if (email) email.style.borderColor = '#4caf50';
        }
        
        // Validate phone
        const phonePattern = /^[\d\s\-\(\)]{10,15}$/;
        if (!phone || !phonePattern.test(phone.value.replace(/\s/g, ''))) {
            isValid = false;
            errorMessages.push("Please enter a valid phone number (10-15 digits).");
            if (phone) {
                phone.style.borderColor = '#c0392b';
            }
        } else {
            if (phone) phone.style.borderColor = '#4caf50';
        }
        
        // Validate inquiry type
        if (!inquiryType || inquiryType.value === '') {
            isValid = false;
            errorMessages.push("Please select an inquiry type.");
            if (inquiryType) {
                inquiryType.style.borderColor = '#c0392b';
            }
        } else {
            if (inquiryType) inquiryType.style.borderColor = '#4caf50';
        }
        
        // Validate message
        if (!message || message.value.trim().length < 10) {
            isValid = false;
            errorMessages.push("Please enter a message (at least 10 characters).");
            if (message) {
                message.style.borderColor = '#c0392b';
            }
        } else {
            if (message) message.style.borderColor = '#4caf50';
        }
        
        // Validate terms
        if (!terms || !terms.checked) {
            isValid = false;
            errorMessages.push("You must agree to the terms and conditions.");
        }
        
        // Conditional operator (ternary)
        const validationResult = isValid ? "Form is valid!" : "Please fix the errors below.";
        
        // Use JavaScript alert for validation
        if (!isValid) {
            alert("Form Validation Error\n\n" + errorMessages.join("\n") + "\n\nPlease correct these errors and try again.");
            return false;
        } else {
            // Success message
            alert("Thank you! Your message has been submitted successfully.\n\nWe'll get back to you soon!");
            
            // Reset form after successful submission
            form.reset();
            if (charCount) charCount.textContent = '0 / 1000 characters';
            
            // Reset border colors
            [name, email, phone, inquiryType, message].forEach(function(element) {
                if (element) element.style.borderColor = '#ddd';
            });
            
            return true;
        }
    });
    
    // Real-time validation on blur
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    inputs.forEach(function(input) {
        input.addEventListener('blur', function() {
            validateField(input);
        });
    });
}

// Validate individual field
function validateField(field) {
    const fieldType = field.type;
    const fieldValue = field.value.trim();
    
    // Conditional statements
    if (fieldType === 'email') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(fieldValue)) {
            field.style.borderColor = '#c0392b';
            return false;
        }
    } else if (fieldType === 'tel') {
        const phonePattern = /^[\d\s\-\(\)]{10,15}$/;
        if (!phonePattern.test(fieldValue.replace(/\s/g, ''))) {
            field.style.borderColor = '#c0392b';
            return false;
        }
    } else if (field.hasAttribute('required') && fieldValue.length < 2) {
        field.style.borderColor = '#c0392b';
        return false;
    }
    
    field.style.borderColor = '#4caf50';
    return true;
}

// Subroutines / Functions
function initializePage() {
    // Update date/time
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    // Initialize mobile navigation
    const navicon = document.getElementById('navicon');
    if (navicon) {
        navicon.addEventListener('click', toggleMobileNav);
    }
    
    // Close mobile nav when clicking outside
    document.addEventListener('click', function(event) {
        const navLinks = document.querySelector('.nav-links');
        const navicon = document.getElementById('navicon');
        
        if (isNavOpen && navLinks && navicon) {
            if (!navLinks.contains(event.target) && !navicon.contains(event.target)) {
                toggleMobileNav();
            }
        }
    });
    
    // Initialize form validation
    validateForm();
    
    // Display restaurant info (using arrays)
    displayRestaurantInfo();
}

// Display restaurant information
function displayRestaurantInfo() {
    // Using arrays and string operations
    const info = "Welcome to " + restaurantName + "! We've been serving Kamloops for " + 
                 yearsInBusiness + " years since " + yearEstablished + ".";
    
    // Log to console (for debugging)
    console.log(info);
    console.log("Menu Items:", menuItems.join(", "));
    console.log("Special Days:", specialDays.join(", "));
}

// Array operations
function getMenuItems() {
    return menuItems;
}

function addMenuItem(item) {
    // Comparison operator
    if (item && typeof item === 'string' && item.length > 0) {
        menuItems.push(item);
        return true;
    }
    return false;
}

// Running time commands
// Execute when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    // DOM already loaded
    initializePage();
}

// Additional initialization after page load
window.addEventListener('load', function() {
    console.log("Page fully loaded. Restaurant: " + restaurantName);
    
    // Display countdown (example)
    const countdown = countdownToEvent();
    console.log("Days until New Year:", countdown.days);
});
