// -------------------------------------------------------------------------
// Main MP interfaces
// -------------------------------------------------------------------------

interface Mp {
	trigger(event: string, params: number | string): void;
}

// -------------------------------------------------------------------------
// Vars
// -------------------------------------------------------------------------

declare const mp: Mp;
