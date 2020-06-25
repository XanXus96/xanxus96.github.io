---
layout: post
title: Linux aliases
date: 2020-06-25 18:23:00
tags: linux bash terminal
author: Marouane KAFOU
hover: "I'm glad you're alive, happy reading"
---

Every command line user can agree that however how great the use of terminal can be, it can quickly get exhausting having to write long commands again and again, amd maybe you don't want to remember all those commands word by word at all, this is where **aliases** came in, **aliases** can be a very handful tool to speed up your work and make it less exhausting, thus, improving your productivity.

**Aliases** can be temporal or permanent, this post will walk you through : how to list the **available aliases**, how to create **temporal and permanent aliases**.

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

You can execute now `home` on the terminal to go to the home directory without making the whole effort of typing `cd /home`, however this alias will be available only on your current terminal ssession, if you are willing to use this alias everywhere, you need to create a permanent one.

# HOW TO CREATE PERMANENT ALIASES