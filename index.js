const setHeader = {
    headers: {
      Accept: "application/json"
  
    }
  }
fetch('https://api.rootnet.in/covid19-in/stats/latest',setHeader)
.then((response) => response.json())
.then((data) => {
 let x=data.data.summary.total-data.data.summary.discharged-data.data.summary.deaths;
    document.getElementById("affectedData").innerHTML=data.data.summary.total
    document.getElementById("deathData").innerHTML=data.data.summary.deaths
    document.getElementById("recoveredData").innerHTML=data.data.summary.discharged
     document.getElementById("activeData").innerHTML=x
 var y=""
   data.data.regional.forEach(e => {
     y+=` <tr>
     <td>${e.loc}</td>
     <td>${e.totalConfirmed}</td>
     <td>${e.discharged}</td>
     <td>${e.deaths}</td>
 </tr>`
   });
   document.getElementById("tbody").innerHTML=y


})

