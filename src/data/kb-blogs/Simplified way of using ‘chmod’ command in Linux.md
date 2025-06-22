---
title: Simplified way of using ‘chmod’ command in Linux
date: 2023-07-03
author: Kushal Bhargava
image:
  src: "/images/blog-header/linux-logo.png"
  alt: "Simplified way of using ‘chmod’ command in Linux"
description: One of the most common Linux command that we use in our day-to-day life to execute or give permission to a file in Linux system.
hashnode: null
draft: false
category: Linux
---

<!-- # Simplified way of using ‘chmod’ command in Linux -->

One of the most common Linux command that we use in our day-to-day life to execute or give permission to a file in Linux system. One way to give permission to a file is through **Octal Mode.** One of the easiest way set permission on a file. So in this article we are going to learn how to use octal mode.

# Octal mode

The word itself says that it use **Octal Number System** which consist of eight number i.e. 0 to 7 to set permission on file.

Where..

- **First digit** specify the permission for Owner.
- **Second digit** specify the permission for Group.
- **Third digit** specify the permission for Others.

Here is the table of what every number represent in the system :

| **Octal Value** | **File Permissions Set** | **Permissions Description**          |
| --------------- | ------------------------ | ------------------------------------ |
| 0               | - - -                    | No permissions                       |
| 1               | - - x                    | Execute permission only              |
| 2               | - w -                    | Write permission only                |
| 3               | - w x                    | Write and execute permissions        |
| 4               | r - -                    | Read permission only                 |
| 5               | r - x                    | Read and execute permissions         |
| 6               | r w -                    | Read and write permissions           |
| 7               | r w x                    | Read, write, and execute permissions |

Or we can use binary to octal representation. To do so we have to consider `r w x` value as a switch which have `0 and 1` value.

So if we have to set only read permission i.e. `r - -` if we convert it into binary where `r w x` are 1 and `-` is 0.

So `r - -` = `1 0 0`

Now converting this **binary to octal,** which is `1 0 0` = `4` and if we see in table i.e. 4 value is equal to Read permission only.

Let’s solve some example to have better understanding of octal mode :

1. Read permission to only Owner i.e. `r-- --- ---`

   |       | **File Permission** | **Binary** | **Octal** |
   | ----- | ------------------- | ---------- | --------- |
   | Owner | r - -               | 1 0 0      | 4         |
   | Group | - - -               | 0 0 0      | 0         |
   | Other | - - -               | 0 0 0      | 0         |

   `chmod 400 file.txt` will have read only permission to Owner

2. Read and write permission to Owner and Group i.e. `rw- rw- ---`

   |       | **File Permission** | **Binary** | **Octal** |
   | ----- | ------------------- | ---------- | --------- |
   | Owner | r w -               | 1 1 0      | 6         |
   | Group | r w -               | 1 1 0      | 6         |
   | Other | - - -               | 0 0 0      | 0         |

   `chmod 660 file.txt` will have read and write permission to Owner and Group only.

3. Read, write and execute permission to everyone i.e. `rwx rwx rwx`

   |       | **File Permission** | **Binary** | **Octal** |
   | ----- | ------------------- | ---------- | --------- |
   | Owner | r w x               | 1 1 1      | 7         |
   | Group | r w x               | 1 1 1      | 7         |
   | Other | r w x               | 1 1 1      | 7         |

   `chmod 777 file.txt` will have access to every one.

This is how we use Octal mode in Linux to setup a file permission in Linux file system. It seems difficult for the first time but if we understand the concept, it is very easy to implement it on Linux file system.
