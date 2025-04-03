
document.addEventListener("DOMContentLoaded", function () {
  var myCarousel = new bootstrap.Carousel(document.querySelector("#carouselExampleIndicators"), {
    interval: 5000, // Cambia de imagen cada 5 segundos automáticamente
    wrap: true // Permite que vuelva a la primera imagen después de la última
  });
});

// Activar/desactivar el sonido
document.getElementById("toggleSound").addEventListener("click", function () {
    let videos = document.querySelectorAll(".video-slide");
    let isMuted = videos[0].muted;

    videos.forEach(video => video.muted = !isMuted);
    
    this.textContent = isMuted ? "🔇 Silenciar" : "🔊 Activar sonido";
  });

  // Detener todos los videos cuando cambie el slide
  $('#carouselExampleIndicators').on('slid.bs.carousel', function () {
    let videos = document.querySelectorAll(".carousel-item video");
    
    videos.forEach(video => {
      video.pause();  // Pausa todos los videos
      video.currentTime = 0;  // Resetea el tiempo al inicio
    });

    // Reproducir el video en el slide activo
    let activeVideo = document.querySelector(".carousel-item.active video");
    if (activeVideo) {
      activeVideo.play();  // Reproduce el video del slide activo
    }
  });


  function App(){}
    window.onload = function(event){
      var app = new App();
      window.app =app;
    }

    App.prototype.processingButton = function(event){
      const btn = event.currentTarget;
      const carruselList = event.currentTarget.parentNode;
      const track = event.currentTarget.parentNode.querySelector('#track');
      const carrusel = track.querySelectorAll('.carrusel');

      const carruselWidht = carrusel[0].offsetWidth;
      const trackWidth = track.offsetWidth;
      const listWidth = carruselList.offsetWidth;

      track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2)*-1);
      btn.dataset.button == "button-prev" ? prevAction(leftPosition, carruselWidht, track) : nextAction(leftPosition, trackWidth, listWidth, carruselWidht, track);
    }

    let prevAction = (leftPosition, carruselWidht, track) => {
      if(leftPosition > 0){
        track.style.left = `${-1*(leftPosition-carruselWidht)}px`
      }
    }

    let nextAction = (leftPosition, trackWidth, listWidth, carruselWidht, track)=>{
      if(leftPosition < (trackWidth - listWidth)){
        track.style.left = `${-1*(leftPosition + carruselWidht)}px`
      }
    }
  