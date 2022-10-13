let vm = new Vue({
  el: '#buscar',
  data: {
    name: "",
    peliculas: []
  },
  methods: {
    buscarPelicula: function(){
      fetch("https://www.omdbapi.com/?apikey=e85fe802&s="+this.name)
      .then(async response => {
        const data = await response.json();
        this.peliculas = data["Search"];
      })
      .catch(error => {
        this.errorMessage = error;
        console.error('hay un error', error);
      })
    },
    agregarPelicula: function(){
      fetch("routes/CreatePeliculas.php", {
        method: "POST", 
        body: this.peliculas

      }).then(async response => {
        console.log(await response.body);
      }).catch(error=>{
        console.log(error);
      })

    }
  }
})



