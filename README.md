# Music Web Service - Spotify Clone Project

This is a repository for a Full-Stack project -  Music Web Service

## This Project was created using Next.js 13.4 App Router: React, Typescript, TailwindCSS, Supabase, PostgreSQL, Stripe.

![image](/public/screenshots/mws-screenshot-1.png)

## Features:

- Created using **NextJS 13.4** framework
- Type-Safe Code: **Typescript**
- Modern styling, effects and animations using **TailwindCSS**
- Fully responsive design on all screens
- Credential **Authentication with Supabase**: registration via email, registration confirmation link on email, forgot password functionality, magic link functionality
- **Github authentication** integration
- Songs and images upload using **Supabase** storage with **PostgreSQL**
- Play songs audio
- Playlists / Liked songs system
- Advanced Player component
- Client form validation and handling using **react-hook-form**
- **Stripe** integration: recurring payments and subscriptions cancelling
- Server error handling with **react-toast**

### For DEMO: 
- use [Stripe Testing Cards](https://stripe.com/docs/testing)

### Cloning the repository

```shell
git clone https://github.com/YauCode/music-web-service.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

### Start the app

```shell
npm run dev
```

## SCREENSHOTS

#### Login:
![image](/public/screenshots/mws-screenshot-2.png)

#### Main Page:
![image](/public/screenshots/mws-screenshot-1.png)

#### Song Upload:
![image](/public/screenshots/mws-screenshot-3.png)

#### Liked Songs Page:
![image](/public/screenshots/mws-screenshot-4.png)

#### Subscription Modal:
![image](/public/screenshots/mws-screenshot-5.png)

#### Stripe subscription example:
![image](/public/screenshots/mws-screenshot-6.png)

#### Account Page:
![image](/public/screenshots/mws-screenshot-7.png)