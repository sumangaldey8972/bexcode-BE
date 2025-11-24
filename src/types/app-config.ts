interface AuthAPIConfig {
  signup: string;
  signin: string;
  sendOtp: string;
  verifyOtp: string;
  verifyUser: string;
  resetPassword: string;
  validateUser: string;
}

interface QrEndpointMap {
  link: string;
  pdf: string;
  image: string;
  video: string;
}

interface QrAPIConfig {
  create: QrEndpointMap;
  update: QrEndpointMap;
  delete: { byId: string };
  get: { list: string; byId: string };
}

interface APIConfig {
  auth: AuthAPIConfig;
  qr: QrAPIConfig;
}

export interface AppConfigType {
  appName: string;
  port: number;
  type: string;
  bucketName: string;
  originEnvMap: Record<string, string>;
  api: APIConfig;
  mock: boolean;
}
