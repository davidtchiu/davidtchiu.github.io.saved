## CS 161 - Intro to Computer Science

### Hwk: Using the Virtual Machine

In this ungraded "preliminary assignment," we will set up your virtual machine. C is highly dependent on the compute environment on which it compiles and executes. This is everybody's worst nightmare: turning in an assignment you spent hours on, only to have it not compile or execute on your instructor's machine. In fact, having a common runtime environment was what made Java so successful when it was introduced in the mid-90s.

It's therefore important that we all share a common environment, so I've prepared a virtual machine (think: another operating system that runs as a separate process on your machine). Important: all programming assignments should be written and submitted from this virtual machine (VM).

#### Student Outcomes

#### Required Files

The following file(s) have been provided for this assignment.

- [develop-end.ova](TBD TBD)

#### Instructions

- Download and install [Oracle VirtualBox](https://www.virtualbox.org/). Note: the current version at the time of writing is version 6.1.

- Download the following VirtualBox image:

  - [TBD](TBD TBD)

- Open up VirtualBox. Then click on the `File` > `Import Appliance` menu. Browse and find the `TBDTBD` file you just downloaded, then click Continue.

- This brings up the Appliance Settings window. **Important:** Do not click to enable "Reinitialize the MAC address of all network cards." Click `Import`. This will take a little bit of time to finish.
  ![](img/figures/install1.png)

- Highlight `TBDTBD` from the side menu, and click on `Settings`. From the Settings menu, navigate to Ports. Make sure that Enable Serial Port and is checked. **IMPORTANT:** Do not check Connect to Existing Pipe/Socket. Under Path/address:

  - If you're on a Linux or Mac: type in `/tmp/xinu_serial`
  - If you're on Windows: type in `\\.\pipe\xinu_com1`
    ![](img/figures/install4.png)

  Click OK to exit Settings.

- Double-click on `TBDTBD`. This will start a virtual machine (VM) running Ubuntu Linux. Think of a VM as being a program on your machine that can run a separate isolated instance of another operating system! This VM serves several important purposes for this class and for your education:. You will program all your assignments and projects within this VM.

- **Important for Windows Users:** There is a known issue on some Windows machines that does not allow the VM to boot up or import properly. The error you receive from VirtualBox reads, "VT-X is not enabled in BIOS" or something to the effect of "virtualization is disabled". If you are experiencing this, then you need to enable virtualization in your BIOS, which is possible upon a reboot of your computer. I can help you with this, or you can Google how.

- **Important for newer Macs with Retina display:** Some people have reported sluggishness of the virtual machine, to a point where it becomes unusable. Here's what worked for me. Go to the App Store and download ResolutionTab. Once installed, it puts a new icon on your top menu. Select a lower resolution that is NOT HiDPI. I used something like 1650 x 1050, and it worked great. (I think the important thing is to disable the HiDPI).

- Once the develop-end-ubuntu starts up, you can login with the following credentials:

  - Username: `xinu`
  - Password: `xinurocks`
  - Note: This user has sudo (or administrator) access.

  After you log in, make sure you have network access to the outside world. You can open the Firefox browser from the sidebar menu. If you don't have access, let me know.

- You can test out a couple nice features. They've been finicky for me in the past though, but are huge time-savers if you get them to work.

  - Shared clipboard: Click on the Devices menu and select Shared Clipboard. Then select bi-directional. Test this out. It will save you hours of time in this course. Copy some text from your host machine, then try pasting it into this VM, and then vice-versa.
  - Drag and Drop: Click on the Devices menu and select Drag and Drop. Then select bi-directional. This has been finicky for me in the past, but mostly works. Pick a file from your host machine and drag it anywhere on your VM. The file ends up in a folder inside `/tmp/VirtualBox Dropped Files` directory.

- Open up the Terminal. The terminal gives you a shell (most likely the Bourne Again Shell, or bash), which is a command-line environment to interact directly with the operating system (Ubuntu Linux, in our case). Recall the following useful shell commands (Note: in the following listing, parameters enclosed in diamond brackets `<...>` are required and those enclosed in square brackets `[...]` are optional).

  - pwd: returns your current (or present) working directory
  - cd [path]: changes your current working directory to path. If path is not given, then it (usually) defaults to your home directory. Note the following two special paths:
    - `.` returns the current directory
    - `..` returns the parent directory
    - Paths can be chained. For instance, cd `../../a/` will navigate you up two parent directories, then into `a/`
  - `ls -l [path]`: lists files and directories in the optional given path. If path is not given, then it defaults to your current working directory
  - `mkdir <name>`: creates directory called name in current working directory

#### Credits

Written by David Chiu. 2015.