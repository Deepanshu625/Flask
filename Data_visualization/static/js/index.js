function addData(data, response, type)
{
  var data_count = response.length;
  data.addColumn("string", type);
  data.addColumn("number", "Count");
  for(var i=0; i<data_count;i++)
  {
    var a = JSON.stringify(response[i], null, 1)
    data.addRow([response[i].type, response[i].count]);
  }
  return data
}


function drawsexChart() 
{
  var data = new google.visualization.DataTable();
  $.ajax({
      type: "GET",
      url: "/data_count_by_field?field=sex",
      contentType: false,
      success: function(response){
        data=addData(data, response, "sex")
        console.log(data)
        var options = {'title':' distribution of number of males and females', 'width':550, 'height':400};
        var chart = new google.visualization.ColumnChart(document.getElementById ('sex'));
        chart.draw(data, options);
        }
  });
}
function drawrelationChart() 
{
  var data = new google.visualization.DataTable();
  $.ajax({
      type: "GET",
      url: "/data_count_by_field?field=relationship",
      contentType: false,
      success: function(response){
        data=addData(data, response, "relationship")
        console.log(data)
        var options = {'title':' distribution of number of males and females', 'width':550, 'height':400};
        var chart = new google.visualization.PieChart(document.getElementById ("relationship"));
        chart.draw(data, options);
        }
  });
}

