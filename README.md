# [fun.ng](https://dudushy.github.io/fun.ng/)
Playing with Angular.
> version 14.1.2

---

## Prerequisites:
- [NodeJS](https://nodejs.org/)

## Setup:
1. Install Angular CLI
    ```bash
    npm i -g @angular/cli
    ```

1. Create new project
    ```bash
    ng new fun
    ? Would you like to share anonymous usage data about this project with the Angular Team at
    Google under Google’s Privacy Policy at https://policies.google.com/privacy. For more
    details and how to change this setting, see https://angular.io/analytics. No
    ? Would you like to add Angular routing? Yes
    ? Which stylesheet format would you like to use? SCSS
    ```

1. Generate
    > [steps.sh](/steps.sh)

1. Run project
    ```bash
    ng serve
    ```

1. Build project
    ```bash
    npm i angular-cli-ghpages --save-dev

    ng build --base-href "https://dudushy.github.io/fun.ng/"

    npx angular-cli-ghpages --dir=dist/fun
    ```
