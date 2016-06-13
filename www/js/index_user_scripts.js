
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
        var sname;
//var snotes;
        sname=document.getElementById("sname");
        //snotes=document.getElementsById("snotes");
        activate_page("#displaydata"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
