% Singularity containers for NuWro
% Tomasz Golan
% SPGN, Styczeń 2018

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

## NuWro containers

## Useful links

---

* [NuWro User Guide / Singularity](https://nuwro.github.io/user-guide/singularity/)

* [My last talk on Singularity](http://tomaszgolan.github.io/reveal_talks/html/singularity.html)

* [Singularity Hub with NuWro builds](https://singularity-hub.org/collections/265)

* [Singularity recipes for NuWro](https://github.com/NuWro/builds)

## Get a container

---

<div class="left">

* One can easily get a Singularity container using:

```
$ singularity pull shub://NuWro/builds:[tag]
```

<br>

*Default image name:*

```
[user]-[repo]-[branch]-[tag].simg
```

</div>

<img src="../img/singularity/sing-get.gif" style="border: none;" class="right">

## Running NuWro from container I

---

<div class="left">

* To run NuWro simply use

```
$ singularity run [img file]
```

<br>

*Command line arguments may be passed as usual:*

```
$ singularity run [img] -p "param = value"
```

</div>

<img src="../img/singularity/sing1.gif" style="border: none;" class="right">

## Running NuWro from container II

---

<div class="left">

* Containers may be run as regular executable

```
$ ./[img file]
```

<br>

*Command line arguments may be passed as usual:*

```
$ ./nuwro.simg -p "param = value"
```

</div>

<img src="../img/singularity/sing2.gif" style="border: none;" class="right">

## Running NuWro from container IIIa

---

<div class="left">

* Containers may be run in an interactive mode

```
$ singularity shell [img file]
```

<br>

*User has access to any application from a container and a local $HOME.*

</div>

<img src="../img/singularity/sing3.gif" style="border: none;" class="right">

## Running NuWro from container IIIb

---

<div class="left">

* ROOT and NuWro are installed in /opt/ folder

* One can run NuWro or myroot from a container

* One can use only ROOT installation to compile local copy of NuWro

</div>

<img src="../img/singularity/sing4.gif" style="border: none;" class="right">

#

## Summary

---


* Easy access to every NuWro release since 17.09

* No need to install ROOT with Pythia6 and all dependencies

* Running containers on a grid are possible without root permissions

* There is also a container with ROOT only, which can be used to compile local copy of NuWro