export class WeaponWheel {
    slot: number;
    id?: string;
    crown?: number;
    ammoTypes?: string[];
    vision?: string[];
    barrel?: {
        id?: string;
        crown?: number;
    };
    scope?: {
        id?: string;
        crown?: number;
    }
    magazine?: {
        id?: string;
        crown?: number;
    };
}
