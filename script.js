function myFunction(){
    document.getElementById("menu").style.transform="translateX(-500px)";
  }
          function myFunction2(){
               document.getElementById("menu").style.transform="translateX(0px)";
      }
      function myFunction3(){
          document.getElementById("overlay").style.display="block";
      }
      function myFunction4(){
          document.getElementById("overlay").style.display="none";
          
      }

      window.addEventListener("scroll", function() {
        const header = document.getElementById("header"),
              scroll = window.pageYOffset | document.body.scrollTop;
      
        if (scroll > 1) { header.className = "header fixed-top scrolled"; }
        else if (scroll <= 1) { header.className = "header fixed-top"; }
      });
      
      