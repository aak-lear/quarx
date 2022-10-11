import * as Figma from 'figma-api';
import { CONFIG } from './config';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const figmaApi = new Figma.Api({ personalAccessToken: CONFIG.FIGMA_TOKEN });
export * from './methods';
export * from './types';
