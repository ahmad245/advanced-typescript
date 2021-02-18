type Fish={swim:()=>void};
type Bird={fly:()=>void};

declare function getSmallPet():Fish|Bird
let pet=getSmallPet();
if('swim' in pet){
    pet.swim();
}

let pet0=getSmallPet();
let fishPet=pet0 as Fish;
let birdPet=pet0 as Bird;

if(fishPet.swim){
    fishPet.swim()
}
else if (birdPet.fly){
    birdPet.fly()
}

//////////////
