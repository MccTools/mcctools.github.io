export const site: string = import.meta.env.VITE_SITE;
export const prod: boolean = import.meta.env.VITE_PROD === 'true';
export const dev: boolean = !prod;
export const isGhPages: boolean = import.meta.env.MODE === 'ghpages';