import { defineNuxtModule, extendRouteRules } from "@nuxt/kit";
import { consola } from "consola";
import { HTTPStatusCode } from "./types";

interface Redirect {
  origin: string;
  destination: string;
  statusCode: HTTPStatusCode;
}

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * The module should log every redirect entry
   * @default true
   * @type boolean
   */
  verbose?: boolean;
  /**
   * list of redirects
   * @type {Array<Redirect>}
   **/
  rules: Array<Redirect>;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-easy-redirect",
    configKey: "redirects",
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: "^3.0.0",
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    verbose: true,
    rules: [],
  },
  hooks: {},
  setup(moduleOptions) {
    const redirects = moduleOptions.rules;

    if (!redirects) {
      return;
    }

    for (const redirect of redirects) {
      extendRouteRules(redirect.origin, {
        redirect: {
          to: redirect.destination,
          statusCode: redirect.statusCode,
        },
      });
      if (moduleOptions.verbose) {
        consola.info(
          `  • ${redirect.statusCode}`,
          `From: ${redirect.origin}`,
          `To: ${redirect.destination}`
        );
      }
    }

    consola.success(`${redirects.length} Redirects loaded`);
  },
});
