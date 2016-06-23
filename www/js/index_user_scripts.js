
/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */

 function register_event_handlers()
 {
    
    
     /* button  .uib_w_2 */
    $(document).on("click", ".uib_w_2", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#formpage"); 
         return false;
    });
    
        /* button  .uib_w_2 */
    $(document).on("click", ".uib_w_2", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#formpage"); 
         return false;
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_2", function(evt)
    {
         /*global activate_page */
         activate_page("#Form"); 
         return false;
    });
    
        /* button  Cancel */
    $(document).on("click", ".uib_w_12", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  Submit */
    
    
        /* button  Submit */
    $(document).on("click", ".uib_w_11", function(evt)
    {
        /* your code goes here */ 

        
         return false;
    });
    
        /* button  Submit */
    $(document).on("click", ".uib_w_15", function(evt)
    {
        
//var snotes;
        var sname=$("#nameID").val();
        var sloc=$("#locID").val();
        var stime=$("#timeID").val();
        var snotes=$("#notesID").val();
        var sincident=$("#incidentID").val();
                var taskProperties = {
            'TaskName': 'Order Approval',
            'AssignedToId': 12
        };

       createListItem('https://connect.fsd38.ab.ca/FSDConnect','SRSIncidents',taskProperties,function(task){
            console.log('Task' + task.TaskName + ' has been created'); 
          },
          function(error){
            $("#runout").val(JSON.stringify(error));
          }
        );

        document.getElementById("nameOUT").innerHTML=sname;
        document.getElementById("locOUT").innerHTML=sloc;
        document.getElementById("timeOUT").innerHTML=stime;
        document.getElementById("noteOUT").innerHTML=snotes;
        document.getElementById("incidentOUT").innerHTML=sincident;
        activate_page("#displaydata"); 
         return false;
    }); 
    
        /* button  Return */
    $(document).on("click", ".uib_w_16", function(evt)
    {
        /* your code goes here */ 
        //Usage: create task
        $("#nameID").val("");
        $("#locID").val("");
        $("#timeID").val("");
        $("#notesID").val("");
        $("#incidentID").val("");
        activate_page("#mainpage");
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

function createListItem(webUrl,listName, itemProperties, success, failure) {
    $("#runout").val("Here");
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


