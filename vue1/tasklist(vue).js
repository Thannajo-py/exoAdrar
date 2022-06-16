//Création d'une instance Vue c'est notre application
Vue.createApp({
    //Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //Toutes les data seront contenues dans this
    data() {
      return {
        age: 0,
        people: this.initPeople()
      };
    },
    // Dans cet Object methods, on va écrire nos fonctions
    methods: {
      initPeople: function(){
        return{
          image:{
            src:"https://picsum.photos/200/300",
            alt: "une image"
          },
          firstName: "mario",
          lastName: "mario",
          getAge: function(){
            this.age = parseInt(Math.random() * 100)
            return `${this.age} ans`
          },
          getOlder: function(){
            return `${this.age + 10} ans`
          },
          getRandom: ()=>{
            return Math.random()
          }

      }
      
      },
    }
    // L'application est montée sur la balise HTML qui possède l'id app
  }).mount('#app');