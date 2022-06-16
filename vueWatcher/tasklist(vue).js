//Création d'une instance Vue c'est notre application
Vue.createApp({
    //Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //Toutes les data seront contenues dans this
    data() {
      return {
        nbMystere:0,
        comment:""
      };
    },
    watch: {
      nbMystere(value){
        if (value < 7)this.comment = "Essaie encore"
        if (value == 7)this.comment = value
        if (value > 7)this.comment = "tu as dépassé le nombre mystère"
      }
    },
    // Dans cet Object methods, on va écrire nos fonctions
    methods: {
      getUserName(){
        console.log("fonction executée")
        if(!this.username) return "test"
        return "un autre test"
      }
    }
    // L'application est montée sur la balise HTML qui possède l'id app
  }).mount('#app');