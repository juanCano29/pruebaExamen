let app = new Vue({
      el: '#app',
      data: {
        titulo: 'mensaje'
      }
    });
    let app2 = new Vue({
      el: '#app2',
      data: {
        message: 'titulo 2'
      }
    });
    let app3 = new Vue({
      el: '#app3',
      data: {
        todos: [{
            text: 'opcion1'
          },
          {
            text: 'opcion2'
          },
          {
            text: 'opcion3'
          }
        ]
      }
    });
    let app4 = new Vue({
      el: '#app4',
      data: {
        message: "mensaje invertido"
      },
      methods: {
        mensajeinvertido: function() {
          this.message = this.message.split('').reverse().join('');
        }
      },
    });
    let app5 = new Vue({
      el: '#app5',
      data: {
        message: ""
      }
    });
    Vue.component('todo-item', {
      template: '<li>Esta es una tarea.</li>'
    });
    new Vue({el: '#app6'});

    Vue.component('button-count', {
      data: function(){
        return {
          count:0
        }
      },
      template: '<button v-on:click="count++">{{count}}</button>'
    })
    new Vue({el: '#app7'});

    var vm = new Vue({
      el: '#example',
      data: {
        message: 'hola'
      },
      computed: {
        reversedMessage: function(){
          return this.message.split('').reverse().join('')
        }
      }
    })

    console.log(vm.reverseMessage);
    vm.message = 'Adios';
    console.log(vm.reverseMessage);
