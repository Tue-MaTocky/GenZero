import { WeaponSlotItem } from "./weaponWheel";

export type weaponType = "melee" | "pistol" | "rifle" | "assault" | "launcher" | "bow" | "shotgun" | "SMG" | "MG";

export class Weapon extends WeaponSlotItem {
    expVer: boolean;
    stats: WeaponStats[];
    type: weaponType;
    ammoSize?: string;
    vision?: boolean;
    barrels?: string[];
    scopes?: string[];
    magazine?: string[];
    modes?: string[];
}
export class WeaponStats {
    crown: number;
    damage?: number;
    handling?: number;
    rof?: number;
    noise?: number;
}
export class WeaponBarrel {
    id: string;
    icon: string;
    label: string;
    crown: number;
    stats: WeaponStats;
}
export class WeaponScope {
    id: string;
    label: string;
    icon: string;
    crown: number;
}
export class WeaponMagazine {
    id: string;
    label: string;
    icon: string;
    size: string;
    crown: number;
}

export const weapons: Weapon[] = [
    {
        id: "wa",
        label: "Brännboll Bat",
        icon: "icon-brannboll",
        expVer: false,
        type: "melee",
        stats: []
    },{
        id: "wb",
        label: "Sledgehammer",
        icon: "icon-sledgehammer",
        iconExp: "icon-exp-sledgehammer",
        expVer: true,
        type: "melee",
        stats: []
    },{
        id: "wc",
        label: "Resistance Pitchfork",
        icon: "icon-pitchfork",
        expVer: false,
        type: "melee",
        stats: []
    },{
        id: "wd",
        label: "Flame Thrower",
        icon: "icon-flamethrower",
        expVer: false,
        type: "melee",
        stats: []
    },{
        id: "we",
        label: "Resistance Heavy Bow",
        icon: "icon-heavy-bow",
        expVer: false,
        type: "bow",
        stats: []
    },{
        id: "wf",
        label: "Möller PP",
        icon: "icon-moller",
        expVer: false,
        type: "pistol",
        stats: []
    },{
        id: "wg",
        label: ".44 Magnus",
        icon: "icon-magnus",
        expVer: false,
        type: "pistol",
        stats: []
    },{
        id: "wh",
        label: "N9 Handgun",
        icon: "icon-n9",
        expVer: false,
        type: "pistol",
        stats: []
    },{
        id: "wi",
        label: "12G Pump Action",
        icon: "icon-12g-pump-action",
        iconExp: "icon-exp-12g-pump-action",
        expVer: true,
        type: "shotgun",
        stats: []
    },{
        id: "wj",
        label: "Sjöqvist Semi-Auto",
        icon: "icon-sjoqvist",
        expVer: false,
        type: "shotgun",
        stats: []
    },{
        id: "wk",
        label: "M/46 “Kpist” SMG",
        icon: "icon-kpist",
        iconExp: "icon-exp-kpist",
        expVer: true,
        type: "SMG",
        stats: []
    },{
        id: "wl",
        label: "HP5",
        icon: "icon-hp5",
        expVer: false,
        type: "SMG",
        stats: []
    },{
        id: "wm",
        label: "COM-10 SMG",
        icon: "icon-com-10",
        expVer: false,
        type: "SMG",
        stats: []
    },{
        id: "wn",
        label: "Mauser Hunting Rifle",
        icon: "icon-meusser",
        expVer: false,
        type: "rifle",
        stats: []
    },{
        id: "wo",
        label: '"Älgstudsare" Hunting Rifle',
        icon: "icon-algstudsare",
        expVer: false,
        type: "rifle",
        stats: []
    },{
        id: "wp",
        label: "Pansarvärnsgevär 90",
        icon: "icon-pvg",
        iconExp: "icon-exp-pvg",
        expVer: true,
        type: "rifle",
        stats: []
    },{
        id: "wq",
        label: "Kotenok Sniper Rifle",
        icon: "icon-kotenok",
        expVer: false,
        type: "rifle",
        stats: []
    },{
        id: "wr",
        label: "S21",
        icon: "icon-s21",
        expVer: false,
        type: "rifle",
        stats: []
    },{
        id: "ws",
        label: "AI-76",
        icon: "icon-ai-76",
        expVer: false,
        type: "assault",
        stats: []
    },{
        id: "wt",
        label: "Automatgevär 4",
        icon: "icon-ag-4",
        iconExp: "icon-exp-ag-4",
        expVer: true,
        type: "assault",
        stats: []
    },{
        id: "wu",
        label: "Automatgevär 5",
        icon: "icon-ag-5",
        expVer: false,
        type: "assault",
        stats: []
    },{
        id: "wv",
        label: "N16",
        icon: "icon-n16",
        expVer: false,
        type: "assault",
        stats: []
    },{
        id: "ww",
        label: "AT-WAD",
        icon: "icon-at-wad",
        expVer: false,
        type: "assault",
        stats: []
    },{
        id: "wx",
        label: "Kvm 59 Machine Gun",
        icon: "icon-kvm-59",
        iconExp: "icon-exp-kvm-59",
        expVer: true,
        type: "MG",
        stats: []
    },{
        id: "wy",
        label: "Kvm 89 Squad Automatic Weapon",
        icon: "icon-kvm-89",
        expVer: false,
        type: "MG",
        stats: []
    },{
        id: "wz",
        label: "N60 Machine Gun",
        icon: "icon-n60",
        expVer: false,
        type: "MG",
        stats: []
    },{
        id: "waa",
        label: "Granatgevär m/49",
        icon: "icon-granatgevar",
        iconExp: "icon-exp-granatgevar",
        expVer: true,
        type: "launcher",
        stats: []
    },{
        id: "wab",
        label: "RLG-7",
        icon: "icon-rlg-7",
        expVer: false,
        type: "launcher",
        stats: []
    },{
        id: "wac",
        label: "G79 Grenade Launcher",
        icon: "icon-g79-grenade-launcher",
        expVer: false,
        type: "launcher",
        stats: []
    }
];
