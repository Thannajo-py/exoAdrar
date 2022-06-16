//Création d'une instance Vue c'est notre application
Vue.createApp({
    //Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //Toutes les data seront contenues dans this
    data() {
      return {
        tasks: [],
        valeurDeInput: '',
        variable1: '',
        variable2: [1,2,3]
      };
    },
    // Dans cet Object methods, on va écrire nos fonctions
    methods: {
      ajouterTask() {
        this.tasks.push(this.valeurDeInput);
        this.valeurDeInput = '';
        
      },
      
    },
    // L'application est montée sur la balise HTML qui possède l'id app
  }).mount('#app');