
function chooseResult(sum) {
  if (sum < 0) {
    return "seekHelp"
  } else if (sum >= 0 && sum <6) {
    return "notGreat"
  } else {
    return "great"
  }
}  

$(document).ready(function() {
  $("form#stress-test").submit(function(event) {
  
    let total=0;
    
    $("input:checkbox[name=effects]:checked").each(function() {
      const number = $(this).val()
      total += parseInt(number)
    });

    $("input:checkbox[name=symptoms]:checked").each(function() {
      const number = $(this).val()
      total += parseInt(number)
    });

    $("input:checkbox[name=coping-methods]:checked").each(function() {
      const number = $(this).val()
      total += parseInt(number)
    });

  if (chooseResult(total) === "notGreat") {
    $('#notGreat').show();
    $('#great').hide();
    $('#seekHelp').hide();
  } else if (chooseResult(total) === "great") {
    $('#seekHelp').show();
    $('#great').hide();
    $('#notGreat').hide();
  } else {
    $('#great').show();
    $('#notGreat').hide();
    $('#seekHelp').hide();
  }
    

    event.preventDefault();
  }); 
});
