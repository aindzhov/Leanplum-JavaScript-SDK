/*
 *
 *  Copyright 2020 Leanplum Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
export default {
  METHODS: {
    START: 'start',
    STOP: 'stop',
    ADVANCE: 'advance',
    TRACK: 'track',
    PAUSE_SESSION: 'pauseSession',
    RESUME_SESSION: 'resumeSession',
    PAUSE_STATE: 'pauseState',
    RESUME_STATE: 'resumeState',
    DOWNLOAD_FILE: 'downloadFile',
    MULTI: 'multi',
    SET_VARS: 'setVars',
    GET_VARS: 'getVars',
    SET_USER_ATTRIBUTES: 'setUserAttributes',
    SET_DEVICE_ATTRIBUTES: 'setDeviceAttributes',
    UPLOAD_FILE: 'uploadFile',
    REGISTER_DEVICE: 'registerDevice',
  },

  SDK_VERSION: '1.9.1-develop.2',

  CLIENT: 'js',

  PARAMS: {
    ACTION: 'action',
    APP_ID: 'appId',
    CLIENT: 'client',
    CLIENT_KEY: 'clientKey',
    CURRENCY_CODE: 'currencyCode',
    DEVICE_ID: 'deviceId',
    SDK_VERSION: 'sdkVersion',
    USER_ID: 'userId',
    NEW_USER_ID: 'newUserId',
    DEV_MODE: 'devMode',
    VERSION_NAME: 'versionName',
    SYSTEM_NAME: 'systemName',
    SYSTEM_VERSION: 'systemVersion',
    BROWSER_NAME: 'browserName',
    BROWSER_VERSION: 'browserVersion',
    DEVICE_NAME: 'deviceName',
    DEVICE_MODEL: 'deviceModel',
    USER_ATTRIBUTES: 'userAttributes',
    LOCALE: 'locale',
    COUNTRY: 'country',
    REGION: 'region',
    CITY: 'city',
    LOCATION: 'location',
    STATE: 'state',
    INFO: 'info',
    EVENT: 'event',
    VALUE: 'value',
    FILENAME: 'filename',
    TIME: 'time',
    DATA: 'data',
    VARS: 'vars',
    FILE: 'file',
    SIZE: 'size',
    VARIATION: 'variation',
    HASH: 'hash',
    EMAIL: 'email',
    VARIABLES: 'vars',
    ACTION_DEFINITIONS: 'actionDefinitions',
    PARAMS: 'params',
    INCLUDE_DEFAULTS: 'includeDefaults',
    INCLUDE_VARIANT_DEBUG_INFO: 'includeVariantDebugInfo',
    NEWSFEED_MESSAGES: 'newsfeedMessages',
    MESSAGE_ID: 'messageId',
    WEB_PUSH_SUBSCRIPTION: 'webPushSubscription',
  },

  KEYS: {
    IS_REGISTERED: 'isRegistered',
    LATEST_VERSION: 'latestVersion',
    SYNC_INBOX: 'syncNewsfeed',
    MESSAGES: 'messages',
    VARS: 'vars',
    VARIANTS: 'variants',
    VARIANT_DEBUG_INFO: 'variantDebugInfo',
    ACTION_DEFINITIONS: 'actionDefinitions',
    TOKEN: 'token',
  },

  DEFAULT_KEYS: {
    COUNT: '__leanplum_unsynced',
    ITEM: '__leanplum_unsynced_',
    VARIABLES: '__leanplum_variables',
    VARIANTS: '__leanplum_variants',
    VARIANT_DEBUG_INFO: '__leanplum_variant_debug_info',
    ACTION_DEFINITIONS: '__leanplum_action_definitions',
    HOST_CONFIG: '__leanplum_hosts',
    INBOX_MESSAGES: '__leanplum_inbox_messages',
    TOKEN: '__leanplum_token',
    DEVICE_ID: '__leanplum_device_id',
    USER_ID: '__leanplum_user_id',
    SESSION: '__leanplum_session',
    MESSAGE_OCCURRENCES: '__leanplum_message_occurrences',
    MESSAGE_CACHE: '__leanplum_message_cache',
    PUSH_SUBSCRIPTION: '__leanplum_push_subscription',
  },

  VALUES: {
    DETECT: '(detect)',
    DEFAULT_PUSH_ACTION: 'Open action',
  },
}
