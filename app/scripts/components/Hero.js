import React from 'react'
import TweenLite from '../other/TweenLite'
import EasePack from '../other/EasePack.min.js'


let width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;
let canvasHeight = 500

const Hero = React.createClass({
  componentDidMount() {
    this.initHeader();
    this.initAnimation();
    this.addListeners()
  },
  initHeader() {
      width = window.innerWidth;
      height = window.innerHeight;
      target = {x: width/2, y: height/2};

      canvas = document.getElementById('hero-canvas');
      canvas.width = width;
      canvas.height = canvasHeight;
      ctx = canvas.getContext('2d');

      // create points
      points = [];
      for(let x = 0; x < width; x = x + width / 20) {
          for(let y = 0; y < height; y = y + height / 20) {
              let px = x + Math.random() * width / 20;
              let py = y + Math.random() * height / 20;
              let p = {x: px, originX: px, y: py, originY: py };
              points.push(p);
          }
      }

      // for each point find the 5 closest points
      for(let i = 0; i < points.length; i++) {
          let closest = [];
          let p1 = points[i];
          for(let j = 0; j < points.length; j++) {
              let p2 = points[j]
              if(!(p1 == p2)) {
                  let placed = false;
                  for(let k = 0; k < 5; k++) {
                      if(!placed) {
                          if(closest[k] == undefined) {
                              closest[k] = p2;
                              placed = true;
                          }
                      }
                  }

                  for(let k = 0; k < 5; k++) {
                      if(!placed) {
                          if(this.getDistance(p1, p2) < this.getDistance(p1, closest[k])) {
                              closest[k] = p2;
                              placed = true;
                          }
                      }
                  }
              }
          }
          p1.closest = closest;
      }

      // assign a circle to each point
      for(let i in points) {
          let c = new this.Circle(points[i], 2+Math.random()*2, 'rgba(255,255,255,1)');
          points[i].circle = c;
      }
  },
  addListeners() {
      if(!('ontouchstart' in window)) {
          window.addEventListener('mousemove', this.mouseMove);
          // window.addEventListener('mousemove', (e) => {
          //   window.setTimeout(this.mouseMove.bind(null, e), 200)
          // });
      }
      window.addEventListener('scroll', this.scrollCheck);
      window.addEventListener('resize', this.resize);
  },
  mouseMove(e) {
      let posx = 0
      let posy = 0;
      if (e.pageX || e.pageY) {
          posx = e.pageX;
          posy = e.pageY;
      }
      else if (e.clientX || e.clientY)    {
          posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
          posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      target.x = posx;
      target.y = posy;
  },
  scrollCheck() {
      if(document.body.scrollTop > height) animateHeader = false;
      else animateHeader = true;
  },
  resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = canvasHeight;
  },
  initAnimation() {
      this.animate();
      for(let i in points) {
          this.shiftPoint(points[i]);
      }
  },
  animate() {
      if(animateHeader) {
          ctx.clearRect(0,0,width,height);
          for(let i in points) {
              // detect points in range
              if(Math.abs(this.getDistance(target, points[i])) < 4000) {
                  points[i].active = 0.3;
                  points[i].circle.active = 0.6;
              } else if(Math.abs(this.getDistance(target, points[i])) < 20000) {
                  points[i].active = 0.1;
                  points[i].circle.active = 0.3;
                                                                  // Was 40000
              } else if(Math.abs(this.getDistance(target, points[i])) < 50000) {
                  points[i].active = 0.02;
                  points[i].circle.active = 0.1;
              } else {
                  points[i].active = 0;
                  points[i].circle.active = 0;
              }

              this.drawLines(points[i]);
              points[i].circle.draw();
          }
      }
      requestAnimationFrame(this.animate);
  },
  shiftPoint(p) {
      TweenLite.to(p, 1+1*Math.random(), {x:p.originX-50+Math.random()*100,
          y: p.originY-50+Math.random()*100, ease:Circ.easeInOut,
          onComplete: () => {
              this.shiftPoint(p);
          }});
  },
  drawLines(p) {
      if(!p.active) return;
      for(let i in p.closest) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.closest[i].x, p.closest[i].y);
          // ctx.strokeStyle = 'rgba(156,217,249,'+ (p.active + 0.05)+')';
          ctx.strokeStyle = 'rgba(217,217,249,'+ (p.active + 0.05)+')';
          ctx.stroke();
      }
  },
  Circle(pos,rad,color) {
      let _this = this;

      // constructor
      (function() {
          _this.pos = pos || null;
          _this.radius = rad || null;
          _this.color = color || null;
      })();

      this.draw = function() {
          if(!_this.active) return;
          ctx.beginPath();
          ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
          // ctx.fillStyle = 'rgba(156,217,249,'+ (_this.active + 0.05)+')';
          ctx.fillStyle = 'rgba(217,217,249,'+ (_this.active + 0.05)+')';
          ctx.fill();
      };
  },
  getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  },
  render() {
    //<h1 key="1">My name is <span className="bold">Mark Lyck</span></h1>
    return (
      <div id="hero">
        <canvas id="hero-canvas" className="fade-in"/>
        <div id="content" className="bounce-down-center">
            <h1 key="1"><span className="bold">Hello!</span> My name is <span className="bold">Mark</span></h1>
            <h2 key="2">I'm a web developer from Denmark who is currently<button className="outline-btn">Available for hire</button></h2>
        </div>
      </div>
    )
  }
})

export default Hero
