function scrollableHighlightImage(scrollableImageElement) {
   
    const scrollableImages = document.querySelectorAll('.scrollableCardImage');
    scrollableImages.forEach(scrollableImage => {
        scrollableImage.classList.remove('highlighted');
    });

   
    scrollableImageElement.classList.add('highlighted');
}
