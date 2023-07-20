const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5, //scale from 1 (refreshed) to 10
    sleep: function () {
      console.log(`${this.name} needs a nap.`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play!");
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };

  return pet;
};

const bluey = createPet("Bluey", "cattle dog");
const daisy = createPet("Daisy", "basset hound");
const baxter = createPet("Baxter", "hamster");
const bear = createPet("Bear", "golden retriever");
const bogey = createPet("Bogey", "goldendoodle");

//clover.sleep();
//baxter.play();

//console.log(clover);
//console.log(baxter);

daisy.isTired = 8;
bogey.isTired = 9;

const allPets = [bluey, daisy, baxter, bear, bogey];

const showPets = function (petArray) {
  pets.innerHTML = "";

  for (let pet of petArray) {
    let status = "ready to play";
    if (pet.isTired >= 7) {
      status = "sleeping";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}.`;
    pets.append(li);
  }
};

statusButton.addEventListener("click", function () {
  showPets(allPets);
});

//console.log(allPets)

//console.log(sora, clover, baxter, cleo, francine);
