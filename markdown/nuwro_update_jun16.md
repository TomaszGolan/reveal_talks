% NuWro Update
% Tomasz Golan
% *On behalf of Generator Group* <br> <br> MINERvA Week June 2016

### Recent developments

---

* Berger-Sehgal for coherent pion production

* Non-resonant background scaling

* Reweighting tools

* Effective momentum and density dependent potential

* Hadronic states for 2p2h

* eWro

---

### Berger-Sehgal

---

<img src="../img/nuwro/bs_coh.png" width=100%>

* some old NuWro samples were made with RS model, but now BS is default and
will be used if not specified in a request

---

### Non-resonant background

---

<div class="right">
Transition region in NuWro:
<img src="../img/nuwro/nonres_bkg.png" width=100%>
</div>
<div class="left"><br>

* There is a new parameter in params.txt: bkgrscaling

* It can be used to scale non-resonant background (by modifying $\alpha$)

<br>
</div>

---

### FSI reweighting

---

> Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.
>
<div style="text-align:right;">Francis of Assisi</div>

---

* FSI reweighting tool for NuWro by Patrick Stowell and Luke Pickering

* Status: work in progress

---


### Effective potential

---

<div class="left">
<br>Binding energy depends on both nucleons momentum and location.
</div>
<div class="right">
<img src="../img/nuwro/momrhov.png" width=100%>
</div>

* initial momentum random from Fermi sphere (assuming local Fermi gas)

* outgoing momentum random in CMS; Pauli blocking included (in LAB)

* in current implementation final nucleon is not affected by FSI

* final momentum adjusted according to: $E \rightarrow E + V$
(or nucleus in excited state if nucleon unable to leave)

---

### 2p2h contribution

---

There are two source of 2p2h final states:

* spectral function in (one body) QE dynamics

* two-body current interactions

    * TEM

    * Nieves

[tbc]

---

### eWro

---

<div class="left"><br>

* electron-nucleus interactions to test nuclear models in NuWro

* not really straightforward as total electron cross section is $\infty$...

</div>
<div class="right">
<img src="../img/nuwro/ewro.png" width=100%>
<br>
</div>

---
