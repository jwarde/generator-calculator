/*
Welfare Generator Calculator
Coded By John Warde 2016 BSc (HONS) Mathematics, PGCE Secondary Mathematics (inc 'A' Levels) 

*/

$(document).ready(function () {

    $("#accordion").accordion();

    $("#accordion-menu").accordion();

    function ValidateForm() {
        //alert('hi');
        $(":input").each(function () {

            // Declaring input variables..
            var InputValue = +$(this).val();

            //alert("Value: " + $("#test").val());

            var errorMessage = $('<p>Only 0-9</p>');
            //errorMessage.insertAfter($(this));
            //console.log(errorMessage);
            //(x < 10 && y > 1)

            console.log(InputValue);

            //age = Number(age);
            InputValue = parseInt(InputValue);

            if (isNaN(InputValue)) {

                $(this).insertAfter(errorMessage);

            } else if (InputValue = "" || InputValue < 30) {

                //$(this).closest("p").remove();
                $(this).next().remove();

            } else if (InputValue < 0 || InputValue > 30) {

                $(this).insertAfter(errorMessage);

            }


        });

    };

    function CalculateOnLoad() {



        $("#jQueryInstan").empty();

        //////////////////////////////////////////////////
        /*  Initialising and Gathering Input Quantities */
        //////////////////////////////////////////////////

        // Initialising Variables
        var TxtQtyX = "TxtQty";
        var i = 1;
        var TxtQty = [];
        var sumQty = 0;

        // Gathering Input Quantities
        $(".qty").each(function () {

            // Building the jquery selector statement 
            var TxtQtyXi = TxtQtyX + i;
            var inputTxtQtyXi = "#" + TxtQtyXi;

            // Initialising variable to be fed into the array
            var TxtQtyXi = +$(this).val();

            // Add elements to the array
            TxtQty[i] = TxtQtyXi;

            sumQty = parseInt(sumQty) + parseInt(TxtQtyXi);

            /*
            //Testing Output of Function

            //Message Output
            print "TxtQtyXi = " + TxtQtyXi + "<br />"; 
            $("#jQueryInstan").append(inputTxtQtyXi + " =  " + TxtQtyXi + "<br />");

            //Console Output
            */


            i++; //Increment to loop through entire selection - placing elements into an array
        });

        //alert(sumQty);

        ///////////////////////////////////////////////////////
        /*  Initialising and Gathering Prefigured kVA values */
        ///////////////////////////////////////////////////////

        // Initialising variables
        var TxtKVAX = "TxtKVA";
        var j = 1;
        var TxtKVA = [];

        // Gathering Input Quantities
        $(".kva").each(function () {

            // Building the jquery selector statement 
            var TxtKVAXj = TxtKVAX + j;
            var inputTxtKVAXj = "#" + TxtKVAXj;

            // Initialising variable to be fed into the array
            var TxtKVAXj = +$(this).val();


            // Add elements to the array
            TxtKVA[j] = TxtKVAXj;

            /*
            //Testing Output of Function

            //Message Output
            print "TxtQtyXi = " + TxtQtyXi + "<br />"; 
            $("#jQueryInstan").append(inputTxtKVAXj + " =  " + TxtKVAXj + "<br />");

            //Console Output

            */


            j++; //Increment to loop through entire selection - placing elements into an array
        });


        /////////////////////////////////////////////
        /*  Calculate the AMPS at 240 Volt Per Row */
        /////////////////////////////////////////////

        // Initialising variables
        var AMPS240K = 0;
        var AMPS240 = [];

        // Looping through prepared arrays
        for (i = 1, j = 1, k = 1; i < 26; i++, j++, k++) {

            // Calculating AMPS at 240 Volt
            var AMPS240K = (((parseInt(TxtQty[i]) * parseFloat(TxtKVA[j])) / 240) * 1000).toFixed(3);

            // Assigning calculated values to new array
            AMPS240[k] = Number(AMPS240K);

            /*
            //Testing Contents of Array

            //Output as Message
            print "TxtQtyXi = " + TxtQtyXi + "<br />"; */
            //$("#jQueryInstan").append("AMPS240[" + k + "] =  " + AMPS240[k] + " TxtQty[i] = " + TxtQty[i] + " TxtKVA[j] = " + TxtKVA[j] + "<br />");

            //Output Contents as Console 

            /**/
        }




        ///////////////////////////////////////////////
        /*  Calculate the AMPS over 415 Volt Per Row */
        ///////////////////////////////////////////////

        // Initialising variables
        var AMPS415L = 0;
        var AMPS415 = [];
        var strAMPData = "";

        // Looping through prepared arrays
        for (i = 1, j = 1, l = 1; i < 26; i++, j++, l++) {

            // Calculating AMPS over 415 Volt
            var AMPS415L = Number(((parseInt(TxtQty[i]) * Number(TxtKVA[j]) * 1000) / 718).toFixed(3));

            AMPS415[l] = Number(AMPS415L);

            //strAMPData = Number(strAMPData) + Number(AMPS415[l]);

            /*
            //Testing Contents of Array

            //Output as Message
            print "TxtQtyXi = " + TxtQtyXi + "<br />"; */
            //$("#jQueryInstan").append("AMPS415L[" + l + "] =  " + AMPS415[l] + " TxtQty[i] = " + TxtQty[i] + " TxtKVA[j] = " + TxtKVA[j] + "<br />");

            //Output Contents as Console 

            /**/


        }

        //alert("strAMPData = " + typeof strAMPData);
        /// <reference path="../GenCalculator-V1.htm" />

        //var arr = [1, 2, 3, 4];
        var total = 0;
        for (var x in AMPS415) { total += Number(AMPS415[x]); }

        //alert('total = ' + Number(total));

        var sumAMPS415 = 0;

        sumAMPS415 = total;
        /*
        //Testing Contents of Array

        //Output as Message
        print "TxtQtyXi = " + TxtQtyXi + "<br />"; 
        $("#jQueryInstan").append(inputTxtKVAXj + " =  " + TxtKVAXj + "<br />");

        //Output Contents as Console 

        */

        ///////////////////////////////////////
        /*  Calculate Total AMPS at 240 Volt */
        ///////////////////////////////////////

        // Initialising variables
        var TOTALAMPS = 0;

        // Looping through prepared arrays
        for (m = 1; m < 26; m++) {

            // Calculating AMPS at 240Volt
            TOTALAMPS = parseFloat(TOTALAMPS) + parseFloat(AMPS240[m]);


        }

        /*
        //Testing Sum of AMPS at 240 Volt

        //Output as Message
        print "TxtQtyXi = " + TxtQtyXi + "<br />"; 
        $("#jQueryInstan").append(inputTxtKVAXj + " =  " + TxtKVAXj + "<br />");

        //Output Contents as Console 


        $("#jQueryInstan").append(TOTALAMPS + " , ");
        //alert("TOTALAMPS = " + TOTALAMPS);
        */



        ///////////////////////////////////////////////////////////////
        //  Calculate Total No of Sockets (32AMP, 240 Volt) Required //
        ///////////////////////////////////////////////////////////////

        ////        // Initialising variables
        ////        var SOCKETS32V240VREQ = 0;

        ////        // Looping through prepared arrays
        ////        for (n = 1; n < 24; n++) {

        ////            // Calculating No. of Sockets Required
        ////            var SOCKETS32V240VREQ = parseInt(SOCKETS32V240VREQ) + parseInt(TxtQty[n]);

        ////        }
        ////        
        ////        SOCKETS32V240VREQ = parseInt(SOCKETS32V240VREQ);


        //        var SOCKETS32V240VREQ = 0;
        //        var simpleSum = 0;
        //        for (y = 0; y < 26; y++) {

        //            simpleSum = simpleSum + TxtQty[y];
        //            //SOCKETS32V240VREQ = SOCKETS32V240VREQ + parseInt(TxtQty[y]); 

        //        }
        //alert(simpleSum);
        //alert(Number(TxtQty[0]));
        //alert('SOCKETS32V240VREQ = ' + parseInt(SOCKETS32V240VREQ));

        //var totalSOCKETS32V240VREQ = 0;

        //totalSOCKETS32V240VREQ = parseInt(SOCKETS32V240VREQ);
        //Testing Contents of Total No of Sockets (32AMP, 240 Volt)

        //Output as Message
        ////        print "TxtQtyXi = " + TxtQtyXi + "<br />"; 
        ////        $("#jQueryInstan").append(inputTxtKVAXj + " =  " + TxtKVAXj + "<br />");

        //Output Contents as Console 

        /**/


        //////////////////////////////////////////////////
        //  Calculate Total Accomodation Units Required //
        //////////////////////////////////////////////////

        // Initialising variables
        /**/
        var TotalAccomodationUnits = "0";

        // Looping through prepared arrays
        for (o = 1; o < 26; o++) {

            // Calculating Total No. of Accomodation Units
            TotalAccomodationUnits = parseInt(TotalAccomodationUnits) + parseInt(TxtQty[o]);

        }
        /**/
        /*
        //Testing Contents of Total No. of Accomodation Units

        //Output as Message
        print "TxtQtyXi = " + TxtQtyXi + "<br />"; 
        $("#jQueryInstan").append(inputTxtKVAXj + " =  " + TxtKVAXj + "<br />");

        //Output Contents as Console 

        */


        ///////////////////////////////////////////////////////
        //  Calculate Total No. AMPS Over 415 Volts Required //
        ///////////////////////////////////////////////////////

        // Initialising variables

        ////        var sum415 = 0;
        ////        var multiplierArray = [9.75, 9.75, 9.75, 8.36, 6.97, 9.75, 8.36, 8.36, 15.32, 9.06, 9.06, 7.67, 6.23, 9.06, 6.27, 10.45, 4.88, 6.27, 6.27, 5.58, 6.97, 8.36, 4.88, 13.93, 100.3];

        ////        //alert(TxtQty[1]);
        ////        for (i = 0; i < 26; i++) {

        ////            //var TOTALAMPSOVER415 = Number(Number(TOTALAMPSOVER415) * (Number(multiplierArray[i]) * Number(TxtQty[i + 1])));
        ////            //var TOTALAMPSOVER415 = Number(TOTALAMPSOVER415) + Number(TxtQty[i + 1]);
        ////            //TOTALAMPS = parseFloat(TOTALAMPS) + parseFloat(AMPS240[m]);

        ////            //TOTALAMPSOVER415 = parseFloat(TOTALAMPSOVER415) + (parseFloat(multiplierArray[i]) * parseFloat(TxtQty[i + 1]));
        ////            sum415 = sum415 + (1 * TxtQty[i + 1]);
        ////            

        ////            //                            var mAval = multiplierArray[i];
        ////            //                            strTOTALAMPSOVER415 = strTOTALAMPSOVER415 + " , " + mAval;
        ////        }


        // Initialising variables
        var sum415 = 0;
        var multiplierArray = [9.75, 9.75, 9.75, 8.36, 6.97, 9.75, 8.36, 8.36, 15.32, 9.06, 9.06, 7.67, 6.23, 9.06, 6.27, 10.45, 4.88, 6.27, 6.27, 5.58, 6.97, 8.36, 4.88, 13.93, 100.3];


        // Looping through prepared arrays
        for (n = 1; n < 25; n++) {

            // Calculating AMPS at 240Volt
            sum415 = parseFloat(sum415) + (parseFloat(multiplierArray[n - 1]) * parseFloat(TxtQty[n]));

            console.log("parseFloat(multiplierArray[n]) = " + parseFloat(multiplierArray[n]));
        }

        sum415 = sum415.toFixed(2);
        sum415 = parseFloat(sum415);

        //alert(parseFloat(TOTALAMPSOVER415));
        //$("#jQueryInstan").empty();
        //$("#jQueryInstan").append("strTOTALAMPSOVER415 =  " + strTOTALAMPSOVER415 + "<br />");

        //var TOTALAMPS = (AMPS240_1 + AMPS240_2 + AMPS240_3 + AMPS240_4 + AMPS240_5 + AMPS240_6 + AMPS240_7 + AMPS240_8 + AMPS240_9 + AMPS240_10 + AMPS240_11 + AMPS240_12 + AMPS240_13 + AMPS240_14 + AMPS240_15 + AMPS240_16 + AMPS240_17 + AMPS240_18 + AMPS240_19 + AMPS240_20 + AMPS240_21 + AMPS240_22 + AMPS240_23 + AMPS240_24 + AMPS240_25);
        //var TOTALAMPSOVER415 = (9.75 * parseInt(TxtQty[1])) + (9.75 * parseInt(TxtQty[2])) + (9.75 * parseInt(TxtQty[3])) + (8.36 * parseInt(TxtQty[4])) + (6.97 * parseInt(TxtQty[5])) + (9.75 * parseInt(TxtQty[6])) + (8.36 * parseInt(TxtQty[7])) + (8.36 * parseInt(TxtQty[8])) + (15.32 * parseInt(TxtQty[9])) + (9.06 * parseInt(TxtQty[10])) + (9.06 * parseInt(TxtQty[11])) + (7.67 * parseInt(TxtQty[12])) + (6.23 * parseInt(TxtQty[13])) + (9.06 * parseInt(TxtQty[14])) + (6.27 * parseInt(TxtQty[15])) + (10.45 * parseInt(TxtQty[16])) + (4.88 * parseInt(TxtQty[17])) + (6.27 * parseInt(TxtQty[18])) + (6.27 * parseInt(TxtQty[19])) + (5.58 * parseInt(TxtQty[20])) + (6.97 * parseInt(TxtQty[21])) + (8.36 * parseInt(TxtQty[22])) + (4.88 * parseInt(TxtQty[23])) + (13.93 * parseInt(TxtQty[24])) + (100.3 * parseInt(TxtQty[25]));
        /*
        var TOTALAMPSOVER415 = (9.75 * parseInt(TxtQty[1])) + (9.75 * parseInt(TxtQty[2])) + (9.75 * parseInt(TxtQty[3])) + (8.36 * parseInt(TxtQty[4])) + (6.97 * parseInt(TxtQty[5])) + (9.75 * parseInt(TxtQty[6])) + (8.36 * parseInt(TxtQty[7])) + (8.36 * parseInt(TxtQty[8])) + (15.32 * parseInt(TxtQty[9])) + (9.06 * parseInt(TxtQty[10])) + (9.06 * parseInt(TxtQty[11])) + (7.67 * parseInt(TxtQty[12])) + (6.23 * parseInt(TxtQty[13])) + (9.06 * parseInt(TxtQty[14])) + (6.27 * parseInt(TxtQty[15])) + (10.45 * parseInt(TxtQty[16])) + (4.88 * parseInt(TxtQty[17])) + (6.27 * parseInt(TxtQty[18])) + (6.27 * parseInt(TxtQty[19])) + (5.58 * parseInt(TxtQty[20])) + (6.97 * parseInt(TxtQty[21])) + (8.36 * parseInt(TxtQty[22])) + (4.88 * parseInt(TxtQty[23])) + (13.93 * parseInt(TxtQty[24])) + (100.3 * parseInt(TxtQty[25]));
        */
        //var SOCKETS32V240VREQ = (TxtQty1 + TxtQty2 + TxtQty3 + TxtQty4 + TxtQty5 + TxtQty6 + TxtQty7 + TxtQty8 + TxtQty9 + TxtQty10 + TxtQty11 + TxtQty12 + TxtQty13 + TxtQty14 + TxtQty15 + TxtQty16 + TxtQty17 + TxtQty18 + TxtQty19 + TxtQty20 + TxtQty21 + TxtQty22 + TxtQty23);
        //var TotalAccomodationUnits = (TxtQty1 + TxtQty2 + TxtQty3 + TxtQty4 + TxtQty5 + TxtQty6 + TxtQty7 + TxtQty8 + TxtQty9 + TxtQty10 + TxtQty11 + TxtQty12 + TxtQty13 + TxtQty14 + TxtQty15 + TxtQty16 + TxtQty17 + TxtQty18 + TxtQty19 + TxtQty20 + TxtQty21 + TxtQty22 + TxtQty23 + TxtQty24 + TxtQty25);

        //alert(TOTALAMPSOVER415);

        //TOTALAMPSOVER415 = Number(TOTALAMPSOVER415);

        /*
        Conditional Logic
        */

        var SOCKETS32V240VREQ = parseInt(SOCKETS32V240VREQ);
        var TotalAccomodationUnits = parseInt(TotalAccomodationUnits);
        var TOTALKVAOVER415;

        if (TotalAccomodationUnitsReq == 1) {
            //block of code to be executed if the condition is true
            //var TOTALKVAOVER415 = ((parseFloat(sumAMPS415) * 240) / 1000);
            var TOTALKVAOVER415 = ((parseFloat(sum415) * 240) / 1000);

            //var TOTALKVAOVER415 = ((TOTALAMPS) * 240) / 1000);

            //var TOTALKVAOVER415 = 1;
        } else {
            //block of code to be executed if the condition is false
            //var TOTALKVAOVER415 = ((parseFloat(sumAMPS415) * 718) / 1000);
            var TOTALKVAOVER415 = ((parseFloat(sum415) * 718) / 1000);

            //var TOTALKVAOVER415 = (((TOTALAMPS) * 718) / 1000);
            //var TOTALKVAOVER415 = 2;
        }


        var TOTALKVAOVER415 = parseFloat(TOTALKVAOVER415.toFixed(2));

        //alert("TOTALKVAOVER415 = " + TOTALKVAOVER415);

        /*
        Conditional Logic - Gen Size
        */


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


        /*
        Pasting calculated values back to the page
        */

        //alert("GenSizeReq = " + GenSize + " SOCKETS32V240VREQ = " + SOCKETS32V240VREQ + " TOTALAMPS = " + TOTALAMPS + " TOTALAMPSOVER415 = " + TOTALAMPSOVER415 + " TOTALKVAOVER415 = " + TOTALKVAOVER415 + " TotalAccomodationUnits = " + TotalAccomodationUnits + " HardwareConnectionsReq = " + TxtQty24);

        for (p = 1; p < 26; p++) {


            var KVAAMP240 = "#KVA" + p + "AMP240";

            $(KVAAMP240).text(AMPS240[p]);
        }


        //                $("#KVA1AMP240").text(AMPS240_1);
        //                $("#KVA2AMP240").text(AMPS240_2);

        /*
        Pasting calculated values back to the page

        */

        for (q = 1; q < 26; q++) {

            var KVAAMP415 = "#KVA" + q + "AMP415";

            $(KVAAMP415).text(AMPS415[q]);
        }

        //                $("#KVA1AMP415").text(AMPS415_1);
        //                $("#KVA2AMP415").text(AMPS415_2);
        /**/
        $("#GenSizeReq").text(GenSize);
        $("#32V240VSocketsReq").text(sumQty);
        /**/
        $("#AMPS").text(TOTALAMPS.toFixed(2));
        //$("#TotalAMPSOver415").text(TOTALAMPSOVER415); //sum415
        $("#TotalAMPSOver415").text(sum415); //sum415
        $("#TotalKVAOver415").text(TOTALKVAOVER415);
        $("#TotalAccomodationUnitsReq").text(TotalAccomodationUnits);
        $("#HardwareConnectionsReq").text(parseInt(TxtQty[24]));
        /**/

        //alert("TxtQty[0] = " + TxtQty[0] + "TxtKVA[0] = " + TxtKVA[0]);
    };


    CalculateOnLoad();

    $("input").focusout(function () {
        ValidateForm();
        CalculateOnLoad();

    });



});
    
