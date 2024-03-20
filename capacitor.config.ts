import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.agroconnect.app',
  appName: 'agroconnect',
  webDir: 'dist/agroconnect-frontend/browser',
  server: {
    androidScheme: 'http',
  },
};

export default config;
