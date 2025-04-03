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
  

    document.addEventListener("DOMContentLoaded", () => {
      const videos = document.querySelectorAll(".carrusel video");
      let currentVideoIndex = 0; // Índice del video actualmente reproduciéndose
  
      if (videos.length > 0) {
          // Reproducir el primer video en silencio
          videos[0].muted = true;
          videos[0].play();
      }
  
      /* Activar sonido y reiniciar el video al hacer clic, o desactivar sonido si ya está activo
      videos.forEach(video => {
          video.addEventListener("click", () => {
              if (video.muted) {
                  // Si el video está en silencio, activar sonido y reproducir
                  video.muted = false;
                  video.currentTime = 0; // Reiniciar el video
                  video.play(); // Reproducir
              } else {
                  // Si el video ya tiene sonido, desactivar sonido
                  video.muted = true;
                  
              }
          });
      });
  });*/

  // Función para cambiar el video
  function changeVideo(newIndex) {
    // Detener el video actual
    videos[currentVideoIndex].pause();
    videos[currentVideoIndex].currentTime = 0; // Reiniciar el video

    // Cambiar el índice del video actual
    currentVideoIndex = newIndex;

    // Reproducir el nuevo video
    const newVideo = videos[currentVideoIndex];
    newVideo.muted = false; // Activar sonido
    newVideo.play();
}

// Función para manejar el clic en los videos
videos.forEach(video => {
  video.addEventListener("click", () => {
      if (video.muted) {
          // Si el video está en silencio, activar sonido y reproducir
          video.muted = false;
          video.currentTime = 0; // Reiniciar el video
          video.play(); // Reproducir
      } else {
          // Si el video ya tiene sonido, desactivar sonido
          video.muted = true;
          video.pause(); // Detener reproducción
      }
  });
});

// Función para manejar el cambio de video al presionar el botón "next" o "prev"
const btnPrev = document.getElementById("button-prev");
const btnNext = document.getElementById("button-next");

// Al presionar el botón "prev"
if (btnPrev) {
  btnPrev.addEventListener("click", () => {
      if (currentVideoIndex > 0) {
          changeVideo(currentVideoIndex - 1); // Reproducir el video anterior
      }
  });
}

// Al presionar el botón "next"
if (btnNext) {
  btnNext.addEventListener("click", () => {
      if (currentVideoIndex < videos.length - 1) {
          changeVideo(currentVideoIndex + 1); // Reproducir el siguiente video
      }
  });
}
});
  
  
