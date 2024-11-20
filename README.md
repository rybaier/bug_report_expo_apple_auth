 # Bug Report Swift Type Inference Error in `expo-apple-authentication` Library 7.1.1

## This is a blank template from create-expo-app navigation template that reproduces the error 

## Description

When building an app that uses the `expo-apple-authentication` library version 7.1 in VScode with Xcode 15.2  the following error occurs in the `AppleAuthenticationModule.swift` file due to Swift being unable to infer the return type for a closure containing multiple statements.

### Expected Behavior
The function should successfully compile and return a formatted string, but the closure's return type is not inferred due to multiple statements inside the closure.

### Actual Behavior
Xcode produces the error: cannot infer return type for closure with multiple statements; add explicit type to disambiguate.

## Steps to Reproduce
1. create .env from .envExample (you do not need to change anything just create the file)
3. run ```npx expo prebuild```
4. run ```npx expo run ios```
5. observe the following error in the `AppleAuthenticationModule.swift` file:


### Error Message
```
❌  (/<path to node_modules>/node_modules/expo-apple-authentication/ios/AppleAuthenticationModule.swift:51:32)

  50 | 
> 51 |     Function("formatFullName") { (fullName: FullName, formatStyle: FullNameFormatStyle?) in
     | ERROR                          ^ cannot infer return type for closure with multiple statements; add explicit type to disambiguate
  52 |       let formatStyle = formatStyle?.toFullNameFormatStyle() ?? .default
  53 |       var nameComponents = PersonNameComponents()
  54 | }

  CommandError: Failed to build iOS project. "xcodebuild" exited with error code 65.
  ```
  
  xcodebuild produces the error: cannot infer return type for closure with multiple statements; add explicit type to disambiguate.
  
  
  ## Fix [copy of AppleAuthenticationModule.swift](https://github.com/rybaier/bug_report_expo_apple_auth/blob/main/AppleAuthenticationModule.swift)
  in /<path to node_modules>/node_modules/expo-apple-authentication/ios/AppleAuthenticationModule.swift:51:32
adding ``` -> String```  to line 51 for the function 
  ```
    51| Function("formatFullName") { (fullName: FullName, formatStyle: FullNameFormatStyle?) -> String in
              let formatStyle = formatStyle?.toFullNameFormatStyle() ?? .default
              var nameComponents = PersonNameComponents()
          
              nameComponents.namePrefix = fullName.namePrefix
              nameComponents.nameSuffix = fullName.nameSuffix
              nameComponents.givenName = fullName.givenName
              nameComponents.middleName = fullName.middleName
              nameComponents.familyName = fullName.familyName
              nameComponents.nickname = fullName.nickname
          
              let formatter = PersonNameComponentsFormatter()
              formatter.style = formatStyle
          
              return formatter.string(from: nameComponents)
          }
  ```

### Comments 
This was discovered while upgrading to Expo SDK 52 and React Native 0.76
I tried several things before going directly to the node_modules file 
such as
- clearing the cache with expo and rebuilding with npx expo start -c
- deleting Xcode cache, Xcode build data and indexes 

I can not replicate the error on my M1 MacBook pro which is at Xcode 16 and Sonoma 14.5. 
It only happens on intel IMac with xcode 15.2 and Ventura IOS 13.7
