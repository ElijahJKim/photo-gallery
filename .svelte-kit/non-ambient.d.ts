
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/api" | "/api/images" | "/api/images/[id]" | "/images" | "/images/[id]" | "/upload";
		RouteParams(): {
			"/api/images/[id]": { id: string };
			"/images/[id]": { id: string }
		};
		LayoutParams(): {
			"/": { id?: string };
			"/api": { id?: string };
			"/api/images": { id?: string };
			"/api/images/[id]": { id: string };
			"/images": { id?: string };
			"/images/[id]": { id: string };
			"/upload": Record<string, never>
		};
		Pathname(): "/" | "/api" | "/api/" | "/api/images" | "/api/images/" | `/api/images/${string}` & {} | `/api/images/${string}/` & {} | "/images" | "/images/" | `/images/${string}` & {} | `/images/${string}/` & {} | "/upload" | "/upload/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): string & {};
	}
}