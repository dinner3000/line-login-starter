$(document).ready(function() {

  $("#verify").on("click", function(){
    post("../api/verify").done(function(data) {
      if(data.scope) {
        alert("Access Token is VALID");
      } else {
        alert("Access Token is INVALID");
      }
    });
  });

  $("#refreshToken").on("click", function(){
    post("../api/refreshToken").done(function(data) {
      if(data.scope) {
        alert("Access Token has been refreshed");
      } else {
        alert("Access Token has not been refreshed");
      }
    });
  });

  $("#revoke").on("click", function(){
    post("../api/revoke").done(function(data) {
      alert("Access Token has been revoked");
    });
  });

  $("#bind").on("click", function(){
    postData("../api/bind", {
      userId: $("#userIdInput").val(),
      email: $("#emailInput").val(),
      licensePlate: $("#licensePlateInput").val(),
      cellphone: $("#cellphoneInput").val()
    }).done(function(data) {
      alert(JSON.stringify(data));
    });
  });

});


var post = function(url) {
  var def = jQuery.Deferred();
  jQuery.ajax({
    type: 'POST',
    url: url,
    success: function(value) {
      def.resolve(value);
    },
    error: function(xhr) {
      def.reject(xhr.responseText);
    }
  });
  return def.promise();
};

var postData = function(url, data) {
  console.log(JSON.stringify(data));
  var def = jQuery.Deferred();
  jQuery.ajax({
    type: 'POST',
    url: url,
    data: JSON.stringify(data),
    dataType: 'json',
    contentType:"application/json; charset=utf-8",
    success: function(value) {
      def.resolve(value);
    },
    error: function(xhr) {
      def.reject(xhr.responseText);
    }
  });
  return def.promise();
};