/**
 * @author Kate
 */

// type: ["option1", "option2"]
// type: "option1 option2".split(" ")
var grammars = {
    dnd: {
      // Character Creation
      gender:["Male", "Female"],
      class: ["Cleric", "Fighter", "Rogue", "Wizard", "Barbarian", "Bard", "Druid", "Monk", "Paladin", "Ranger", "Sorcerer", "Warlock"],
      race: ["Dwarf", "Elf", "Halfling", "Human"],

      // NAMES
      // Dwarf Names
      dwarfMale:"Adrik, Alberich, Baern, Barendd, Brottor, Bruenor, Dain, Darrak, Delg, Eberk, Einkil, Fargrim, Flint, Gardain, Harbek, Kildrak, Morgran, Orsik, Oskar, Rangrim, Rurik, Taklinn, Thoradin, Thorin, Tordek, Traubon, Travok, Ulfgar, Veit, Vondal".split(", "),
      dwarfFem:"Amber, Artin, Audhild, Bardryn, Dagnal, Diesa, Eldeth, Falkrunn, Finellen, Gunnloda, Gurdis, Helja, Hlin, Kathra, Kristryd, Ilde, Liftrasa, Mardred, Riswynn, Sannl, Torbera, Torgga, Vistra".split(", "),
      dwarfClan:"Balderk, Battlehammer, Brawnanvil, Dankil, Fireforge, Frostbeard, Gorunn, Holderhek, Ironfist, Loderr, Lutgehr, Rumnaheim, Strakeln, Torunn, Ungart".split(", "),

      // Elf Names
      elfChild: "Ara, Bryn, Del, Eryn, Faen, Innil, Lael, Mella, Naill, Naeris, Phann, Rael, Rinn, Sai, Syllin, Thia, Vall".split(", "),
      elfMale: "Adran, Aelar, Aramil, Arannis, Aust, Beiro, Berrian, Carric, Enialis, Erdan, Erevan, Galinndan, Hadarai, Heian, Himo, Immeral, Ivellios, Laucian, Mindartis, Paelias, Peren, Quarion, Riardon, Rolen, Soveliss, Thamior, Tharivol, Theren, Varis".split(", "),
      elfFem: "Adrie, Althaea, Anastrianna, Andraste, Antinua, Bethrynna, Birel, Caelynn, Drusilia, Enna, Felosial, Ielenia, Jelenneth, Keyleth, Leshanna, Lia, Meriele, Mialee, Naivara, Quelenna, Quillathe, Sariel, Shanairra, Shava, Silaqui, Theirastra, Thia, Vadania, Valanthe, Xanaphia".split(", "),
      elfClan: "Amakiir (Gemflower), Amastacia (Starflower), Galanodel (Moonwhisper), Holimion (Diamonddew), Ilphelkiir (Gemblossom), Liadon (Silverfrond), Meliamne (Oakenheel), Naïlo (Nightbreeze), Siannodel (Moonbrook), Xiloscient (Goldpetal)".split(", "),
      elfMaleFull: "#elfMale# #elfClan#",
      elfFemFull: "#elfFem# #elfClan#",

      //Halfling Names
      halflingMale: "Alton, Ander, Cade, Corrin, Eldon, Errich, Finnan, Garret, Lindal, Lyle, Merric, Milo, Osborn, Perrin, Reed, Roscoe, Wellby".split(", "),
      halflingFem: "Andry, Bree, Callie, Cora, Euphemia, Jillian, Kithri, Lavinia, Lidda, Merla, Nedda, Paela, Portia, Seraphina, Shaena, Trym, Vani, Verna".split(", "),
      halflingClan: "Brushgather, Goodbarrel, Greenbottle, High-hill, Hilltopple, Leagallow, Tealeaf, Thorngage, Tosscobble, Underbough".split(", "),
      halflingMaleFull: "#halflingMale# #halflingClan#",
      halflingFemFull: "#halflingFem# #halflingClan#",

      // Human Names & Races
      humanRace: ["Calishite", "Chondathan", "Damaran", "Illuskan", "Mulan", "Rashemi", "Shou", "Tethyrian", "Turami"],
      calMale: "Aseir, Bardeid, Haseid, Khemed, Mehmen, Sudeiman, Zasheir".split(", "),
      calFem: "Atala, Ceidil, Hama, Jasmal, Meilil, Seipora, Yasheira, Zasheida".split(", "),
      calSur: "Basha, Dumein, Jassan, Khalid, Mostana, Pashar, Rein".split(", "),
      calMaleFull: "#calMale# #calSur#",
      calFemFull: "#calFem# #calSur#",
      choMale: "Darvin, Dorn, Evendur, Gorstag, Grim, Helm, Malark, Morn, Randal, Stedd".split(", "),
      choFem: "Arveene, Esvele, Jhessail, Kerri, Lureene, Miri, Rowan, Shandri, Tessele".split(", "),
      choSur: "Amblecrown, Buckman, Dundragon, Evenwood, Greycastle, Tallstag".split(", "),
      choMaleFull: "#choMale# #choSur#",
      choFemFull: "#choFem# #choSur#",
      damMale: "Bor, Fodel, Glar, Grigor, Igan, Ivor, Kosef, Mival, Orel, Pavel, Sergor".split(", "),
      damFem: "Alethra, Kara, Katernin, Mara, Natali, Olma, Tana, Zora".split(", "),
      damSur: "Bersk, Chernin, Dotsk, Kulenov, Marsk, Nemetsk, Shemov, Starag".split(", "),
      damMaleFull: "#damMale# #damSur#",
      damFemFull: "#damFem# #damSur#",
      illMale: "Ander, Blath, Bran, Frath, Geth, Lander, Luth, Malcer, Stor, Taman, Urth".split(", "),
      illFem: "Amafrey, Betha, Cefrey, Kethra, Mara, Olga, Silifrey, Westra".split(", "),
      illSur: "Brightwood, Helder, Hornraven, Lackman, Stormwind, Windrivver".split(", "),
      illMaleFull: "#illMale# #illSur#",
      illFemFull: "#illFem# #illSur#",
      mulMale: "Aoth, Bareris, Ehput-Ki, Kethoth, Mumed, Ramas, So-Kehur, Thazar-De, Urhur".split(", "),
      mulFem: "Arizima, Chathi, Nephis, Nulara, Murithi, Sefris, Thola, Umara, Zolis".split(", "),
      mulSur: "Ankhalab, Anskuld, Fezim, Hahpet, Nathandem, Sepret, Uuthrakt".split(", "),
      mulMaleFull: "#mulMale# #mulSur#",
      mulFemFull: "#mulFem# #mulSur#",
      rasMale: "Borivik, Faurgar, Jandar, Kanithar, Madislak, Ralmevik, Shaumar, Vladislak".split(", "),
      rasFem: "Fyevarra, Hulmarra, Immith, Imzel, Navarra, Shevarra, Tammith, Yuldra".split(", "),
      rasSur: "Chergoba, Dyernina, Iltazyara, Murnyethara, Stayanoga, Ulmokina".split(", "),
      rasMaleFull: "#rasMale# #rasSur#",
      rasFemFull: "#rasFem# #rasSur#",
      shoMale: "An, Chen, Chi, Fai, Jiang, Jun, Lian, Long, Meng, On, Shan, Shui, Wen".split(", "),
      shoFem: "Bai, Chao, Jia, Lei, Mei, Qiao, Shui, Tai".split(", "),
      shoSur: "Chien, Huang, Kao, Kung, Lao, Ling, Mei, Pin, Shin, Sum, Tan, Wan".split(", "),
      shoMaleFull: "#shoMale# #shoSur#",
      shoFemFull: "#shoFem# #shoSur#",
      tetMale: "#choMale#", // "Tethyrians primarily use Chondathan names"
      tetFem: "#choFem#",
      tetSur: "#choSur#",
      tetMaleFull: "#tetMale# #tetSur#",
      tetFemFull: "#tetFem# #tetSur#",
      turMale: "Anton, Diero, Marcon, Pieron, Rimardo, Romero, Salazar, Umbero".split(", "),
      turFem: "Balama, Dona, Faila, Jalana, Luisa, Marta, Quara, Selise, Vonda".split(", "),
      turSur: "Agosto, Astorio, Calabra, Domine, Falone, Marivaldi, Pisacar, Ramondo".split(", "),
      turMaleFull: "#turMale# #turSur#",
      turFemFull: "#turFem# #turSur#",
      humanMaleFirst: ["#calMale#", "#choMale#", "#damMale#", "#illMale#", "#mulMale#", "#rasMale#", "#shoMale#", "#tetMale#", "#turMale#"],
      humanMaleFull: ["#calMaleFull#", "#choMaleFull#", "#damMaleFull#", "#illMaleFull#", "#mulMaleFull#", "#rasMaleFull#", "#shoMaleFull#", "#tetMaleFull#", "#turMaleFull#"],
      humanFemFirst: ["#calFem#", "#choFem#", "#damFem#", "#illFem#", "#mulFem#", "#rasFem#", "#shoFem#", "#tetFem#", "#turFem#"],
      humanFemFull: ["#calFemFull#", "#choFemFull#", "#damFemFull#", "#illFemFull#", "#mulFemFull#", "#rasFemFull#", "#shoFemFull#", "#tetFemFull#", "#turFemFull#"],

      // Left off here T___T
      //humanID: "[heroName:#humanMaleFull#][heroRace:#humanRace#]of the _____ race",




      // Monster
      size: ["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"],
      monsterType: ["Aberration", "Beast", "Celestial", "Construct", "Elemental", "Fey", "Fiend", "Giant", "Humanoid", "Monstrosity", "Ooze", "Plant", "Undead"],
      monster: ["Aarakocra","Aboleth","Acolyte","Acolyte","Adult Blue Dragon","Adult White Dragon","Air Elemental","Ambush Drake","Angels","Animated Objects","Ankheg","Ape","Archmage","Assassin","Assassin","Awakened Shrub","Awakened Tree","Axe Beak","Azbara Jos","Azer","Baboon","Badger","Bandit","Bandit","Bandit Captain","Banshee","Basilisk","Bat","Behir","Beholders","Berserker","Berserker","Black Bear","Blagothkus","Blights","Blink Dog","Blood Hawk","Boar","Brown Bear","Bugbears","Bulette","Bullywug","Bullywug","Cambion","Camel","Captain Othelstan","Carrion Crawler","Cat","Centaur","Chimera","Chuul","Cloaker","Cockatrice","Commoner","Commoner","Constrictor Snake","Couatl","Crab","Crawling Claw","Crocodile","Crocodile","Cult Fanatic","Cultist","Cultist","Cyclops","Darkmantle","Death Dog","Death Knight","Deer","Deer","Demilich","Demons","Devils","Dinosaurs","Dire Wolf","Displacer Beast","Doppelganger","Doppelganger","Dracolich","Draft Horse","Dragon Turtle","Dragon, Shadow","Dragonclaw","Dragons","Dragonwing","Dralmorrer Borngray","Drider","Druid","Dryad","Duergar","Eagle","Elementals","Elephant","Elk","Elk","Elves: Drow","Empyrean","Ettercap","Ettercap","Ettin","Faerie Dragon","Flameskull","Flumph","Flying Snake","Fomorian","Four-Armed Troll","Frog","Frulam Mondath","Fungi","Galeb Duhr","Gargoyle","Gargoyle","Genies","Ghost","Ghouls","Giant Ape","Giant Badger","Giant Bat","Giant Boar","Giant Centipede","Giant Centipede","Giant Constrictor Snake","Giant Crab","Giant Crocodile","Giant Eagle","Giant Elk","Giant Fire Beetle","Giant Frog","Giant Frog","Giant Goat","Giant Hyena","Giant Lizard","Giant Lizard","Giant Octopus","Giant Owl","Giant Poisonous Snake","Giant Rat","Giant Scorpion","Giant Sea Horse","Giant Shark","Giant Spider","Giant Spider","Giant Toad","Giant Vulture","Giant Wasp","Giant Weasel","Giant Wolf Spider","Giants","Gibbering Mouther","Gith","Gladiator","Gnolls","Gnome, Deep (Svirfneblin)","Goat","Goblins","Golems","Gorgon","Gray Ooze","Grell","Grick","Griffon","Griffon","Grimlock","Guard","Guard","Guard Drake","Hags","Half-Dragon","Harpy","Hawk","Hell Hound","Helmed Horror","Helmed Horror","Hippogriff","Hobgoblin","Hobgoblin","Hobgoblin Captain","Homunculus","Hook Horror","Hunter Shark","Hydra","Hyena","Intellect Devourer","Invisible Stalker","Jackal","Jackalwere","Jamna Gleamsilver","Kenku","Killer Whale","Knight","Knight","Kobold","Kobold","Kraken","Kuo-toa","Lamia","Langdedrosa Cyanwrath","Lich","Lion","Lizard","Lizardfolk","Lizardfolk","Lycanthropes","Mage","Mage","Magmin","Mammoth","Manticore","Mastiff","Medusa","Mephits","Merfolk","Merrow","Mimic","Mind Flayer","Minotaur","Modrons","Mule","Mummies","Myconids","Nagas","Nightmare","Noble","Noble","Nothic","Octopus","Ogre","Ogre","Oni","Oozes","Orc","Orcs","Otyugh","Otyugh","Owl","Owlbear","Panther","Pegasus","Peryton","Peryton","Pharblex Spattergoo","Phase Spider","Piercer","Pixie","Poisonous Snake","Polar Bear","Pony","Priest","Priest","Pseudodragon","Purple Worm","Quaggoth","Quipper","Rakshasa","Rat","Rath Modar","Raven","Reef Shark","Remorhaz","Revenant","Rezmir","Rhinoceros","Riding Horse","Roc","Roper","Roper","Rug of Smothering","Rust Monster","Saber-Toothed Tiger","Sahuagin","Salamanders","Satyr","Scarecrow","Scorpion","Scout","Scout","Sea Horse","Shadow","Shambling Mound","Shambling Mound","Shield Guardian","Skeletons","Slaadi","Specter","Specter","Sphinxes","Spider","Sprite","Spy","Spy","Stirge","Stirge","Stone Giant","Stone Golem","Succubus/Incubus","Swarm of Bats","Swarm of Centipedes","Swarm of Insects","Swarm of Insects","Swarm of Poisonous Snakes","Swarm of Quippers","Swarm of Rats","Swarm of Rats","Swarm of Ravens","Talis the White","Tarrasque","Thri-Kreen","Thug","Tiger","Treant","Tribal Warrior","Troglodyte","Troglodyte","Troll","Troll","Umber Hulk","Unicorn","Vampire","Vampire Spawn","Vampires","Variants","Veteran","Veteran","Violet Fungus","Vulture","Warhorse","Water Weird","Weasel","Wight","Will-o'-Wisp","Will-o'-Wisp","Winged Kobold","Winter Wolf","Wolf","Worg","Wraith","Wyvern","Wyvern","Xorn","Yeti","Yuan-ti","Yuan-ti","Yuan-ti Malison","Yuan-ti Pureblood","Yugoloths","Zombies"],
      // Grapple Rules for Monsters


      // Actions
      // Spellcasting
      // Melee Attacks
      // Ranged Attacks
      // Ammunition
      // Reaction

      // Equipment
      // Legendary Actions
      // Legendary Lair
      // Lair Actions
      // Regional Effects
      // Final Sentence Generator
      origin: ["You are a #gender# #race# by the name of #dwarfMale#!"]
    },
}
