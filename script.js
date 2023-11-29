const bganimation = document.getElementById
('bganimation');

const number0fColorBoxes = 400

for (let i=0;i < number0fColorBoxes; i++){
    const colorBox = document.createElement
    ('div');
    colorBox.classList.add('colorbox');
    bganimation.append(colorBox)
}

const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll(".subtitle, .p33, .b200, .j33, .head90, .skill-bar");

window.addEventListener("mousemove", (e) => {
  
  let x = e.pageX;
  let y = e.pageY;
  
  cursor.forEach(el => {
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    
    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        el.classList.add("hover");
      })
      link.addEventListener("mouseleave", () => {
        el.classList.remove("hover");
        
      })
    })
    
  })
  
})
/* ---- particles.js config ---- */

/*////particlesJS("skills",{
    "particles": {
      "number": {
        "value": 90,
        "density": {
          "enable": true,
          "value_area": 315
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "size_min": 0.5,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.3,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
  
  /* ---- stats.js config ---- */
  
 ///* var count_particles, stats, update;
  //*stats = new Stats;
 // stats.setMode(0);
  //stats.domElement.style.position = 'absolute';
  //stats.domElement.style.left = '0px';
 // stats.domElement.style.top = '0px';
  //document.body.appendChild(stats.domElement);
  //count_particles = document.querySelector('.js-count-particles');
  //update = function() {
   // stats.begin();
   // stats.end();
   // if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
   //   count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  //  }
  //  requestAnimationFrame(update);
 // };
 // requestAnimationFrame(update);

 /*var cursor = document.querySelector('.cursor'),
 cursorscale =  document.querySelectorAll('.cursor-scale'),
      mouseX = 0,
      mouseY = 0

 gsap.to({}, 0.016, {
  repeat: -1,

  onRepeat:  function() {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY
      }
    })
  }
 });

 Window.addEventListener("mousemove", function (e){
  mouseX = e.clientX;
  mouseY = e.clientY
 });

 cursorscale.forEach(link=>{
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('grow');
    cursor.classList.add('grow-small');
  });
  link.addEventListener('mousemove', () => {
    cursor.classList.add('grow');
    if(link.classList.contains('small')){
      cursor.classList.add('grow');
      cursor.classList.add('grow-small');
    }
  });

 });*/

 