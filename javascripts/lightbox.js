document.addEventListener('DOMContentLoaded', function() {
  var overlay = document.createElement('div');
  overlay.className = 'ef-lightbox';
  overlay.innerHTML = '<span class="ef-lightbox-close">&times;</span><img src="" alt=""><div class="ef-lightbox-caption"></div>';
  document.body.appendChild(overlay);
  var lbImg = overlay.querySelector('img');
  var lbCaption = overlay.querySelector('.ef-lightbox-caption');
  var lbClose = overlay.querySelector('.ef-lightbox-close');
  function openLightbox(src, alt) {
    lbImg.src = src; lbCaption.textContent = alt || '';
    lbCaption.style.display = alt ? 'block' : 'none';
    overlay.style.display = 'flex';
    requestAnimationFrame(function() { overlay.classList.add('active'); });
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    overlay.classList.remove('active');
    setTimeout(function() { overlay.style.display = 'none'; lbImg.src = ''; }, 300);
    document.body.style.overflow = '';
  }
  document.addEventListener('click', function(e) {
    var img = e.target.closest('.md-content img:not(.twemoji):not(.emojione)');
    if (img) { e.preventDefault(); openLightbox(img.src, img.alt); }
  });
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay || e.target === lbClose || e.target.closest('.ef-lightbox-close')) closeLightbox();
  });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeLightbox(); });
});
