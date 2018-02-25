# DApp with React and Truffle Boilerplate
React for making decentralized apps with react and truffle.

## Some specs
* react & redux & react router
* truffle
* webpack

## What does it cointain
* Skeleton for you next dapp. 
* Gaps are filled with the standard greeter script.
* Tests
* Cool build scripts

## What should you do?
1. Copy .env.example and name it .env
2. Tweak some params if needed in .env
3. `npm install`
4. `npm run dev:compile` or `npm run dev:serve`

## Scripts
Compile everything including contracts
```bash
npm run dev:compile
```

Start developement server for frontend only. Watches the js and sass files
```bash
npm run dev:watch
```

Start full developent server including truffle. Also compiles and migrates contracts
```bash
npm run dev:serve
```

Compiles and migrates contracts
```bash
npm run dev:truffle
```

Migrates contracts. Resets existing migrations before attempting
```bash
npm run dev:truffle:migrate:reset
```
