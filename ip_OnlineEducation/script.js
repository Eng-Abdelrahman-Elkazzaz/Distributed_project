const getStartedBtn = document.querySelector('.btn-get-started');
const enrollBtns = document.querySelectorAll('.btn-enroll');

getStartedBtn.addEventListener('click', () => {
  showMessage("Get Started button clicked!");
});

enrollBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const courseName = btn.dataset.courseName;
    showMessage(`Enroll button clicked for ${courseName}`);
  });
});

function showMessage(message) {
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = message;
}
    document.addEventListener('DOMContentLoaded', function() {
      var enrollButtons = document.querySelectorAll('.enroll-btn');
      for (var i = 0; i < enrollButtons.length; i++) {
        enrollButtons[i].addEventListener('click', function(event) {
          event.preventDefault();
          var course = this.getAttribute('data-course');
          showApplicationForm(course);
        });
      }
    });

    function showApplicationForm(course) {
      alert("Showing application form for " + course);
    }

