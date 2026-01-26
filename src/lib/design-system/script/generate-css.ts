import fs from 'fs';
import path from 'path';

type GeneratedToken = {
    prefix: string;
    tokens: Record<string, string> | Record<string, { F: string, L: string }>;
}

export function generateCss() {

    const primitiveTokens = JSON.parse(
        fs.readFileSync(path.join(__dirname, 'primitive-tokens.json'), 'utf8')
    );
    if (!primitiveTokens) throw new Error('Primitive tokens not found');


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