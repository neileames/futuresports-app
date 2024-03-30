// ScrollToSection.js

const scrollToSection = ( ref, headerHeight) => {

    window.scrollTo({
        top: ref.current.offsetTop -  headerHeight,
        behavior: 'smooth'
    })

};

export default scrollToSection;