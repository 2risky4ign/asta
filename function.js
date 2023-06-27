function showContent(contentId, textId, contentText) {
    let content = document.getElementById(contentId);
    let text = document.getElementById(textId);
  
    content.style.display = "block";
    text.innerHTML = contentText;
  }
  
  function hideContent(contentId) {
    let content = document.getElementById(contentId);
    content.style.display = "none";
  }
  
  document.getElementById('myElement1').addEventListener('mouseenter', function() {
    showContent('text1', 'text-1', 'An growing area called information management is concerned with the infrastructure that is used to gather, manage, maintain, store, and transport information.');
  });
  document.getElementById('myElement1').addEventListener('mouseleave', function() {
    hideContent('text1');
  });
  
  document.getElementById('myElement2').addEventListener('mouseenter', function() {
    showContent('text2', 'text-2', 'Networking, usually referred to as computer networking, is the process of moving data between nodes in an information system through a common media.');
  });
  document.getElementById('myElement2').addEventListener('mouseleave', function() {
    hideContent('text2');
  });
  
  document.getElementById('myElement3').addEventListener('mouseenter', function() {
    showContent('text3', 'text-3', 'The term "web technology" refers to a variety of tools and methods used in Internet-based communication between various sorts of devices. To access web pages, utilize a web browser. Programs known as web browsers are used to view text, data, images, animations, and videos on the Internet.');
  });
  document.getElementById('myElement3').addEventListener('mouseleave', function() {
    hideContent('text3');
  });
  
  document.getElementById('myElement4').addEventListener('mouseenter', function() {
    showContent('text4', 'text-4', 'A link between the various operational platforms and applications is provided by the systems integration architecture. The variety of platforms, operating systems, transports, and applications are all connected by this architecture.');
  });
  document.getElementById('myElement4').addEventListener('mouseleave', function() {
    hideContent('text4');
  });