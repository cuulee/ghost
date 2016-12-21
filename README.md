# ghost

This repo demonstrates deployment of the Ghost blogging software using
Node.js and Now.

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
