export class WeaponSlotItem {
    id: string;
    label: string;
    icon: string;
    iconExp?: string;
    slottable?: boolean;
    crown?: number;
}

class WeaponAcc {
    id: string;
    crown: number;
}

export class WeaponWheel {
    slot: number;
    id?: string;
    crown?: number;
    ammoTypes?: string[];
    vision?: string[];
    barrel?: WeaponAcc;
    scope?: WeaponAcc;
    magazineCrown?: WeaponAcc;
    item?: WeaponSlotItem;
}
