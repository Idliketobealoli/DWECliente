{
    function createWindow(url) {
        let height = window.screen.height / 3;
        let width  = window.screen.width  / 2;

        let top  = window.screen.height / 2;
        let left = window.screen.width  / 2;

        let features = "width=" + width + ", height=" + height + ", left=" + left + ", top=" + top;

        window.open(url, "_blank", features);
    }

    createWindow("https://aulavirtual3.educa.madrid.org/ies.lagunadejoatzel.getafe/course/view.php?id=616");
}