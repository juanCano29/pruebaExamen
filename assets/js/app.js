new Vue({
  el: '#buscar',
  data: {
    name: "",
    inputImdbID: '',
    inputTitle: '',
    inputType: '',
    inputYear: '',
    peliculas: [],
    peliculasDB: []
  },
  mounted() {
    this.llenarTablaDB()
  },
  methods: {
    // logica de las tablas
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
        this.llenarTablaDB()
      }).catch(error => {
      })

    },
    llenarTablaDB() {
      fetch("routes/allPeliculas.php", {
        method: 'POST'
      })
        .then(async response => {
          const data = await response.json()
          this.peliculasDB = data
        }).catch(error => {
          console.log("Error ", error)
        })
    },
    // Logica de los filtros
    buscarPorimdbID() {
      const data = {
        'imdbID': this.inputImdbID
      };
      fetch("routes/findforimdbID.php", {
        method: "POST",
        body: JSON.stringify(data)
      }).then(async response => {
        const data = await response.json()
          this.peliculasDB = data
      }).catch(error => {
      })
    },
    buscarPorTitle() {
      const data = {
        'Title': this.inputTitle
      };
      fetch("routes/findforTitle.php", {
        method: "POST",
        body: JSON.stringify(data)
      }).then(async response => {
        const data = await response.json()
        this.peliculasDB = data
      }).catch(error => {

      })
    },
    buscarPorType() {
      const data = {
        'Type': this.inputType
      };
      fetch("routes/findforType.php", {
        method: 'POST',
        body: JSON.stringify(data)
      }).then(async response => {
        const data = await response.json()
        this.peliculasDB = data
      }).catch(error => {

      })
    },
    buscarPorYear() {
      const data = {
        'Year': this.inputYear
      }
      fetch("routes/findforYear.php", {
        method: 'POST',
        body: JSON.stringify(data)
      }).then(async response => {
        const data = await response.json()
        this.peliculasDB = data
      }).catch(error => {

      })
    }
  }
})