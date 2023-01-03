/*let party = [
    {
        name: 'Joline',
        hitpoints: 15,
        belongings: ["spear", "bread", "Tums"],
        companion: {
            name: "Tabby",
            type: "cat",
        }
    },
    {
        name: 'Timothy',
        hitpoints: 10,
        belongings: ["sword", "potion", "Tums"],
        companion: {
            name: "Velma",
            type: "Bat",
        }
    },
    {
        name: 'Sarah',
        hitpoints: 20,
        belongings: ["bow", "arrows", "wood"],
        companion: {
            name: "Tony",
            type: "tiger",
        }
    },
]*/

//Prompt 1: double the hitpoints of everyone in the party
  party.forEach(el => {
      el.hitpoints = 2*el.hitpoints
  });
  console.log(party);

//Prompt 2: Timothy has been hit with an arrow, subtract 5 points from his hp
  const getsHurt = (name, hp) => {
      party.forEach(element => {

          if(element.name == name){
              element.hitpoints = element.hitpoints - hp;
          }
      });
  }
  getsHurt('Timothy', 10);
  console.log(party[1].hitpoints);

//Prompt 3: Sarah's tiger has been turned into a jellyfish by a wizard, please change it
  party[2].companion.type = "jellyfish";
  console.log(party[2]);

//Prompt 4: Timothy drank this potion. Raise his hitpoints by 20 and remove "potion" from his belongings.
  const drinkHyperPotion = (name, hp) =>{
      party.forEach(element => {
          if(element.name == name){
              element.hitpoints = element.hitpoints + hp;
              element.belongings.splice(1, 1);
          }
      });
  }
  drinkHyperPotion('Timothy', 20);
  console.log(party[1]);

//Prompt 5: Timothy got hungry and stole Joline's bread. Take it out of her belongings and put it  into Timothy's belongings.
    const thievery = (name, thief) => {
        party.forEach(element => {
          if (element.name == theif) {
            stolenbelonging = element.belongings.splice(1, 1);
          }
          else if (element.name == name) {
            element.belongings.push(...stolenbelonging);
          }
        });
      }
      thievery("Timothy", "Joline");
      console.log(party);

//Prompt 6: Joline got upset and left the party. Take her out of the array. (use the name of the leaving member as a parameter)
  const leavingmember = (name) => {
      party.forEach(element => {
        if (element.name == name) {
          party.splice(0, 1);
        }
      });
    }
    
    leavingmember('Joline');
    console.log(party);

//Prompt 7: Timothy and Sarah have been recruiting. Add a new adventurer to the party. (new adventurer is parameter)
  var data = {};
  data = {
    name: 'Ash Ketchum',
    hitpoints: 1,
    belongings: ["charmander", "squirtle", "bulbasaur"],
    companion: {
      name: "pikachu",
      type: "Electric",
    }
  }
  addAdventurer = (newadventurer) => party.push(newadventurer);
  addAdventurer(data)
  console.log(party);

//Prompt 8: The party has been doing well! They found 200 gold. Create a new property called gold and split the gold evenly between everyone. (amount of gold is parameter)
  total = 200/3
  const addGold = (amountofgold) => {
    party.forEach(element => {
      if (element.gold == undefined) {
        element.gold = amountofgold
      }
    });
  }

  addGold(total)
  console.log(party)

//Prompt 9: Sarah is tired of taking care of a jellyfish. Subtract some gold from her and change her companion to a bear. 
  party.forEach(element => {
      if(element.name == "Sarah"){
          element.gold = element.gold - 1
          element.companion.type = "bear"
    
      }
  });
  console.log(party);

//Prompt 10: Timothy’s sword has gotten old. Change it to “Rusty Sword" 
  party.forEach(element => {
      if(element.name == "Timothy"){
          element.belongings[0] = "Rusty Sword"
    
      }
  });
  console.log(party);

//Prompt 11: Write a function called setLeader that takes a name as a parameter.
  //The member with that name should have a new property leader: true while the other members have leader: false.
  const setLeader = (name) => {
      party.forEach(element => {
        if (element.name == name) {
          element.leader = true;
          party.forEach(element => {
            if (element.name !== name) {
              element.leader = false;
            }
          })
        }
      })
    }
    setLeader("Ash Ketchum");
    console.log(party);