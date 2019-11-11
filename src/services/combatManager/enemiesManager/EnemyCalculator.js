export const getStatsById = id => {
    switch (id) {
        case monsterEnum.custom:
            return {
                ac: 0,
                hp: 0,
            };
        case monsterEnum.assassin:
            return {
                ac: 15,
                hp: 78,
            };

        case monsterEnum.goblin:
            return {
                ac: 15,
                hp: 7,
            };

        case monsterEnum["fire-elemental"]:
            return {
                ac: 13,
                hp: 102,
            };

        case monsterEnum["hobgoblin"]:
            return {
                ac: 18,
                hp: 11,
            };

        case monsterEnum["hobgoblin-captain"]:
            return {
                ac: 17,
                hp: 39,
            };

        case monsterEnum["hobgoblin-warlord"]:
            return {
                ac: 20,
                hp: 97,
            };

        case monsterEnum.idalia:
            return {
                ac: 13,
                hp: 27,
            };

        case monsterEnum.kobold:
            return {
                ac: 12,
                hp: 5,
            };

        case monsterEnum.makith:
            return {
                ac: 17,
                hp: 63,
            };

        case monsterEnum.salamander:
            return {
                ac: 15,
                hp: 90,
            };

        case monsterEnum["young-red-dragon"]:
            return {
                ac: 18,
                hp: 178,
            };

        default:
            return {
                ac: 0,
                hp: 0,
            };
    }
};

export const monsterEnum = {
    custom: "custom",
    assassin: "assassin",
    goblin: "goblin",
    "fire-elemental": "fire-elemental",
    hobgoblin: "hobgoblin",
    "hobgoblin-captain": "hobgoblin-captain",
    "hobgoblin-warlord": "hobgoblin-warlord",
    idalia: "idalia",
    kobold: "kobold",
    makith: "makith",
    salamander: "salamander",
    "young-red-dragon": "young-red-dragon",
};
