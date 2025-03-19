var flkty;
let smallWindow = false;

if(this.window.innerWidth < 750){
    var flkty = new Flickity( '.gallery', {
        // options
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false
    
    });
    smallWindow = true;
}else if(this.window.innerWidth >= 750){
    var flkty = new Flickity( '.gallery', {
        // options
        cellAlign: 'left',
        contain: true,
        prevNextButtons: true
    
    });
    smallWindow = false;
}


window.addEventListener('resize', function(event) {
    if(this.window.innerWidth < 750 && smallWindow == false){
        flkty.destroy();
        flkty = new Flickity( '.gallery', {
            // options
            cellAlign: 'left',
            contain: true,
            prevNextButtons: false,
        
        });
        smallWindow = true;
        document.querySelector(".flickity-viewport").style.height = "100%";
    }else if(this.window.innerWidth >= 750 && smallWindow == true){
        flkty.destroy();
        flkty = new Flickity( '.gallery', {
            // options
            cellAlign: 'left',
            contain: true,
            prevNextButtons: true,
            draggable: true
        
        });
        smallWindow = false;
        document.querySelector(".flickity-viewport").style.height = "100%";
    }
}, true);


const options = {
    rootMargin: "0px",
    threshold: 1.0,
};
  

const callback = (entries, observer) => {
entries.forEach((entry) => {

    if (entry.intersectionRatio > 0) {
        entry.target.classList.add('is-visible');
    }


});
};

  const observer = new IntersectionObserver(callback, options);

  document.querySelectorAll('.fade-in-section').forEach(img => { observer.observe(img) });