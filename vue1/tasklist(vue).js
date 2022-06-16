//Création d'une instance Vue c'est notre application
Vue.createApp({
    //Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //Toutes les data seront contenues dans this
    data() {
      return {
        nombre:0
      };
    },
    // Dans cet Object methods, on va écrire nos fonctions
    methods: {
      nombrePlus:function(){
        this.nombre++
      },
      nombreMoins:function(){
        this.nombre--
      },
      getNombre:function(){
        return this.nombre
      }
    }
    // L'application est montée sur la balise HTML qui possède l'id app
  }).mount('#app');