% GENIE Update
% Tomasz Golan
% *On behalf of Generator Group* <br> <br> MINERvA Week June 2016

### On the last GENIE Update

---

* Effective spectral function by A. Bodek et al.
* Very high energy extension to 5 TeV
* Inclusive eta production
* Berger-Sehgal resonant pion model with MiniBooNE tuning
* Improved hA FSI model
* Single kaon production
* Flux driver updates
* GSL for all integration routines
* See [docdb-11836](http://minerva-docdb.fnal.gov:8080/cgi-bin/ShowDocument?docid=11836)

---

### What's new in GENIE 2.11

---

* One-body current QEL with LFG and RPA gas by Nieves et al.
* Two-body current interactions by Nieves et al
* hN FSI improvements
* Kaon FSI
* Resonance model update
* z-expansion
* New models for coherent pion production

---

### QEL + RPA

---

<div class="left"><br>

The full description of QEL events is obtained by the inclusion of both:

* two-body current interactions (2p2h)

* random phase approximation (RPA)

</div>
<div class="right">

<img src="../img/genie/nieves_qel.png" width=100%>
*J. Nieves et al. [arXiv:1310.7091 [hep-ph]](http://arxiv.org/abs/1310.7091)*

</div>

---

### Two-body current interactions

---

<div class="left">

* Interaction occurs on two correlated nucleons (SRC)

* No meson production


<img src="../img/nuwro/src_2p2h.png" width=50%>

</div>
<div class="right">

<img src="../img/nuwro/nieves_kinematics.png" width=100%>
*Plot taken from NuWro*

</div>

---

### hN2015 FSI

---

<div class="left">

* pion-nucleon cross section based on Oset et al. model

    * absorption is introduced through the modification of $\Delta$ self-energy in nuclear matter

* the correction to nucleon-nucleon cross section is included

    * effective mass (potential) changes free xsec in nuclear matter

</div>

<div class="right"><br>

<img src="../img/genie/total_correction_pp.png" width=100%>

</div>

---

### Kaon FSI

---

<div class="left"><br><br>

* charge exchange added

* absorption improved

* at this point, only for hA

</div>

<div class="right">

<img src="../img/genie/kaon_fsi.png" width=100%>

</div>

---

### Resonance model

---

* Model parameters updated to PDG 2014

* $\Delta \rightarrow \pi N$ angular distribution based on Rein-Sehgal

* $\Delta \rightarrow N \gamma$ improved kinematics and W dependence (based on MiniBooNE)

---

### z-expansion

---

<div class="left"><br>

* Parametrization of form factors:

$$F_A(q^2) = \sum\limits_{k=0}^{k_{max}} a_k z(q^2)^k$$
$$z(q^2, t_{cut}, t_0) = $$
$$\frac{\sqrt{t_{cut} - q^2} - \sqrt{t_{cut} - t_0}}{\sqrt{t_{cut} - q^2} + \sqrt{t_{cut} - t_0}}$$

where $t$, $a_k$ are arbitrary numbers

</div>
<div class="right">

<img src="../img/genie/zexp_minerva.png" width=100%>
*A. Meyer et al. [arXiv:1603.03048 [hep-ph]](http://arxiv.org/abs/1603.03048)*

</div>

---

### Coherent pion production

---

<div class="left"><br>

Two new coherent pion production models:

* Berger-Sehgal

* Alvarez-Ruso

</div>
<div class="right">

<img src="../img/genie/coh_bs_total.png" width=100%>

</div>

---

# THE END
