(function () {
    var storage;

    var storedLegal = chrome.storage.local.get('ticketDetails', function (data) {
        // find the fiends in your login form
        storage = data.ticketDetails;


        if (window.location.href.indexOf("eticketing/loginHome.jsf") > -1) {
            fillLoginForm();
        } else if (window.location.href.indexOf("eticketing/home") > -1) {
            fillTravelForm();
        }


    });

    function fillLoginForm() {
        if (storage.hasOwnProperty("login")) {
            var loginField = document.getElementsByName('j_username')[0];
            var passwordField = document.getElementsByName('j_password')[0];
            // fill in your username and password
            loginField.value = storage.login.username;
            passwordField.value = storage.login.password;
            document.getElementsByName("j_captcha")[0].focus();
            document.getElementsByName("j_captcha")[0].addEventListener("keyup", function () {
                document.getElementsByName("j_captcha")[0].value = document.getElementsByName("j_captcha")[0].value.toUpperCase();
            });
        };
    };

    function fillTravelForm() {
        if (storage.hasOwnProperty("travel")) {
            document.getElementById("jpform:fromStation").value = storage.travel.fromstn;
            document.getElementById("jpform:toStation").value = storage.travel.desstn;
            document.getElementById("jpform:journeyDateInputDate").value = GetFormattedDate(storage.travel.traveldate);
            document.getElementById("jpform:jpsubmit").click();            
            document.querySelector('input[type="radio"][name="quota"][value="TQ"]').checked = true;
        }
    };

    function selectTrain() {
        if (storage.hasOwnProperty("travelplan")) {
        }
    };

    function fillPassengerForm() {
        if (storage.hasOwnProperty("pessengers")) {
        }
    };

    function fillPayments() {
        if (storage.hasOwnProperty("payments")) {
        }
    };
    function GetFormattedDate(date) {
        var todayTime = new Date(date);
        var month = format(todayTime.getMonth() + 1, 2);
        var day = format(todayTime.getDate(), 2);
        var year = format(todayTime.getFullYear(), 4);
        return day + "-" + month + "-" + year;
    }
    function format(n, width) {
        var z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
})();