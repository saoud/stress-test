
function chooseResult(sum) {
  if (sum < 0) {
    $('#great').show();
    $('#notGreat').hide();
    $('#seekHelp').hide();
  } else if (sum >= 0 && sum <6) {
    $('#notGreat').show();
    $('#great').hide();
    $('#seekHelp').hide();
  } else {
    $('#seekHelp').show();
    $('#great').hide();
    $('#notGreat').hide();
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

    chooseResult(total);

    event.preventDefault();
  }); 
});
