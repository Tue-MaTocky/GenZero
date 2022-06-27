export class SkillData {
    [skillTree: string]: {
        left: Skill[];
        right: Skill[];
    }
}

export class Skill {
    id: string;
    label: string;
    icon: string;
    mainImg: string;
    descriptionText: string[];
    maxLevel: number;
    specialization: boolean;
    prerequisite: string;
    dependent: string;
}

export const skillData: SkillData = {
    combat: {
        left: [{
            id: "sa0",
            label: "Aim Speed",
            icon: "icon-aim-speed",
            mainImg: "aim_speed.jpg",
            descriptionText: [
                "Increases the speed at which you aim down sights."
            ],
            maxLevel: 1,
            specialization: false,
            prerequisite: "",
            dependent: "sa1"
        },{
            id: "sa1",
            label: "Hip Shot Accuracy",
            icon: "icon-hip-shot-accuracy",
            mainImg: "hip_shot_accuracy.jpg",
            descriptionText: [
                "Lowers bullet spread when shooting from the hip.",
                "Level 1: -5% spread",
                "Level 2: -10% spread",
                "Level 3: -15% spread"
            ],
            maxLevel: 3,
            specialization: false,
            prerequisite: "sa0",
            dependent: "sa2"
        },{
            id: "sa2",
            label: "Weapon Recoil",
            icon: "icon-weapon-recoil",
            mainImg: "weapon_recoil.jpg",
            descriptionText: [
                "Decreases the amount of recoil when firing any weapon.",
                "Level 1: -15% recoil",
                "Level 2: -30% recoil"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "sa1",
            dependent: "sa3"
        },{
            id: "sa3",
            label: "Weapon Sway",
            icon: "icon-weapon-sway",
            mainImg: "weapon_sway.jpg",
            descriptionText: [
                "Decreases the amount of sway when aiming down sights.",
                "Level 1: -15% weapon sway",
                "Level 2: -30% weapon sway",
                "Level 3: -45% weapon sway",
            ],
            maxLevel: 3,
            specialization: false,
            prerequisite: "sa2",
            dependent: "sa4"
        },{
            id: "sa4",
            label: "Make 'Em Count",
            icon: "icon-make-em-count",
            mainImg: "make_em_count.jpg",
            descriptionText: [
                "Single shot fire with automatic weapons does more damage to components.",
                "Level 1: +5% damage",
                "Level 2: +10% damage"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "sa3",
            dependent: "sa5"
        },{
            id: "sa5",
            label: "Marksman",
            icon: "icon-marksman",
            mainImg: "marksman.jpg",
            descriptionText: [
                "While active, the Marksman specialization completely eliminates weapon sway when using any weapon."
            ],
            maxLevel: 1,
            specialization: true,
            prerequisite: "sa4",
            dependent: ""
        }],
        right: [{
            id: "sb0",
            label: "Reload Speed",
            icon: "icon-reload-speed",
            mainImg: "reload_speed.jpg",
            descriptionText: [
                "Increases your reload speed.",
                "Level 1: -15% reload time",
                "Level 2: -30% reload time"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "",
            dependent: "sb1"
        },{
            id: "sb1",
            label: "Run and Gun",
            icon: "icon-run-and-gun",
            mainImg: "run_and_gun.jpg",
            descriptionText: [
                "Lowers bullet spread while moving.",
                "Level 1: -10% spread",
                "Level 2: -20% spread"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "sb0",
            dependent: "sb2"
        },{
            id: "sb2",
            label: "Armor",
            icon: "icon-armor",
            mainImg: "armor.jpg",
            descriptionText: [
                "Increases your damage resistance.",
                "Level 1: +10% bullet damage resistance",
                "Level 2: +10% explosive damage resistance",
                "Level 3: +10% gas damage resistance"
            ],
            maxLevel: 3,
            specialization: false,
            prerequisite: "sb1",
            dependent: "sb3"
        },{
            id: "sb3",
            label: "Armor Damage",
            icon: "icon-armor-damage",
            mainImg: "armor_damage.jpg",
            descriptionText: [
                "Increases the amount of damage done to enemy armor.",
                "Level 1: +5% damage",
                "Level 2: +10% damage"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "sb2",
            dependent: "sb4"
        },{
            id: "sb4",
            label: "Trigger Happy",
            icon: "icon-trigger-happy",
            mainImg: "trigger_happy.jpg",
            descriptionText: [
                "Increases the amount of damage dealt when using automatic fire.",
                "Level 1: +5% damage",
                "Level 2: +10% damage"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "sb3",
            dependent: "sb5"
        },{
            id: "sb5",
            label: "Vanguard",
            icon: "icon-vanguard",
            mainImg: "vanguard.jpg",
            descriptionText: [
                "While active, the Vanguard specialization increases your damage resistance by 25%."
            ],
            maxLevel: 1,
            specialization: true,
            prerequisite: "sb4",
            dependent: ""
        }]
    },
    support: {
        left: [{
            id: "sc0",
            label: "Throw Accuracy",
            icon: "icon-throw-accuracy",
            mainImg: "throw_accuracy.jpg",
            descriptionText: [
                "Increases the accuracy of thrown items.",
                "Level 1: +60% accuracy",
                "Level 2: +100% accuracy"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "",
            dependent: "sc1"
        },{
            id: "sc1",
            label: "Flanking",
            icon: "icon-flanking",
            mainImg: "flanking.jpg",
            descriptionText: [
                "Increases the chance of causing stagger when firing at an enemy that is targeting another player.",
                "Level 1: +20% chance of stagger",
                "Level 2: +40% chance of stagger"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "sc0",
            dependent: "sc2"
        },{
            id: "sc2",
            label: "Enemy Marking",
            icon: "icon-enemy-marking",
            mainImg: "enemy_marking.jpg",
            descriptionText: [
                "Unlocks the ability to spot enemies using your binoculars. Spotting enemies will highlight them to all nearby players for a short period of time.",
                "Level 1: 15-second highlight",
                "Level 2: 30-second highlight"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "sc1",
            dependent: "sc3"
        },{
            id: "sc3",
            label: "Designated Target",
            icon: "icon-designated-target",
            mainImg: "designated_target.jpg",
            descriptionText: [
                "Enemies marked using your binoculars take additional damage.",
                "Level 1: +5% damage",
                "Level 2: +10% damage"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "sc2",
            dependent: "sc4"
        },{
            id: "sc4",
            label: "Last Man Standing",
            icon: "icon-last-man-standing",
            mainImg: "last_man_standing.jpg",
            descriptionText: [
                "Provides a boost to your damage resistance for every player (including yourself) that drops below 10% health. Including downed players.",
                "Level 1: 5% damage resistance for 10 seconds",
                "Level 2: 10% damage resistance for 15 seconds"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "sc3",
            dependent: "sc5"
        },{
            id: "sc5",
            label: "Commander",
            icon: "icon-commander",
            mainImg: "commander.jpg",
            descriptionText: [
                "While the Commander specialization is active, deployed Field Radios can be used an additional 3 times. (Total of 6 uses)"
            ],
            maxLevel: 1,
            specialization: true,
            prerequisite: "sc4",
            dependent: ""
        }],
        right: [{
            id: "sd0",
            label: "Throw Distance",
            icon: "icon-throw-distance",
            mainImg: "throw_distance.jpg",
            descriptionText: [
                "Increases the distance you can throw throwable items.",
                "Level 1: +15% throwing distance",
                "Level 2: +30% throwing distance"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "",
            dependent: "sd1"
        },{
            id: "sd1",
            label: "Healer",
            icon: "icon-healer",
            mainImg: "healer.jpg",
            descriptionText: [
                "Unlocks the ability to heal other nearby players with a first aid kit."
            ],
            maxLevel: 1,
            specialization: false,
            prerequisite: "sd0",
            dependent: "sd2"
        },{
            id: "sd2",
            label: "Veteran Guerilla",
            icon: "icon-veteran-guerilla",
            mainImg: "veteran_guerilla.jpg",
            descriptionText: [
                "Increases the amount of base XP obtained when destroying a marked enemy.",
                "Level 1: +20% base XP",
                "Level 2: +40% base XP"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "sd1",
            dependent: "sd3"
        },{
            id: "sd3",
            label: "Heal Amount",
            icon: "icon-heal-amount",
            mainImg: "heal_amount.jpg",
            descriptionText: [
                "Increases the healing amount when using first aid kits.",
                "Level 1: +20% heal amount",
                "Level 2: +40% heal amount",
                "Level 3: +60% heal amount"
            ],
            maxLevel: 3,
            specialization: false,
            prerequisite: "sd2",
            dependent: "sd4"
        },{
            id: "sd4",
            label: "Revive Speed",
            icon: "icon-revive-speed",
            mainImg: "revive_speed.jpg",
            descriptionText: [
                "Lowers the time it takes to revive a downed player.",
                "Level 1: +25% faster revive",
                "Level 2: +50% faster revive"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "sd3",
            dependent: "sd5"
        },{
            id: "sd5",
            label: "Medic",
            icon: "icon-medic",
            mainImg: "medic.jpg",
            descriptionText: [
                "While the Medic specialization is active, any player you revive (including yourself) returns to the game with 100% health."
            ],
            maxLevel: 2,
            specialization: true,
            prerequisite: "sd4",
            dependent: ""
        }]
    },
    survival: {
        left: [{
            id: "se0",
            label: "Stamina Amount",
            icon: "icon-stamina-amount",
            mainImg: "stamina_amount.jpg",
            descriptionText: [
                "Increases the maximum amount of stamina your character has.",
                "Level 1: +25% stamina",
                "Level 2: +50% stamina"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "",
            dependent: "se1"
        },{
            id: "se1",
            label: "Running Speed",
            icon: "icon-running-speed",
            mainImg: "running_speed.jpg",
            descriptionText: [
                "Increases the running and sprinting speed of your character.",
                "Level 1: +15% faster",
                "Level 2: +30% faster"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "se0",
            dependent: "se2"
        },{
            id: "se2",
            label: "Carry Capacity",
            icon: "icon-carry-capacity",
            mainImg: "carry_capacity.jpg",
            descriptionText: [
                "Increase the inventory's maximum carry capacity for your character.",
                "Level 1: 80 capacity",
                "Level 2: 96 capacity"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "se1",
            dependent: "se3"
        },{
            id: "se3",
            label: "Steady Feet",
            icon: "icon-steady-feet",
            mainImg: "steady_feet.jpg",
            descriptionText: [
                "Allows player to withstand stronger attacks without being knocked down."
            ],
            maxLevel: 1,
            specialization: false,
            prerequisite: "se2",
            dependent: "se4"
        },{
            id: "se4",
            label: "Down But Not Out",
            icon: "icon-down-but-not-out",
            mainImg: "down_but_not_out.jpg",
            descriptionText: [
                "Downed state timer is doubled, extending the time during which allies can revive you."
            ],
            maxLevel: 1,
            specialization: false,
            prerequisite: "se3",
            dependent: "se5"
        },{
            id: "se5",
            label: "Survivor",
            icon: "icon-survivor",
            mainImg: "survivor.jpg",
            descriptionText: [
                "While the Survivor specialization is active, you may revive yourself once per combat encounter without the uses of an adrenaline shot."
            ],
            maxLevel: 1,
            specialization: true,
            prerequisite: "se4",
            dependent: ""
        }],
        right: [{
            id: "sf0",
            label: "Stamina Recharge",
            icon: "icon-stamina-recharge",
            mainImg: "stamina_recharge.jpg",
            descriptionText: [
                "Increases your stamina recharge rate.",
                "Level 1: +20% faster recharge",
                "Level 2: +40% faster recharge"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "",
            dependent: "sf1"
        },{
            id: "sf1",
            label: "Health Amount",
            icon: "icon-health-amount",
            mainImg: "health_amount.jpg",
            descriptionText: [
                "Increases your maximum health.",
                "Level 1: +10% health increase",
                "Level 2: +20% health increase",
                "Level 3: +30% health increase"
            ],
            maxLevel: 3,
            specialization: false,
            prerequisite: "sf0",
            dependent: "sf2"
        },{
            id: "sf2",
            label: "Visibility",
            icon: "icon-visibility",
            mainImg: "visibility.jpg",
            descriptionText: [
                "Decreases visibility to enemies.",
                "Level 1: +20% less visible",
                "Level 2: +40% less visible"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "sf1",
            dependent: "sf3"
        },{
            id: "sf3",
            label: "Movement Noise",
            icon: "icon-movement-noise",
            mainImg: "movement_noise.jpg",
            descriptionText: [
                "Decreases the noise you make by moving.",
                "Level 1: +20% less noise",
                "Level 2: +40% less noise"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "sf2",
            dependent: "sf4"
        },{
            id: "sf4",
            label: "Covert Movement Speed",
            icon: "icon-covert-movement-speed",
            mainImg: "covert_movement_speed.jpg",
            descriptionText: [
                "Increases your movement speed when not in a standing stance.",
                "Level 1: +15% faster crouch speed",
                "Level 2: +30% faster crouch speed"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "sf3",
            dependent: "sf5"
        },{
            id: "sf5",
            label: "Commando",
            icon: "icon-commando",
            mainImg: "commando.jpg",
            descriptionText: [
                "While the Commando specialization is active, the first damage dealt on any unaware enemy is increased by 15%."
            ],
            maxLevel: 1,
            specialization: true,
            prerequisite: "sf4",
            dependent: ""
        }]
    },
    tech: {
        left: [{
            id: "sg0",
            label: "Spotting Intel",
            icon: "icon-spotting-intel",
            mainImg: "spotting_intel.jpg",
            descriptionText: [
                "Increases the amount of information provided when spotting an enemy with the binoculars.",
                "Level 1: Difficulty indicated",
                "Level 2: Distance indicated"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "",
            dependent: "sg1"
        },{
            id: "sg1",
            label: "Inquisitive Mind",
            icon: "icon-inquisitive-mind",
            mainImg: "inquisitive_mind.jpg",
            descriptionText: [
                "Increases the amount of XP you earn for completing missions.",
                "Level 1: +50% XP earned",
                "Level 2: +100% XP earned"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "sg0",
            dependent: "sg2"
        },{
            id: "sg2",
            label: "Component Damage",
            icon: "icon-component-damage",
            mainImg: "component_damage.jpg",
            descriptionText: [
                "Increases the amount of damage done to enemy components.",
                "Level 1: +5% damage",
                "Level 2: +10% damage"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "sg1",
            dependent: "sg3"
        },{
            id: "sg3",
            label: "EMP Expert",
            icon: "icon-emp-expert",
            mainImg: "emp_expert.jpg",
            descriptionText: [
                "Increases the impact of using EMP weaponry.",
                "Level 1: +25% EMP area of effect",
                "Level 2: +50% EMP area of effect"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "sg2",
            dependent: "sg4"
        },{
            id: "sg4",
            label: "Remote Hacking",
            icon: "icon-remote-hacking",
            mainImg: "remote_hacking.jpg",
            descriptionText: [
                "Unlocks the ability to hack enemies using your binoculars. A successful hack confuses the enemy temporarily.",
                "Level 1: Hacked for 20 seconds",
                "Level 2: Hacked for 40 seconds"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "sg3",
            dependent: "sg5"
        },{
            id: "sg5",
            label: "Hacker",
            icon: "icon-hacker",
            mainImg: "hacker.jpg",
            descriptionText: [
                "While the Hacker specialization is active, any remote hacking will cause enemies to attack other enemies."
            ],
            maxLevel: 1,
            specialization: true,
            prerequisite: "sg4",
            dependent: ""
        }],
        right: [{
            id: "sh0",
            label: "Chemist",
            icon: "icon-chemist",
            mainImg: "chemist.jpg",
            descriptionText: [
                "Increases your base gas resistance by 10%."
            ],
            maxLevel: 1,
            specialization: false,
            prerequisite: "",
            dependent: "sh1"
        },{
            id: "sh1",
            label: "Lock Picking",
            icon: "icon-lock-picking",
            mainImg: "lock_picking.jpg",
            descriptionText: [
                "Unlocks the ability to unlock non-special locked doors using lock-pick items."
            ],
            maxLevel: 1,
            specialization: false,
            prerequisite: "sh0",
            dependent: "sh2"
        },{
            id: "sh2",
            label: "Salvage",
            icon: "icon-salvage",
            mainImg: "salvage.jpg",
            descriptionText: [
                "Increases the amount of ammo found from in containers and when looting destroyed enemies.",
                "Level 1: +50% ammo increase",
                "Level 2: +100% ammo increase"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "sh1",
            dependent: "sh3"
        },{
            id: "sh3",
            label: "Mechanic",
            icon: "icon-mechanic",
            mainImg: "mechanic.jpg",
            descriptionText: [
                "Unlocks the ability to scavenge enemy components even if they are damaged.",
                "Level 1: May scavenge up to 25% damaged components",
                "Level 2: May scavenge up to 50% damaged components"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "sh2",
            dependent: "sh4"
        },{
            id: "sh4",
            label: "Explosives Expert",
            icon: "icon-explosives-expert",
            mainImg: "explosives_expert.jpg",
            descriptionText: [
                "Improves the damage caused by explosive weaponry.",
                "Level 1: +10% explosive damage",
                "Level 2: +30% explosive area of effect"
            ],
            maxLevel: 2,
            specialization: false,
            prerequisite: "sh3",
            dependent: "sh5"
        },{
            id: "sh5",
            label: "Engineer",
            icon: "icon-engineer",
            mainImg: "engineer.jpg",
            descriptionText: [
                "While the Engineer specialization is active, the player may scavenge undamaged Tick Pods from enemies and use them to deploy Ticks that attack enemies."
            ],
            maxLevel: 1,
            specialization: true,
            prerequisite: "sh4",
            dependent: ""
        }]
    } 
};
