      const articles = document.querySelectorAll('.article');

articles.forEach(function(article) {
    article.addEventListener('mouseover', function() {
        article.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    });

    article.addEventListener('mouseout', function() {
        article.style.boxShadow = 'none';
    });
});

const submitButton = document.querySelector('form button');

submitButton.addEventListener('click', function() {
    const confirmation = confirm('Article submitted successfully!');
   
});

function toggleContent(article) {
    const content = article.querySelector('.article-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

function showContent(articleId) {
    const content = document.querySelector(`#${articleId} .article-content`).innerHTML;
    document.getElementById('articleContent').innerHTML = content;
}

function toggleVisibility() {
    var article = document.getElementById('articleContent');
    article.style.display = (article.style.display === 'none') ? 'block' : 'none';
}

