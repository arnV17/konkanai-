# Email Notification System Setup

This guide will help you set up automated email notifications for your Konkanai contact form.

## Prerequisites

1. **Gmail Account** (or other email service)
2. **App Password** (for Gmail, you'll need to generate one)

## Setup Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Create Environment Variables

Create a `.env` file in your project root with the following variables:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NOTIFICATION_EMAIL=your-notification-email@gmail.com

# Server Configuration
PORT=3001
```

### 3. Gmail App Password Setup

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password:
   - Go to Security → App passwords
   - Select "Mail" and your device
   - Copy the generated password
   - Use this password in your `.env` file

### 4. Start the Backend Server

```bash
node server.js
```

The server will run on port 3001.

### 5. Update Frontend API URL

In your `src/pages/Contact.tsx`, make sure the API endpoint points to your server:

```javascript
const response = await fetch('http://localhost:3001/api/contact', {
  // ... rest of the code
});
```

## Features

- **Automatic Notifications**: You'll receive an email whenever someone submits the contact form
- **User Confirmation**: Users receive a confirmation email
- **Form Validation**: All fields are required
- **Loading States**: Shows "Sending..." while processing
- **Error Handling**: Displays error messages if something goes wrong

## Email Templates

The system sends two types of emails:

1. **Notification Email** (to you):
   - Contains all form details
   - Includes timestamp
   - Professional formatting

2. **Confirmation Email** (to user):
   - Thank you message
   - Confirms receipt
   - Includes their message details

## Customization

You can customize the email templates in `server.js` by modifying the `mailOptions` objects.

## Troubleshooting

- **Email not sending**: Check your app password and email settings
- **CORS errors**: Make sure the backend server is running
- **Port conflicts**: Change the PORT in .env if 3001 is in use

## Security Notes

- Never commit your `.env` file to version control
- Use environment variables for sensitive data
- Consider rate limiting for production use 