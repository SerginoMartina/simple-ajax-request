// Create event listener
   document.getElementById('button').addEventListener('click', loadText);

   function loadText(){
     // Create XHR Object
     var xhr = new XMLHttpRequest();
     // OPEN - type, url/file, async
     xhr.open('GET', 'sampletext.txt', true);

     console.log('READYSTATE: ', xhr.readyState);

     // OPTIONAL - used for loaders
     xhr.onprogress = function(){
       console.log('READYSTATE: ', xhr.readyState);
     }

     xhr.onload = function(){
       console.log('READYSTATE: ', xhr.readyState);
       if(this.status == 200){
         //console.log(this.responseText);
         document.getElementById('text').innerHTML = this.responseText;
       } else if(this.status = 404){
         document.getElementById('text').innerHTML = 'Not Found';
       }
     }

     xhr.onerror = function(){
       console.log('Request Error...');
     }
     
     // Sends request
     xhr.send();
   }

   // readyState Values
   // 0: request not initialized 
   // 1: server connection established
   // 2: request received 
   // 3: processing request 
   // 4: request finished and response is ready

   // HTTP Statuses
   // 200: "OK"
   // 403: "Forbidden"
   // 404: "Not Found"
