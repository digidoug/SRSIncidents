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
        var sname = document.getElementsByName("sname")[0].value;
        var sloc = document.getElementsByName("sloc")[0].value;
        var slevel = document.getElementsByName("slevel")[0].value;
        var stime = document.getElementsByName("stime")[0].value;
        var snote = document.getElementsByName("snote")[0].value;
        activate_page("#displaydata"); 
        
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
