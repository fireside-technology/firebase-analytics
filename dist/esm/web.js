import { WebPlugin } from "@capacitor/core";
import { getAnalytics, logEvent, setUserId, setUserProperties, setAnalyticsCollectionEnabled } from 'firebase/analytics';
export class FirebaseAnalyticsWeb extends WebPlugin {
    constructor() {
        super(...arguments);
        this.ANALYTICS_MISSING_MESSAGE = "Firebase analytics is not initialized. Make sure initializeFirebase() is called once";
    }
    /**
     * Initialize FirebaseApp for plugin
     * @param app - Firebase application
     */
    async initializeFirebase(app) {
        this.appRef = app;
    }
    /**
     * Sets the user ID property.
     * @param options - userId: unique identifier of the user to log
     * Platform: Web/Android/iOS
     */
    async setUserId(options) {
        if (!this.analytics)
            throw new Error(this.ANALYTICS_MISSING_MESSAGE);
        const { userId } = options || { userId: undefined };
        if (!userId)
            throw new Error('userId property is missing');
        setUserId(this.analytics, userId);
    }
    /**
     * Sets a user property to a given value.
     * @param options - name: The name of the user property to set.
     *                  value: The value of the user property.
     * Platform: Web/Android/iOS
     */
    async setUserProperty(options) {
        if (!this.analytics)
            throw new Error(this.ANALYTICS_MISSING_MESSAGE);
        const { name, value } = options || { name: undefined, value: undefined };
        if (!name)
            throw new Error('name property is missing');
        if (!value)
            throw new Error('value property is missing');
        setUserProperties(this.analytics, { [name]: value });
    }
    /**
     * Retrieves the app instance id from the service.
     * @returns - instanceId: current instance if of the app
     * Platform: Web/Android/iOS
     */
    getAppInstanceId() {
        return new Promise((resolve, _reject) => resolve);
    }
    /**
     * Sets the current screen name, which specifies the current visual context in your app.
     * @param _options - screenName: the activity to which the screen name and class name apply.
     *                   nameOverride: the name of the current screen. Set to null to clear the current screen name.
     * Platform: Android/iOS
     */
    setScreenName(_options) {
        return new Promise((resolve, _reject) => resolve);
    }
    /**
     * Clears all analytics data for this app from the device and resets the app instance id.
     * Platform: Android/iOS
     */
    reset() {
        return new Promise((resolve, _reject) => resolve);
    }
    /**
     * Logs an app event.
     * @param options - name: unique name of the event
     *                  params: the map of event parameters.
     * Platform: Web/Android/iOS
     */
    async logEvent(options) {
        if (!this.analytics)
            throw new Error(this.ANALYTICS_MISSING_MESSAGE);
        const { name, params } = options || { name: undefined, params: undefined };
        if (!name)
            throw new Error('name property is missing');
        logEvent(this.analytics, name, params);
    }
    /**
     * Sets whether analytics collection is enabled for this app on this device.
     * @param options - enabled: boolean true/false to enable/disable logging
     * Platform: Web/Android/iOS
     */
    async setCollectionEnabled(options) {
        if (!this.analytics)
            throw new Error(this.ANALYTICS_MISSING_MESSAGE);
        const { enabled } = options || { enabled: false };
        setAnalyticsCollectionEnabled(this.analytics, enabled);
    }
    /**
     * Sets the duration of inactivity that terminates the current session.
     * @param _options - duration: duration of inactivity
     * Platform: Android/iOS
     */
    async setSessionTimeoutDuration(_options) {
        throw this.unimplemented('setSessionTimeoutDuration - Not implemented on web.');
    }
    async enable() {
        if (!this.analytics)
            throw new Error(this.ANALYTICS_MISSING_MESSAGE);
        setAnalyticsCollectionEnabled(this.analytics, true);
    }
    async disable() {
        if (!this.analytics)
            throw new Error(this.ANALYTICS_MISSING_MESSAGE);
        setAnalyticsCollectionEnabled(this.analytics, false);
    }
    /**
     * Returns analytics reference object
     */
    get analytics() {
        return getAnalytics(this.appRef);
    }
}
//# sourceMappingURL=web.js.map