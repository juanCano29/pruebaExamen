


let dbTable = new Vue({
  el: '#dbTable',
  data: {
      elementosPorPagina: 10,
      listaCantidad: 0
  },
  mounted() {
    console.log(this.listaCantidad);
    this.llenarTabla();
  },
  methods: { 
    llenarTabla(){
      fetch("routes/allPeliculas.php", {
        method: "POST"
      })
        .then(async response => {
              let dat  = await response.json();
              let tabla = document.getElementById('tbod');
              let infoTabla = '';
              for (let i = 0; i < dat.length; i++) {
                  infoTabla += `
                        <tr> 
                            <td>${dat[i]["imdbID"]}</td>
                            <td>${dat[i]["Title"]}</td>
                            <td>${dat[i]["Typep"]} </td>
                            <td>${dat[i]["Yearp"]} </td>
                            <td>${dat[i]["Poster"]} </td>
                        </tr>
                  `;
              }
              this.listaCantidad = dat.length;
              tabla.innerHTML = infoTabla;
        })
        .catch(error => {
            console.log(error);
        })
    },
    totalPaginas(){
      let m = Math.ceil(this.listaCantidad / this.elementosPorPagina);
      console.log(m);
    }
  }

})
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