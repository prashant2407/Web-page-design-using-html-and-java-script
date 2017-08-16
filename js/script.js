//Initial Provided Data to be inserted as table
var table_data = [ { first_name : 'Rose',
                     last_name  : 'Tyler',
                     home       : 'Earth' },
                   { first_name : 'Zoe',
                     last_name  : 'Heriot',
                     home       : 'Space Station W3'},
                   { first_name : 'Jo',
                     last_name  : 'Grant',
                     home       : 'Earth'},
                   { first_name : 'Leela',
                     last_name  : null,
                     home       : 'Unspecified'},
                   { first_name : 'Romana',
                     last_name  : null,
                     home       : 'Gallifrey'},
                   { first_name : 'Clara',
                     last_name  : 'Oswald',
                     home       : 'Earth'},
                   { first_name : 'Adric',
                     last_name  : null,
                     home       : 'Alzarius'},
                   { first_name : 'Susan',
                     last_name  : 'Foreman',
                     home       : 'Gallifrey'} ];

//Formatting Data as an HTML table to insert into webpage
table = formatDataForTable(table_data);
//Writing the Table to the document, i.e. the HTML page
document.write(table);

//Embed this Table to any element on the page by passing it's id as shown
addDataToSpecificElement('testing',table);

//A function to format the provided data into an HTML Table
function formatDataForTable(data){
  //Basic format for the table
  info = '<table><thead><tr><th>First Name</th><th>Last Name</th><th>Home</th></tr></thead><tbody>';
  data.forEach(function(d){
    //Adding each data item as a row to the table
    info += '<tr><td>' + d.first_name + '</td><td>'+ d.last_name + '</td><td>' + d.home + '</td></tr>';
  })
  //Closing the HTML table
  info += '</tbody></table>';
  return info;
}

function addDataToSpecificElement(elementId,table){
  //Finding the element on the webpage
  element = document.getElementById(elementId);
  //Appending the table data to this element
  element.innerHTML+=table;
}