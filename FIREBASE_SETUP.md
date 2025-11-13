# Firebase Setup Guide

## ✅ What's Already Done

- Firebase config integrated in `assets/js/firebase-config.js`
- Contact form connected to Firestore
- Beautiful success/error notifications

## 🔒 Security Rules Setup (IMPORTANT!)

You need to apply security rules to prevent spam and abuse.

### Step 1: Go to Firestore Rules

1. Open Firebase Console: https://console.firebase.google.com/
2. Select your project: `personalwebsitezafarportfolio`
3. Click **"Firestore Database"** in left menu
4. Click the **"Rules"** tab

### Step 2: Copy and Paste Rules

Replace the existing rules with the content from `firestore.rules` file:

```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document} {
      allow create: if request.auth == null
                    && request.resource.data.keys().hasAll(['name', 'email', 'message', 'timestamp'])
                    && request.resource.data.name is string
                    && request.resource.data.name.size() > 0
                    && request.resource.data.name.size() < 100
                    && request.resource.data.email is string
                    && request.resource.data.email.matches('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')
                    && request.resource.data.message is string
                    && request.resource.data.message.size() > 0
                    && request.resource.data.message.size() < 5000;

      allow read: if false;
      allow update, delete: if false;
    }
  }
}
```

### Step 3: Publish Rules

Click **"Publish"** button

## 🛡️ What These Rules Do

✅ **Allow Creates**: Anyone can submit contact forms
✅ **Validation**: Enforces proper name, email format, and message length
✅ **Prevent Spam**: Limits name (100 chars) and message (5000 chars)
✅ **No Reads**: Users can't read other submissions
✅ **No Updates/Deletes**: Prevent tampering

## 📧 Viewing Contact Form Submissions

### Option 1: Firebase Console (Easy)

1. Go to Firestore Database
2. Click on `contacts` collection
3. View all submissions with timestamps

### Option 2: Email Notifications (Recommended)

Set up Firebase Cloud Functions to email you when someone submits:

```javascript
// functions/index.js
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.sendContactEmail = functions.firestore
  .document('contacts/{messageId}')
  .onCreate(async (snapshot, context) => {
    const data = snapshot.data();

    // Configure your email service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
      }
    });

    await transporter.sendMail({
      from: 'Portfolio Contact Form',
      to: 'your-email@gmail.com',
      subject: `New Contact: ${data.name}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Message: ${data.message}
        Time: ${data.timestamp}
      `
    });
  });
```

Deploy: `firebase deploy --only functions`

## 🔐 API Key Security

**Q: Is it safe to have API keys in public repo?**

**A: Yes, for Firebase!** Here's why:

1. **Firebase API keys are public** - They're meant to be in client code
2. **Real security = Firestore Rules** - Access is controlled by rules, not API key
3. **Domain restrictions** - You can restrict to specific domains in Firebase Console

### Optional: Restrict to Your Domain

1. Go to Firebase Console > Project Settings > General
2. Scroll to "Public-facing name"
3. Add authorized domains:
   - `zafarsherif.github.io`
   - `localhost` (for testing)

## 🧪 Testing

1. Open your portfolio locally: `open index.html`
2. Scroll to contact form
3. Fill out and submit
4. Should see green success notification
5. Check Firebase Console > Firestore > contacts collection
6. Your submission should appear!

## 🚨 Rate Limiting (Advanced)

To prevent spam abuse, consider:

1. **Client-side**: Disable submit button for 10 seconds after submission
2. **Cloud Functions**: Add rate limiting per IP
3. **reCAPTCHA**: Add Google reCAPTCHA v3

Let me know if you want help setting these up!

## ✅ Checklist

- [ ] Apply Firestore security rules
- [ ] Test contact form submission
- [ ] Verify submission appears in Firebase Console
- [ ] (Optional) Set up email notifications
- [ ] (Optional) Add domain restrictions
- [ ] (Optional) Add rate limiting

---

**Questions?** Check Firebase docs: https://firebase.google.com/docs/firestore/security/get-started
