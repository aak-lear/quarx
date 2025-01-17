import { capitalize, firstLetterToLowerCase } from './utils';

export const stylesLayout = (componentName: string): string => `import {
    KeysFromUseStyles,
    makeStyles,
} from '@core/styles';
import { cssVar } from '@core/utils/cssVars';
import { ${componentName}CSSVarKeys } from './vars';
import { ${componentName}StyleParams } from './types';

export const useStyles = makeStyles((
    { palette },
    {}: ${componentName}StyleParams,
    {}: Record<${componentName}CSSVarKeys, string>,
) => ({
    root: {},
}), { name: 'Qx${componentName}' });

export type ${componentName}StyleKeys = KeysFromUseStyles<typeof useStyles>;
export * from './types';
export * from './vars';
`;

export const stylesTypesLayout = (componentName: string): string => `export interface ${componentName}StyleParams {
}
`;

export const stylesVarsLayout = (componentName: string): string => `import { CssVarKeys, getCssVarNames } from '@core/utils/cssVars';

export const ${firstLetterToLowerCase(componentName)}CssVarNames = [
    'cssTestVar',
] as const;

export type ${componentName}CSSVarKeys = CssVarKeys<typeof ${firstLetterToLowerCase(componentName)}CssVarNames>

export const ${capitalize(componentName)}_CSS_VARS = getCssVarNames(${firstLetterToLowerCase(componentName)}CssVarNames);
`;
