Vue.component("table-api", {
    props: ["peliculas"],
    template: `
            <table class="table table-striped">
                <thead>
                   <tr>
                        <th>imdbID</th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Year</th>
                        <th>Poster</th>
                    </tr>
                </thead>
                <tbody>
                   <tr v-for="pelicula in peliculas">
                            <td>{{pelicula.imdbID}}</td>
                            <td>{{pelicula.Title}}</td>
                            <td>{{pelicula.Type}}</td>
                            <td>{{pelicula.Year}}</td>
                            <td>
                                <img v-bind:src="pelicula.Poster" height="150px" width="100px" alt="">
                            </td>
                    </tr>
            </tbody>
            </table>
            
    `
});

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
        this.llenarTablaDB(1);
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
                this.llenarTablaDB(1)
            }).catch(error => {
            })

        },
        llenarTablaDB(noPagina) {
            fetch("routes/allPeliculas.php", {
                method: 'POST'
            })
                .then(async response => {
                    const data = await response.json()
                    this.datosPaginados = []
                    this.peliculasDB = data
                    this.resultadoCantidad = this.peliculasDB.length
                    this.paginaActual = noPagina
                    let ini = noPagina * this.elementosPorPagina - this.elementosPorPagina
                    let fin = noPagina * this.elementosPorPagina
                    this.datosPaginados = this.peliculasDB.slice(ini, fin)
                }).catch(error => {
                console.log("Error ", error)
            })
        },
        // Logica de los filtros
        buscarPorimdbID() {
            const data = {
                'imdbID': this.inputImdbID
            }
            fetch("routes/findforimdbID.php", {
                method: "POST",
                body: JSON.stringify(data)
            }).then(async response => {
                const data = await response.json()
                this.datosPaginados = data
                this.resultadoCantidad = this.datosPaginados.length

            }).catch(error => {
            })
        },

        buscarPorTitle() {
            const data = {
                'Title': this.inputTitle
            }
            fetch("routes/findforTitle.php", {
                method: "POST",
                body: JSON.stringify(data)
            }).then(async response => {
                const data = await response.json()
                this.datosPaginados = data
                this.resultadoCantidad = this.datosPaginados.length
            }).catch(error => {

            })
        },
        buscarPorType() {
            const data = {
                'Type': this.inputType
            }
            fetch("routes/findforType.php", {
                method: 'POST',
                body: JSON.stringify(data)
            }).then(async response => {
                const data = await response.json()
                this.datosPaginados = data
                this.resultadoCantidad = this.datosPaginados.length
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
                this.datosPaginados = data
                this.resultadoCantidad = this.datosPaginados.length
            }).catch(error => {

            })
        },
        // Logica Paginado
        totalPaginas() {
            return Math.ceil(this.resultadoCantidad / this.elementosPorPagina)
        },
        getPreviousPage() {
            if (this.paginaActual > 1) {
                this.paginaActual--
            }
            this.llenarTablaDB(this.paginaActual)
        },
        getNextPage() {
            if (this.paginaActual < this.totalPaginas()) {
                this.paginaActual++
            }
            this.llenarTablaDB(this.paginaActual)
        },
        isActive(noPagina) {
            return noPagina == this.paginaActual ? 'active' : ''
        },
        // Logica orden de lista

    }
})