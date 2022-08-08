import { WeaponSlotItem } from "./weaponWheel";

export class Equipment extends WeaponSlotItem {
    deployable?: boolean;
    throwable?: boolean;
    consumable?: boolean;
    tool?: boolean;
    lure?: boolean;
    decoy?: boolean;
    emp?: boolean;
    explosive?: boolean;
    defense?: boolean;
    turret?: boolean;
}

export const equipment: Equipment[] = [
    {
        id: "ea",
        label: "Adrenaline",
        icon: "icon-adrenaline",
        slottable: false,
        tool: true
    }, {
        id: "eb",
        label: "Lockpick Hairpin",
        icon: "icon-hairpin",
        slottable: false,
        tool: true
    },{
        id: "ec",
        label: "Simple First Aid Kit",
        icon: "icon-simple-medkit",
        slottable: true,
        consumable: true
    },{
        id: "ed",
        label: "Standard First Aid Kit",
        icon: "icon-standard-medkit",
        slottable: true,
        consumable: true
    },{
        id: "ee",
        label: "Advance First Aid Kit",
        icon: "icon-advanced-medkit",
        slottable: true,
        consumable: true
    },{
        id: "ef",
        label: "Paramedic Response Pack",
        icon: "icon-paramedic-response-pack",
        slottable: true,
        deployable: true,
        consumable: true
    },{
        id: "eg",
        label: "Semla",
        icon: "icon-semla",
        slottable: true,
        consumable: true
    },{
        id: "eh",
        label: "Firework",
        icon: "icon-firework",
        slottable: true,
        throwable: true,
        decoy: true
    },{
        id: "ei",
        label: "Firework Box",
        icon: "icon-firework-box",
        slottable: true,
        deployable: true,
        lure: true
    },{
        id: "ej",
        label: "Ammo Pack",
        icon: "icon-ammo-pack",
        slottable: true,
        deployable: true,
        tool: true
    },{
        id: "ek",
        label: "Compressed Air Tank",
        icon: "icon-air-tank",
        slottable: true,
        deployable: true,
        explosive: true
    },{
        id: "el",
        label: "Explosive Gas Tank",
        icon: "icon-air-tank",
        slottable: true,
        deployable: true,
        explosive: true
    },{
        id: "em",
        label: "Emergency flare",
        icon: "icon-emergency-flare",
        slottable: true,
        throwable: true,
        decoy: true
    },{
        id: "en",
        label: "Emergency flare (Sticky)",
        icon: "icon-sticky-flare",
        slottable: true,
        throwable: true,
        decoy: true
    },{
        id: "eo",
        label: "Radio",
        icon: "icon-radio",
        slottable: true,
        deployable: true,
        lure: true
    },{
        id: "ep",
        label: "Field Radio",
        icon: "icon-field-radio",
        slottable: true,
        deployable: true,
        tool: true
    },{
        id: "eq",
        label: "Grenade",
        icon: "icon-grenade",
        slottable: true,
        throwable: true,
        explosive: true
    },{
        id: "er",
        label: "Smoke Grenade",
        icon: "icon-smoke-grenade",
        slottable: true,
        throwable: true,
        defense: true
    },{
        id: "es",
        label: "Light Comm. Array Lure",
        icon: "icon-light-comm-array",
        slottable: true,
        deployable: true,
        lure: true
    },{
        id: "et",
        label: "Medium Comm. Array Lure",
        icon: "icon-medium-comm-array",
        slottable: true,
        deployable: true,
        lure: true
    },{
        id: "eu",
        label: "Heavy Comm. Array Lure",
        icon: "icon-heavy-comm-array",
        slottable: true,
        deployable: true,
        lure: true
    },{
        id: "ev",
        label: "Boombox",
        icon: "icon-boombox",
        slottable: true,
        deployable: true,
        lure: true
    },{
        id: "ew",
        label: "Car Battery EMP",
        icon: "icon-car-battery",
        slottable: true,
        deployable: true,
        emp: true
    },{
        id: "ex",
        label: "Land Mine",
        icon: "icon-land-mine",
        slottable: true,
        deployable: true,
        explosive: true,
        tool: true
    },{
        id: "ey",
        label: "Small EMP Cell",
        icon: "icon-small-emp-cell",
        slottable: true,
        throwable: true,
        emp: true
    },{
        id: "ez",
        label: "Medium EMP Cell",
        icon: "icon-medium-emp-cell",
        slottable: true,
        throwable: true,
        emp: true
    },{
        id: "eaa",
        label: "Large EMP Cell",
        icon: "icon-large-emp-cell",
        slottable: true,
        deployable: true,
        emp: true
    },{
        id: "eab",
        label: "Small Fuel Cell",
        icon: "icon-small-fuel-cell",
        slottable: true,
        deployable: true,
        explosive: true
    },{
        id: "eac",
        label: "Medium Fuel Cell",
        icon: "icon-medium-fuel-cell",
        slottable: true,
        deployable: true,
        explosive: true
    },{
        id: "ead",
        label: "Large Fuel Cell",
        icon: "icon-large-fuel-cell",
        slottable: true,
        deployable: true,
        explosive: true
    },{
        id: "eae",
        label: "Molotov Cocktail",
        icon: "icon-molotov-cocktail",
        slottable: true,
        throwable: true,
        explosive: true
    },{
        id: "eaf",
        label: "Portable Cover",
        icon: "icon-portable-cover",
        slottable: true,
        deployable: true,
        defense: true
    },{
        id: "eag",
        label: "Portable Machine Gun Turret",
        icon: "icon-portable-machine-gun-turret",
        slottable: true,
        deployable: true,
        turret: true
    },{
        id: "eah",
        label: "Remote-Controlled Explosive",
        icon: "icon-remote-controlled-explosive",
        slottable: true,
        throwable: true,
        explosive: true
    },{
        id: "eai",
        label: "Explosive Toy Lure",
        icon: "icon-toy-lure",
        slottable: true,
        deployable: true,
        explosive: true,
        decoy: true
    },{
        id: "eaj",
        label: "Vantage 8x42 Binoculars",
        icon: "icon-binoculars",
        slottable: true,
        tool: true
    },{
        id: "eak",
        label: "Deployable Tick",
        icon: "icon-deployable-tick",
        slottable: true,
        deployable: true,
        turret: true
    },{
        id: "eal",
        label: "Medical First Aid Kit",
        icon: "icon-medical-medkit",
        slottable: true,
        consumable: true
    },{
        id: "eam",
        label: "RAD First Aid Kit",
        icon: "icon-rad-medkit",
        slottable: true,
        consumable: true
    }
];
