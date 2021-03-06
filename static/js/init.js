

var nav = null;
    function requestPosition() {
        if (nav == null) {
            nav = window.navigator;
        }
        var geoloc = nav.geolocation;
        if (geoloc != null) {
            geoloc.getCurrentPosition(successCallback, errorCallback);
        }
    }
    function successCallback(position) {
        document.getElementById("latitude").value =
            position.coords.latitude;
        document.getElementById("longitude").value =
            position.coords.longitude;
    }
    function errorCallback(error) {
        var strMessage = "";
        // Check for known errors
        switch (error.code) {
            case error.PERMISSION_DENIED:
                strMessage = "Access to your location is turned off. "  +
                    "Change your settings to turn it back on.";
                break;
            case error.POSITION_UNAVAILABLE:
                strMessage = "Data from location services is " +
                    "currently unavailable.";
                break;
            case error.TIMEOUT:
                strMessage = "Location could not be determined " +
                    "within a specified timeout period.";
                break;
            default:
                break;
        }
        document.getElementById("status").innerHTML = strMessage;
    }

  // Or with jQuery


/// AQUI EL JQUERY AJAX PARA RECUPERAR LOS NOMBRES DE CIUDADES, CHECA: def listaciudades(request) en view.py

  $(document).ready(function(){
     $.ajax({
                url: '/ajax/get_ciudades/',
                data: {},
                dataType: 'json',
                success: function (data) {

                    $('input.autocomplete').autocomplete({
                      data : data
                    });

                }
              });
  });

    var nav = null;
    function requestPosition() {
        if (nav == null) {
            nav = window.navigator;
        }
        var geoloc = nav.geolocation;
        if (geoloc != null) {
            geoloc.getCurrentPosition(successCallback, errorCallback);
        }
    }
    function successCallback(position) {
        document.getElementById("latitude").value =
            position.coords.latitude;
        document.getElementById("longitude").value =
            position.coords.longitude;
    }
    function errorCallback(error) {
        var strMessage = "";
        // Check for known errors
        switch (error.code) {
            case error.PERMISSION_DENIED:
                strMessage = "Access to your location is turned off. "  +
                    "Change your settings to turn it back on.";
                break;
            case error.POSITION_UNAVAILABLE:
                strMessage = "Data from location services is " +
                    "currently unavailable.";
                break;
            case error.TIMEOUT:
                strMessage = "Location could not be determined " +
                    "within a specified timeout period.";
                break;
            default:
                break;
        }
        document.getElementById("status").innerHTML = strMessage;
    }
  // Or with jQuery
/// AQUI EL JQUERY AJAX PARA RECUPERAR LOS NOMBRES DE CIUDADES, CHECA: def listaciudades(request) en view.py
  $(document).ready(function(){
      $('select').formSelect();




      $('.sidenav').sidenav();

      $('#accessmodal').modal();

      var hasBeenClicked = false;



      if (localStorage.getItem('jodido')   ){

      }else {
                       $('#accessmodal').modal({    dismissible:false});

                    $('#accessmodal').modal('open');// set


                    $('#accept').click(function () {
                         $('body').css({
    overflow: 'visible'
});

                    localStorage.setItem('jodido', true);
                    });




      }





     $.ajax({
                url: '/ajax/get_ciudades/',
                data: {},
                dataType: 'json',
                success: function (data) {
                    $('input.autocomplete').autocomplete({
                      data : data
                    });
                }
              });
  });



  $(document).ready(function(){
    $('.datepicker').datepicker();
  });





  // Or with jQuery
