import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'node:path'

type Tokens = Record<string, string>
type TypographyValues = { fontSize: string, lineHeight: string }
type TypographyTokens = Record<string, TypographyValues>
type FontFaceValues = {
    fontFamily: string,
    fontStyle: string,
    fontWeight: string,
    fontDisplay: string,
    src: string
}
type FontFaceTokens = Record<string, FontFaceValues>

type GeneratedToken =
    | { prefix: 'text', tokens: TypographyTokens }
    | { prefix: 'font-face', tokens: FontFaceTokens }
    | { prefix: string, tokens: Tokens };

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


/**
 * @function funcGenerateTokens
 * @description A function that converts token data into a CSS string.
 * @param {string} Namespace of the CSS variable to be created.
 * @param {GeneratedToken} tokens This is the raw data to be converted.
 * @return {string} A string of CSS code formatted to match the given token type.
 */
function funcGenerateTokens({ prefix, tokens }: GeneratedToken) {

    if (prefix === 'text') {
        return Object.entries(tokens).map(([key, { fontSize, lineHeight }]) => {
            return `    
    --${prefix}-${key}: ${fontSize};
    --${prefix}-${key}--line-height: ${lineHeight};`
        }).join('\n') + '\n';
    }

    else if (prefix === 'font-face') {
        return Object.entries(tokens).map(
            ([key, { fontFamily, fontStyle, fontWeight, fontDisplay, src }]) => {
                return `
/** ${key} */
@font-face {
    font-family: "${fontFamily}";
    font-style: ${fontStyle};
    font-weight: ${fontWeight};
    font-display: ${fontDisplay};
    src: ${src};
}

@layer base {
    body {
        font-family: "${fontFamily}", ui-sans-serif, system-ui, sans-serif;
    }
}
`
            })
    }

    return Object.entries(tokens).map(([key, value]) => {
        return `    --${prefix}-${key}: ${value};`
    }).join('\n') + '\n';
}

/**
 * @function funcGenerateCss
 * @description A function that composees a CSS layout by gathering various types of separated CSS tokens.
 * @return {string} Final CSS layout.
 */
function funcGenerateCss() {

    const primitiveTokens = JSON.parse(
        fs.readFileSync(path.join(__dirname, '../tokens/primitive-tokens.json'), 'utf8')
    );
    if (!primitiveTokens) throw new Error('Primitive tokens not found');

    const generatedColorTokens = funcGenerateTokens({ prefix: 'color', tokens: primitiveTokens["color"] });
    const generatedTypographyTokens = funcGenerateTokens({ prefix: 'text', tokens: primitiveTokens["typography"] });
    const generatedFontWeightTokens = funcGenerateTokens({ prefix: 'font-weight', tokens: primitiveTokens["font-weight"] });
    const generatedFontFamilyTokens = funcGenerateTokens({ prefix: 'font-face', tokens: primitiveTokens["font-face"] });
    const generatedRadiusTokens = funcGenerateTokens({ prefix: 'radius', tokens: primitiveTokens["radius"] });
    const generatedSpacingTokens = funcGenerateTokens({ prefix: 'spacing', tokens: primitiveTokens["spacing"] });
    // const generatedDarkmodeTokens = funcGenerateTokens({prefix: 'dark', tokens: primitiveTokens["dark"]});

    return `

${generatedFontFamilyTokens}

@theme {

${generatedColorTokens}
${generatedTypographyTokens}
${generatedFontWeightTokens}
${generatedRadiusTokens}
${generatedSpacingTokens}
}

@media (prefers-color-schema: dark) {

}
    
    `
}

/**
 * @function funcWriteCssFile
 * @description A function that runs the generate functions and saves the final CSS file.
 * @return {boolean} Successful file creation.
 */
export function funcWriteCssFile(): boolean {

    try {
        const css = funcGenerateCss();
        const outputPath = path.join(__dirname, '../css');

        if (!fs.existsSync(outputPath)) {
            fs.mkdirSync(outputPath, { recursive: true });
        }

        fs.writeFileSync(path.join(outputPath, 'generated-theme.css'), css);

        return true

    } catch (e: unknown) {
        console.error('Failed to write CSS generator file', e instanceof Error ? e.message : 'Unknown error');

        return false
    }
}