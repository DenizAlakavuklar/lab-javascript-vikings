class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return (this.strength)
    }

    receiveDamage(damage) {
        this.health = this.health - damage

    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name
    }
    attack() {
        return (this.strength)

    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0 ){
            return `${this.name} has received ${damage} points of damage`;
        } else{
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {

    attack() {
        return (this.strength)

    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0 ) {
            return `A Saxon has received ${damage} points of damage`
        }

        else {
            return `A Saxon has died in combat`
        }
 }
}


// War


class War {

    constructor(  vikingArmy = [], saxonArmy = []) {
        this.vikingArmy = vikingArmy;
        this.saxonArmy = saxonArmy
    }

    addViking(v){
        this.vikingArmy.push(v)
    }


    addSaxon(s){
        this.saxonArmy.push(s)
    }

    // I have the full solution and I understand it, however I am not %100 sure if I can write the code by myself now :/
    
    vikingAttack() {
        let randomSaxonNumber = Math.floor(Math.random()*this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxonNumber];
        let randomVikingNumber = Math.floor(Math.random()*this.vikingArmy.length);
        let randomViking = this.vikingArmy[randomVikingNumber];
        let result = randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health <=0) {
            this.saxonArmy.splice(randomSaxonNumber, 1);
        }
        return result;
    }

    saxonAttack() {
        let randomSaxonNumber = Math.floor(Math.random()*this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxonNumber];
        let randomVikingNumber = Math.floor(Math.random()*this.vikingArmy.length);
        let randomViking = this.vikingArmy[randomVikingNumber];
        let result = randomViking.receiveDamage(randomSaxon.strength);

        if (randomViking.health <=0) {
            this.vikingArmy.splice(randomVikingNumber, 1);
        }
        return result;
    }

    showStatus () {

        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";

            
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
      
        } else {
           return "Vikings and Saxons are still in the thick of battle.";
        }
    }

} 
