
new Vue({
  el: '#buscar',
  data: {
    name: "",
    peliculas: []
  },
  methods: {
    buscarPelicula: function () {
      fetch("https://www.omdbapi.com/?apikey=e85fe802&s=" + this.name)
        .then(async response => {
          const data = await response.json()
          this.peliculas = data["Search"]
        })
        .catch(error => {
          this.errorMessage = error
          console.error('hay un error', error)
        })
    },
    agregarPelicula: function () {
      fetch("routes/CreatePeliculas.php", {
        method: "POST",
        body: JSON.stringify(this.peliculas)

      }).then(async response => {
      }).catch(error => {
      })

    }
  }
})

let data = new Vue({
  el: '#dbTable',
  data: {
    movies: []
  },
  mounted() {
      fetch("routes/allPeliculas.php", { 
        method: "POST"
      })
        .then(async response => {
            console.log("response", await response.json());
        }).catch(error => {

        })

  },

})
