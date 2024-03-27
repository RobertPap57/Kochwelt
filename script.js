

function loadHeader() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'header.html', true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          document.getElementById('headerContainer').innerHTML = xhr.responseText;
      }
  };
  xhr.send();
}


function loadFooter() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'footer.html', true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          document.getElementById('footerContainer').innerHTML = xhr.responseText;
      }
  };
  xhr.send();
}


function loadContent() {
  loadHeader();
  loadFooter();
}