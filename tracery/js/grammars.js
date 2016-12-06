/**
 * @author Kate
 */

// type: ["option1", "option2"]
// type: "option1 option2".split(" ")
var grammars = {

    // SHORT ADVENTURE
    short:{
        // Character Creation
        gender:["Male", "Female"],
        class: ["Cleric", "Fighter", "Rogue", "Wizard", "Barbarian", "Bard", "Druid", "Monk", "Paladin", "Ranger", "Sorcerer", "Warlock"],
        race: ["Dwarf", "Elf", "Halfling", "Human"],
        identities:["#dwarfMaleFull#", "#dwarfFemFull#", "#elfMaleFull#", "#elfFemFull#", "#halflingMaleFull#", "#halflingFemFull#", "#calMaleFull#", "#calFemFull#", "#choMaleFull#", "#choFemFull#",
                    "#damMaleFull#", "#damFemFull#", "#illMaleFull#", "#illFemFull#", "#mulMaleFull#", "#mulFemFull#", "#rasMaleFull#", "#rasFemFull#", "#shoMaleFull#", "#shoFemFull#",
                    "#tetMaleFull#", "#tetFemFull#", "#turMaleFull#", "#turFemFull#"],
        introduction: ["You are a #identities#"],

      // NAMES
      // Dwarf Names
      dwarfMale:"Adrik, Alberich, Baern, Barendd, Brottor, Bruenor, Dain, Darrak, Delg, Eberk, Einkil, Fargrim, Flint, Gardain, Harbek, Kildrak, Morgran, Orsik, Oskar, Rangrim, Rurik, Taklinn, Thoradin, Thorin, Tordek, Traubon, Travok, Ulfgar, Veit, Vondal".split(", "),
      dwarfFem:"Amber, Artin, Audhild, Bardryn, Dagnal, Diesa, Eldeth, Falkrunn, Finellen, Gunnloda, Gurdis, Helja, Hlin, Kathra, Kristryd, Ilde, Liftrasa, Mardred, Riswynn, Sannl, Torbera, Torgga, Vistra".split(", "),
        dwarfClan:"Balderk, Battlehammer, Brawnanvil, Dankil, Fireforge, Frostbeard, Gorunn, Holderhek, Ironfist, Loderr, Lutgehr, Rumnaheim, Strakeln, Torunn, Ungart".split(", "),
        dwarfMaleFull: ["Male Dwarf #class# by the name of #dwarfMale# #dwarfClan#."],
        dwarfFemFull: ["Female Dwarf #class# by the name of #dwarfFem# #dwarfClan#."],

      // Elf Names
      elfChild: "Ara, Bryn, Del, Eryn, Faen, Innil, Lael, Mella, Naill, Naeris, Phann, Rael, Rinn, Sai, Syllin, Thia, Vall".split(", "),
      elfMale: "Adran, Aelar, Aramil, Arannis, Aust, Beiro, Berrian, Carric, Enialis, Erdan, Erevan, Galinndan, Hadarai, Heian, Himo, Immeral, Ivellios, Laucian, Mindartis, Paelias, Peren, Quarion, Riardon, Rolen, Soveliss, Thamior, Tharivol, Theren, Varis".split(", "),
      elfFem: "Adrie, Althaea, Anastrianna, Andraste, Antinua, Bethrynna, Birel, Caelynn, Drusilia, Enna, Felosial, Ielenia, Jelenneth, Keyleth, Leshanna, Lia, Meriele, Mialee, Naivara, Quelenna, Quillathe, Sariel, Shanairra, Shava, Silaqui, Theirastra, Thia, Vadania, Valanthe, Xanaphia".split(", "),
      elfClan: "Amakiir (Gemflower), Amastacia (Starflower), Galanodel (Moonwhisper), Holimion (Diamonddew), Ilphelkiir (Gemblossom), Liadon (Silverfrond), Meliamne (Oakenheel), Naïlo (Nightbreeze), Siannodel (Moonbrook), Xiloscient (Goldpetal)".split(", "),
      elfMaleFull: ["Male Elf #class# by the name of #elfMale# #elfClan#."],
      elfFemFull: ["#Female Elf #class# by the name of elfFem# #elfClan#."],

      //Halfling Names
      halflingMale: "Alton, Ander, Cade, Corrin, Eldon, Errich, Finnan, Garret, Lindal, Lyle, Merric, Milo, Osborn, Perrin, Reed, Roscoe, Wellby".split(", "),
      halflingFem: "Andry, Bree, Callie, Cora, Euphemia, Jillian, Kithri, Lavinia, Lidda, Merla, Nedda, Paela, Portia, Seraphina, Shaena, Trym, Vani, Verna".split(", "),
      halflingClan: "Brushgather, Goodbarrel, Greenbottle, High-hill, Hilltopple, Leagallow, Tealeaf, Thorngage, Tosscobble, Underbough".split(", "),
      halflingMaleFull: "Male Halfling #class# by the name of #halflingMale# #halflingClan#.",
      halflingFemFull: "Female Halfling #class# by the name of #halflingFem# #halflingClan#.",

      // Human Names & Races
      humanRace: ["Calishite", "Chondathan", "Damaran", "Illuskan", "Mulan", "Rashemi", "Shou", "Tethyrian", "Turami"],
      calMale: "Aseir, Bardeid, Haseid, Khemed, Mehmen, Sudeiman, Zasheir".split(", "),
      calFem: "Atala, Ceidil, Hama, Jasmal, Meilil, Seipora, Yasheira, Zasheida".split(", "),
      calSur: "Basha, Dumein, Jassan, Khalid, Mostana, Pashar, Rein".split(", "),
      calMaleFull: "Male Calishite #cleric# by the name of #calMale# #calSur#.",
      calFemFull: "Female Calishite #cleric# by the name of #calFem# #calSur#.",
      choMale: "Darvin, Dorn, Evendur, Gorstag, Grim, Helm, Malark, Morn, Randal, Stedd".split(", "),
      choFem: "Arveene, Esvele, Jhessail, Kerri, Lureene, Miri, Rowan, Shandri, Tessele".split(", "),
      choSur: "Amblecrown, Buckman, Dundragon, Evenwood, Greycastle, Tallstag".split(", "),
      choMaleFull: "Male Chondathan #class# by the name of #choMale# #choSur#.",
      choFemFull: "Female Chondathan #class# by the name of #choFem# #choSur#.",
      damMale: "Bor, Fodel, Glar, Grigor, Igan, Ivor, Kosef, Mival, Orel, Pavel, Sergor".split(", "),
      damFem: "Alethra, Kara, Katernin, Mara, Natali, Olma, Tana, Zora".split(", "),
      damSur: "Bersk, Chernin, Dotsk, Kulenov, Marsk, Nemetsk, Shemov, Starag".split(", "),
      damMaleFull: "Male Damaran #class# by the name of #damMale# #damSur#.",
      damFemFull: "Female Damaran #class# by the name of #damFem# #damSur#.",
      illMale: "Ander, Blath, Bran, Frath, Geth, Lander, Luth, Malcer, Stor, Taman, Urth".split(", "),
      illFem: "Amafrey, Betha, Cefrey, Kethra, Mara, Olga, Silifrey, Westra".split(", "),
      illSur: "Brightwood, Helder, Hornraven, Lackman, Stormwind, Windrivver".split(", "),
      illMaleFull: "Male Illuskan #class# by the name of #illMale# #illSur#.",
      illFemFull: "Female Illuskan #class# by the name of #illFem# #illSur#.",
      mulMale: "Aoth, Bareris, Ehput-Ki, Kethoth, Mumed, Ramas, So-Kehur, Thazar-De, Urhur".split(", "),
      mulFem: "Arizima, Chathi, Nephis, Nulara, Murithi, Sefris, Thola, Umara, Zolis".split(", "),
      mulSur: "Ankhalab, Anskuld, Fezim, Hahpet, Nathandem, Sepret, Uuthrakt".split(", "),
      mulMaleFull: "Male Mulan #class# by the name of #mulMale# #mulSur#.",
      mulFemFull: "Female Mulan #class# by the name of #mulFem# #mulSur#.",
      rasMale: "Borivik, Faurgar, Jandar, Kanithar, Madislak, Ralmevik, Shaumar, Vladislak".split(", "),
      rasFem: "Fyevarra, Hulmarra, Immith, Imzel, Navarra, Shevarra, Tammith, Yuldra".split(", "),
      rasSur: "Chergoba, Dyernina, Iltazyara, Murnyethara, Stayanoga, Ulmokina".split(", "),
      rasMaleFull: "Male Rashemi #class# by the name of #rasMale# #rasSur#.",
      rasFemFull: "#Female Rashemi #class# by the name of rasFem# #rasSur#.",
      shoMale: "An, Chen, Chi, Fai, Jiang, Jun, Lian, Long, Meng, On, Shan, Shui, Wen".split(", "),
      shoFem: "Bai, Chao, Jia, Lei, Mei, Qiao, Shui, Tai".split(", "),
      shoSur: "Chien, Huang, Kao, Kung, Lao, Ling, Mei, Pin, Shin, Sum, Tan, Wan".split(", "),
      shoMaleFull: "Male Shou #class# by the name of #shoMale# #shoSur#.",
      shoFemFull: "Female Shou #class# by the name of #shoFem# #shoSur#.",
      tetMale: "#choMale#", // "Tethyrians primarily use Chondathan names"
      tetFem: "#choFem#",
      tetSur: "#choSur#",
      tetMaleFull: "Male Tethyrian by the name of #tetMale# #tetSur#.",
      tetFemFull: "Female Tethyrian by the name of #tetFem# #tetSur#.",
      turMale: "Anton, Diero, Marcon, Pieron, Rimardo, Romero, Salazar, Umbero".split(", "),
      turFem: "Balama, Dona, Faila, Jalana, Luisa, Marta, Quara, Selise, Vonda".split(", "),
      turSur: "Agosto, Astorio, Calabra, Domine, Falone, Marivaldi, Pisacar, Ramondo".split(", "),
      turMaleFull: "Male Turami #class# by the name of #turMale# #turSur#.",
      turFemFull: "Female Turami #class# by the name of #turFem# #turSur#.",
      humanMaleFirst: ["#calMale#", "#choMale#", "#damMale#", "#illMale#", "#mulMale#", "#rasMale#", "#shoMale#", "#tetMale#", "#turMale#"],
      humanMaleFull: ["#calMaleFull#", "#choMaleFull#", "#damMaleFull#", "#illMaleFull#", "#mulMaleFull#", "#rasMaleFull#", "#shoMaleFull#", "#tetMaleFull#", "#turMaleFull#"],
      humanFemFirst: ["#calFem#", "#choFem#", "#damFem#", "#illFem#", "#mulFem#", "#rasFem#", "#shoFem#", "#tetFem#", "#turFem#"],
      humanFemFull: ["#calFemFull#", "#choFemFull#", "#damFemFull#", "#illFemFull#", "#mulFemFull#", "#rasFemFull#", "#shoFemFull#", "#tetFemFull#", "#turFemFull#"],


      // Monster
      size: ["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"],
      monsterType: ["Aberration", "Beast", "Celestial", "Construct", "Elemental", "Fey", "Fiend", "Giant", "Humanoid", "Monstrosity", "Ooze", "Plant", "Undead"],
      monster: ["Aarakocra","Aboleth","Acolyte","Acolyte","Adult Blue Dragon","Adult White Dragon","Air Elemental","Ambush Drake","Angels","Animated Objects","Ankheg","Ape","Archmage","Assassin","Assassin","Awakened Shrub","Awakened Tree","Axe Beak","Azbara Jos","Azer","Baboon","Badger","Bandit","Bandit","Bandit Captain","Banshee","Basilisk","Bat","Behir","Beholders","Berserker","Berserker","Black Bear","Blagothkus","Blights","Blink Dog","Blood Hawk","Boar","Brown Bear","Bugbears","Bulette","Bullywug","Bullywug","Cambion","Camel","Captain Othelstan","Carrion Crawler","Cat","Centaur","Chimera","Chuul","Cloaker","Cockatrice","Commoner","Commoner","Constrictor Snake","Couatl","Crab","Crawling Claw","Crocodile","Crocodile","Cult Fanatic","Cultist","Cultist","Cyclops","Darkmantle","Death Dog","Death Knight","Deer","Deer","Demilich","Demons","Devils","Dinosaurs","Dire Wolf","Displacer Beast","Doppelganger","Doppelganger","Dracolich","Draft Horse","Dragon Turtle","Dragon, Shadow","Dragonclaw","Dragons","Dragonwing","Dralmorrer Borngray","Drider","Druid","Dryad","Duergar","Eagle","Elementals","Elephant","Elk","Elk","Elves: Drow","Empyrean","Ettercap","Ettercap","Ettin","Faerie Dragon","Flameskull","Flumph","Flying Snake","Fomorian","Four-Armed Troll","Frog","Frulam Mondath","Fungi","Galeb Duhr","Gargoyle","Gargoyle","Genies","Ghost","Ghouls","Giant Ape","Giant Badger","Giant Bat","Giant Boar","Giant Centipede","Giant Centipede","Giant Constrictor Snake","Giant Crab","Giant Crocodile","Giant Eagle","Giant Elk","Giant Fire Beetle","Giant Frog","Giant Frog","Giant Goat","Giant Hyena","Giant Lizard","Giant Lizard","Giant Octopus","Giant Owl","Giant Poisonous Snake","Giant Rat","Giant Scorpion","Giant Sea Horse","Giant Shark","Giant Spider","Giant Spider","Giant Toad","Giant Vulture","Giant Wasp","Giant Weasel","Giant Wolf Spider","Giants","Gibbering Mouther","Gith","Gladiator","Gnolls","Gnome, Deep (Svirfneblin)","Goat","Goblins","Golems","Gorgon","Gray Ooze","Grell","Grick","Griffon","Griffon","Grimlock","Guard","Guard","Guard Drake","Hags","Half-Dragon","Harpy","Hawk","Hell Hound","Helmed Horror","Helmed Horror","Hippogriff","Hobgoblin","Hobgoblin","Hobgoblin Captain","Homunculus","Hook Horror","Hunter Shark","Hydra","Hyena","Intellect Devourer","Invisible Stalker","Jackal","Jackalwere","Jamna Gleamsilver","Kenku","Killer Whale","Knight","Knight","Kobold","Kobold","Kraken","Kuo-toa","Lamia","Langdedrosa Cyanwrath","Lich","Lion","Lizard","Lizardfolk","Lizardfolk","Lycanthropes","Mage","Mage","Magmin","Mammoth","Manticore","Mastiff","Medusa","Mephits","Merfolk","Merrow","Mimic","Mind Flayer","Minotaur","Modrons","Mule","Mummies","Myconids","Nagas","Nightmare","Noble","Noble","Nothic","Octopus","Ogre","Ogre","Oni","Oozes","Orc","Orcs","Otyugh","Otyugh","Owl","Owlbear","Panther","Pegasus","Peryton","Peryton","Pharblex Spattergoo","Phase Spider","Piercer","Pixie","Poisonous Snake","Polar Bear","Pony","Priest","Priest","Pseudodragon","Purple Worm","Quaggoth","Quipper","Rakshasa","Rat","Rath Modar","Raven","Reef Shark","Remorhaz","Revenant","Rezmir","Rhinoceros","Riding Horse","Roc","Roper","Roper","Rug of Smothering","Rust Monster","Saber-Toothed Tiger","Sahuagin","Salamanders","Satyr","Scarecrow","Scorpion","Scout","Scout","Sea Horse","Shadow","Shambling Mound","Shambling Mound","Shield Guardian","Skeletons","Slaadi","Specter","Specter","Sphinxes","Spider","Sprite","Spy","Spy","Stirge","Stirge","Stone Giant","Stone Golem","Succubus/Incubus","Swarm of Bats","Swarm of Centipedes","Swarm of Insects","Swarm of Insects","Swarm of Poisonous Snakes","Swarm of Quippers","Swarm of Rats","Swarm of Rats","Swarm of Ravens","Talis the White","Tarrasque","Thri-Kreen","Thug","Tiger","Treant","Tribal Warrior","Troglodyte","Troglodyte","Troll","Troll","Umber Hulk","Unicorn","Vampire","Vampire Spawn","Vampires","Variants","Veteran","Veteran","Violet Fungus","Vulture","Warhorse","Water Weird","Weasel","Wight","Will-o'-Wisp","Will-o'-Wisp","Winged Kobold","Winter Wolf","Wolf","Worg","Wraith","Wyvern","Wyvern","Xorn","Yeti","Yuan-ti","Yuan-ti","Yuan-ti Malison","Yuan-ti Pureblood","Yugoloths","Zombies"],

    // PLOT ESSENTIALS
    // MANDATORY ADVENTURE ELEMENTS
    //
    // TITLE
    //
        // THEME: (Action/Adventure, Comedy, Espionage, Horror, Mystery, Revenge, Romance)
        theme: ["Action/Adventure", "Comedy", "Espionage", "Horror", "Mystery", "Revenge", "Romance"],
    //
    // OBJECTIVE/GOAL: - SHOULD BE EXPANDED 
        objective: "Clear Name, Escape, Explore a New Area, Encounter Old Villain, Gain Money, Gain Power, Protect Endangered NPC(s), Rescue NPC(s), Retrieve Item, Settle a Debt, Survive Environment, Thwart Monstrous Plan, Win War".split(", "),

        // PLOT TWISTS - NEEDS TO BE EXPANDED
        maguffin: "Dying Delivery, Grim Necessity, Hero Offended, Legend and Rumor, Mistaken Identity, Mystery Woman, Old Enemy, Old Friend, Pressing Buttons".split(", "),
    //
        // SETTING:
        setting: ["#ap#", "#cc#", "#edl#", "#hht#", "#otr#", "#ots#", "#tt#", "#utg#", "#uts#"],
        // Alternate Plane: (Magical Lake, Temple)
        ap_loc: ["Magical Lake", "Temple"],
        ap: ["#ap_loc# of the Alternate Plane"],
        // Cosmopolitan City: (Laboratory, Madman's Fortress, Mansion of Powerful NPC, Tavern,
        cc_loc: ["Laboratory", "Madman's Fortress", "Mansion of Powerful NPC", "Tavern"],
        cc: ["#cc_loc# of the Cosmopolitan City"],
        // Exotic Distant Land: (Demi-human Community, Palace of the Ruler,\
        edl_loc: ["Demi-human Community", "Palace of the Ruler, Shacktown of the Oppressed, Inn"],
        edl: ["#ed_loc# of the Exotic Distant Land"],
        // Hero's Home Town: (Craftsmen's Chambers/Quarter, Church)
        hht_loc: ["Craftsmen's Chambers", "Church"],
        hht: ["#hht_loc# of the Hero's Home Town"],
        // On the Road: (Lost City, Military Encampment)
        otr_loc: ["Lost City", "Military Encampment"],
        otr: ["#otr_loc# On the Road"],
        // On the Sea: (Ruins)
        ots_loc: ["Ruins"],
        ots: ["#ots_locs# On the Sea"],
        // Torturous Terrain: (Classic Dungeon, Legendary Forest)
        tt_loc: ["Classic Dungeon", "Legendary Forest"],
        tt: ["#tt_loc# in Torturous Terrain"],
        // Under the Ground: (Catacombs, Caves of Magical Folk)
        utg_loc: ["Catacombs", "Caves of the Magical Folk"],
        utg: ["#utg_loc# Under the Ground"],
        // Under the Sea:(Ruins)
        uts_loc: ["Ruins"],
        uts: ["#uts_loc# Under the Sea"],


        // ALLIES & NEUTRALS - expand & add names & details
        allies: "Absent-Minded Expert, Arrogant Snob, Childhood Friend With a Dark Secret, Congenial Madman, Crusty Old Professional, Gibbering Madman, Government Observer, Hero-Worshipper, Ingenue In Distress, Inquisitive Chronicler, Merry Minstrel, Obsequious Merchant, Romantic Loony, Talkative Barkeep, Tragic Fellow Hero, Villain Ally".split(", "),

        // MASTER VILLAIN - expand & add names & details
        vmaster: "The Agent Provocateur, The Advance Agent, The Avenger, The Conqueror, The Corruptor, The Destroyer, The God of Chance, The Lovable Rogue, The Organizer, The Ravager, The Sufferer, The Zealot".split(", "),

        // SECRET WEAKNESS
        vweakness:"Element or Ingredient, Holy Symbol, Lack of Familiarity, Love, Secret Embarrassment".split(", "),

        // MINOR VILLAIN(S)
        vminor: "The Avenger, The Chief Assassin, The Childhood Friend With a Dark Secret, The Corrupted Hero, The Coward, The Hard-Eyed Advisor, The Inquisitor, The Lovable Rogue, The Misguided Moralist, The Mistress with the Heart of Gold, The Daughter with the Heart of Gold, The Moronic Muscleman, The Single-Minded Soldier, The Snivelling Vizier".split(", "),

    // THE PLOT (Arrangement)
    // The A-B-C Quest, The Accumulation of Elements, The Event
    // The Geographic Progressions, The Series of Villains

    // GRAND FINALE: THE CLIMAX
    // Bloody Battle, Chase to Ground, Divine Retribution,
    // Prevented Deed, Scattered Duels, Throne-Room Duel
        origin:[]
    },

    // LONG ADVENTURE
    long:{
        // Character Creation
        gender:["Male", "Female"],
        class: ["Cleric", "Fighter", "Rogue", "Wizard", "Barbarian", "Bard", "Druid", "Monk", "Paladin", "Ranger", "Sorcerer", "Warlock"],
        race: ["Dwarf", "Elf", "Halfling", "Human"],
        identities:["#dwarfMaleFull#", "#dwarfFemFull#", "#elfMaleFull#", "#elfFemFull#", "#halflingMaleFull#", "#halflingFemFull#", "#calMaleFull#", "#calFemFull#", "#choMaleFull#", "#choFemFull#",
                    "#damMaleFull#", "#damFemFull#", "#illMaleFull#", "#illFemFull#", "#mulMaleFull#", "#mulFemFull#", "#rasMaleFull#", "#rasFemFull#", "#shoMaleFull#", "#shoFemFull#",
                    "#tetMaleFull#", "#tetFemFull#", "#turMaleFull#", "#turFemFull#"],
        introduction: ["You are a #identities#"],

      // NAMES
      // Dwarf Names
      dwarfMale:"Adrik, Alberich, Baern, Barendd, Brottor, Bruenor, Dain, Darrak, Delg, Eberk, Einkil, Fargrim, Flint, Gardain, Harbek, Kildrak, Morgran, Orsik, Oskar, Rangrim, Rurik, Taklinn, Thoradin, Thorin, Tordek, Traubon, Travok, Ulfgar, Veit, Vondal".split(", "),
      dwarfFem:"Amber, Artin, Audhild, Bardryn, Dagnal, Diesa, Eldeth, Falkrunn, Finellen, Gunnloda, Gurdis, Helja, Hlin, Kathra, Kristryd, Ilde, Liftrasa, Mardred, Riswynn, Sannl, Torbera, Torgga, Vistra".split(", "),
        dwarfClan:"Balderk, Battlehammer, Brawnanvil, Dankil, Fireforge, Frostbeard, Gorunn, Holderhek, Ironfist, Loderr, Lutgehr, Rumnaheim, Strakeln, Torunn, Ungart".split(", "),
        dwarfMaleFull: ["Male Dwarf #class# by the name of #dwarfMale# #dwarfClan#."],
        dwarfFemFull: ["Female Dwarf #class# by the name of #dwarfFem# #dwarfClan#."],

      // Elf Names
      elfChild: "Ara, Bryn, Del, Eryn, Faen, Innil, Lael, Mella, Naill, Naeris, Phann, Rael, Rinn, Sai, Syllin, Thia, Vall".split(", "),
      elfMale: "Adran, Aelar, Aramil, Arannis, Aust, Beiro, Berrian, Carric, Enialis, Erdan, Erevan, Galinndan, Hadarai, Heian, Himo, Immeral, Ivellios, Laucian, Mindartis, Paelias, Peren, Quarion, Riardon, Rolen, Soveliss, Thamior, Tharivol, Theren, Varis".split(", "),
      elfFem: "Adrie, Althaea, Anastrianna, Andraste, Antinua, Bethrynna, Birel, Caelynn, Drusilia, Enna, Felosial, Ielenia, Jelenneth, Keyleth, Leshanna, Lia, Meriele, Mialee, Naivara, Quelenna, Quillathe, Sariel, Shanairra, Shava, Silaqui, Theirastra, Thia, Vadania, Valanthe, Xanaphia".split(", "),
      elfClan: "Amakiir (Gemflower), Amastacia (Starflower), Galanodel (Moonwhisper), Holimion (Diamonddew), Ilphelkiir (Gemblossom), Liadon (Silverfrond), Meliamne (Oakenheel), Naïlo (Nightbreeze), Siannodel (Moonbrook), Xiloscient (Goldpetal)".split(", "),
      elfMaleFull: ["Male Elf #class# by the name of #elfMale# #elfClan#."],
      elfFemFull: ["#Female Elf #class# by the name of elfFem# #elfClan#."],

      //Halfling Names
      halflingMale: "Alton, Ander, Cade, Corrin, Eldon, Errich, Finnan, Garret, Lindal, Lyle, Merric, Milo, Osborn, Perrin, Reed, Roscoe, Wellby".split(", "),
      halflingFem: "Andry, Bree, Callie, Cora, Euphemia, Jillian, Kithri, Lavinia, Lidda, Merla, Nedda, Paela, Portia, Seraphina, Shaena, Trym, Vani, Verna".split(", "),
      halflingClan: "Brushgather, Goodbarrel, Greenbottle, High-hill, Hilltopple, Leagallow, Tealeaf, Thorngage, Tosscobble, Underbough".split(", "),
      halflingMaleFull: "Male Halfling #class# by the name of #halflingMale# #halflingClan#.",
      halflingFemFull: "Female Halfling #class# by the name of #halflingFem# #halflingClan#.",

      // Human Names & Races
      humanRace: ["Calishite", "Chondathan", "Damaran", "Illuskan", "Mulan", "Rashemi", "Shou", "Tethyrian", "Turami"],
      calMale: "Aseir, Bardeid, Haseid, Khemed, Mehmen, Sudeiman, Zasheir".split(", "),
      calFem: "Atala, Ceidil, Hama, Jasmal, Meilil, Seipora, Yasheira, Zasheida".split(", "),
      calSur: "Basha, Dumein, Jassan, Khalid, Mostana, Pashar, Rein".split(", "),
      calMaleFull: "Male Calishite #cleric# by the name of #calMale# #calSur#.",
      calFemFull: "Female Calishite #cleric# by the name of #calFem# #calSur#.",
      choMale: "Darvin, Dorn, Evendur, Gorstag, Grim, Helm, Malark, Morn, Randal, Stedd".split(", "),
      choFem: "Arveene, Esvele, Jhessail, Kerri, Lureene, Miri, Rowan, Shandri, Tessele".split(", "),
      choSur: "Amblecrown, Buckman, Dundragon, Evenwood, Greycastle, Tallstag".split(", "),
      choMaleFull: "Male Chondathan #class# by the name of #choMale# #choSur#.",
      choFemFull: "Female Chondathan #class# by the name of #choFem# #choSur#.",
      damMale: "Bor, Fodel, Glar, Grigor, Igan, Ivor, Kosef, Mival, Orel, Pavel, Sergor".split(", "),
      damFem: "Alethra, Kara, Katernin, Mara, Natali, Olma, Tana, Zora".split(", "),
      damSur: "Bersk, Chernin, Dotsk, Kulenov, Marsk, Nemetsk, Shemov, Starag".split(", "),
      damMaleFull: "Male Damaran #class# by the name of #damMale# #damSur#.",
      damFemFull: "Female Damaran #class# by the name of #damFem# #damSur#.",
      illMale: "Ander, Blath, Bran, Frath, Geth, Lander, Luth, Malcer, Stor, Taman, Urth".split(", "),
      illFem: "Amafrey, Betha, Cefrey, Kethra, Mara, Olga, Silifrey, Westra".split(", "),
      illSur: "Brightwood, Helder, Hornraven, Lackman, Stormwind, Windrivver".split(", "),
      illMaleFull: "Male Illuskan #class# by the name of #illMale# #illSur#.",
      illFemFull: "Female Illuskan #class# by the name of #illFem# #illSur#.",
      mulMale: "Aoth, Bareris, Ehput-Ki, Kethoth, Mumed, Ramas, So-Kehur, Thazar-De, Urhur".split(", "),
      mulFem: "Arizima, Chathi, Nephis, Nulara, Murithi, Sefris, Thola, Umara, Zolis".split(", "),
      mulSur: "Ankhalab, Anskuld, Fezim, Hahpet, Nathandem, Sepret, Uuthrakt".split(", "),
      mulMaleFull: "Male Mulan #class# by the name of #mulMale# #mulSur#.",
      mulFemFull: "Female Mulan #class# by the name of #mulFem# #mulSur#.",
      rasMale: "Borivik, Faurgar, Jandar, Kanithar, Madislak, Ralmevik, Shaumar, Vladislak".split(", "),
      rasFem: "Fyevarra, Hulmarra, Immith, Imzel, Navarra, Shevarra, Tammith, Yuldra".split(", "),
      rasSur: "Chergoba, Dyernina, Iltazyara, Murnyethara, Stayanoga, Ulmokina".split(", "),
      rasMaleFull: "Male Rashemi #class# by the name of #rasMale# #rasSur#.",
      rasFemFull: "#Female Rashemi #class# by the name of rasFem# #rasSur#.",
      shoMale: "An, Chen, Chi, Fai, Jiang, Jun, Lian, Long, Meng, On, Shan, Shui, Wen".split(", "),
      shoFem: "Bai, Chao, Jia, Lei, Mei, Qiao, Shui, Tai".split(", "),
      shoSur: "Chien, Huang, Kao, Kung, Lao, Ling, Mei, Pin, Shin, Sum, Tan, Wan".split(", "),
      shoMaleFull: "Male Shou #class# by the name of #shoMale# #shoSur#.",
      shoFemFull: "Female Shou #class# by the name of #shoFem# #shoSur#.",
      tetMale: "#choMale#", // "Tethyrians primarily use Chondathan names"
      tetFem: "#choFem#",
      tetSur: "#choSur#",
      tetMaleFull: "Male Tethyrian by the name of #tetMale# #tetSur#.",
      tetFemFull: "Female Tethyrian by the name of #tetFem# #tetSur#.",
      turMale: "Anton, Diero, Marcon, Pieron, Rimardo, Romero, Salazar, Umbero".split(", "),
      turFem: "Balama, Dona, Faila, Jalana, Luisa, Marta, Quara, Selise, Vonda".split(", "),
      turSur: "Agosto, Astorio, Calabra, Domine, Falone, Marivaldi, Pisacar, Ramondo".split(", "),
      turMaleFull: "Male Turami #class# by the name of #turMale# #turSur#.",
      turFemFull: "Female Turami #class# by the name of #turFem# #turSur#.",
      humanMaleFirst: ["#calMale#", "#choMale#", "#damMale#", "#illMale#", "#mulMale#", "#rasMale#", "#shoMale#", "#tetMale#", "#turMale#"],
      humanMaleFull: ["#calMaleFull#", "#choMaleFull#", "#damMaleFull#", "#illMaleFull#", "#mulMaleFull#", "#rasMaleFull#", "#shoMaleFull#", "#tetMaleFull#", "#turMaleFull#"],
      humanFemFirst: ["#calFem#", "#choFem#", "#damFem#", "#illFem#", "#mulFem#", "#rasFem#", "#shoFem#", "#tetFem#", "#turFem#"],
      humanFemFull: ["#calFemFull#", "#choFemFull#", "#damFemFull#", "#illFemFull#", "#mulFemFull#", "#rasFemFull#", "#shoFemFull#", "#tetFemFull#", "#turFemFull#"],


      // Monster
      size: ["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"],
      monsterType: ["Aberration", "Beast", "Celestial", "Construct", "Elemental", "Fey", "Fiend", "Giant", "Humanoid", "Monstrosity", "Ooze", "Plant", "Undead"],
      monster: ["Aarakocra","Aboleth","Acolyte","Acolyte","Adult Blue Dragon","Adult White Dragon","Air Elemental","Ambush Drake","Angels","Animated Objects","Ankheg","Ape","Archmage","Assassin","Assassin","Awakened Shrub","Awakened Tree","Axe Beak","Azbara Jos","Azer","Baboon","Badger","Bandit","Bandit","Bandit Captain","Banshee","Basilisk","Bat","Behir","Beholders","Berserker","Berserker","Black Bear","Blagothkus","Blights","Blink Dog","Blood Hawk","Boar","Brown Bear","Bugbears","Bulette","Bullywug","Bullywug","Cambion","Camel","Captain Othelstan","Carrion Crawler","Cat","Centaur","Chimera","Chuul","Cloaker","Cockatrice","Commoner","Commoner","Constrictor Snake","Couatl","Crab","Crawling Claw","Crocodile","Crocodile","Cult Fanatic","Cultist","Cultist","Cyclops","Darkmantle","Death Dog","Death Knight","Deer","Deer","Demilich","Demons","Devils","Dinosaurs","Dire Wolf","Displacer Beast","Doppelganger","Doppelganger","Dracolich","Draft Horse","Dragon Turtle","Dragon, Shadow","Dragonclaw","Dragons","Dragonwing","Dralmorrer Borngray","Drider","Druid","Dryad","Duergar","Eagle","Elementals","Elephant","Elk","Elk","Elves: Drow","Empyrean","Ettercap","Ettercap","Ettin","Faerie Dragon","Flameskull","Flumph","Flying Snake","Fomorian","Four-Armed Troll","Frog","Frulam Mondath","Fungi","Galeb Duhr","Gargoyle","Gargoyle","Genies","Ghost","Ghouls","Giant Ape","Giant Badger","Giant Bat","Giant Boar","Giant Centipede","Giant Centipede","Giant Constrictor Snake","Giant Crab","Giant Crocodile","Giant Eagle","Giant Elk","Giant Fire Beetle","Giant Frog","Giant Frog","Giant Goat","Giant Hyena","Giant Lizard","Giant Lizard","Giant Octopus","Giant Owl","Giant Poisonous Snake","Giant Rat","Giant Scorpion","Giant Sea Horse","Giant Shark","Giant Spider","Giant Spider","Giant Toad","Giant Vulture","Giant Wasp","Giant Weasel","Giant Wolf Spider","Giants","Gibbering Mouther","Gith","Gladiator","Gnolls","Gnome, Deep (Svirfneblin)","Goat","Goblins","Golems","Gorgon","Gray Ooze","Grell","Grick","Griffon","Griffon","Grimlock","Guard","Guard","Guard Drake","Hags","Half-Dragon","Harpy","Hawk","Hell Hound","Helmed Horror","Helmed Horror","Hippogriff","Hobgoblin","Hobgoblin","Hobgoblin Captain","Homunculus","Hook Horror","Hunter Shark","Hydra","Hyena","Intellect Devourer","Invisible Stalker","Jackal","Jackalwere","Jamna Gleamsilver","Kenku","Killer Whale","Knight","Knight","Kobold","Kobold","Kraken","Kuo-toa","Lamia","Langdedrosa Cyanwrath","Lich","Lion","Lizard","Lizardfolk","Lizardfolk","Lycanthropes","Mage","Mage","Magmin","Mammoth","Manticore","Mastiff","Medusa","Mephits","Merfolk","Merrow","Mimic","Mind Flayer","Minotaur","Modrons","Mule","Mummies","Myconids","Nagas","Nightmare","Noble","Noble","Nothic","Octopus","Ogre","Ogre","Oni","Oozes","Orc","Orcs","Otyugh","Otyugh","Owl","Owlbear","Panther","Pegasus","Peryton","Peryton","Pharblex Spattergoo","Phase Spider","Piercer","Pixie","Poisonous Snake","Polar Bear","Pony","Priest","Priest","Pseudodragon","Purple Worm","Quaggoth","Quipper","Rakshasa","Rat","Rath Modar","Raven","Reef Shark","Remorhaz","Revenant","Rezmir","Rhinoceros","Riding Horse","Roc","Roper","Roper","Rug of Smothering","Rust Monster","Saber-Toothed Tiger","Sahuagin","Salamanders","Satyr","Scarecrow","Scorpion","Scout","Scout","Sea Horse","Shadow","Shambling Mound","Shambling Mound","Shield Guardian","Skeletons","Slaadi","Specter","Specter","Sphinxes","Spider","Sprite","Spy","Spy","Stirge","Stirge","Stone Giant","Stone Golem","Succubus/Incubus","Swarm of Bats","Swarm of Centipedes","Swarm of Insects","Swarm of Insects","Swarm of Poisonous Snakes","Swarm of Quippers","Swarm of Rats","Swarm of Rats","Swarm of Ravens","Talis the White","Tarrasque","Thri-Kreen","Thug","Tiger","Treant","Tribal Warrior","Troglodyte","Troglodyte","Troll","Troll","Umber Hulk","Unicorn","Vampire","Vampire Spawn","Vampires","Variants","Veteran","Veteran","Violet Fungus","Vulture","Warhorse","Water Weird","Weasel","Wight","Will-o'-Wisp","Will-o'-Wisp","Winged Kobold","Winter Wolf","Wolf","Worg","Wraith","Wyvern","Wyvern","Xorn","Yeti","Yuan-ti","Yuan-ti","Yuan-ti Malison","Yuan-ti Pureblood","Yugoloths","Zombies"],

    // PLOT TWISTS
    // OPTIONAL ADVENTURE ELEMENTS
    //
    // MONSTER ENCOUNTERS
    // Assassin-Beast, Beast Amok, Foreshadowing Monster
    // King Beast, Loving Deceiver, Noble Beast
    // Nocturnal Predator, Powerful Tester, Ravager
    // Reconnaissnace Monster
    //
    // CHARACTER ENCOUNTERS
    // Bandit Gang, Belligerent Soldier, Blackmailer, Bureaucrat
    // Inquisitive Official, Lying Accuser, Old Friend at the Wrong Time
    // Mean Drunk, New Enemy, Press Gang, Seducer, Thief, Truthful Accuser
    //
    // TRAPS and DEATHTRAPS
    // Animal Pit, Avalanche, Colosseum, Demolition Zone, Framed,
    // Mutually Assured Destruction, Pit and the Pendulum,
    // Rock and a Hard Place, Stampede, Tomb Deathtraps
    // SPECIAL CONDITION - a condition which limits their effectiveness\
    // but which they must work under to be successful in the mission
    // Coping with a Curse, Magic Doesn't Work Right, No Hurting the Villain
    // No Lawbreaking, No Weapons Allowed, Omnipresent Observer,
    // Stolen Identities, Time-Limit
    //
    // RED HERRING - a clue which leads the heroes confidently in the wrong
    // direction
    // Artifact That Doesn't Work, Extraneous Details, False Path to Artifact
    // Loony Who Has It Wrong, Lying Rumor
    //
    // OMENS and PROPHECIES - may categorize under Maguffins, Plot Twists, Story Hooks
    // Birthmark Pertains, Comet's Progress, Fortune-Teller Predicts Doom,
    // Hero Fulfills Prophecy, Innocent Fulfills Prophecy, Reincarnation,
    // Totem Animal
    //
    // MORAL QUANDARY
    // The Ally Quandary, The Friend Quandary, The Honor Quandary, The Respect Quandary,
    // The Saving Quandary
    //
    // CHASE
    // Aerial, Endurance, Footrace, Horseback, Special Terrain, Water
    //
    // CRUEL TRICKS AND COMPLICATIONS
    // Heroes Must Work With Villain, Mission Is a Ruse,
    // NPC Turns Traitor, Villain Accompanies Party
    // Villain is Related to Hero, Wanted By the Law
        origin: []
    },
    


    dnd: {
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
