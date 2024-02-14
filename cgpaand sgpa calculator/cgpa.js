document.getElementById("addSemesterButton").addEventListener("click", function() {
    let semesterCount = document.querySelectorAll('.semester').length + 1;
    let semesterDiv = document.createElement('div');
    semesterDiv.classList.add('semester');
    semesterDiv.innerHTML = `<h3>Semester ${semesterCount}</h3>
                             <label for="sgpa${semesterCount}">SGPA:</label>
                             <input type="number" id="sgpa${semesterCount}" min="1" max="10" step="0.01" required>`;
    document.getElementById("semesterInputs").appendChild(semesterDiv);
  });
  
  document.getElementById("generateCGPAButton").addEventListener("click", function() {
    let sgpaInputs = document.querySelectorAll('input[type="number"]');
    let totalSGPA = 0;
    sgpaInputs.forEach(function(input) {
      totalSGPA += parseFloat(input.value);
    });
    let semesterCount = sgpaInputs.length;
    let cgpa = totalSGPA / semesterCount;
    document.getElementById("result").innerText = `Your CGPA for ${semesterCount} semesters is: ${cgpa.toFixed(2)}`;
  });
  