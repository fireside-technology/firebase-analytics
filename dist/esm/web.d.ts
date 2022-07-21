import { WebPlugin } from "@capacitor/core";
import { FirebaseApp } from "firebase/app";
import { CollectionEnabledOptions, FirebaseAnalyticsPlugin, LogEventOptions, ScreenNameOptions, SessionTimeoutDurationOptions, UserIdOptions, UserPropertyOptions } from "./definitions";
export declare class FirebaseAnalyticsWeb extends WebPlugin implements FirebaseAnalyticsPlugin {
    private ANALYTICS_MISSING_MESSAGE;
    private appRef;
    /**
     * Initialize FirebaseApp for plugin
     * @param app - Firebase application
     */
    initializeFirebase(app: FirebaseApp): Promise<void>;
    /**
     * Sets the user ID property.
     * @param options - userId: unique identifier of the user to log
     * Platform: Web/Android/iOS
     */
    setUserId(options: UserIdOptions): Promise<void>;
    /**
     * Sets a user property to a given value.
     * @param options - name: The name of the user property to set.
     *                  value: The value of the user property.
     * Platform: Web/Android/iOS
     */
    setUserProperty(options: UserPropertyOptions): Promise<void>;
    /**
     * Retrieves the app instance id from the service.
     * @returns - instanceId: current instance if of the app
     * Platform: Web/Android/iOS
     */
    getAppInstanceId(): Promise<{
        instanceId: string;
    }>;
    /**
     * Sets the current screen name, which specifies the current visual context in your app.
     * @param _options - screenName: the activity to which the screen name and class name apply.
     *                   nameOverride: the name of the current screen. Set to null to clear the current screen name.
     * Platform: Android/iOS
     */
    setScreenName(_options: ScreenNameOptions): Promise<void>;
    /**
     * Clears all analytics data for this app from the device and resets the app instance id.
     * Platform: Android/iOS
     */
    reset(): Promise<void>;
    /**
     * Logs an app event.
     * @param options - name: unique name of the event
     *                  params: the map of event parameters.
     * Platform: Web/Android/iOS
     */
    logEvent(options: LogEventOptions): Promise<void>;
    /**
     * Sets whether analytics collection is enabled for this app on this device.
     * @param options - enabled: boolean true/false to enable/disable logging
     * Platform: Web/Android/iOS
     */
    setCollectionEnabled(options: CollectionEnabledOptions): Promise<void>;
    /**
     * Sets the duration of inactivity that terminates the current session.
     * @param _options - duration: duration of inactivity
     * Platform: Android/iOS
     */
    setSessionTimeoutDuration(_options: SessionTimeoutDurationOptions): Promise<void>;
    enable(): Promise<void>;
    disable(): Promise<void>;
    /**
     * Returns analytics reference object
     */
    get analytics(): import("@firebase/analytics").Analytics;
}
