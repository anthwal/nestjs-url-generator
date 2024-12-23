import { UrlGeneratorModuleOptions } from '@anthwal/nestjs-url-generator';

export function urlGeneratorModuleConfig(): UrlGeneratorModuleOptions {
  return {
    secret: process.env.APP_KEY,
    appUrl: process.env.APP_URL,
  };
}
