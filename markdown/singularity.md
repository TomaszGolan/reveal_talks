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

<pre><code class="bash">$ singularity exec ubuntu-17.10.img ls --version
ls (GNU coreutils) 8.26

$ ls --version
ls (GNU coreutils) 8.25
</code></pre>

## Hello World - kernel / user

---

* the same kernel

<pre><code class="bash">$ uname -a
Linux ux306-ift 4.10.0-40-generic #44~16.04.1-Ubuntu SMP Thu Nov 9 15:37:44 UTC 2017 x86_64 x86_64 x86_64 GNU/Linux

$ singularity exec ubuntu-17.10.img uname -a
Linux ux306-ift 4.10.0-40-generic #44~16.04.1-Ubuntu SMP Thu Nov 9 15:37:44 UTC 2017 x86_64 x86_64 x86_64 GNU/Linux
</code></pre>

* the same user

<pre><code class="bash">$ whoami
goran

$ singularity exec ubuntu-17.10.img whoami
goran
</code></pre>

## Hello World - HOME

---

* different content

<pre><code class="bash">$ ls /opt/
eZuceSRN google skypeforlinux zoom Zotero_linux-x86_64

$ singularity exec ubuntu-17.10.img ls /opt/

</code></pre>

* but `$HOME` the same

<pre><code class="bash">goran@ux306-ift:~/singularity$ ls ~
git  nuwro 2017  Pobrane  Pulpit  singularity

goran@ux306-ift:~/singularity$ singularity exec ubuntu-17.10.img ls ~
Pobrane  Pulpit  git  nuwro 2017  singularity
</code></pre>

## Hello World - shell

---

* interactive shell within a container

<pre><code class="bash">$ singularity shell ubuntu-17.10.img 
Singularity: Invoking an interactive shell within container...

Singularity ubuntu-17.10.img:~/singularity> ls -w 80 /bin/
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