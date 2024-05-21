import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",
            "prefer-const":"error",
            "no-console":"warn"
        }
    },
    {
        languageOptions: {
            globals: {
                ...globals.node,
            }
        }
    },
    {
        ignores:["**/node_modeules/","**/dist/"]
    }
    



  );