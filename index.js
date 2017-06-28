//      Typed.js

document.addEventListener("DOMContentLoaded", function(){
        if ( $(window).width() < 739) {
        Typed.new(".headertwo", {
      strings: ["FRONT-END DEVELOPER", "FRONT-END DEVELOPER PER ASPERA AD ASTRA"],
      typeSpeed: 0,
            startDelay: 2000
    });    
        } 
        else {
        Typed.new(".headertwo", {
      strings: ["FRONT-END DEVELOPER", "FRONT-END DEVELOPER / PER ASPERA AD ASTRA"],
      typeSpeed: 0,
            startDelay: 2000
    });    
        }
  });

//      Menu JS

function openMenu() {
    document.getElementById("myPage").style.display = "none";
}
function closeMenu() {
    document.getElementById("myPage").style.display = "block";
}

//      Contact JS

function openContact() {
    document.getElementById("Contact").style.display = "block";
     document.getElementById("myPage").style.display = "none";
    document.getElementById("About").style.display = "none";
    document.getElementById("Portfolio").style.display = "none";
    document.getElementById("Menu").style.display = "none";
}
function closeContact() {
    document.getElementById("Contact").style.display = "none";
    document.getElementById("myPage").style.display = "block";
}

//      About JS

function openAbout() {
    document.getElementById("About").style.display = "block";
    document.getElementById("myPage").style.display = "none";
    document.getElementById("Contact").style.display = "none";
    document.getElementById("Portfolio").style.display = "none";
    document.getElementById("Menu").style.display = "none";
}

function closeAbout() {
    document.getElementById("About").style.display = "none";
    document.getElementById("myPage").style.display = "block";
}

//      Portfolio JS
var p = 0;

function openPortfolio() {
    if (p == 0) {
    document.getElementById("myPage").style.display = "none";
    document.getElementById("Contact").style.display = "none";
    document.getElementById("About").style.display = "none";
    document.getElementById("Menu").style.display = "none";
    document.getElementById("portfolio-loader").style.display = "block";
    document.getElementById("body").style.background = "url('img/flash-bros.jpg')";
    document.getElementById("body").style.backgroundPosition = "center";
    document.getElementById("body").style.backgroundAttachment = "fixed";
    document.getElementById("body").style.backgroundRepeat = "no-repeat";
    document.getElementById("body").style.backgroundSize = "cover";
    setTimeout(function showPortfolio() {
    document.getElementById("pre-loader").style.display = "none";
    document.getElementById("pre-percentage").style.display = "none";
    document.getElementById("Portfolio").style.display = "block";
//    setTimeout( function help() {
//        document.getElementById("Help").style.display = "block";
//    }, 500);
    }, 2500);
    p++;    
    } else {
    document.getElementById("myPage").style.display = "none";
    document.getElementById("Contact").style.display = "none";
    document.getElementById("About").style.display = "none";
    document.getElementById("Menu").style.display = "none";
    document.getElementById("body").style.background = "url('img/flash-bros.jpg')";
    document.getElementById("body").style.backgroundPosition = "center";
    document.getElementById("body").style.backgroundAttachment = "fixed";
    document.getElementById("body").style.backgroundRepeat = "no-repeat";
    document.getElementById("body").style.backgroundSize = "cover";
    document.getElementById("Portfolio").style.display = "block";
    p++;        
    }
}
    

function closePortfolio() {
    document.getElementById("Portfolio").style.display = "none";
    document.getElementById("myPage").style.display = "block";
    document.getElementById("body").style.background = "url('img/flash-bros.jpg')";
    document.getElementById("body").style.backgroundPosition = "center";
    document.getElementById("body").style.backgroundAttachment = "fixed";
    document.getElementById("body").style.backgroundRepeat = "no-repeat";
    document.getElementById("body").style.backgroundSize = "cover";
}

//    About Page Scripts
   
//  ProgressBar
var ai = 0;

