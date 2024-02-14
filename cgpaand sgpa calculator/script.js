document.getElementById("cgpaButton").addEventListener("click", function() {
    // Logic for CGPA generation
    document.getElementById("result").innerText = "CGPA generated!";
  });
  
  document.getElementById("sgpaButton").addEventListener("click", function() {
    // Logic for SGPA generation
    document.getElementById("result").innerText = "SGPA generated!";
  });
  document.getElementById("sgpaButton").addEventListener("click", function() {
   
    window.location.href = "sgpa.html";
  });  
  document.getElementById("cgpaButton").addEventListener("click", function() {
   
    window.location.href = "cgpa.html";
  });  