% Make your scientific software portable
% with Singularity containers 
% Tomasz Golan, ZFN

<div class='footer'>
Navigate:
<br> &emsp; PgDn / PgUp - next / previous slide
<br> &emsp; Space / Shift+Space - next / previous slide
<br> &emsp; Esc - expo mode
</div>

# 

## What is a container

---

<div class="left">

* A container is a stand-alone executable package 

    * operating system

    * libraries

    * software

    * data

* It can be run on any OS

</div>
<div class="right">
<img src="../img/singularity/docker.png" style="background: #222222; border: none;"/>
src: [docker.com](https://www.docker.com/what-container)
</div>

## OS in a container

---

<img src="../img/singularity/os.svg" style="background: #222222; border: none;"/>

## Containers vs Virtual Machines

---

src: [docker.com](https://www.docker.com/what-container)

<div class="left">
<img src="../img/singularity/container.png" width=75% style="background: #222222; border: none;"/>
</div>
<div class="right">
<img src="../img/singularity/vm.png" width=75% style="background: #222222; border: none;"/>
</div>

## Why to use containers

---

<div class="left">

* one can encapsulate software with all dependencies (libraries, data, ...) in a single executable package

* easy to share with others

* easy to run on clusters

* easy to reproduce previous results

</div>

<img src="../img/singularity/nuwro.png" width=40% style="float:right; background: #222222; border: none;"/>

## Singularity

---

<img src="../img/singularity/singularity-2.4-flow.png" style="background: #ffffff"/>

src: [singularity.lbl.gov](http://singularity.lbl.gov/)

#

## Basic usage

## Hello World - get an image

---

* grab Ubuntu 17.10 from Docker Hub (more tags: [link](https://hub.docker.com/_/ubuntu/))

<pre><code class="bash">$ singularity pull docker://ubuntu:17.10</code></pre>

<pre><code class="bash">$ ls -lh
razem 37M
-rwxr-xr-x 1 goran goran 37M gru  6 12:15 ubuntu-17.10.img
</code></pre>

## Hello World - execute

---

* to execute [command] from [img file]

<pre><code class="bash">singularity exec [img file] [command]</code></pre>

<pre><code class="bash"># ls from Host OS
$ ls --version
ls (GNU coreutils) 8.25

# ls from the container
$ singularity exec ubuntu-17.10.img ls --version
ls (GNU coreutils) 8.26
</code></pre>

## Hello World - kernel / user

---

* the same kernel

<pre><code class="bash"># Host OS
$ uname -a
Linux ux306-ift 4.10.0-40-generic #44~16.04.1-Ubuntu SMP Thu Nov 9 15:37:44 UTC 2017 x86_64 x86_64 x86_64 GNU/Linux

# container
$ singularity exec ubuntu-17.10.img uname -a
Linux ux306-ift 4.10.0-40-generic #44~16.04.1-Ubuntu SMP Thu Nov 9 15:37:44 UTC 2017 x86_64 x86_64 x86_64 GNU/Linux
</code></pre>

* the same user

<pre><code class="bash"># Host OS
$ whoami
goran

# container
$ singularity exec ubuntu-17.10.img whoami
goran
</code></pre>

## Hello World - HOME

---

* different content

<pre><code class="bash"># /opt/ at Host OS
$ ls /opt/
eZuceSRN google skypeforlinux zoom Zotero_linux-x86_64

# /opt/ in the container
$ singularity exec ubuntu-17.10.img ls /opt/

</code></pre>

* but `$HOME` the same

<pre><code class="bash"># Host OS $HOME
$ ls ~
git  nuwro 2017  Pobrane  Pulpit  singularity

# container $HOME
$ singularity exec ubuntu-17.10.img ls ~
Pobrane  Pulpit  git  nuwro 2017  singularity
</code></pre>

## Hello World - shell

---

* interactive shell within a container

<pre><code class="bash">$ singularity shell ubuntu-17.10.img 
Singularity: Invoking an interactive shell within container...

Singularity ubuntu-17.10.img:~/singularity>
</code></pre>

<pre><code class="bash">Singularity ubuntu-17.10.img:~/singularity> ls -w 80 /bin/
bash   dmesg	      gzip  	mount	       run-parts   true		     zegrep
cat    dnsdomainname  hostname	mountpoint     sed	       umount	     zfgrep
chgrp  domainname     kill	    mv	           sh	       uname	     zforce
chmod  echo	          ln	    nisdomainname  sh.distrib  uncompress	 zgrep
chown  egrep	      login	    pidof	       sleep	   vdir		     zless
cp     false	      ls	    ps	           stty	       wdctl	     zmore
dash   fgrep	      lsblk	    pwd	           su	       which	     znew
date   findmnt	      mkdir	    rbash	       sync	       ypdomainname
dd     grep	          mknod	    readlink       tar	       zcat
df     gunzip	      mktemp	rm	           tempfile    zcmp
dir    gzexe	      more	    rmdir	       touch	   zdiff
Singularity ubuntu-17.10.img:~/singularity> 
</code></pre>

## Hello World - log in as root

---

<pre><code class="bash"># sudo - log in as root
$ sudo singularity shell ubuntu-17.10.img 
Singularity: Invoking an interactive shell within container...

Singularity ubuntu-17.10.img:~> whoami 
root
</code></pre>

<pre><code class="bash"># root can install new software
Singularity ubuntu-17.10.img:~> apt update
Singularity ubuntu-17.10.img:~> apt install gcc
...
Singularity ubuntu-17.10.img:~> gcc --version
gcc (Ubuntu 7.2.0-8ubuntu3) 7.2.0
</code></pre>

<p style="color: red">Software is gone once you exit a container!</p>

## Hello World - writable mode

---

<pre><code class="bash"># in writable mode one can modify a container
# but a container must be also build with writable 
$ sudo singularity shell --writable ubuntu-17.10.img 
ERROR  : Unable to open squashfs image in read-write mode: Read-only file system
ABORT  : Retval = 255
</code></pre>

* compressed read-only squashfs file system suitable for production (default)
* writable ext3 file system suitable for interactive development (--writable option)
* writable (ch)root directory called a sandbox for interactive development (--sandbox option)

## Hello World - sandbox

---

<pre><code class="bash"># create a folder (sandbox) with ubuntu 17.10
$ sudo singularity build --sandbox ubuntu-dev docker://ubuntu:17.10

$ tree -L 2
.
├── ubuntu-17.10.img
└── ubuntu-dev
    ├── bin
    ├── boot
    ├── dev
    ├── environment -> .singularity.d/env/90-environment.sh
    ├── etc
    ├── home
    ├── lib
    ├── lib64
    ├── media
    ├── mnt
    ├── opt
    ├── proc
    ├── root
    ├── run
    ├── sbin
    ├── singularity -> .singularity.d/runscript
    ├── srv
    ├── sys
    ├── tmp
    ├── usr
    └── var
</code></pre>

## Hello World - modify sandbox

---

<pre><code class="bash"># shell sandbox in writable mode
$ sudo singularity shell --writable ubuntu-dev/

# update package list
Singularity ubuntu-dev:~> apt update

# install gcc
Singularity ubuntu-dev:~> apt install gcc

# exit the container
Singularity ubuntu-dev:~> exit
</code></pre>

## Hello World - production container

---

<pre><code class="bash"># create a frozen container
$ sudo singularity build ubuntu-with-gcc.img ubuntu-dev/

# and you have base OS with gcc compiler
$ singularity exec ubuntu-with-gcc.img gcc --version
gcc (Ubuntu 7.2.0-8ubuntu3) 7.2.0
</code></pre>

# 

## Singularity Recipes

## Singularity Recipes

---

* a single configuration file used to build a container

    * header
    * sections: help, setup, files, labels, environment, post, runscript, test
    * apps

* recipes make it easy to reproduce a container

<pre><code class="bash"># sudo singularity build [target] [source]

$ sudo singularity build my_container.img Singularity
</code></pre>

## Recipes - header

--- 

* in a header one defines base OS to start with

    * BootStrap: shub, docker, localimage, ...
    * From: container name / tags etc

* Example:

<pre><code class="nohighlight"># Singularity file content
BootStrap: docker
From: ubuntu:17.10
</code></pre>

## Section: help

---

* help section defines help for a container, e.g.

<pre><code class="nohighlight"># Singularity file content
BootStrap: docker
From: ubuntu:17.10

%help
We can't help everyone, but everyone can help someone.
</code></pre>

---

Example:

<pre><code class="bash"># build a container and check help
$ sudo singularity build my_container.img Singularity

$ singularity help my_container.img

We can't help everyone, but everyone can help someone.
</code></pre>

## Section: setup

---

* setup section defines actions run on Host OS (after Base OS is installed)

<pre><code class="nohighlight"># Singularity file content
BootStrap: docker
From: ubuntu:17.10

%setup
date > $SINGULARITY_ROOTFS/born.dat
</code></pre>

---

Example:

<pre><code class="bash"># $SINGULARITY_ROOTFS refers to / in a container
$ singularity exec my_container.img cat /born.dat
Thu Dec  7 10:48:00 CET 2017
</code></pre>

## Section: files

---

* files section is a list of files to copy into a container (after post)

<pre><code class="nohighlight"># Singularity file content
BootStrap: docker
From: ubuntu:17.10

%setup
touch my_local_file.dat

%files
my_local_file.dat /opt
</code></pre>

---

Example:

<pre><code class="bash"># one file was copied to many locations
$ singularity exec my_container.img ls /opt/
my_local_file.dat
</code></pre>

## Section: labels

---

* labels are used for container's metadata

<pre><code class="nohighlight"># Singularity file content
BootStrap: docker
From: ubuntu:17.10

%labels
Version 1.0
Maintainer Nobody
</code></pre>

---

Example:

<pre><code class="bash"># inspect checks metadata
$ singularity inspect my_container.img 
{
    "org.label-schema.usage.singularity.deffile.bootstrap": "docker",
    "MAINTAINER": "Nobody",
    ...
    "VERSION": "1.0",
    ...
}
</code></pre>

## Section: environment

---

* environment defines environmental variables (at runtime!)

<pre><code class="nohighlight"># Singularity file content
BootStrap: docker
From: ubuntu:17.10

%environment
    export MY_VAR=var1
    export USELESS_VAR=var2
</code></pre>

---

Example:

<pre><code class="bash"># get into the container
$ singularity shell my_container.img 

# check envs
Singularity my_container.img:~/singularity> echo $MY_VAR $USELESS_VAR
var1 var2
</code></pre>

## Section: post

---

* everything from post section is executed during built time (after Base OS is installed)

<pre><code class="nohighlight"># Singularity file content
BootStrap: docker
From: ubuntu:17.10

%post
    apt update
    apt install -y --no-install-recommends gcc
</code></pre>

---

Example:

<pre><code class="bash"># gcc was installed during post
$ singularity exec my_container.img gcc --version
gcc (Ubuntu 7.2.0-8ubuntu3) 7.2.0
</code></pre>

## Section: runscript

---

* runscript defines what to execute when container is *run*

<pre><code class="nohighlight"># Singularity file content
BootStrap: docker
From: ubuntu:17.10

%runscript
    echo "Hello, today is"
    date
</code></pre>

---

Example:

<pre><code class="bash"># when container is executed runscript section is run
$ singularity run my_container.img 
Hello, today is
Thu Dec  7 10:20:08 UTC 2017

$ ./my_container.img 
Hello, today is
Thu Dec  7 10:20:15 UTC 2017
</code></pre>


## Singularity - all together

---

<pre><code class="nohighlight"># Ubuntu 14.04 based container with ROOT 5 and NuWro 17.09

BootStrap: docker
From: ubuntu:14.04

%help
See NuWro User Guide at https://nuwro.github.io/user-guide/

%labels
Maintainer tomasz.golan@gmail.com
OS Ubuntu14.04
ROOT 5.99/06
NuWro 17.09

%environment
    export ROOTSYS=/opt/root/
    export PATH=$PATH:$ROOTSYS/bin/:/opt/nuwro/bin/
    export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$ROOTSYS/lib/

%post
    ##### INSTALL ALL DEPENDENCIES #####

    apt update && apt install -y --no-install-recommends \
        binutils \
        ca-certificates \
        cmake \
        dpkg-dev \
        g++ \
        gcc \
        gfortran \
        git \
        graphviz-dev \
        libavahi-compat-libdnssd-dev \
        libfftw3-dev \
        libftgl-dev \
        libglew1.5-dev \
        libgsl0-dev \
        libkrb5-dev \
        libldap2-dev \
        libmysqlclient-dev \
        libpcre3-dev \
        libqt4-dev \
        libssl-dev \
        libx11-dev \
        libxext-dev \
        libxft-dev \
        libxml2-dev \
        libxpm-dev \
        python-dev \
        xlibmesa-glu-dev \
        wget

    # clean after apt
    rm -rf /var/lib/apt/lists/*

    # create g77 symbolic link for pythia installer
    ln -s /usr/bin/gfortran /usr/bin/g77
    
    ##### INSTALL ROOT with PYTHIA #####
    
    # get ROOT
    cd /opt/
    wget https://root.cern.ch/download/root_v5.99.06.source.tar.gz
    tar -zxf root_v5.99.06.source.tar.gz
    rm root_v5.99.06.source.tar.gz

    # get PYTHIA
    wget http://neutrino.ift.uni.wroc.pl/files/pythia6.tar.gz
    tar -zxf pythia6.tar.gz
    rm pythia6.tar.gz
    cd pythia6 && ./makePythia6.linux && cd ..
    mkdir root/lib
    mv pythia6/libPythia6.so root/lib
    rm -rf pythia6

    # compile ROOT
    cd root && ./configure --with-pythia6-libdir=lib --enable-builtin-freetype
    make

    export ROOTSYS=/opt/root/
    export PATH=$PATH:$ROOTSYS/bin/
    export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$ROOTSYS/lib/

    ##### INSTALL NuWro #####

    cd /opt/

    # to avoid "Problem with the SSL CA cert (path? access rights?)"
    update-ca-certificates
    git clone -b nuwro_17.09 --depth 1 https://github.com/NuWro/nuwro.git
    cd nuwro
    make

%runscript
    exec /opt/nuwro/bin/nuwro
</code></pre>

## NuWro Container - run NuWro

---

<pre><code class="bash"># run NuWro
$ singularity exec NuWro-builds-master-1709.simg nuwro -p "beam_energy = 12345"
random_seed = 0
number_of_events = 500000
number_of_test_events = 2000000
save_test_events = 0
user_events = 0
user_params =
beam_type = 0
beam_energy = 12345
...

# or myroot
$ singularity exec NuWro-builds-master-1709.simg myroot
  *******************************************
  *                                         *
  *        W E L C O M E  to  R O O T       *
  *                                         *
  *   Version   5.99/06      3 April 2014   *
  *                                         *
  *  You are welcome to visit our web site  *
  *          http://root.cern.ch            *
  *                                         *
  * !!! THIS IS A PREPRODUCTION VERSION !!! *
  * Please use 5.34 for any real work until *
  * ROOT 6 is released.                     *
  *                                         *
  *******************************************

ROOT 5.99/06 (v5-99-06@v5-99-06, Apr 04 2014, 09:28:16 on linuxx8664gcc)
cling C/C++ Interpreter: type 
root [0] 

# or use interactive shell mode
$ singularity shell NuWro-builds-master-1709.simg 
Singularity: Invoking an interactive shell within container...

Singularity NuWro-builds-master-1709.simg:~/singularity> ls /opt/
nuwro  root
</code></pre>