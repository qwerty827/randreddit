document.addEventListener('DOMContentLoaded', function() {
    var randButton = document.getElementById('rand');
    randButton.addEventListener('click',function() {
        var reddit_url = "http://www.reddit.com/r/random";
        chrome.tabs.create({'url': reddit_url});
    });
}, false);