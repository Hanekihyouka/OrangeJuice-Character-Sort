dataSetVersion = "2019-03-27"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series",
    key: "series",
    tooltip: "Check this to restrict to certain series\n(All that apply\nSmall cameos will not be included)",
    checked: true,
    sub: [
			{ name: "100% Orange Juice!", key: "oj" }
    ]
  },
	{
    name: "Remove Alternate Versions",
    key: "alt",
    tooltip: "Check this to remove possible duplicate Characters\ne.g. Suguri (Ver.2), Marc (Pig), etc.",
		checked: false
  },
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters\nAll Mira count as girls in this sorter for easier reference",
		checked: false
  },
	{
    name: "Remove Neutral (NPC) Characters",
    key: "npc",
    tooltip: "Check this to remove all NPCs in 100% OJ\ne.g. Chicken, Seagull, Store Manager, etc.",
		checked: false
  },
	{
    name: "Remove BH-Mode-Only Units",
    key: "bh",
    tooltip: "Check this to remove all units only appear in bh mode.",
		checked: true
  },
  	{
    name: "Remove COOP-Mode-Only Units",
    key: "coop",
    tooltip: "Check this to remove all units only appear in coop mode.",
		checked: true
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Alicianrone",
    img: "alicianrone_00_05.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Alte",
    img: "alte_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Arnelle",
    img: "arnelle_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Arthur",
    img: "arthur_00_00.png",
    opts: {
      series: [ "oj" ],
      notgirl: true
    }
  },
  {
    name: "Aru",
    img: "aru_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Aru (Scramble)",
    img: "arus_00_00.png",
    opts: {
      series: [ "oj" ],
      alt: true
    }
  },
  {
    name: "Robo Ball",
    img: "ball_00_00.png",
    opts: {
      series: [ "oj" ],
      notgirl: true,
      npc: true
    }
  },
  {
    name: "Balloon Jerk",
    img: "balloonjerk_00_00.png",
    opts: {
      series: [ "oj" ],
      notgirl: true,
      npc: true,
      coop:true
    }
  },
  {
    name: "M10 Robot",
    img: "bball_00_00.png",
    opts: {
      series: [ "oj" ],
      notgirl: true,
      npc: true,
      coop:true
    }
  },
  {
    name: "Big the Haruo",
    img: "bchicken_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      coop:true
    }
  },
  {
    name: "Turnislime",
    img: "blob_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      bh:true
    }
  },
  {
    name: "Big Poppo",
    img: "bpoppo_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      coop:true
    }
  },
  {
    name: "Summer Beast",
    img: "bqp_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      coop:true
    }
  },
  {
    name: "Shifu Robot",
    img: "brobo_00_00.png",
    opts: {
      series: [ "oj" ],
      notgirl: true,
      npc: true
    }
  },
  {
    name: "Flying Castle",
    img: "castle_00_00.png",
    opts: {
      series: [ "oj" ],
      notgirl: true,
      npc: true
    }
  },
  {
    name: "Ceoreparque",
    img: "ceor_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Chef",
    img: "chef_00_00.png",
    opts: {
      series: [ "oj" ],
      notgirl: true,
      npc: true
    }
  },
  {
    name: "Chicken",
    img: "chicken_00_00.png",
    opts: {
      series: [ "oj" ],
      notgirl: true,
      npc: true
    }
  },
  {
    name: "Chris",
    img: "chris_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Cook",
    img: "cook_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Cuties",
    img: "cuties_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Haunted Doll",
    img: "doll_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      bh: true
    }
  },
  {
    name: "Ellie",
    img: "ellie_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Harbinger",
    img: "evilguardian_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      notgirl: true,
      bh: true
    }
  },
  {
    name: "Aurora",
    img: "fae_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      bh: true
    }
  },
  {
    name: "Fernet",
    img: "fernet_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Fernet (Noble)",
    img: "fernetnoble_00_00.png",
    opts: {
      series: [ "oj" ],
      alt: true
    }
  },
  {
    name: "Wolly",
    img: "fluff_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      notgirl: true,
      bh: true
    }
  },
  {
    name: "Göst",
    img: "ghost_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      notgirl: true,
      bh: true
    }
  },
  {
    name: "Goal Post",
    img: "goalpost_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      notgirl: true,
      coop: true
    }
  },
  {
    name: "Moss Golem",
    img: "golem_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      notgirl: true
    }
  },
  {
    name: "Star Devourer",
    img: "gpoppo_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      notgirl: true,
      coop: true
    }
  },
  {
    name: "Guardian",
    img: "guardian_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      notgirl: true,
      bh: true
    }
  },
  {
    name: "Halena",
    img: "halena_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Heliseed",
    img: "heliseed_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      notgirl: true,
      bh: true
    }
  },
  {
    name: "Hime",
    img: "hime_00_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Hime (Moonlight)",
    img: "himem_00_03.png",
    opts: {
      series: [ "oj" ],
      alt: true
    }
  },
  {
    name: "Pumpkin",
    img: "hw2019pumpkin_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      notgirl: true
    }
  },
  {
    name: "Iru",
    img: "iru_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Islay",
    img: "islay_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Kae",
    img: "kae_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Kai",
    img: "kai_00_00.png",
    opts: {
      series: [ "oj" ],
      notgirl: true
    }
  },
  {
    name: "Kiriko",
    img: "kiriko_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Krilalaris",
    img: "krila_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Kyousuke",
    img: "ksuke_00_00.png",
    opts: {
      series: [ "oj" ],
      notgirl: true
    }
  },
  {
    name: "Kyoko",
    img: "kyoko_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Kyupita",
    img: "kyupita_00_00.png",
    opts: {
      series: [ "oj" ],
      notgirl: true
    }
  },
  {
    name: "Bunnizard",
    img: "lizardit_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      notgirl: true,
      bh: true
    }
  },
  {
    name: "Lone Rider",
    img: "lonerider_00_00.png",
    opts: {
      series: [ "oj" ],
      notgirl: true
    }
  },
  {
    name: "Lulu",
    img: "lulu_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Globbu",
    img: "magma_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      notgirl: true,
      bh: true
    }
  },
  {
    name: "Malt",
    img: "malt_00_00.png",
    opts: {
      series: [ "oj" ],
      notgirl: true
    }
  },
  {
    name: "Marc",
    img: "marc_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Marc (Pilot)",
    img: "marcpilot_00_00.png",
    opts: {
      series: [ "oj" ],
      alt: true
    }
  },
  {
    name: "Store Manager",
    img: "master_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      notgirl: true
    }
  },
  {
    name: "Maynie",
    img: "maynie_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Mei",
    img: "mei_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Merchant",
    img: "merchant_00_00.png",
    opts: {
      series: [ "oj" ],
      notgirl: true
    }
  },
  {
    name: "Mescal",
    img: "mescal_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Mimyuu",
    img: "mimyuu_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Mio",
    img: "mio_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Mira",
    img: "mira_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Miusaki",
    img: "miusaki_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Emerangler",
    img: "mole_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      notgirl: true,
      bh: true
    }
  },
  {
    name: "Mousse",
    img: "mpoppo_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      bh: true
    }
  },
  {
    name: "Nanako",
    img: "nanako_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Nath",
    img: "nath_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Natsumi",
    img: "natsumi_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Nico",
    img: "nico_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "NoName",
    img: "non_00_00.png",
    opts: {
      series: [ "oj" ],
      notgirl: true
    }
  },
  {
    name: "Marie Poppo (Mixed)",
    img: "npoppo_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Peat",
    img: "peat_00_00.png",
    opts: {
      series: [ "oj" ],
      notgirl: true
    }
  },
  {
    name: "Pomeranius",
    img: "pomeranius_00_00.png",
    opts: {
      series: [ "oj" ],
      notgirl: true
    }
  },
  {
    name: "Marie Poppo",
    img: "poppo_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "QP",
    img: "qp_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "QP (Dangerous)",
    img: "qpd_00_00.png",
    opts: {
      series: [ "oj" ],
      alt: true
    }
  },
  {
    name: "Reika",
    img: "reika_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Ropochi",
    img: "ropochi_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      notgirl: true,
      coop: true
    }
  },
  {
    name: "Saki",
    img: "saki_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Seagull",
    img: "seagull_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      notgirl: true
    }
  },
  {
    name: "Big the Jonathan",
    img: "seagullboss_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      notgirl: true,
      coop: true
    }
  },
  {
    name: "Sham",
    img: "sham_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Sherry",
    img: "sherry_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Shifu",
    img: "shifu_00_00.png",
    opts: {
      series: [ "oj" ],
      notgirl: true
    }
  },
  {
    name: "Ruffshroom",
    img: "shroom_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      notgirl: true,
      bh: true
    }
  },
  {
    name: "Terrawyrmer",
    img: "snek_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      notgirl: true,
      bh: true
    }
  },
  {
    name: "Sora",
    img: "sora_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Sora (Military)",
    img: "sorasp_00_00.png",
    opts: {
      series: [ "oj" ],
      alt: true
    }
  },
  {
    name: "Star Breaker",
    img: "starb_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Suguri",
    img: "suguri_00_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Suguri (46 Billion Years)",
    img: "suguri46_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Suguri (Ver.2)",
    img: "sugurib_00_00.png",
    opts: {
      series: [ "oj" ],
      alt: true
    }
  },
  {
    name: "Sumika",
    img: "sumika_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Sweet Breaker",
    img: "sweetb_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Swimming Coach",
    img: "swimmingcoach_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      notgirl: true,
      coop: true
    }
  },
  {
    name: "Swimming Ringer",
    img: "swimmingringer_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      notgirl: true,
      coop: true
    }
  },
  {
    name: "Syura",
    img: "syura_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Teotoratta",
    img: "teotoratta_00_05.png",
    opts: {
      series: [ "oj" ],
      notgirl: true
    }
  },
  {
    name: "Pirate Crew Member",
    img: "teq_minion_00_00.png",
    opts: {
      series: [ "oj" ],
      notgirl: true
    }
  },
  {
    name: "Tequila",
    img: "tequila_00_00.png",
    opts: {
      series: [ "oj" ],
      notgirl: true
    }
  },
  {
    name: "Tomomo (Casual)",
    img: "tmsw_00_00.png",
    opts: {
      series: [ "oj" ],
      alt: true
    }
  },
  {
    name: "Tomomo (Sweet Eater)",
    img: "tmsw_00_06.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Tomato",
    img: "tomato_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Tomomo",
    img: "tomomo_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Trollite",
    img: "troll_00_00.png",
    opts: {
      series: [ "oj" ],
      npc: true,
      notgirl: true,
      bh: true
    }
  },
  {
    name: "tsih",
    img: "tsih_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Watty",
    img: "watty_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Yuki",
    img: "yuki_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  },
  {
    name: "Yuki (Dangerous)",
    img: "yukid_00_00.png",
    opts: {
      series: [ "oj" ],
      alt: true
    }
  },
  {
    name: "Yuuki",
    img: "yuuki_00_00.png",
    opts: {
      series: [ "oj" ]
    }
  }
]
