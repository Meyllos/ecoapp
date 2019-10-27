export default content => `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <style>
      img {
        display: block!important;
        margin: 0 auto;
        margin-bottom: 10px;
        max-width: 100%;
      }
    </style>
    <script>
    function disableLinks() {
      const links = document.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', (e) => e.preventDefault())
      })
    }
    </script>
  </head>
  <body onload="disableLinks()">
    <div>
      ${content}
    </div>
  </body>
</html`;
