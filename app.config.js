//
// Main Application Configuration
// https://docs.expo.dev/versions/latest/config/app/
//
// Use expo based configration, plugins, etc. as much as possible.

export default ({ config }) => ({
  ...config,
  expo: {
    name: "bug_report_expo_apple_auth",
    slug: "bug_report_expo_apple_auth",
    scheme: "myapp",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    userInterfaceStyle: "automatic",
    splash: {   
      image: "./assets/images/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      config: {
        // eslint-disable-next-line no-undef
        googleMapsApiKey: process.env.GOOGLE_IOS_API_KEY,
      },
      supportsTablet: true,
      usesAppleSignIn: true,
      bundleIdentifier: "com.rybaier.bug-report-expo-apple-auth",
      entitlements: {
        "aps-environment": "development",
      },
      // eslint-disable-next-line no-undef
      googleServicesFile: process.env.GOOGLE_SERVICES_PLIST,
      infoPlist: {
        CFBundleURLTypes: [
          {
            CFBundleURLSchemes: ["bug-report-expo-apple-auth"],
          },
          {
            CFBundleURLSchemes: ["com.rybaier.bug-report-expo-apple-auth"],
          },
          {
            CFBundleURLSchemes: ["com.rybaier.bug-report-expo-apple-auth.signinwithapple"],
          },
          {
            CFBundleURLSchemes: ["<TEAMID>.com.rybaier.bug-report-expo-apple-auth"],
          },
        ],
      },
      privacyManifests: {
        NSPrivacyCollectedDataTypes: [
          {
            NSPrivacyCollectedDataType: "NSPrivacyCollectedDataTypeCrashData",
            NSPrivacyCollectedDataTypeLinked: false,
            NSPrivacyCollectedDataTypeTracking: false,
            NSPrivacyCollectedDataTypePurposes: [
              "NSPrivacyCollectedDataTypePurposeAppFunctionality",
            ],
          },
          {
            NSPrivacyCollectedDataType: "NSPrivacyCollectedDataTypePerformanceData",
            NSPrivacyCollectedDataTypeLinked: false,
            NSPrivacyCollectedDataTypeTracking: false,
            NSPrivacyCollectedDataTypePurposes: [
              "NSPrivacyCollectedDataTypePurposeAppFunctionality",
            ],
          },
          {
            NSPrivacyCollectedDataType: "NSPrivacyCollectedDataTypeOtherDiagnosticData",
            NSPrivacyCollectedDataTypeLinked: false,
            NSPrivacyCollectedDataTypeTracking: false,
            NSPrivacyCollectedDataTypePurposes: [
              "NSPrivacyCollectedDataTypePurposeAppFunctionality",
            ],
          },
        ],
        NSPrivacyAccessedAPITypes: [
          {
            NSPrivacyAccessedAPIType: "NSPrivacyAccessedAPICategoryUserDefaults",
            NSPrivacyAccessedAPITypeReasons: ["CA92.1"],
          },
          {
            NSPrivacyAccessedAPIType: "NSPrivacyAccessedAPICategorySystemBootTime",
            NSPrivacyAccessedAPITypeReasons: ["35F9.1"],
          },
          {
            NSPrivacyAccessedAPIType: "NSPrivacyAccessedAPICategoryFileTimestamp",
            NSPrivacyAccessedAPITypeReasons: ["C617.1"],
          },
        ],
      },
    },
    android: {
      config: {
        googleMaps: {
          // eslint-disable-next-line no-undef
          apiKey: process.env.GOOGLE_ANDROID_API_KEY,
        },
      },
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.rybaier.bug_report_expo_apple_auth",
      // eslint-disable-next-line no-undef
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
    },
    web: {
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      "expo-font",
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
      "@react-native-google-signin/google-signin",
      "expo-apple-authentication",
      ["expo-build-properties", { ios: { useFrameworks: "static" } }],
      ["expo-image-picker", { "photosPermission": "Allow $(PRODUCT_NAME) to access your photos." }],
    ],
    extra: {
      router: {
        origin: false,
      },

    },
    owner: "rybaier",
  },
});
