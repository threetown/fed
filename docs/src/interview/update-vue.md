```bash
leon@leon hi % vue upgrade
✔  Gathering package information...
 ERROR  ~/.vuerc may be outdated. Please delete it and re-run vue-cli in manual mode.
leon@leon unicorn-parrot % rm ~/.vuerc
leon@leon unicorn-parrot % vue upgrade
✔  Gathering package information...
  Name                        Installed       Wanted          Latest          Command to upgrade
  @vue/cli-service            4.5.14          4.5.14          5.0.8           vue upgrade @vue/cli-service
  @vue/cli-plugin-babel       4.5.14          4.5.14          5.0.8           vue upgrade @vue/cli-plugin-babel
  @vue/cli-plugin-eslint      4.5.14          4.5.14          5.0.8           vue upgrade @vue/cli-plugin-eslint
  @vue/cli-plugin-typescript  4.5.14          4.5.14          5.0.8           vue upgrade @vue/cli-plugin-typescript
? Continue to upgrade these plugins? Yes
Upgrading @vue/cli-service from 4.5.14 to 5.0.8
yarn add v1.22.10
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 142 new dependencies.
info Direct dependencies
└─ @vue/cli-service@5.0.8
info All dependencies
├─ @achrinza/node-ipc@9.2.6
```

