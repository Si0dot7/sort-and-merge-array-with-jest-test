import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  roots: ['<rootDir>/src'],

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',

  verbose: true
};

export default config;