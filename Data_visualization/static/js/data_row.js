function drawTable()
{
  $.ajax({
      type: "GET",
      url: "/data",
      contentType: false,
      success: function(response){
        var data_count = response.length
        $("#data_table").empty();
        for(var i=0;i<data_count;i++)
        {
            var data = response[i];
            var table_row = show_table(data);
            $("#data_table").append(table_row);
        }
        document.getElementById("loader").style.display = "none";  
      }
  });
}
function show_table(data)
{
  var table_row = "<tr>\
              <td >"+data[0]+"</td>\
              <td>"+data[1]+"</td>\
              <td>"+data[2]+"</td>\
              <td>"+data[3]+"</td>\
              <td>"+data[4]+"</td>\
              <td>"+data[5]+"</td>\
              <td>"+data[6]+"</td>\
              <td class="+''+data[7]+">"+data[7]+"</td>\
              <td class="+''+data[8]+">"+data[8]+"</td>\
              <td class="+''+data[9]+">"+data[9]+"</td>\
              <td>"+data[10]+"</td>\
              <td>"+data[11]+"</td>\
              <td>"+data[12]+"</td>\
              <td>"+data[13]+"</td>\
              <td>"+data[14]+"</td>\
          </tr>"
   return table_row
}

drawTable()
function filter()
{
  var get_seprate_catagory = JSON.parse(catagory)
  var sex = get_seprate_catagory.sex;
  var relationship = get_seprate_catagory.relationship;
  var race = get_seprate_catagory.race;
  
}
filter()

function handleSexfilter(checkbox, field)
{
  if(checkbox.checked == true){
      $("."+field).parent().show();
  }else{
      $("."+field).parent().hide();
 }
}
function handleRacefilter(checkbox, field)
{
  if(checkbox.checked == true){
      $("."+field).parent().show();
  }else{
      $("."+field).parent().hide();
 }
}
function handleRelationshipfilter(checkbox, field)
{
  if(checkbox.checked == true){
      $("."+field).parent().show();
  }else{
      $("."+field).parent().hide();
 }
}