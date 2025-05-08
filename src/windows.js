function baseWindow(config) {
    var win = new WinBox(config);
    win.addClass("no-close")
    .addClass("no-full")
    .addClass("no-min");

    win.addControl({
        index: 2,
        class: "customMin",
        icon: "https://raw.githubusercontent.com/nextapps-de/winbox/master/src/img/close.svg",
        click: function (event, winbox) {
            winbox.minimize(!winbox.min);
        }
    });
    
    return win
}

function aboutme() {
    var win = baseWindow({title: "about-me", url: "/content/thegreatestplan.html"});
}

function summonWindows() {
    aboutme();
}