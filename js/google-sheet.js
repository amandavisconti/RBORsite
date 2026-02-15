// Variable to hold request
var request;

// Bind to the submit event of our form
$("#foo").submit(function(event){

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button");
    
    // Get status message elements
    var $formStatus = $("#form-status");
    var $formError = $("#form-error");
    var $formSuccess = $("#form-success");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Clear any previous messages
    $formError.text("").attr("aria-live", "off");
    $formSuccess.text("").attr("aria-live", "off");

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);
    
    // Set loading state
    $formStatus.attr("aria-busy", "true");
    $formStatus.text("Submitting...").attr("aria-live", "polite");

    // Fire off the request to Google Apps Script
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbw17-_xv10gp5h9zk2Ctw5UJ1K3-e5Rzjb4foDknTxuvVE1pX_l/exec",
        type: "post",
        data: serializedData,
        timeout: 10000 // 10 second timeout
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
        
        // Clear loading state
        $formStatus.attr("aria-busy", "false").text("");
        
        // Show success message
        $formSuccess.text("Thank you! Your submission was successful.")
            .attr("role", "alert")
            .attr("aria-live", "assertive")
            .focus();
        
        // Optionally reset form after successful submission
        $form[0].reset();
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
        
        // Clear loading state
        $formStatus.attr("aria-busy", "false").text("");
        
        // Show user-friendly error message
        var errorMessage = "Submission failed. Please try again.";
        if (textStatus === "timeout") {
            errorMessage = "Submission timed out. Please check your connection and try again.";
        } else if (textStatus === "abort") {
            errorMessage = "Submission was cancelled.";
        }
        
        $formError.text(errorMessage)
            .attr("role", "alert")
            .attr("aria-live", "assertive")
            .focus();
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
});