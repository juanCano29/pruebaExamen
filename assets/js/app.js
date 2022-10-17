new Vue({
  el: '#buscar',
  data: {
    name: "",
    inputImdbID: "",
    inputTitle: "",
    inputType: "",
    inputYear: "",
    elementosPorPagina: 10,
    resultadoCantidad: 0,
    paginaActual: 1,
    datosPaginados: [],
    peliculas: [],
    peliculasDB: []
  },
  mounted() {
    this.llenarTablaDB();
    this.getDataPagina(1);
  },
  methods: {
    // logica de las tablas
    buscarPelicula: function () {
      fetch("https://www.omdbapi.com/?apikey=e85fe802&s=" + this.name)
        .then(async response => {
          const data = await response.json();
          this.peliculas = data["Search"];
          this.resultadoCantidad =this.peliculas.length; 
        })
        .catch(error => {
          this.errorMessage = error;
          console.error('hay un error', error);
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
          const data = await response.json();
          this.peliculasDB = data;
          this.resultadoCantidad = data.length;
          console.log('data ', this.resultadoCantidad);
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
        const data = await response.json();
          this.peliculasDB = data;
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
        const data = await response.json();
        this.peliculasDB = data;
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
        const data = await response.json();
        this.peliculasDB = data;
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
        const data = await response.json();
        this.peliculasDB = data;
      }).catch(error => {

      })
    },
    // Logica Paginado
    totalPaginas() {
			return Math.ceil(this.peliculas.length / this.elementosPorPagina);
		},
		getDataPagina(noPagina) {
      console.log("data ", this.resultadoCantidad);
			this.paginaActual = noPagina;
			this.datosPaginados = [];
			let ini = noPagina * this.elementosPorPagina - this.elementosPorPagina;
			let fin = noPagina * this.elementosPorPagina;
			this.datosPaginados = this.peliculas.slice(ini, fin);
		},
		getPreviousPage() {
			if (this.paginaActual > 1) {
				this.paginaActual--;
			}
			this.getDataPagina(this.paginaActual);
		},
		getNextPage() {
			if (this.paginaActual < this.totalPaginas()) {
				this.paginaActual++;
			}
			this.getDataPagina(this.paginaActual);
		},
		isActive(noPagina) {
			return noPagina == this.paginaActual ? 'active' : '';
		},
  }
})