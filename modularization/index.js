// import Tiger from "./tiger";
// import Wolf from "./Wolf";

const Tiger = require('./Tiger');
const Wolf = require('./Wolf')

const fighting = (Tiger, Wolf) => {
    if(Tiger.strength > Wolf.strength) {
        console.log(`Tiger Strength: ${tiger.strength}`);
        console.log(`Wolf Strength: ${wolf.strength}`);

        
        Tiger.growl();
        return;
    }

    if(Wolf.strength > Tiger.strength) {
        Wolf.howl();
        return;
    }

    console.log('Tiger and Wolf have some strength');
}

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);