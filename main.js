// main.js

document.addEventListener("DOMContentLoaded", function () {
  const carCanvas = document.getElementById('carCanvas');
  const renderer = new THREE.WebGLRenderer({ canvas: carCanvas });
  // renderer.setClearColor(0x808080); // Gri arka plan rengi 
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 5); // Başlangıç pozisyonu
  
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 1, 1).normalize();
  scene.add(light);




  
  // Arka planı radial gradient ile oluşturma
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
  gradient.addColorStop(0, '#cccccc');
  gradient.addColorStop(1, '#404040');

  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const texture = new THREE.CanvasTexture(canvas);
  scene.background = texture;
  
  
  
  
  

  const loader = new THREE.GLTFLoader();
  loader.load(
    'evo.glb', //dosya adı
    function (gltf) {
      const carModel = gltf.scene;
      carModel.scale.set(0.2, 0.2, 0.2); // Model boyut
      scene.add(carModel);

        //* Renk değiştirme (Default)
      //? Body
      carModel.traverse((child) => {
        if (child.isMesh && child.name.includes("Object_3")) {
          child.material.color.set(0x1b1b1b); // Darkgray
        }
      });
      //? Whell
      carModel.traverse((child) => {
        if (child.isMesh && child.name.includes("Object_21")) {
          child.material.color.set(0xffffff);
        }
      });
      //? Glass
      carModel.traverse((child) => {
        if (child.isMesh && child.name.includes("Object_37")) {
          child.material.color.set(0x808080);
        }
      });


      //! Body rengi değiştirme
      const bodyWhite = document.getElementById('bodyWhite');
      bodyWhite.style.backgroundColor = '#ffffff';
      bodyWhite.addEventListener('click', function () {
        carModel.traverse((child) => {
          if (child.isMesh && child.name.includes("Object_3")) {
            child.material.color.set(0xffffff);
          }
        });
      });

      const bodyGray = document.getElementById('bodyGray');
      bodyGray.style.backgroundColor = '#808080';
      bodyGray.addEventListener('click', function () {
        carModel.traverse((child) => {
          if (child.isMesh && child.name.includes("Object_3")) {
            child.material.color.set(0x808080);
          }
        });
      });

      const bodyDarkGray = document.getElementById('bodyDarkGray');
      bodyDarkGray.style.backgroundColor = '#1b1b1b';
      bodyDarkGray.addEventListener('click', function () {
        carModel.traverse((child) => {
          if (child.isMesh && child.name.includes("Object_3")) {
            child.material.color.set(0x1b1b1b);
          }
        });
      });

      const bodyOrange = document.getElementById('bodyOrange');
      bodyOrange.style.backgroundColor = '#ff6600';
      bodyOrange.addEventListener('click', function () {
        carModel.traverse((child) => {
          if (child.isMesh && child.name.includes("Object_3")) {
            child.material.color.set(0xff6600);
          }
        });
      });

      const bodyDarkOrange = document.getElementById('bodyDarkOrange');
      bodyDarkOrange.style.backgroundColor = '#a0522d';
      bodyDarkOrange.addEventListener('click', function () {
        carModel.traverse((child) => {
          if (child.isMesh && child.name.includes("Object_3")) {
            child.material.color.set(0xa0522d);
          }
        });
      });

      const bodyGreen = document.getElementById('bodyGreen');
      bodyGreen.style.backgroundColor = '#556b2f';
      bodyGreen.addEventListener('click', function () {
        carModel.traverse((child) => {
          if (child.isMesh && child.name.includes("Object_3")) {
            child.material.color.set(0x556b2f);
          }
        });
      });

      const bodyDarkGreen = document.getElementById('bodyDarkGreen');
      bodyDarkGreen.style.backgroundColor = '#6e713e';
      bodyDarkGreen.addEventListener('click', function () {
        carModel.traverse((child) => {
          if (child.isMesh && child.name.includes("Object_3")) {
            child.material.color.set(0x6e713e);
          }
        });
      });

      const bodyRed = document.getElementById('bodyRed');
      bodyRed.style.backgroundColor = '#b81414';
      bodyRed.addEventListener('click', function () {
        carModel.traverse((child) => {
          if (child.isMesh && child.name.includes("Object_3")) {
            child.material.color.set(0xb81414);
          }
        });
      });

      const bodyDarkRed = document.getElementById('bodyDarkRed');
      bodyDarkRed.style.backgroundColor = '#7c2828';
      bodyDarkRed.addEventListener('click', function () {
        carModel.traverse((child) => {
          if (child.isMesh && child.name.includes("Object_3")) {
            child.material.color.set(0x7c2828);
          }
        });
      });

      const bodyPink = document.getElementById('bodyPink');
      bodyPink.style.backgroundColor = '#ebb0d7';
      bodyPink.addEventListener('click', function () {
        carModel.traverse((child) => {
          if (child.isMesh && child.name.includes("Object_3")) {
            child.material.color.set(0xebb0d7);
          }
        });
      });

      const bodyDarkPink = document.getElementById('bodyDarkPink');
      bodyDarkPink.style.backgroundColor = '#f2bdcd';
      bodyDarkPink.addEventListener('click', function () {
        carModel.traverse((child) => {
          if (child.isMesh && child.name.includes("Object_3")) {
            child.material.color.set(0xf2bdcd);
          }
        });
      });


      //! Jant rengi değiştirme
      const whellWhite = document.getElementById('whellWhite');
      whellWhite.style.backgroundColor = '#ffffff';
      whellWhite.addEventListener('click', function () {
        carModel.traverse((child) => {
          if (child.isMesh && child.name.includes("Object_21")) {
            child.material.color.set(0xffffff);
          }
        });
      });

      const whellGray = document.getElementById('whellGray');
      whellGray.style.backgroundColor = '#808080';
      whellGray.addEventListener('click', function () {
        carModel.traverse((child) => {
          if (child.isMesh && child.name.includes("Object_21")) {
            child.material.color.set(0x808080);
          }
        });
      });

      const whellDarkGray = document.getElementById('whellDarkGray');
      whellDarkGray.style.backgroundColor = '#1b1b1b';
      whellDarkGray.addEventListener('click', function () {
        carModel.traverse((child) => {
          if (child.isMesh && child.name.includes("Object_21")) {
            child.material.color.set(0x1b1b1b);
          }
        });
      });

      const whellOrange = document.getElementById('whellOrange');
      whellOrange.style.backgroundColor = '#ff6600';
      whellOrange.addEventListener('click', function () {
        carModel.traverse((child) => {
          if (child.isMesh && child.name.includes("Object_21")) {
            child.material.color.set(0xff6600);
          }
        });
      });

      const whellDarkOrange = document.getElementById('whellDarkOrange');
      whellDarkOrange.style.backgroundColor = '#a0522d';
      whellDarkOrange.addEventListener('click', function () {
        carModel.traverse((child) => {
          if (child.isMesh && child.name.includes("Object_21")) {
            child.material.color.set(0xa0522d);
          }
        });
      });

      const whellGreen = document.getElementById('whellGreen');
      whellGreen.style.backgroundColor = '#556b2f';
      whellGreen.addEventListener('click', function () {
        carModel.traverse((child) => {
          if (child.isMesh && child.name.includes("Object_21")) {
            child.material.color.set(0x556b2f);
          }
        });
      });

      const whellDarkGreen = document.getElementById('whellDarkGreen');
      whellDarkGreen.style.backgroundColor = '#6e713e';
      whellDarkGreen.addEventListener('click', function () {
        carModel.traverse((child) => {
          if (child.isMesh && child.name.includes("Object_21")) {
            child.material.color.set(0x6e713e);
          }
        });
      });

      const whellRed = document.getElementById('whellRed');
      whellRed.style.backgroundColor = '#b81414';
      whellRed.addEventListener('click', function () {
        carModel.traverse((child) => {
          if (child.isMesh && child.name.includes("Object_21")) {
            child.material.color.set(0xb81414);
          }
        });
      });

      const whellDarkRed = document.getElementById('whellDarkRed');
      whellDarkRed.style.backgroundColor = '#7c2828';
      whellDarkRed.addEventListener('click', function () {
        carModel.traverse((child) => {
          if (child.isMesh && child.name.includes("Object_21")) {
            child.material.color.set(0x7c2828);
          }
        });
      });

      const whellPink = document.getElementById('whellPink');
      whellPink.style.backgroundColor = '#ebb0d7';
      whellPink.addEventListener('click', function () {
        carModel.traverse((child) => {
          if (child.isMesh && child.name.includes("Object_21")) {
            child.material.color.set(0xebb0d7);
          }
        });
      });

      const whellDarkPink = document.getElementById('whellDarkPink');
      whellDarkPink.style.backgroundColor = '#f2bdcd';
      whellDarkPink.addEventListener('click', function () {
        carModel.traverse((child) => {
          if (child.isMesh && child.name.includes("Object_21")) {
            child.material.color.set(0xf2bdcd);
          }
        });
      });


      function animate() {
        requestAnimationFrame(animate);

        // Modelin sürekli olarak dönmesi
        carModel.rotation.y -= 0.01; // Dönme hızı ve yönüne göre ayarlayabilirsiniz


        //! Camera position ile yapılan yakınlaştırma
        const slider = document.getElementById('cameraSlider');
        const sliderValue = parseFloat(slider.value);
        const clampedValue = Math.min(Math.max(sliderValue, 0.1), 10); // Min-Max sınırlama

        camera.position.set(0, 0, clampedValue);
        camera.updateProjectionMatrix();


        const resetButton = document.getElementById('resetButton');
        resetButton.addEventListener('click', function () {
          slider.value = 5;
          camera.position.set(0, 0, 5);
          camera.updateProjectionMatrix();
        });


        renderer.render(scene, camera);
      }

      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
      console.error('Model yüklenirken bir hata oluştu', error);
    }
  );
});
