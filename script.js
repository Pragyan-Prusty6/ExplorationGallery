const prev_btn = document.getElementById("prev-btn");
const next_btn = document.getElementById("next-btn");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const heading = document.querySelector("h1");
const length = images.length;
const width = 40;
const colorChange = document.querySelectorAll('.colorChange');
const link0 = document.querySelector("#link0");
const link1 = document.querySelector("#link1");
const link2 = document.querySelector("#link2");
const gallery = document.querySelector(".gallery");


let slideNumber = 1;

const nextSlide= () =>{
    slider.style.transform = `translateX(-${slideNumber*width}vw)`;
    slideNumber++;
};
const getFirstSlide= () =>{
    slider.style.transform = `translateX(0)`;
    slideNumber=1;
};

next_btn.addEventListener("click",()=>{
    (slideNumber<length)?nextSlide():getFirstSlide();
});

const prevSlide= () =>{
    slider.style.transform = `translateX(-${(slideNumber-2)*width}vw)`;
    slideNumber--;
};
const getLastSlide= () =>{
    slider.style.transform = `translateX(-${(length-1)*width}vw)`;
    slideNumber=length;
};

prev_btn.addEventListener("click",()=>{
    (slideNumber>1)?prevSlide():getLastSlide();
});
link0.addEventListener("click",()=>{
    
    heading.innerText = "Exploration✨Gallery";
    gallery.style.display="none";
    colorChange.forEach(element => {
        element.className ='yellow';
    });
});
link1.addEventListener("click",()=>{
    gallery.style.display="flex";
    heading.innerText = "Nature🌿";
    heading.style.backgroundImage="url(/images/land.jpg)";
    colorChange.forEach(element => {
        element.className ='green';
    });
    document.getElementById("i1").setAttribute('src','/images/flo1.jpeg');
    document.getElementById("i2").setAttribute('src','/images/bird-sparrows.jpg');
    document.getElementById("i3").setAttribute('src','/images/landscape2.jpg');
    document.getElementById("i4").setAttribute('src','/images/cow_calf.jpg');
    document.getElementById("i5").setAttribute('src','/images/deer1.jpg');
    document.getElementById("i6").setAttribute('src','/images/squirrel_nut.jpg');
});
link2.addEventListener("click",()=>{
    gallery.style.display="flex";
    heading.innerText = "Sky🌃";
    heading.style.backgroundImage="url(/images/land2.jpg)";
   colorChange.forEach(element => {
        element.className ='blue';
    });
    document.getElementById("i1").setAttribute('src','/images/c5.jpeg');
    document.getElementById("i2").setAttribute('src','/images/clouds2.jpeg');
    document.getElementById("i3").setAttribute('src','/images/cloudy.jpeg');
    document.getElementById("i4").setAttribute('src','/images/sky.jpeg');
    document.getElementById("i5").setAttribute('src','/images/c1.jpeg');
    document.getElementById("i6").setAttribute('src','/images/sky2.jpeg');
});