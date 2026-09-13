// import a pre-defined template for config and content options
export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
} from "./content";

export { sections } from "./sections";
export type {PortfolioSection } from "./sections";


export interface PortfolioItem {
  title: string;
  description: string;
  image?: string;
  video?: string;
  gallery?: number;
  tags?: string[];
  link?: string;        // <-- Add this
  buttonLabel?: string; // <-- Add this
} 

export {
  display,
  mailchimp,
  routes,
  protectedRoutes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  socialSharing,
  effects,
  dataStyle,
} from "./once-ui.config";
