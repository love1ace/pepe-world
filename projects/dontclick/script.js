document.querySelector('button').addEventListener('click', function() {
    const img = document.querySelector('#myImage');
    const text = document.querySelector('#myText');
    const div = document.querySelector('div');
    img.style.display = 'block';
    text.style.display = 'block';
    div.style.display = 'none';
    setTimeout(function() {
        img.style.opacity = '1';
        text.style.opacity = '1';
    }, 100);
});