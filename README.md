# Hitechline Packages

Libraries used for development at Hitechline

## How to use

To use the libraries, you need to login with a special token. Follow the following steps:

1. First you need to generate a personal token of classic type.
2. In [Developer settings](https://github.com/settings/tokens) generate a new token.
3. Select the following token scopes: `repo`, `workflow`, `write:packages` and `admin:org`.
4. Open your terminal and using the following command define the token in your machine's NPM settings:

```bash
npm config set //npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

5. Define the scope.

```bash
npm config set @hitechline:registry https://npm.pkg.github.com/
```

6. Congratulations! Now you can use private libraries.
