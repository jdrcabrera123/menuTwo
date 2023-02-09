function toggleMenu() {
    const menuToggle = document.querySelector(".menuToggle")
    menuToggle.classList.toggle('active')
    const navigation = document.querySelector('.navigation')
    navigation.classList.toggle('active')
}

function imgSlider(changeImage) {
    document.getElementById('shapeImages').src = changeImage;
}