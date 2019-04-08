var datakarakter = [];

        function ambilkarakter(){
            for(var j = 1; j < 10; j++){
                (function(i){
                    var f = i;
                    var xhttp = new XMLHttpRequest();
                    var urlHost = 'https://swapi.co/api/people/?page='+f;
                    xhttp.open('GET',urlHost,false);
                    xhttp.addEventListener('load',function(){
                        if(xhttp.status >= 200 && xhttp.status < 400){
                            var response = JSON.parse(xhttp.responseText);
                            console.log(response);

                            for(let x = 0; x < response.results.length; x++){
                                let planetTemp = {
                                    name : response.results[x].name,
                                    height : response.results[x].height,
                                    mass : response.results[x].mass,
                                    hair_color : response.results[x].hair_color,
                                    skin_color : response.results[x].skin_color,
                                    eye_color : response.results[x].eye_color,
                                    birth_year : response.results[x].birth_year,
                                    gender : response.results[x].gender
                                }
                                datakarakter.push(planetTemp);

                            }
                        } else {
                            console.log('Error network request : ' + xhttp.statusText);
                        }
                    });
                    xhttp.send(null);
                })(j);
            }
        }

        ambilkarakter();
        console.log(datakarakter.length);
        
        var table = document.querySelector('#karakter');
        
        for(var y = 0; y < 87; y++){
            var tampil = '';

             tampil += '<tr>'+'<td>' + datakarakter[y].name + '</td>' 
             + '<td>' + datakarakter[y].height + '</td>'
             + '<td>' + datakarakter[y].mass + '</td>'
             + '<td>' + datakarakter[y].hair_color + '</td>'
             + '<td>' + datakarakter[y].skin_color + '</td>'
             + '<td>' + datakarakter[y].eye_color + '</td>'
             + '<td>' + datakarakter[y].birth_year + '</td>'
             + '<td>' + datakarakter[y].gender + '</td>'
             +'</tr>';
             table.innerHTML += tampil;
             console.log('Load Succes');
            }

        function cari() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("pencarian");
  filter = input.value.toUpperCase();
  table = document.getElementById("karakter");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}