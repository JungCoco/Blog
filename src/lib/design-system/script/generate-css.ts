import fs from 'fs';
import path from 'path';

type Tokens = Record<string, string>
type TypographyValues = { fontSize: string, lineHeight: string }
type TypographyTokens = Record<string, TypographyValues>

type GeneratedToken = {
    prefix: string;
    tokens: Tokens | TypographyTokens;
}

function funcGenerateTokens({ prefix, tokens }: GeneratedToken) {

    if (prefix === 'text') {
        return Object.entries(tokens).map(([key, { fontSize, lineHeight }]) => {
            return `    
                --${prefix}-${key}: ${fontSize};
                --${prefix}-${key}--line-height: ${lineHeight};
            `
        }).join('\n') + '\n';
    }

    return Object.entries(tokens).map(([key, value]) => {
        return `    --${prefix}-${key}: ${value};`
    }).join('\n') + '\n';
}

function funcGenerateCss() {

    const primitiveTokens = JSON.parse(
        fs.readFileSync(path.join(__dirname, '../primitive/primitive-tokens.json'), 'utf8')
    );
    if (!primitiveTokens) throw new Error('Primitive tokens not found');

    const generatedColorTokens = funcGenerateTokens({ prefix: 'color', tokens: primitiveTokens["color"] });
    const generatedTypographyTokens = funcGenerateTokens({ prefix: 'text', tokens: primitiveTokens["typography"] });
    const generatedFontWeightTokens = funcGenerateTokens({ prefix: 'font-weight', tokens: primitiveTokens["font-weight"] });
    // const generatedFontFamilyTokens = funcGenerateTokens({ prefix: 'font-family', tokens: primitiveTokens["font-family"] });
    const generatedRadiusTokens = funcGenerateTokens({ prefix: 'radius', tokens: primitiveTokens["radius"] });
    const generatedSpacingTokens = funcGenerateTokens({ prefix: 'spacing', tokens: primitiveTokens["spacing"] });

    return `
@font-face {

}


@theme {
    ${generatedColorTokens}
    ${generatedTypographyTokens}
    ${generatedFontWeightTokens}
    ${generatedRadiusTokens}
    ${generatedSpacingTokens}
}
    
    `
}

export function funcWriteCssFile() {
    const css = funcGenerateCss();
    const outputPath = path.join(__dirname, '../css');

    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true });
    }

    fs.writeFileSync(path.join(outputPath, 'generated-theme.css'), css);
}