---
layout: post
title: Linux aliases
date: 2020-06-25 18:23:00
tags: linux bash terminal
author: Marouane KAFOU
hover: "I'm glad you're alive, happy reading"
---

Every command line user can agree that however how great the use of terminal can be, it can quickly get exhausting having to write long commands again and again, amd maybe you don't want to remember all those commands word by word at all, this is where **aliases** came in, **aliases** can be a very handful tool to speed up your work and make it less exhausting, thus, improving your productivity.

**Aliases** can be temporary or permanent, this post will walk you through : how to list the **available aliases**, how to create **temporary and permanent aliases**.


# HOW TO LIST THE AVAILABLE ALIASES

Listing your aliases is as easy as typing the command `alias` on your command line.
```bash
$ alias
```

This is the output of the default aliases of my distribution (ubuntu 18.04).

![alias command output](../../../../../assets/images/posts/some-useful-aliases-1.png)

As you can guess, the execution of a command such as :

```bash
$ ls
```

Is equivalent to :

```bash
$ ls --color-auto
```


# HOW TO CREATE TEMPORARY ALIASES

You can create temporary aliases _(not preserved between terminal sessions)_ simply by running the command `alias` in the following syntax `alias {name of the alias}='{the actual command the alias will execute}'`.

Exemple :

```bash
$ alias home='cd /home'
```

You can execute now `home` on the terminal to go to the home directory without making the whole effort of typing `cd /home`.

To remove this alias :

```bash
$ unalias home
```

However this alias will be available only on your current terminal ssession, if you are willing to use this alias everywhere, you need to create a permanent one.


# HOW TO CREATE PERMANENT ALIASES

To create permanent aliases you must save them on your shell configuration profile file, why there ? It's because this file is executed on every new terminal session's launch, It is as if you run the command to create a temporary alias on every new terminal session.

User's shell configuration file location and filename are different between shell types, we can list :

| Bash | ~/.bashrc |
| ZSH | ~/.zshrc |
| Fish | ~/.config/fish/config.fish |

First open the configuration file with your favourite editor _(i use nano for small shell files :))_

```bash
$ sudo nano ~/.bashrc
```

Preferably, go to end of the file add a comment line then add your aliases :

```bash
# personal aliases
alias home='cd /home'
alias var='cd /var'
```

Save the file, now your aliases are ready to be used in the next terminal session, however, if yoou wish to use them in the current one execute the following command :

```bash
$ source ~/.bashrc
```

# BONUS

Here i share with you some of my personal aliases, i wish you find them helpful :

```bash
# loooooool
alias please='sudo'

# yarn p.m
alias y='yarn'
alias yd='yarn dev'
alias yt='yarn test'
alias yb='yarn build'
alias yr='yarn run'

# docker / docker-compose
alias d='docker'
alias dc='docker-compose'
alias dce='docker-compose exec'
alias dcl='docker-compose logs'
alias dcu='docker-compose up'
alias dcd='docker-compose down'

# symfony routes
alias routes='php bin/console debug:router'
# laravel specific
alias pa='php artisan'

# git
alias g='git'
alias ga='git add'
alias gs='git status'
alias gst='git stash'
alias gc='git commit -m'
alias gch='git checkout'
alias gb='git branch'
alias gl='git log'
alias gr='git revert'
alias pull='git pull origin'
alias pushup='git push origin'
alias pushup='git push origin --set-upstream'

# make
alias m='make'
alias mr='make run'
alias mre='make stop && make run'
alias mi='make install'
alias ms='make stop'
alias mh='make help'
alias mc='make clean'
alias mu='make update'
alias mt='make test'
alias munit='make phpunit'
alias mstan='make phpstan'
alias mfixer='make php-cs-fixer'
```