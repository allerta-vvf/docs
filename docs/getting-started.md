---
sidebar_position: 1
---

# Getting started

You can install Allerta-VVF in a few minutes.

### What you'll need

- [Docker](https://www.docker.com/get-started/) version 19.0 or above:
  - If using a Desktop device to test this, you can install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Docker Compose](https://docs.docker.com/compose/install/) version 3 or above

## Downloading source code

You can download the source code of Allerta-VVF in two ways:

### Using Git

If you have Git installed on your machine, you can clone the repository using the following command in your terminal:

```bash
git clone https://github.com/allerta-vvf/allerta-vvf.git
```

This will create a new directory named `allerta-vvf` in your current directory, containing the source code of Allerta-VVF.

### Using 'Download ZIP' button
Alternatively, you can download the source code as a ZIP file:

Go to [https://github.com/allerta-vvf/allerta-vvf](https://github.com/allerta-vvf/allerta-vvf).
Click on the Code button, which is usually green and located on the right side of the screen.
In the dropdown menu, click Download ZIP.
Once the ZIP file is downloaded, extract it to your desired location.

Now you have the source code on your machine and you're ready to proceed with the installation.

## Starting Docker Compose stack

Now you can use Docker Compose to start the process, but before proceeding:

### Creating .env.docker file
You should make an empty file called .env.docker in the root of the project.
You can use command line (using `touch .env.docker`), your IDE or any file manager,
but make sure the new file has no extension.

### Starting the stack
Now you are ready to start AllertaVVF!
Type these commands in your terminal, in the root of the directory where you downloaded/cloned the project:
```bash
docker compose up -d
```

Now you can go to [http://localhost:8000](http://localhost:8000). Have fun!

:::danger

Please remember that this setup is *NOT* production-ready.  
If you are planning to use Allerta-VVF in production environments, contact me at _me [at] matteogheza [dot] it_

:::

### Stopping
When you finish testing AllertaVVF on your machine, you should use the proper procedure to stop the Docker Compose stack:
```bash
docker compose stop
```

## Debugging

### PHPMyAdmin
By default, this Docker Compose exposes a phpmyadmin installation on port 8080.  
You can access it with any browser, and with auto-login.

### Logs
If you want to access any component logs, type:
```bash
docker compose logs -f
```
