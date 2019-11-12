new Vue ({
  el: '#app',
  data: {
  	playerHealth: 100,
  	monsterHealth: 100,
    playGame: true,
   
    player: '',
    monster: '',
    damage: ''
  },
  methods :{
  
    //Set 100 health for the both player in thr beginning of the game.
    startGame : function (){
      this.playGame = true;
      this.damage = 0;
  		this.playerHealth = 100;
  		this.monsterHealth = 100;
    },

    //Simple attack that will reduce more life of user then monster
    fight : function(){
      var damage = this.claculateDamage(5, 10);
      this.monsterHealth -= damage;
      this.player = damage;
      if (this.checkWin()) {
        return;
      }
      this.monsterAttacks();
      var totalDamage = this.player - this.monster;
      this.damage = totalDamage;
    },
    
    //Special attack to reduce more health of monster
    powerAttack : function(){
      var damage = this.claculateDamage(20, 40);
      this.monsterHealth -= damage;
      this.player = damage; 
      if (this.checkWin()) {
        return;
      }
      this.monsterAttacks();
      var totalDamage = this.player - this.monster;
      this.damage = totalDamage;
    },
    
    //Give option to increase the health for user
    powerUp : function() {
      if (this.playerHealth <= 80) {
        this.playerHealth += 20;  
      }
      else {
        this.playerHealth = 100;
      }
      
      this.monsterAttacks();  
  	  var totalDamage = 20 - this.monster;
      this.damage = totalDamage;
    },
    
    //Give option togive up the game for user
    giveUp : function(){
      this.playGame = false;
  	  this.playerHealth = 0;	
      this.damage = 0;
      if (this.checkWin()) {
        return;
      }
    },
    
    //This function will reduce user health whenever he attack to the monster
    monsterAttacks: function() {
      var damage = this.claculateDamage(10, 15);
      this.playerHealth -= damage;
      this.checkWin();
      this.monster = damage;
    },
    
    //Generated random attack.
    claculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },

    //Create function to check who win (user or monster) 
    //Ask user if they wanna play again.
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm('You WON. Do you wanna start a new Game?')) {
          this.startGame();
        }
        else{
          this.playGame = false;
          this.monsterHealth = 0;
          this.damage = 0;
        }
        return true;
      } 
      else if (this.playerHealth <= 0) {
        if (confirm('You lost. Do you wanna start a new Game?')) {
          this.startGame();
        } 
        else{
          this.playGame = false;
          this.playerHealth = 0;
          this.damage = 0;
        }
        return true;
      }
      return false;
    }
  }
});