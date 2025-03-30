// saxeli da feri / xml https
  

let divApi = document.getElementById('server-ap');

let request = new XMLHttpRequest();
request.open('get' , 'https://reqres.in/api/unknown');
 request.addEventListener('load', function () {
    let response = this.responseText;
    let responseJs = JSON.parse(response);
     console.log(responseJs);
     
       
    let ulEl = document.createElement ('ul');
     
    responseJs.data.forEach(element => {
        let li = document.createElement ('li');
        let color = element.color;
        li.style.backgroundColor = color;
        li.textContent = element.name + ' ' +  element.color ;

        ulEl.appendChild (li);

        
    });

    divApi.appendChild(ulEl);

 })
  request.addEventListener ( 'error', function (){});
  request.send ();



  