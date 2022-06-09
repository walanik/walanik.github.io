$("#sliderInvitations").slider({
    value:100,
    min: 0,
    max: 200,
    step: 10,
    slide: function( event, ui ) {
      $("#amount").val( ui.value );
      cost.slider1 = $("#sliderCost").slider("value");
      domath()
    }
  });
  $("#amount").val($("#sliderInvitations").slider( "value"));
  
  $("#sliderCost").slider({
    value:5,
    min: 1,
    max: 10,
    step: 1,
      slide: function( event, ui ) {
        $("#cost").val("$" + ui.value );
        cost.slider2 = $("#sliderInvitations").slider( "value") * ui.value;
        domath()
      }
    });
    $("#cost").val("$" + $("#sliderCost").slider("value"));
    



    $('.option').change(function(){

        cost.option = 0;


       $('.option:checked').each(function(){

         cost.option += parseInt($(this).val());
   
        });
      
      domath()

    });


function domath() {

  $("#total").text("$" + (cost.option + cost.slider2 + cost.slider1));
  
}  

domath();
  