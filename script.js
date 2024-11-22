function upDate(previewPic){
     var image = previewPic.src;
      document.getElementById("image").style.backgroundImage = "url('" + image +"')";
     
      var text = previewPic.alt;
     document.getElementById("image").innerHTML = text;
     
       }
   
       function unDo(){
        document.getElementById("image").style.backgroundImage = "url('" + null +"')";
       
        document.getElementById("image").innerHTML = "Hover over an image below to display here.";
           
       }