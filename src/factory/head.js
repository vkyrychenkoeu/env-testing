module.exports.headFactory = (title, description, GA_KEY) => {
  return `
    <head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_KEY}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${GA_KEY}');
    </script>
      <meta charset="utf-8">
      <title>${title}</title>
      <meta name="description" content="${description}">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
  `;
};
