import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'npx nx run my-angular-app:serve',
        production: 'npx nx run my-angular-app:serve-static',
      },
      ciWebServerCommand: 'npx nx run my-angular-app:serve-static',
      ciBaseUrl: 'http://localhost:4200',
    }),
    specPattern: '**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    baseUrl: 'http://localhost:4200',
  },
});
