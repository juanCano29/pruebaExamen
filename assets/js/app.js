new Vue({
  el: '#buscar',
  data: {
    name: "",
    peliculas: []
  },
  mounted() {
    this.buscarPorimdbID();
    this.buscarPorTitle();
    this.buscarPorType();
    this.buscarPorYear();
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

    },
    buscarPorimdbID: function (){
      let datos = {
        'imdbID': 2
      };
       fetch("routes/findforimdbID.php", {
        method: "POST",
        body: JSON.stringify(datos)
      }).then(async response => {
      }).catch(error => {
      });
    },
    buscarPorTitle: function() {
      let datos = {
        'Title': 'ha'
      };
      fetch("routes/findforTitle.php", { 
          method: "POST",
          body: JSON.stringify(datos)
      }).then(async response => { 

      }).catch(error => {

      })
    },
    buscarPorType: function(){
      let datos = { 
        'Type': 'mo'
      };
      fetch("routes/findforType.php", {
        method: 'POST',
        body: JSON.stringify(datos)
      }).then(async response => {

      }).catch(error => {

      })
    },
    buscarPorYear: function(){
      let datos = {
        'Year': '11'
      };
      fetch("routes/findforYear.php", { 
          method: 'POST',
          body: JSON.stringify(datos)
      }).then(async response => {

      }).catch(error => {

      });
    }
  }
})