---
layout: post
title: Customize your terminal header
date: 2020-06-27 01:48:00
tags: linux bash terminal
author: Marouane KAFOU
hover: "Know that you are worthy, happy reading"
---

If you are really bored of the look of your terminal and you want to add some aestethics to it, then this blogpost is for you.

In this blogpost i will walk you through how you can customize your terminal's header and achieve a look similar to the one below using none other than the famous commands **figlet** and **lolcat**.

![custom terminal header](../../../../../assets/images/posts/customize-your-terminal-header-1.png)

# INSTALLING FIGLET

First you need to install **figlet**, **figlet** is a command line tool that creates ascii text art with custom fonts.

To install **figlet** :

```bash
$ sudo apt-get install figlet
```

To try **figlet** :

```bash
$ figlet "it may help"
```

![figlet "it may help"](../../../../../assets/images/posts/customize-your-terminal-header-2.png)

**Figlet** comes initially with numerous fonts that can be displayed via the command : 

```bash
$ showfigfonts
```

By default **figlet** uses the standard font, if you wish to use another available font you can add it with the option _-f_ (note that fonts names are case sensitive):

```bash
$ figlet -f script "it may help"
```

![figlet -f script "it may help"](../../../../../assets/images/posts/customize-your-terminal-header-3.png)

If you are not satisfied with the available fonts, you can add other interesting custom fonts by following these steps :

1. Change your current working directory to **/usr/share** :

    ```bash
    $ cd /usr/share
    ```

2. Clone **xero/figlet-fonts** repo :

    ```bash
    $ git clone https://github.com/xero/figlet-fonts
    ```

3. Move all the files inside to **./figlet** and remove the cloned project directory :

    ```bash
    $ mv ./figlet-fonts/* ./figlet && rm –rf ./figlet-fonts
    ```

You can then run again `showfigfont` to check the newly added fonts.


# Installing lolcat

**Lolcat** command takes a text and adds a whole table of random rainbow colors to it.

To install **lolcat** :

```bash
$ sudo apt install lolcat
```

**Lolcat** can be applied to the output of any command simply by using the pipe :

```bash
$ echo "it may help" | lolcat
```

![echo "it may help" \| lolcat](../../../../../assets/images/posts/customize-your-terminal-header-4.png)

Therefore the syntax to use lolcat with figlet is as follows :

```bash
$ figlet -f slant "it may help" | lolcat
```

![figlet -f slant "it may help" \| lolcat](../../../../../assets/images/posts/customize-your-terminal-header-5.png)

# CUSTOMIZING Your TERMINAL HEADER

To customize our terminal header we will add some **figlet**+**lolcat** commands on our shell configuration profile file, why there ? It's because this file is executed on every new terminal session's launch, It is as if we run those commands on every new terminal session.

User's shell configuration file location and filename are different between shell types, we can list :

| Bash | ~/.bashrc |
| ZSH | ~/.zshrc |
| Fish | ~/.config/fish/config.fish |

First open the configuration file with your favourite editor _(i use nano for small shell files :))_

```bash
$ sudo nano ~/.bashrc
```

Preferably, go to end of the file add a comment line then add your commands _(here i will use the commands used in the example to achieve)_ :

```bash
# terminal header
figlet -f Bloody "X A N X U S" | lolcat
echo ""
echo "     *,             *,             *,             *,             *,         " | lolcat
echo " ,*\/| \        ,*\/| \        ,*\/| \        ,*\/| \        ,*\/| \        " | lolcat
echo " \'  |'| *,     \'  |'| *,     \'  |'| *,     \'  |'| *,     \'  |'| *,     " | lolcat
echo "  \ \`| |/ )      \ \`| |/ )      \ \`| |/ )      \ \`| |/ )      \ \`| |/ )" | lolcat
echo "   | | , /        | | , /        | | , /        | | , /        | | , /      " | lolcat
echo "   |'|, /         |'|, /         |'|, /         |'|, /         |'|, /       " | lolcat
echo " __|_|_|__      __|_|_|__      __|_|_|__      __|_|_|__      __|_|_|__      " | lolcat
echo "[_________]    [_________]    [_________]    [_________]    [_________]     " | lolcat
echo " |       |      |       |      |       |      |       |      |       |      " | lolcat
echo " |       |      |       |      |       |      |       |      |       |      " | lolcat
echo " |_______|      |_______|      |_______|      |_______|      |_______|      " | lolcat
echo ""
echo ""
```

Save the file, now your header is ready to be used in the next terminal session, however, if you wish to see the results in the current one execute the following command :

```bash
$ source ~/.bashrc
```

As you can see, I am using **figlet** with the **Bloody** font to display the text **"X A N X U S"** then piping the output to **lolcat** to add colors, after that I display five cactus plants ascii art, obviously because I love cactus _(well, who doesn't)_. There are several websites where you can find ascii arts, take for example [asciiart.eu](https://www.asciiart.eu){:target="_blank"}.

# FINAL WORD

I really hope this was helpful for you, as you can spot my terminal prompt isn't neither the usual common one, so, you can guess my next blogpost :grin:

