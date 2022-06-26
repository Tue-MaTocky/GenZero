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
    currentLevel: number;
    maxLevel: number;
    specialization: boolean;
    prerequisite: string;
    disabled: boolean;
    teir: number;
}

export const skillData: SkillData = {
    combat: {
        left: [{
            id: "sa",
            label: "Aim Speed",
            icon: "icon-aim-speed",
            mainImg: "aim_speed.jpg",
            descriptionText: [
                "Increases the speed at which you aim down sights."
            ],
            currentLevel: 0,
            maxLevel: 1,
            specialization: false,
            prerequisite: "",
            disabled: false,
            teir: 1
        },{
            id: "sb",
            label: "Hip Shot Accuracy",
            icon: "icon-hip-shot-accuracy",
            mainImg: "hip_shot_accuracy.jpg",
            descriptionText: [
                "Lowers bullet spread when shooting from the hip.",
                "Level 1: -5% spread",
                "Level 2: -10% spread",
                "Level 3: -15% spread"
            ],
            currentLevel: 0,
            maxLevel: 3,
            specialization: false,
            prerequisite: "sa",
            disabled: true,
            teir: 2
        },{
            id: "sc",
            label: "Weapon Recoil",
            icon: "icon-weapon-recoil",
            mainImg: "weapon_recoil.jpg",
            descriptionText: [
                "Decreases the amount of recoil when firing any weapon.",
                "Level 1: -15% recoil",
                "Level 2: -30% recoil"
            ],
            currentLevel: 0,
            maxLevel: 2,
            specialization: false,
            prerequisite: "sb",
            disabled: true,
            teir: 3
        },{
            id: "sd",
            label: "Weapon Sway",
            icon: "icon-weapon-sway",
            mainImg: "weapon_sway.jpg",
            descriptionText: [
                "Decreases the amount of sway when aiming down sights.",
                "Level 1: -15% weapon sway",
                "Level 2: -30% weapon sway",
                "Level 3: -45% weapon sway",
            ],
            currentLevel: 0,
            maxLevel: 3,
            specialization: false,
            prerequisite: "sc",
            disabled: true,
            teir: 4
        },{
            id: "se",
            label: "Make 'Em Count",
            icon: "make-em-count",
            mainImg: "make_em_count.jpg",
            descriptionText: [
                "Single shot fire with automatic weapons does more damage to components.",
                "Level 1: +5% damage",
                "Level 2: +10% damage"
            ],
            currentLevel: 0,
            maxLevel: 2,
            specialization: false,
            prerequisite: "sd",
            disabled: true,
            teir: 5
        },{
            id: "se",
            label: "Make 'Em Count",
            icon: "make-em-count",
            mainImg: "make_em_count.jpg",
            descriptionText: [
                "Single shot fire with automatic weapons does more damage to components.",
                "Level 1: +5% damage",
                "Level 2: +10% damage"
            ],
            currentLevel: 0,
            maxLevel: 2,
            specialization: false,
            prerequisite: "sd",
            disabled: true,
            teir: 5
        },{
            id: "sf",
            label: "Marksman",
            icon: "marksman",
            mainImg: "marksman.jpg",
            descriptionText: [
                "While active, the Marksman specialization completely eliminates weapon sway when using any weapon."
            ],
            currentLevel: 0,
            maxLevel: 1,
            specialization: true,
            prerequisite: "se",
            disabled: true,
            teir: 6
        }],
        right: []
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
