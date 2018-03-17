$(document).ready(function () {

    $("#accordion").accordion();

    $("#accordion-menu").accordion();

    function CalculateOnLoad() {

        $("#jQueryInstan").empty();

        // The .each() method is unnecessary here:
        var TxtQtyX = "TxtQty";
        var i = 1;
        var TxtQty = [];
        $(".qty").each(function () {

            // Declaring input variables..
            var TxtQtyXi = TxtQtyX + i;
            var inputTxtQtyXi = "#" + TxtQtyXi;


            var TxtQtyXi = +$(this).val();


            TxtQty[i] = TxtQtyXi;

            //print "TxtQtyXi = " + TxtQtyXi + "<br />"; 
            //$("#jQueryInstan").append(inputTxtQtyXi + " =  " + TxtQtyXi + "<br />");
            i++;
        });




        // The .each() method is unnecessary here:
        var TxtKVAX = "TxtKVA";
        var j = 1;
        var TxtKVA = [];

        $(".kva").each(function () {

            // Declaring input variables..
            var TxtKVAXj = TxtKVAX + j;
            var inputTxtKVAXj = "#" + TxtKVAXj;


            var TxtKVAXj = +$(this).val();

            TxtKVA[j] = TxtKVAXj;


            //print "TxtQtyXi = " + TxtQtyXi + "<br />"; 
            //$("#jQueryInstan").append(inputTxtKVAXj + " =  " + TxtKVAXj + "<br />");
            j++;
        });

        //alert($("#TxtQty1").val());
        // Declaring input variables..
        //                var TxtQty1 = +$("#TxtQty1").val();
        //                var TxtQty2 = +$("#TxtQty2").val();
        //                var TxtQty3 = +$("#TxtQty3").val();
        //                var TxtQty4 = +$("#TxtQty4").val();
        //                var TxtQty5 = +$("#TxtQty5").val();
        //                var TxtQty6 = +$("#TxtQty6").val();
        //                var TxtQty7 = +$("#TxtQty7").val();
        //                var TxtQty8 = +$("#TxtQty8").val();
        //                var TxtQty9 = +$("#TxtQty9").val();
        //                var TxtQty10 = +$("#TxtQty10").val();
        //                var TxtQty11 = +$("#TxtQty11").val();
        //                var TxtQty12 = +$("#TxtQty12").val();
        //                var TxtQty13 = +$("#TxtQty13").val();
        //                var TxtQty14 = +$("#TxtQty14").val();
        //                var TxtQty15 = +$("#TxtQty15").val();
        //                var TxtQty16 = +$("#TxtQty16").val();
        //                var TxtQty17 = +$("#TxtQty17").val();
        //                var TxtQty18 = +$("#TxtQty18").val();
        //                var TxtQty19 = +$("#TxtQty19").val();
        //                var TxtQty20 = +$("#TxtQty20").val();
        //                var TxtQty21 = +$("#TxtQty21").val();
        //                var TxtQty22 = +$("#TxtQty22").val();
        //                var TxtQty23 = +$("#TxtQty23").val();
        //                var TxtQty24 = +$("#TxtQty24").val();
        //                var TxtQty25 = +$("#TxtQty25").val();

        //                var TxtKVA1 = +$("#TxtKVA1").val();
        //                var TxtKVA2 = +$("#TxtKVA2").val();
        //                var TxtKVA3 = +$("#TxtKVA3").val();
        //                var TxtKVA4 = +$("#TxtKVA4").val();
        //                var TxtKVA5 = +$("#TxtKVA5").val();
        //                var TxtKVA6 = +$("#TxtKVA6").val();
        //                var TxtKVA7 = +$("#TxtKVA7").val();
        //                var TxtKVA8 = +$("#TxtKVA8").val();
        //                var TxtKVA9 = +$("#TxtKVA9").val();
        //                var TxtKVA10 = +$("#TxtKVA10").val();
        //                var TxtKVA11 = +$("#TxtKVA11").val();
        //                var TxtKVA12 = +$("#TxtKVA12").val();
        //                var TxtKVA13 = +$("#TxtKVA13").val();
        //                var TxtKVA14 = +$("#TxtKVA14").val();
        //                var TxtKVA15 = +$("#TxtKVA15").val();
        //                var TxtKVA16 = +$("#TxtKVA16").val();
        //                var TxtKVA17 = +$("#TxtKVA17").val();
        //                var TxtKVA18 = +$("#TxtKVA18").val();
        //                var TxtKVA19 = +$("#TxtKVA19").val();
        //                var TxtKVA20 = +$("#TxtKVA20").val();
        //                var TxtKVA21 = +$("#TxtKVA21").val();
        //                var TxtKVA22 = +$("#TxtKVA22").val();
        //                var TxtKVA23 = +$("#TxtKVA23").val();
        //                var TxtKVA24 = +$("#TxtKVA24").val();
        //                var TxtKVA25 = +$("#TxtKVA25").val();

        //calculate the amps at 240 per row

        // The .each() method is unnecessary here:

        var AMPS240K = "";
        var AMPS240 = [];


        for (i = 1, j = 1, k = 1; i < 26; i++, j++, k++) {
            // Calculating AMPS at 240Volt

            var AMPS240K = (((TxtQty[i] * TxtKVA[j]) / 240) * 1000).toFixed(2);

            AMPS240[k] = AMPS240K;
        }

        //                var AMPS240_1 = (((TxtQty1 * TxtKVA1) / 240) * 1000).toFixed(2);
        //                var AMPS240_2 = (((TxtQty2 * TxtKVA2) / 240) * 1000).toFixed(2);
        //                var AMPS240_3 = (((TxtQty3 * TxtKVA3) / 240) * 1000).toFixed(2);
        //                var AMPS240_4 = (((TxtQty4 * TxtKVA4) / 240) * 1000).toFixed(2);
        //                var AMPS240_5 = (((TxtQty5 * TxtKVA5) / 240) * 1000).toFixed(2);
        //                var AMPS240_6 = (((TxtQty6 * TxtKVA6) / 240) * 1000).toFixed(2);
        //                var AMPS240_7 = (((TxtQty7 * TxtKVA7) / 240) * 1000).toFixed(2);
        //                var AMPS240_8 = (((TxtQty8 * TxtKVA8) / 240) * 1000).toFixed(2);
        //                var AMPS240_9 = (((TxtQty9 * TxtKVA9) / 240) * 1000).toFixed(2);
        //                var AMPS240_10 = (((TxtQty10 * TxtKVA10) / 240) * 1000).toFixed(2);
        //                var AMPS240_11 = (((TxtQty11 * TxtKVA11) / 240) * 1000).toFixed(2);
        //                var AMPS240_12 = (((TxtQty12 * TxtKVA12) / 240) * 1000).toFixed(2);
        //                var AMPS240_13 = (((TxtQty13 * TxtKVA13) / 240) * 1000).toFixed(2);
        //                var AMPS240_14 = (((TxtQty14 * TxtKVA14) / 240) * 1000).toFixed(2);
        //                var AMPS240_15 = (((TxtQty15 * TxtKVA15) / 240) * 1000).toFixed(2);
        //                var AMPS240_16 = (((TxtQty16 * TxtKVA16) / 240) * 1000).toFixed(2);
        //                var AMPS240_17 = (((TxtQty17 * TxtKVA17) / 240) * 1000).toFixed(2);
        //                var AMPS240_18 = (((TxtQty18 * TxtKVA18) / 240) * 1000).toFixed(2);
        //                var AMPS240_19 = (((TxtQty19 * TxtKVA19) / 240) * 1000).toFixed(2);
        //                var AMPS240_20 = (((TxtQty20 * TxtKVA20) / 240) * 1000).toFixed(2);
        //                var AMPS240_21 = (((TxtQty21 * TxtKVA21) / 240) * 1000).toFixed(2);
        //                var AMPS240_22 = (((TxtQty22 * TxtKVA22) / 240) * 1000).toFixed(2);
        //                var AMPS240_23 = (((TxtQty23 * TxtKVA23) / 240) * 1000).toFixed(2);
        //                var AMPS240_24 = (((TxtQty24 * TxtKVA24) / 240) * 1000).toFixed(2);
        //                var AMPS240_25 = (((TxtQty25 * TxtKVA25) / 240) * 1000).toFixed(2);


        // The .each() method is unnecessary here:

        var AMPS415L = "";
        var AMPS415 = [];


        for (i = 1, j = 1, l = 1; i < 26; i++, j++, l++) {
            // Calculating AMPS at 240Volt

            var AMPS415K = ((TxtQty[i] * TxtKVA[j] * 1000) / 718).toFixed(2);

            AMPS415[l] = AMPS415K;
        }


        //calculate the amps over 415 per row
        //                var AMPS415_1 = ((TxtQty1 * TxtKVA1 * 1000) / 718).toFixed(2);
        //                var AMPS415_2 = ((TxtQty2 * TxtKVA2 * 1000) / 718).toFixed(2);
        //                var AMPS415_3 = ((TxtQty3 * TxtKVA3 * 1000) / 718).toFixed(2);
        //                var AMPS415_4 = ((TxtQty4 * TxtKVA4 * 1000) / 718).toFixed(2);
        //                var AMPS415_5 = ((TxtQty5 * TxtKVA5 * 1000) / 718).toFixed(2);
        //                var AMPS415_6 = ((TxtQty6 * TxtKVA6 * 1000) / 718).toFixed(2);
        //                var AMPS415_7 = ((TxtQty7 * TxtKVA7 * 1000) / 718).toFixed(2);
        //                var AMPS415_8 = ((TxtQty8 * TxtKVA8 * 1000) / 718).toFixed(2);
        //                var AMPS415_9 = ((TxtQty9 * TxtKVA9 * 1000) / 718).toFixed(2);
        //                var AMPS415_10 = ((TxtQty10 * TxtKVA10 * 1000) / 718).toFixed(2);
        //                var AMPS415_11 = ((TxtQty11 * TxtKVA11 * 1000) / 718).toFixed(2);
        //                var AMPS415_12 = ((TxtQty12 * TxtKVA12 * 1000) / 718).toFixed(2);
        //                var AMPS415_13 = ((TxtQty13 * TxtKVA13 * 1000) / 718).toFixed(2);
        //                var AMPS415_14 = ((TxtQty14 * TxtKVA14 * 1000) / 718).toFixed(2);
        //                var AMPS415_15 = ((TxtQty15 * TxtKVA15 * 1000) / 718).toFixed(2);
        //                var AMPS415_16 = ((TxtQty16 * TxtKVA16 * 1000) / 718).toFixed(2);
        //                var AMPS415_17 = ((TxtQty17 * TxtKVA17 * 1000) / 718).toFixed(2);
        //                var AMPS415_18 = ((TxtQty18 * TxtKVA18 * 1000) / 718).toFixed(2);
        //                var AMPS415_19 = ((TxtQty19 * TxtKVA19 * 1000) / 718).toFixed(2);
        //                var AMPS415_20 = ((TxtQty20 * TxtKVA20 * 1000) / 718).toFixed(2);
        //                var AMPS415_21 = ((TxtQty21 * TxtKVA21 * 1000) / 718).toFixed(2);
        //                var AMPS415_22 = ((TxtQty22 * TxtKVA22 * 1000) / 718).toFixed(2);
        //                var AMPS415_23 = ((TxtQty23 * TxtKVA23 * 1000) / 718).toFixed(2);
        //                var AMPS415_24 = ((TxtQty24 * TxtKVA24 * 1000) / 718).toFixed(2);
        //                var AMPS415_25 = ((TxtQty25 * TxtKVA25 * 1000) / 718).toFixed(2);

        //Calculate Totals

        var TOTALAMPS = "";
        for (m = 1; m < 26; m++) {
            // Calculating AMPS at 240Volt

            TOTALAMPS = AMPS240[m];

        }

        var SOCKETS32V240VREQ = "";
        for (n = 1; n < 24; n++) {
            // Calculating AMPS at 240Volt

            SOCKETS32V240VREQ = TxtQty[n];

        }


        var TotalAccomodationUnits = "";
        for (o = 1; o < 26; o++) {
            // Calculating AMPS at 240Volt

            TotalAccomodationUnits = TxtQty[n];

        }

        //var TOTALAMPS = (AMPS240_1 + AMPS240_2 + AMPS240_3 + AMPS240_4 + AMPS240_5 + AMPS240_6 + AMPS240_7 + AMPS240_8 + AMPS240_9 + AMPS240_10 + AMPS240_11 + AMPS240_12 + AMPS240_13 + AMPS240_14 + AMPS240_15 + AMPS240_16 + AMPS240_17 + AMPS240_18 + AMPS240_19 + AMPS240_20 + AMPS240_21 + AMPS240_22 + AMPS240_23 + AMPS240_24 + AMPS240_25);
        var TOTALAMPSOVER415 = (9.75 * TxtQty1) + (9.75 * TxtQty2) + (9.75 * TxtQty3) + (8.36 * TxtQty4) + (6.97 * TxtQty5) + (9.75 * TxtQty6) + (8.36 * TxtQty7) + (8.36 * TxtQty8) + (15.32 * TxtQty9) + (9.06 * TxtQty10) + (9.06 * TxtQty11) + (7.67 * TxtQty12) + (6.23 * TxtQty13) + (9.06 * TxtQty14) + (6.27 * TxtQty15) + (10.45 * TxtQty16) + (4.88 * TxtQty17) + (6.27 * TxtQty18) + (6.27 * TxtQty19) + (5.58 * TxtQty20) + (6.97 * TxtQty21) + (8.36 * TxtQty22) + (4.88 * TxtQty23) + (13.93 * TxtQty24) + (100.3 * TxtQty25);
        //var SOCKETS32V240VREQ = (TxtQty1 + TxtQty2 + TxtQty3 + TxtQty4 + TxtQty5 + TxtQty6 + TxtQty7 + TxtQty8 + TxtQty9 + TxtQty10 + TxtQty11 + TxtQty12 + TxtQty13 + TxtQty14 + TxtQty15 + TxtQty16 + TxtQty17 + TxtQty18 + TxtQty19 + TxtQty20 + TxtQty21 + TxtQty22 + TxtQty23);
        //var TotalAccomodationUnits = (TxtQty1 + TxtQty2 + TxtQty3 + TxtQty4 + TxtQty5 + TxtQty6 + TxtQty7 + TxtQty8 + TxtQty9 + TxtQty10 + TxtQty11 + TxtQty12 + TxtQty13 + TxtQty14 + TxtQty15 + TxtQty16 + TxtQty17 + TxtQty18 + TxtQty19 + TxtQty20 + TxtQty21 + TxtQty22 + TxtQty23 + TxtQty24 + TxtQty25);

        var SOCKETS32V240VREQ = parseInt(SOCKETS32V240VREQ);
        var TotalAccomodationUnits = parseInt(TotalAccomodationUnits);


        if (TotalAccomodationUnitsReq == 1) {
            //block of code to be executed if the condition is true
            var TOTALKVAOVER415 = ((TOTALAMPS * 240) / 1000);
            //var TOTALKVAOVER415 = 1;
        } else {
            //block of code to be executed if the condition is false
            var TOTALKVAOVER415 = ((TOTALAMPS * 718) / 1000);
            //var TOTALKVAOVER415 = 2;
        }


        var TOTALKVAOVER415 = parseInt(TOTALKVAOVER415);


        if (TOTALKVAOVER415 < 8) {
            //Statement(s) to be executed if expression 1 is true
            var GenSize = "15 KVA";
        } else if (TOTALKVAOVER415 < 20.1) {
            //Statement(s) to be executed if expression 3 is true
            var GenSize = "20 KVA";
        } else if (TOTALKVAOVER415 < 30.1) {
            //Statement(s) to be executed if expression 2 is true
            var GenSize = "30 KVA";
        } else if (TOTALKVAOVER415 < 45.1) {
            //Statement(s) to be executed if expression 3 is true
            var GenSize = "45 KVA";
        } else if (TOTALKVAOVER415 < 60.1) {
            //Statement(s) to be executed if expression 2 is true
            var GenSize = "60 KVA";
        } else if (TOTALKVAOVER415 < 80.1) {
            //Statement(s) to be executed if expression 3 is true
            var GenSize = "80 KVA";
        } else if (TOTALKVAOVER415 < 100.1) {
            //Statement(s) to be executed if expression 2 is true
            var GenSize = "100 KVA";
        } else if (TOTALKVAOVER415 < 150.1) {
            //Statement(s) to be executed if expression 3 is true
            var GenSize = "150 KVA";
        } else if (TOTALKVAOVER415 < 200.1) {
            //Statement(s) to be executed if expression 2 is true
            var GenSize = "200 KVA";
        } else if (TOTALKVAOVER415 < 250.1) {
            //Statement(s) to be executed if expression 3 is true
            var GenSize = "250 KVA";
        } else if (TOTALKVAOVER415 < 350.1) {
            //Statement(s) to be executed if expression 3 is true
            var GenSize = "350 KVA";
        } else if (TOTALKVAOVER415 < 500.1) {
            //Statement(s) to be executed if expression 2 is true
            var GenSize = "500 KVA";
        } else if (TOTALKVAOVER415 < 750.1) {
            //Statement(s) to be executed if expression 3 is true
            var GenSize = "750 KVA";
        } else if (TOTALKVAOVER415 < 1000.1) {
            //Statement(s) to be executed if expression 2 is true
            var GenSize = "1000 KVA";
        } else if (TOTALKVAOVER415 < 1250.1) {
            //Statement(s) to be executed if expression 3 is true
            var GenSize = "1250 KVA";
        } else {
            //Statement(s) to be executed if no expression is true
            var GenSize = "Too Large";
        }


        $("#GenSizeReq").text(GenSize);
        $("#32V240VSocketsReq").text(SOCKETS32V240VREQ);

        $("#AMPS").text(TOTALAMPS);
        $("#TotalAMPSOver415").text(TOTALAMPSOVER415);
        $("#TotalKVAOver415").text(TOTALKVAOVER415);
        $("#TotalAccomodationUnitsReq").text(TotalAccomodationUnits);
        $("#HardwareConnectionsReq").text(TxtQty24);

        alert("GenSizeReq = " + GenSize + " SOCKETS32V240VREQ = " + SOCKETS32V240VREQ + " TOTALAMPS = " + TOTALAMPS + " TOTALAMPSOVER415 = " + TOTALAMPSOVER415 + " TOTALKVAOVER415 = " + TOTALKVAOVER415 + " TotalAccomodationUnits = " + TotalAccomodationUnits + " HardwareConnectionsReq = " + TxtQty24);

        for (p = 1; p < 26; p++) {
            // Pasting calculated values back to the page

            var KVAAMP240 = "#KVA" + p + "AMP240";

            $(KVAAMP240).text(AMPS240[p]);
        }


        //                $("#KVA1AMP240").text(AMPS240_1);
        //                $("#KVA2AMP240").text(AMPS240_2);
        //                $("#KVA3AMP240").text(AMPS240_3);
        //                $("#KVA4AMP240").text(AMPS240_4);
        //                $("#KVA5AMP240").text(AMPS240_5);
        //                $("#KVA6AMP240").text(AMPS240_6);
        //                $("#KVA7AMP240").text(AMPS240_7);
        //                $("#KVA8AMP240").text(AMPS240_8);
        //                $("#KVA9AMP240").text(AMPS240_9);
        //                $("#KVA10AMP240").text(AMPS240_10);
        //                $("#KVA11AMP240").text(AMPS240_11);
        //                $("#KVA12AMP240").text(AMPS240_12);
        //                $("#KVA13AMP240").text(AMPS240_13);
        //                $("#KVA14AMP240").text(AMPS240_14);
        //                $("#KVA15AMP240").text(AMPS240_15);
        //                $("#KVA16AMP240").text(AMPS240_16);
        //                $("#KVA17AMP240").text(AMPS240_17);
        //                $("#KVA18AMP240").text(AMPS240_18);
        //                $("#KVA19AMP240").text(AMPS240_19);
        //                $("#KVA20AMP240").text(AMPS240_20);
        //                $("#KVA21AMP240").text(AMPS240_21);
        //                $("#KVA22AMP240").text(AMPS240_22);
        //                $("#KVA23AMP240").text(AMPS240_23);
        //                $("#KVA24AMP240").text(AMPS240_24);
        //                $("#KVA25AMP240").text(AMPS240_25);


        for (q = 1; q < 26; q++) {
            // Pasting calculated values back to the page

            var KVAAMP415 = "#KVA" + q + "AMP415";

            $(KVAAMP415).text(AMPS415[q]);
        }

        //                $("#KVA1AMP415").text(AMPS415_1);
        //                $("#KVA2AMP415").text(AMPS415_2);
        //                $("#KVA3AMP415").text(AMPS415_3);
        //                $("#KVA4AMP415").text(AMPS415_4);
        //                $("#KVA5AMP415").text(AMPS415_5);
        //                $("#KVA6AMP415").text(AMPS415_6);
        //                $("#KVA7AMP415").text(AMPS415_7);
        //                $("#KVA8AMP415").text(AMPS415_8);
        //                $("#KVA9AMP415").text(AMPS415_9);
        //                $("#KVA10AMP415").text(AMPS415_10);
        //                $("#KVA11AMP415").text(AMPS415_11);
        //                $("#KVA12AMP415").text(AMPS415_12);
        //                $("#KVA13AMP415").text(AMPS415_13);
        //                $("#KVA14AMP415").text(AMPS415_14);
        //                $("#KVA15AMP415").text(AMPS415_15);
        //                $("#KVA16AMP415").text(AMPS415_16);
        //                $("#KVA17AMP415").text(AMPS415_17);
        //                $("#KVA18AMP415").text(AMPS415_18);
        //                $("#KVA19AMP415").text(AMPS415_19);
        //                $("#KVA20AMP415").text(AMPS415_20);
        //                $("#KVA21AMP415").text(AMPS415_21);
        //                $("#KVA22AMP415").text(AMPS415_22);
        //                $("#KVA23AMP415").text(AMPS415_23);
        //                $("#KVA24AMP415").text(AMPS415_24);
        //                $("#KVA25AMP415").text(AMPS415_25);



        //alert("TxtQty[0] = " + TxtQty[0] + "TxtKVA[0] = " + TxtKVA[0]);
    };


    CalculateOnLoad();

    $("input").focusout(function () {
        CalculateOnLoad();
        //alert("ammended");
    });




    //alert(AMPS415_25);
    //var total = price1 + price2;

});
    
