import { FirebaseApp } from "firebase/app";

export interface FirebaseAnalyticsPlugin {
  initializeFirebase(app: FirebaseApp): Promise<void>;
  setUserId(options: UserIdOptions): Promise<void>;
  setUserProperty(options: UserPropertyOptions): Promise<void>;
  getAppInstanceId(): Promise<AppInstanceIdReturn>;
  setScreenName(options: ScreenNameOptions): Promise<void>;
  reset(): Promise<void>;
  logEvent(options: LogEventOptions): Promise<void>;
  setCollectionEnabled(options: CollectionEnabledOptions): Promise<void>;
  setSessionTimeoutDuration(options: SessionTimeoutDurationOptions): Promise<void>;
  enable(): Promise<void>;
  disable(): Promise<void>;
}

export interface AppInstanceIdReturn {
  instanceId: string | null;
}

export interface CollectionEnabledOptions {
  enabled: boolean;
}

export interface LogEventOptions {
  name: string;
  params: object;
}

export interface ScreenNameOptions {
  screenName: string;
  nameOverride?: string;
}

export interface SessionTimeoutDurationOptions {
  duration: number;
}

export interface UserIdOptions {
  userId: string;
}

export interface UserPropertyOptions {
  name: string;
  value: string;
}
