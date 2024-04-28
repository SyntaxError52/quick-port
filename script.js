function changeTheme(theme) {
    var findlink = document.getElementsByTagName("link")[0];
    if (theme === 'night') {
        findlink.href = "themes/night.css";
    } else if (theme === 'blue') {
        findlink.href = "themes/blue.css";
    } else if (theme === 'light') {
        findlink.href = "themes/light.css";
    }
}
