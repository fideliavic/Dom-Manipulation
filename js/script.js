function showEmployees() {
   document.getElementById('employees-content').style.display = 'block';
    document.getElementById('roles-content').style.display = 'none';
    document.getElementById('section-threee').style.display = 'none';
    document.getElementById('img-log').style.display = 'none';
}


function showRoles() {
    document.getElementById('employees-content').style.display = 'none';
    document.getElementById('roles-content').style.display = 'block';
    document.getElementById('section-threee').style.display = 'none'; 
    document.getElementById('backto-dash').style.display = 'none';
    document.getElementById('sect-3').style.display = 'none';
    document.getElementById('asssign').style.display = 'none';   
}


function showImage() {
    document.getElementById('section-threee').style.display = 'block';
    document.getElementById('employees-content').style.display = 'none';
    document.getElementById('roles-content').style.display = 'none';
    
    document.getElementById('side-bar').style.display = 'none';
    document.getElementById('logo-sec').style.display = 'none';
    document.getElementById('list-items').style.display = 'none';
    document.getElementById('log').style.display = 'none';
    document.getElementById('img-log').style.display = 'none';
    document.getElementById('butts').style.display = 'none';

    document.getElementById('employee-image').style.display = 'none';
}


function showImageOne() {
    document.getElementById('backto-dash').style.display = 'block';
    document.getElementById('roles-content').style.display = 'none';
    document.getElementById('employees-content').style.display = 'none';
}



document.addEventListener("DOMContentLoaded", function() {
    var mainLinks = document.querySelectorAll('.sidebar li');
    mainLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            var subLinks = this.querySelector('.sub-links');
            if (subLinks) {
                if (subLinks.style.display === 'block') {
                    subLinks.style.display = 'none';
                } else {
                    subLinks.style.display = 'block';
                }
            }
        });
    });
});




