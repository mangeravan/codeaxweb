document.getElementById('drawerToggleBtn').addEventListener('click', function() {
    document.getElementById('drawer').classList.toggle('open');
});

document.getElementById('closeDrawerBtn').addEventListener('click', function() {
    document.getElementById('drawer').classList.remove('open');
});


// You can add interactivity here if needed, such as animations or event listeners for buttons

document.addEventListener('DOMContentLoaded', () => {
    const viewAllButtons = document.querySelectorAll('.view-all');
    
    viewAllButtons.forEach(button => {
      button.addEventListener('click', () => {
        alert('View all clicked!');
        // You can redirect to another page or load more content dynamically here
      });
    });
  });
  

