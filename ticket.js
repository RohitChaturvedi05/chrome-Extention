
$(document).ready(function () {
    console.log("Entry Form Lodded");
    var storage = {};


    $("#btnSave").click(function () {
        storage["login"] = {
            username: $("#username").val(),
            password: $("#password").val()
        };

        storage["travel"] = {
            fromstn: $("#board_station").val(),
            brdstn: $("#board_middle_station").val(),
            desstn: $("#dest_station").val(),
            traveldate: $("#travel_date").val(),
            quota: $("#quota").val(),
            trannum: $("#train_num").val(),
            travelcls: $("#travel_class").val(),
            autorefresh: $("#autoClickRefresh").is(':checked'),
        };

        chrome.storage.local.set({
            'ticketDetails': storage
        });

        // storage["passenger"] = {
        //     passengerlist: [
        //         {
        //             name: "",
        //             age: "",
        //             gender: "",
        //             berth: "",
        //             food: "",
        //             bedroll: "",
        //             senior: "",
        //             optberth: true
        //         }
        //     ],
        //     childlist: [
        //         {
        //             name: "",
        //             age: "",
        //             gender: ""
        //         }
        //     ],
        //     travelinsurance: false,
        //     autoupgaradation: true,
        //     bookonlyconfirm: true,
        //     bookoption: "",
        //     mobile: ""
        // };

        // storage["payment"] = {
        //     mode: "",
        //     bank: ""
        // };
    });
    $("#btnClear").click(function () {

    })

})