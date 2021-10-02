'use strict'

document.addEventListener("DOMContentLoaded", function() {
  let currentPage = window.location.pathname;

  switch (currentPage) {
    case '/index.html':
      styleCurrentPage('home');
      break;
    case '/services.html':
      styleCurrentPage('services');
      break;
    case '/works.html':
      styleCurrentPage('works');
      break;
    case '/about.html':
      styleCurrentPage('about');
      break;
    case '/blog.html':
      styleCurrentPage('blog');
      break;
    case '/contact.html':
      styleCurrentPage('contact');
      break;
    default:
      styleCurrentPage('home');
      break;
  }

  function styleCurrentPage(tagId) {
    const $tag = document.getElementById(tagId);
    $tag.classList.add('active-link');
  }
});