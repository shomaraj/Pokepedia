const pokepedia = [
    {
      id: 1,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png",
      name: "Dragonair",
      description:
        "Type : Dragon, Ability : Shed Skin, Marvel Scale(HA), Base Stat Total: 420",
      Evolutions: "https://i.ytimg.com/vi/h8nKRzgRsu4/maxresdefault.jpg"
          
    },
    {
      id: 2,
      image: "https://cdn2.bulbagarden.net/upload/3/37/671Florges.png",
      name: "Florges", 
      description:
        "Type : Grass, Fairy, Ability : Flower Veil, Symbiosis(HA), Base Stat Total: 552",
      Evolutions: "https://pm1.narvii.com/6518/c18afc506cb63f0c608a245ce0ca5c459bdfe8d1_hq.jpg"
    },
    {
  
      id: 3,
      image: "https://images.gameinfo.io/pokemon/256/059-00.png",
      name: "Arcanine",
      description:
        "Type : Fire,  Ability : Intimidate, Flash Fire, Justified (HA), Base Stat Total: 555",
      Evolutions: "https://www.pokemoncoders.com/wp-content/uploads/2017/11/growlithe-arcanine.jpg"
    },
    {
      id: 4,
      image: "https://cdn2.bulbagarden.net/upload/thumb/1/13/452Drapion.png/1200px-452Drapion.png",
      name: "Drapion",
      description:
        "Type : Poison, Dark, Ability : Battle Armor, Sniper, Keen Eye(HA), Base Stat Total: 500",
      Evolutions: "https://pm1.narvii.com/6215/14217b93f7fbe9e5e1e26be53a77a6cb3e7450f7_hq.jpg"
    },
    {
      id: 5,
      image: "https://cdn2.bulbagarden.net/upload/thumb/f/fa/445Garchomp.png/1200px-445Garchomp.png",
      name: "Garchomp",
      description:
        "Type : Dragon, Ground, Ability : Sand Veil, Rough Skin(HA), Base Stat Total: 600",
      Evolutions: "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/PGOGibEvo-2b1be8cf0f8f1e3f536436ccb273ea45.jpg"
    },
    {
      id: 6,
      image: "https://cdn2.bulbagarden.net/upload/3/36/350Milotic.png",
      name: "Milotic",
      description:
        "Type: Water, Ability: Marvel Scale, Competitive, Cute Charm(HA), Base Stat Total: 540",
      Evolutions: "https://pokemondb.net/pokebase/qa-plugin/https-img-proxy/image.php?key=7d790d3fccb44054&url=http%3A%2F%2Fi.gyazo.com%2Fe9e64d18c43ce07f9a62a417ef5305a6.png"
    },
    {
      id: 7,
      image: "https://cdn2.bulbagarden.net/upload/d/df/706Goodra.png",
      name: "Goodra",
      description:
        "Type: Dragon, Ability: Sap Sipper, Hydration, Gooey(HA), Base Stat Total: 600",
      Evolutions: "https://images.eurogamer.net/2021/articles/2021-05-04-11-31/goomy_evolutions.JPG/EG11/resize/375x-1/quality/75/format/jpg"
    },
    {
      id: 8,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
      name: "Raichu",
      description:
        "Type: Electric, Ability: Static, Lightning Rod(HA), Base Stat Total: 485",
      Evolutions: "https://matthewspokeblog.files.wordpress.com/2015/04/pichu-pikachu-raichu2.png?w=640"
    },
    {
      id: 9,
      image: "https://cdn2.bulbagarden.net/upload/thumb/4/41/373Salamence.png/1200px-373Salamence.png",
      name: "Salamence",
      description:
        "Type: Dragon, Flying, Ability: Intimidate, Moxie(HA), Base Stat Total: 600",
      Evolutions: "https://images-na.ssl-images-amazon.com/images/I/71zBtBN0nsL.__AC_SY300_SX300_QL70_ML2_.jpg"
    },
    {
      id: 10,
      image: "https://cdn2.bulbagarden.net/upload/thumb/3/3e/254Sceptile.png/250px-254Sceptile.png",
      name: "Sceptile",
      description:
        "Type: Grass, Ability: Overgrow, Unburden(HA), Base Stat Total: 530",
      Evolutions: "https://res.cloudinary.com/lmn/image/upload/fl_lossy,q_80/f_auto/v1/gameskinny/38161b2ad471551f7c28a144c926b432.png"
    },
    {
      id: 11,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/466.png",
      name: "Electivire",
      description:
        "Type: Electric, Ability: Motor Drive, Vital Spirit(HA), Base Stat Total: 540",
      Evolutions: "https://i.pinimg.com/736x/7c/7a/54/7c7a544b74b39ce1b21b97a7a2c1a957.jpg"
    },
    {
      id: 12,
      image: "https://cdn2.bulbagarden.net/upload/thumb/4/46/430Honchkrow.png/250px-430Honchkrow.png",
      name: "Honchkrow",
      description:
        "Type: Dark, Flying, Ability: Insomnia, Super Luck, Moxie(HA), Base Stat Total: 505",
      Evolutions: "https://pm1.narvii.com/5973/ca06e5721139a084e7dd8dd4e3b868dfbb700492_hq.jpg"
    },
    {
      id: 13,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png",
      name: "Lucario",
      description:
        "Type: Steel, Fighting, Ability: Inner Focus, Steadfast, Justified(HA), Base Stat Total: 525",
      Evolutions: "https://www.serebii.net/potw-swsh/evolution/Lucario.png"
    },
    {
      id: 14,
      image: "https://img.pokemondb.net/artwork/large/mamoswine.jpg",
      name: "Mamoswine",
      description:
        "Type: Ice, Ground, Ability: Oblivious, Snow Cloak, Thick Fat(HA), Base Stat Total: 530",
      Evolutions: "https://images.saymedia-content.com/.image/t_share/MTc0NDU3NzcyMzk2NzE3NDE2/most-annoying-evolution-methods-in-pokemon.gif"
    },
    {
      id: 15,
      image: "https://cdn2.bulbagarden.net/upload/thumb/1/17/169Crobat.png/1200px-169Crobat.png",
      name: "Crobat",
      description:
        "Type: Poison, Flying, Ability: Inner Focus, Infiltrator(HA), Base Stat Total: 535",
      Evolutions: "https://pm1.narvii.com/6732/38d0564c3790944384a86f86bd44ad055c1d8ee9v2_hq.jpg"
    },
    {
      id: 16,
      image: "https://cdn2.bulbagarden.net/upload/thumb/9/90/257Blaziken.png/1200px-257Blaziken.png",
      name: "Blaziken",
      description:
        "Type: Fire, Fighting, Ability: Blaze, Speed Boost(HA), Base Stat Total: 530",
      Evolutions: "https://pm1.narvii.com/5824/dd3f48ff143531eb377c5fcee38fe94b82f076c6_hq.jpg"
    },
    {
      id: 17,
      image: "http://static.pokemonpets.com/images/monsters-images-800-800/503-Samurott.webp",
      name: "Samurott",
      description:
        "Type: Water, Ability: Torrent, Shell Armor(HA), Base Stat Total: 528",
      Evolutions: "https://www.pngkey.com/png/detail/346-3462154_imagen-pokemon-samurott.png"
    },
    {
      id: 18,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/212.png",
      name: "Scizor",
      description:
        "Type: Steel, Bug, Ability: Swarm, Technician, Light Metal(HA), Base Stat Total: 500",
      Evolutions: "https://archive-media-1.nyafuu.org/vp/image/1467/27/1467277792110.png"
    },
    {
      id: 19,
      image: "https://cdn2.bulbagarden.net/upload/c/cc/065Alakazam.png",
      name: "Alakazam",
      description:
        "Type: Psychic, Ability: Synchronize, Inner Focus, Magic Guard(HA), Base Stat Total: 500",
      Evolutions: "https://i.ytimg.com/vi/cHcbTjwqoS4/maxresdefault.jpg"
    },
    {
      id: 20,
      image: "https://cdn2.bulbagarden.net/upload/thumb/a/a6/571Zoroark.png/1200px-571Zoroark.png",
      name: "Zoroark",
      description:
        "Type: Dark, Ability: Illusion, Base Stat Total: 510",
      Evolutions: "https://steamuserimages-a.akamaihd.net/ugc/1190587545874327435/B0A4F2CB0891C73FCE159B08ACCFBD1C55A008F4/"
    },
    {
      id: 21,
      image: "https://cdn2.bulbagarden.net/upload/thumb/9/9e/699Aurorus.png/1200px-699Aurorus.png",
      name: "Aurorus",
      description:
        "Type: Ice, Rock, Ability: Refrigerate, Snow Warning(HA), Base Stat Total: 521",
      Evolutions: "https://www.serebii.net/potw-xy/evolution/Aurorus.png"
    },
    {
      id: 22,
      image: "https://cdn2.bulbagarden.net/upload/thumb/3/3c/230Kingdra.png/1200px-230Kingdra.png",
      name: "Kingdra",
      description:
        "Type: Water, Dragon, Ability: Swift Swim, Sniper, Damp(HA), Base Stat Total: 540",
      Evolutions: "http://holpokemon.weebly.com/uploads/1/2/2/4/12240435/279932369_orig.png?250"
    },
    {
      id: 23,
      image: "https://cdn2.bulbagarden.net/upload/8/87/468Togekiss.png",
      name: "Togekiss",
      description:
        "Type: Fairy, Flying, Ability: Hustle, Serene Grace, Super Luck(HA), Base Stat Total: 545",
      Evolutions: "https://pm1.narvii.com/6405/8b48b62ea8849072260684459a6a4b470e159d2a_hq.jpg"
    },
    {
      id: 24,
      image: "https://cdn2.bulbagarden.net/upload/thumb/a/ae/663Talonflame.png/1200px-663Talonflame.png",
      name: "Talonflame",
      description:
        "Type: Fire, Flying, Ability: Flame Body, Gale Wings(HA), Base Stat Total: 499",
      Evolutions: "https://pm1.narvii.com/6055/d1ce002646aec20f4adc781ee788fb0e023db92e_hq.jpg"
    },
    {
      id: 25,
      image: "https://cdn2.bulbagarden.net/upload/thumb/8/89/730Primarina.png/1200px-730Primarina.png",
      name: "Primarina",
      description:
        "Type: Water, Fairy, Ability: Torrent, Liquid Voice(HA), Base Stat Total: 530",
      Evolutions: "https://pm1.narvii.com/6264/ee324804ffba8f0fd950318881bf4149dddb7435_hq.jpg"
    },
    {
      id: 26,
      image: "https://cdn2.bulbagarden.net/upload/thumb/e/e5/553Krookodile.png/1200px-553Krookodile.png",
      name: "Krookodile",
      description:
        "Type: Ground, Dark, Ability: Intimidate, Moxie, Anger Point(HA), Base Stat Total: 519",
      Evolutions: "https://pm1.narvii.com/6982/04fbc9b91ac1488e8c2f6f54d6e793f272a4e138r1-789-308v2_hq.jpg"
    },
    {
      id: 27,
      image: "https://cdn2.bulbagarden.net/upload/thumb/b/b7/497Serperior.png/1200px-497Serperior.png",
      name: "Serperior",
      description:
        "Type: Grass, Ability: Overgrow, Contrary(HA), Base Stat Total: 528",
      Evolutions: "https://www.dexerto.com/wp-content/uploads/2021/04/12/pokemon-snivy-evolution-line-serperior.jpg"
    },
    {
      id: 28,
      image: "https://cdn2.bulbagarden.net/upload/thumb/1/14/745Lycanroc.png/1200px-745Lycanroc.png",
      name: "Lycanroc",
      description:
        "Type: Rock, Ability: Keen Eye, Sand Rush, Steadfast(HA), Base Stat Total: 487",
      Evolutions: "https://pm1.narvii.com/6694/634c0126da6127ac1ceb279bad0753b0524ea52e_hq.jpg"
    },
    {
      id: 29,
      image: "https://cdn2.bulbagarden.net/upload/thumb/8/8b/697Tyrantrum.png/1200px-697Tyrantrum.png",
      name: "Tyrantrum",
      description:
        "Type: Rock, Dragon, Ability: Strong Jaw, Rock Head(HA), Base Stat Total: 521",
      Evolutions: "https://i.pinimg.com/originals/fd/a6/ea/fda6ea01f78e28fb0c49246e506699b4.jpg"
    },
    {
      id: 30,
      image: "https://cdn2.bulbagarden.net/upload/6/61/365Walrein.png",
      name: "Walrein",
      description:
        "Type: Water, Ice, Ability: Thick Fat, Ice Body, Oblivious(HA), Base Stat Total: 530",
      Evolutions: "https://static1.fjcdn.com/comments/Cmon+mate+at+least+get+yourself+a+walrein+_95a5043e31b54132ff8ecb08806e058f.jpg"
    }
];
    export default pokepedia;