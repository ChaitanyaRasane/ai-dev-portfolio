# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/e8acee31-f552-4adb-868e-5fb7c20bb268

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/e8acee31-f552-4adb-868e-5fb7c20bb268) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/e8acee31-f552-4adb-868e-5fb7c20bb268) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Deployment

- **Manual (quick):** install deps locally and run the built-in deploy script (publishes to `gh-pages` branch):

```sh
npm i
npm run deploy
```

- **CI (recommended):** a GitHub Actions workflow is included at `.github/workflows/deploy.yml`. Pushing to `main` or `master` will build and publish the `dist` folder to GitHub Pages automatically.

Notes:
- Ensure the repository has a remote on GitHub and GitHub Pages is enabled for the repo (project site).
- If your site will be served from a path like `https://username.github.io/repo-name/`, the workflow will work with the relative `base: './'` setting in `vite.config.ts`.
