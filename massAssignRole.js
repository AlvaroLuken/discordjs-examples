
const DiscordJS = require('discord.js');
const {Intents} = require('discord.js');
require('dotenv').config();

const testServerId = "897146233238478929";
const chainShotServerId = "571015837163454489";

const client = new DiscordJS.Client({
  // provide intents
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_PRESENCES
  ]
});

const shard1 = {
  "853376156861595658": {chainShotId: "6148d8c79473e7000434c99e"}, // 1 - 4 are the AE peeps
  "668037938495488000": {chainShotId: "6148d8c79473e7000434c99e"},
  "654445385330327554": {chainShotId: "6148d8c79473e7000434c99e"},
  "356153433734119424": {chainShotId: "6148d8c79473e7000434c99e"},
  "715746773561245809": {chainShotId: "6148d8c79473e7000434c99e"},
  "456937348941479937": {chainShotId: "6148d8c79473e7000434c99e"},
  "890395309291745301": {chainShotId: "6148d8c79473e7000434c99e"},
  "437110790877741056": {chainShotId: "6148d8c79473e7000434c99e"},
  "578632707177971735": {chainShotId: "6148d8c79473e7000434c99e"},
  "291015579945664512": {chainShotId: "6148d8c79473e7000434c99e"},
  "731173053286973540": {chainShotId: "6148d8c79473e7000434c99e"},
  "704784847209758810": {chainShotId: "6148d8c79473e7000434c99e"},
  "656861379348922378": {chainShotId: "6148d8c79473e7000434c99e"},
  "800440264527183905": {chainShotId: "6148d8c79473e7000434c99e"},
  "204214795606425600": {chainShotId: "6148d8c79473e7000434c99e"},
  "818235028211236866": {chainShotId: "6148d8c79473e7000434c99e"},
  "733626849162297354": {chainShotId: "6148d8c79473e7000434c99e"},
  "892425930906165318": {chainShotId: "6148d8c79473e7000434c99e"},
  "886530957765664798": {chainShotId: "6148d8c79473e7000434c99e"},
  "850444312596185089": {chainShotId: "6148d8c79473e7000434c99e"},
  "821007707615395860": {chainShotId: "6148d8c79473e7000434c99e"},
  "736657539164405833": {chainShotId: "6148d8c79473e7000434c99e"},
  "780117870943928360": {chainShotId: "6148d8c79473e7000434c99e"},
  "543367194344685579": {chainShotId: "6148d8c79473e7000434c99e"},
  "811775952522706944": {chainShotId: "6148d8c79473e7000434c99e"}
}

const shard1Array = [
  "853376156861595658", // 1 - 4 are the AE peeps
  "668037938495488000",
  "654445385330327554",
  "356153433734119424",
  "715746773561245809",
  "456937348941479937",
  "890395309291745301",
  "437110790877741056",
  "578632707177971735",
  "291015579945664512",
  "731173053286973540",
  "704784847209758810",
  "656861379348922378",
  "800440264527183905",
  "204214795606425600",
  "818235028211236866",
  "733626849162297354",
  "892425930906165318",
  "886530957765664798",
  "850444312596185089",
  "821007707615395860",
  "736657539164405833",
  "780117870943928360",
  "543367194344685579",
  "811775952522706944"
]

const shard1_roles = [
  "893250314361245747", // shard 1 rollup 1
  "894596512502411326", // shard 1 rollup 2
  "894596706694483980", // shard 1 rollup 3
  "894596756342448149", // shard 1 rollup 4
  "894596819038900254" // shard 1 rollup 5
]

const bootcampRoleId = "705171010315354163";

client.login(process.env.DISCORD_BOT_TOKEN).then(async () => {
  const guild = client.guilds.cache.get(chainShotServerId);

  let members = await guild.members.fetch();

  let numberOfGroups = 4;
  let sizeOfEachGroup = 4;

  const groupsArray = [[
    // This group would like to stay together from here on out
    '853376156861595658',
    '824673339750219836',
    '654445385330327554',
    '356153433734119424',
  ],[
    '736657539164405833',
    '656861379348922378',
    '850444312596185089',
    '818235028211236866',
    '780117870943928360'
  ],[
    '800440264527183905',
    '204214795606425600',
    '731173053286973540',
    '890395309291745301',
    '715746773561245809'
  ],[
    '892425930906165318',
    '811775952522706944',
    '886530957765664798',
    '578632707177971735',
    '291015579945664512'
  ],[
    '733626849162297354',
    '543367194344685579',
    '456937348941479937',
    '704784847209758810',
    '821007707615395860',
    '437110790877741056'
  ]];


  // front-end UI -> user click on a button and gets assigned role
  // brand new task ^

  for(let i = 0; i < shard1_roles.length; i++) {
    for(let j = 0; j < groupsArray.length; j++) {
      for(let z = 0; z < groupsArray[j].length; z++) {
        try {
          if(shard1[groupsArray[j][z]]) {
            // set the bootcamp role + relevant rollup role
            let memberToEdit = members.find(member => member.id === groupsArray[j][z]);
            console.log(memberToEdit + " get the role: " + shard1_roles[i]);
            // uncomment line below to enact role change!
            //memberToEdit.roles.set(["705171010315354163", shard1_roles[i]]);
          }
        } catch (err) {
          console.log(err);
        }
      }
      break;
    }
  }
});

