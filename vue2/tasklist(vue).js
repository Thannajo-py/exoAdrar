//Création d'une instance Vue c'est notre application
Vue.createApp({
    //Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //Toutes les data seront contenues dans this
    data() {
      return {
        people: this.initPeople()
      };
    },
    // Dans cet Object methods, on va écrire nos fonctions
    methods: {
      initPeople: function(){
        return{
          age:-1,
          random:null,
          image:{
            src:"https://picsum.photos/200/300",
            alt: "une image"
          },
          firstName: "mario",
          lastName: "mario",
          getAge: function(){
            if (this.age < 0)this.age = parseInt(Math.random() * 100)
            return `${this.age} ans`
          },
          getOlder: function(){
            return `${this.age + 10} ans`
          },
          getRandom: ()=>{
            if(!this.random) this.random = Math.random()
            return this.random
          },
        }
      
      },
    }
    // L'application est montée sur la balise HTML qui possède l'id app
  }).mount('#app');