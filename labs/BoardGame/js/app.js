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
  
    startGame : function (){
      this.playGame = true;
      this.damage = 0;
  		this.playerHealth = 100;
  		this.monsterHealth = 100;
      
    },
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
    
    giveUp : function(){
      this.playGame = true;
  	  this.playerHealth = 0;	
      this.damage = 0;
    },
    
    monsterAttacks: function() {
      var damage = this.claculateDamage(10, 15);
      this.playerHealth -= damage;
      this.checkWin();
      this.monster = damage;
    },
    
    claculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },

    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm('You won!!!   start a new Game???')) {
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
        if (confirm('You lost!!!   start a new Game???')) {
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