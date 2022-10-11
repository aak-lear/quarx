import fs from 'fs';
import dotenv from 'dotenv';
import { resolveFrom } from '../../../utils/path';

const configPath = resolveFrom.root('.secrets');

// const secretsFile = fs.readFileSync(configPath, 'utf8');

// const SECRETS = dotenv.parse(secretsFile);

export const CONFIG = {
    FIGMA_TOKEN: process.env.FIGMA_TOKEN as string,
    COLORS_FILE_KEY: 'R4l6HkPCxwRpB8JG9YHp1F',
    LIGHT_PALETTE_FILE_KEY: 'XFUDnE1RPruwYC3ZLet8bS',
    DARK_PALETTE_FILE_KEY: '5JRi2jmAK7KSuTy8d0BoCJ',
    BASE_TYPOGRAPHY_FILE_KEY: 'OLhcjXnJTby512hbpCHH8a',
    ICONS_FILE_KEY: 'VxmOMIQJbvUwrSLfwYmxUc',
};
