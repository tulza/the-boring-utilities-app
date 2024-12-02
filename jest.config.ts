import nextJest from "next/jest.js";
import type { Config } from "jest";

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
    coverageProvider: "v8",
    testEnvironment: "jsdom",
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        "^@collections/(.*)$": "<rootDir>/collections/$1",
        "^@components/(.*)$": "<rootDir>/components/$1",
        "^@data/(.*)$": "<rootDir>/data/$1",
        "^@hooks/(.*)$": "<rootDir>/hooks/$1",
        "^@libs/(.*)$": "<rootDir>/libs/$1",
        "^@typings/(.*)$": "<rootDir>/types/$1",
        "^@fonts$": "<rootDir>/fonts",
        "^@payload-config$": "<rootDir>/payload.config.ts",
    },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);