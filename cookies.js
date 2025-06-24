
function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    document.cookie = "cookiesAccepted=true; max-age=31536000; path=/";
}
window.onload = function() {
    if (!document.cookie.includes("cookiesAccepted=true")) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
};
