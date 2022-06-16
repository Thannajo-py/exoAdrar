//Création d'une instance Vue c'est notre application
Vue.createApp({
    //Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //Toutes les data seront contenues dans this
    data() {
      return {
        input1:"",
        input2:"",
        p:"",
      };
    },
    // Dans cet Object methods, on va écrire nos fonctions
    methods: {
      alert2: ()=>{
        alert("alert")
      },
      refreshP: function(){
        console.log('here')
        this.p = this.input2
      }
    }
    // L'application est montée sur la balise HTML qui possède l'id app
  }).mount('#app');