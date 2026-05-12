# SMART LIBRARY

A complete production-ready premium modern full-stack Library Management System built with React, Vite, Tailwind CSS, and Firebase.

## Tech Stack
* React + Vite
* JavaScript
* Tailwind CSS
* Firebase Authentication
* Firestore Database
* Firebase Storage
* Firebase Cloud Messaging
* PWA Support ready

## Setup Guide
1. Run `npm install` to install dependencies.
2. Run `npm run dev` to start the local development server.
3. Access the web application at `http://localhost:5173`.

## Deployment Guide
1. Run `npm run build` to create a production build.
2. Deploy the `dist` directory to Firebase Hosting, Vercel, or Netlify.
   * For Firebase: `firebase deploy --only hosting`

## Firebase Setup Guide
* The app uses Firebase Auth, Firestore, and Storage.
* Ensure Email/Password sign-in is enabled in the Firebase Console.
* Set Firestore rules to allow authenticated users to read/write their own data.
* Set Storage rules to allow authenticated users to upload image screenshots.

## Capacitor APK Guide
To convert this React app to an Android APK:
1. `npm install @capacitor/core @capacitor/cli`
2. `npx cap init`
3. `npm run build`
4. `npm install @capacitor/android`
5. `npx cap add android`
6. `npx cap sync android`
7. Open in Android Studio and build the APK: `npx cap open android`

---

## CouldAI 
This application was generated with [CouldAI](https://could.ai), an AI app builder for cross-platform apps that turns prompts into real native iOS, Android, Web, and Desktop apps with autonomous AI agents that architect, build, test, deploy, and iterate production-ready applications.