function aibar() {                                              // Function OPEN {
// First click
if (ai == 0) {                                                  // IF.1 OPEN {
    
    if ( $(window).width() < 739) {                                 // IF.1.1 OPEN {
        ai++; // make ai = 1
    } else {                                                    // IF.1.1 CLOSE / ELSE.1.1 OPEN
    
var bar = new ProgressBar.Line(container_1, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});  
bar.animate(0.8);  // Number from 0.0 to 1.0
var bar = new ProgressBar.Line(container_2, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
bar.animate(0.6);  // Number from 0.0 to 1.0    
var bar = new ProgressBar.Line(container_3, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
bar.animate(0.4);  // Number from 0.0 to 1.0    
var bar = new ProgressBar.Line(container_4, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
bar.animate(0.4);  // Number from 0.0 to 1.0    
var bar = new ProgressBar.Line(container_5, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
bar.animate(0.9);  // Number from 0.0 to 1.0    
var bar = new ProgressBar.Line(container_6, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
bar.animate(0.80);  // Number from 0.0 to 1.0    
var bar = new ProgressBar.Line(container_7, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
bar.animate(0.55);  // Number from 0.0 to 1.0    
var bar = new ProgressBar.Line(container_8, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
bar.animate(0.4);  // Number from 0.0 to 1.0    
var bar = new ProgressBar.Line(container_9, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
bar.animate(0.8);  // Number from 0.0 to 1.0       
var bar = new ProgressBar.Line(container_10, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
bar.animate(0.8);  // Number from 0.0 to 1.0        
var bar = new ProgressBar.Line(container_11, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
bar.animate(0.35);  // Number from 0.0 to 1.0    
var bar = new ProgressBar.Line(container_12, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
bar.animate(0.6);  // Number from 0.0 to 1.0 
        
ai++; // make ai = 1
            
}                                                                   // ELSE.1.1 CLOSE
    
} else {                                                            // IF.1 CLOSE / ELSE.1 OPEN
    // Second click
    if (ai == 1) {                                                  // IF.1.2 OPEN
        if ( $(window).width() < 739) {                             // IF.1.2.1 OPEN
  
var bar = new ProgressBar.Line(container_1, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});  
bar.animate(0.8);  // Number from 0.0 to 1.0
var bar = new ProgressBar.Line(container_2, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
bar.animate(0.6);  // Number from 0.0 to 1.0    
var bar = new ProgressBar.Line(container_3, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
bar.animate(0.4);  // Number from 0.0 to 1.0    
var bar = new ProgressBar.Line(container_4, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
bar.animate(0.4);  // Number from 0.0 to 1.0    
var bar = new ProgressBar.Line(container_5, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
bar.animate(0.9);  // Number from 0.0 to 1.0    
var bar = new ProgressBar.Line(container_6, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
bar.animate(0.80);  // Number from 0.0 to 1.0    
var bar = new ProgressBar.Line(container_7, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
bar.animate(0.55);  // Number from 0.0 to 1.0    
var bar = new ProgressBar.Line(container_8, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
bar.animate(0.4);  // Number from 0.0 to 1.0    
var bar = new ProgressBar.Line(container_9, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
bar.animate(0.8);  // Number from 0.0 to 1.0       
var bar = new ProgressBar.Line(container_10, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
bar.animate(0.8);  // Number from 0.0 to 1.0        
var bar = new ProgressBar.Line(container_11, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
bar.animate(0.35);  // Number from 0.0 to 1.0    
var bar = new ProgressBar.Line(container_12, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgba(255, 255, 255, 0.5)',
  trailColor: 'rgba(255, 255, 255, 0)',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
bar.animate(0.6);  // Number from 0.0 to 1.0 
        
ai++; // make ai = 2    
            
        } else {                                                    // IF.1.2.1 CLOSE / ELSE.1.2.1 OPEN
            ai++; // make ai = 2   
        }                                                           // ELSE.1.2.1 CLOSE       
}                                                                   // IF.1.2 CLOSE
}                                                                   // ELSE.1 CLOSE
    
if (ai > 1) {
    
}    
}