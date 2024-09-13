function copyToClipboard() {
    // Get the email text
    const emailText = "rookboss69@gmail.com";
    
    // Create a temporary input element to hold the text
    const tempInput = document.createElement('input');
    tempInput.value = emailText;
    
    // Add the input element to the document body
    document.body.appendChild(tempInput);
    
    // Select the text in the input element
    tempInput.select();
    
    // Copy the text to the clipboard
    document.execCommand('copy');
    
    // Remove the temporary input element from the document
    document.body.removeChild(tempInput);
    
    // Optional: Show a message to the user
    alert('Email copied to clipboard!');
}

function toggleNavbar() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
