import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.agroconnect.app',
  appName: 'agroconnect',
  webDir: 'dist/agroconnect-frontend/browser',
  server: {
    androidScheme: 'https',
  },
};

export default config;
