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
    document.getElementById('randomTextEffect').innerHTML = generateString(500);
});