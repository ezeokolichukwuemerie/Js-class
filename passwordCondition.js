let password;
if (password === 8) {
    console.log('Welcome');
} 
else if(password <= 8) {
    console.log("this password is too short");
}
else if(password >= 8) {
    console.log('this password is too long');
}
else {
    console.log('provide a password');
}