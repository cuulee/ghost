# ghost

This repo demonstrates deployment of the [Ghost blogging
software](https://ghost.org/) using Node.js and Now.

<img src="https://cloud.githubusercontent.com/assets/120485/18661790/cf942eda-7f17-11e6-9eb6-9c65bfc2abd8.png" alt="Ghost" />

## How to deploy

First, [download `now`](https://zeit.co/download). Then, clone this
repository and run `now`:

```bash
$ git clone git://github.com/now-examples/ghost
$ cd ghost
$ now
```

You can tweak the `config.js` file and `content` directory to your liking, and
then re-deploy by running `now` again.

**NOTE:** The `config.js` file here is set up to use the "sqlite3" storage
backend for out-of-the-box one command deployment, however if you want to
persist the blog data throughout multiple deployments and version upgrades,
then you should set up "mysql" or "postgres" for your data backend.
