/*jshint browser:true */
/*global $ */
(function () {
    "use strict";
    /*
      hook up event handlers 
    */
    function createListItem(webUrl, listName, itemProperties, success, failure) {
       document.getElementById("runout").innerHTML = "here";
        $.ajax({
            url: webUrl + "/_vti_bin/listdata.svc/" + listName,
            type: "POST",
            processData: false,
            contentType: "application/json;odata=verbose",
            data: JSON.stringify(itemProperties),
            headers: {
                "Accept": "application/json;odata=verbose"
            },
            success: function (data) {
                success(data.d);
            },
            error: function (data) {
                failure(data.responseJSON.error);
            }
        });
    }

    function register_event_handlers() {


        /* button  .uib_w_2 */
        $(document).on("click", ".uib_w_2", function (evt) {
            /*global activate_subpage */
            activate_subpage("#formpage");
            return false;
        });

        /* button  .uib_w_2 */
        $(document).on("click", ".uib_w_2", function (evt) {
            /*global activate_subpage */
            activate_subpage("#formpage");
            return false;
        });

        /* button  Button */
        $(document).on("click", ".uib_w_2", function (evt) {
            /*global activate_page */
            activate_page("#Form");
            return false;
        });

        /* button  Cancel */
        $(document).on("click", ".uib_w_12", function (evt) {
            /*global activate_page */
            activate_page("#mainpage");
            return false;
        });

        /* button  Submit */


        /* button  Submit */
        $(document).on("click", ".uib_w_11", function (evt) {
            /* your code goes here */


            return false;
        });

        /* button  Submit */
        $(document).on("click", ".uib_w_15", function (evt) {

            //var snotes;
            var sname = $("#nameID").val();
            var sloc = $("#locID").val();
            var stime = $("#timeID").val();
            var snotes = $("#notesID").val();
            var sincident = $("#incidentID").val();
            var smin = $("#minID").val();
            var smod = $("#modID").val();
            var smaj = $("#majID").val();
            var taskProperties = {
                'Assignment': sname,
                'Location': sloc,
                'InfractionLevelValue': sincident,
                'DateAndTime': stime,
                'Notes': snotes,
                'MinorInfractionsValue': smin,
                'ModerateInfractionsValue': smod,
                'MajorInfractionsValue': smaj,
            };

            createListItem('https://connect.fsd38.ab.ca/FSDConnect', 'SRSIncidents', taskProperties, function (task) {
                    document.getElementById("runout").innerHTML = 'Task' + task.Location + ' has been created';
                },
                function (error) {
                    document.getElementById("runout").innerHTML = JSON.stringify(error);
                }
            );

            document.getElementById("nameOUT").innerHTML = sname;
            document.getElementById("locOUT").innerHTML = sloc;
            document.getElementById("timeOUT").innerHTML = stime;
            document.getElementById("noteOUT").innerHTML = snotes;
            document.getElementById("incidentOUT").innerHTML = sincident;
            document.getElementById("minOUT").innerHTML = smin;
            document.getElementById("modOUT").innerHTML = smod;
            document.getElementById("majOUT").innerHTML = smaj;
            activate_page("#displaydata");
            return false;
        });

        /* button  Return */
        $(document).on("click", ".uib_w_16", function (evt) {
            /* your code goes here */
            //Usage: create task
            $("#nameID").val("");
            $("#locID").val("");
            $("#timeID").val("");
            $("#notesID").val("");
            $("#incidentID").val("");
            $("#minID").val("None");
            $("#modID").val("None");
            $("#majID").val("None");
            activate_page("#mainpage");
            return false;
        });

    }
    document.addEventListener("app.Ready", register_event_handlers, false);
})();