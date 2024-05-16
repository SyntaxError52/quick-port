function changeTheme(theme) {
    // Stolen from SO
    var findlink = document.getElementsByTagName("link")[0];
    // I coded this
    if (theme === 'night') {
        findlink.href = "themes/night.css";
    } else if (theme === 'blue') {
        findlink.href = "themes/blue.css";
    } else if (theme === 'light') {
        findlink.href = "themes/light.css";
    }
}

  ////////////////////////////////////////////
 // ENTER CODE I STOLE FROM PROGRAMIZ.COM  //
////////////////////////////////////////////


// program to generate random strings

// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

  //////////////////////
 // EXIT STOLEN CODE //
//////////////////////

document.addEventListener('mousemove', () => {
    document.getElementById('line1').innerHTML = generateString(20);
    document.getElementById('line2').innerHTML = generateString(20);
    document.getElementById('line3').innerHTML = generateString(20);
    document.getElementById('line4').innerHTML = generateString(20);
    document.getElementById('line5').innerHTML = generateString(20);
    document.getElementById('line6').innerHTML = generateString(20);
    document.getElementById('line7').innerHTML = generateString(20);
    document.getElementById('line8').innerHTML = generateString(20);
    document.getElementById('line9').innerHTML = generateString(20);
});