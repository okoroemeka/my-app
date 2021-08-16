export enum Env {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
}

export const port: number = 7740;

export const isEnvProduction = process.env.NODE_ENV === Env.PRODUCTION;
export const isEnvDevelopment = process.env.NODE_ENV === Env.DEVELOPMENT;
