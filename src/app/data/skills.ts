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
        left: [],
        right: []
    },
    survial: {
        left: [],
        right: []
    },
    tech: {
        left: [],
        right: []
    } 
};
