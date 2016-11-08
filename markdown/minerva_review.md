% MINERvA Review
% Tomasz Golan
% Neutrino Seminar, 14.11.2016

## Postdoc summary

---

<div class=left>
**University of Rochester**

*Department of Physics and Astronomy*

MINERvA (prof. Kevin McFarland)

---

* flux systematic errors
* physics reconstruction using machine learning
* generator group coordinator
* production group leader
</div>

<div class=right>
**Fermi National Accelerator Laboratory**

*Scientific Computing Division*

GENIE (dr. Gabe Perdue)

---

* nuclear effects in GENIE
* automated validation system
* "user support"
</div>

#

## <font color=red>M</font>ain <font color=red>IN</font>jector <font color=red>E</font>xpe<font color=red>R</font>iment <font color=red>$\nu$-A</font>

## MINERvA Experiment

---

<div class=left>

* MINERvA is a neutrino-scattering experiment at Fermilab
* Collaboration of about 50-100 physicist
* NuMI beam is used to measure cross section for neutrino-nucleus interactions
* The detector includes several different nuclear targets

</div>

<img src="../img/minerva/minerva.jpg" width=30%>

## Detector

---

<img src="../img/minerva/minerva_detector.png" width=75%>


## Nuclear targets

---

<img src="../img/minerva/minerva_nuclear_targets.jpg" width=50%>

## NuMI Beamline

----

<img src="../img/minerva/numi_beamline.png" width=50%>

<iframe data-autoplay width="420" height="315" src="https://www.youtube.com/embed/U_xWDWKq1CM"></iframe>

## Low vs Medium Energy

---

<div class=left><br>

* by changing distance between horns one can change energy spectrum

* by changing horns polarization one can switch between neutrino and anti-neutrino mode

</div>

<img src="../img/minerva/numi_spectrum.png" width=30%>

#

## Flux

## NuMI Beam Simulation

---

<img src="../img/minerva/numi_beamline_example.png" width=75%>

* Flux simulation starts with a Geant4 with the NuMI geometry

* All of the information about interactions leading to neutrino are stored

* The results of the simulation are corrected by external data

* *Similar approach to the one T2K used*

## Hadron Scattering Data

---

* NA49 - charged hadron production in proton scattering off thin targets

* *FLUKA is used to scale proton energy from $158$ to $120$ GeV*

* MIPP - charged hadron production on thin target and NuMI target replica

## NA49 Data

---

<img src="../img/minerva/na49_data.png" width=75%>

## MIPP data

---

<img src="../img/minerva/mipp_data.png" width=50%>

## Reweighting

---

$$w_{HP} = \frac{f_{data}(x_F, p_T, E)}{f_{MC}(x_F, p_T, E)}, ~~~~~ f\equiv\frac{E}{\sigma}\frac{d^3\sigma}{dp^3}$$

* Using external hadron production data events are weighted using the above formula

* An event is reweighted on "interaction-by-interaction" basis

* Whenever possible - "thick" target data is used

## Uncertainties

---

<div class=left>

* *Many-Universes* method is used to propagate external data uncertainties to our flux

* for each universe (*u*) data central value is shifted (respect to data uncertainties)

$$w_u \sim \prod_i w_{HP, u, i}$$

</div>

<img src="../img/minerva/multiuniverse.png" class=right>

#

## Flux history

## Flux generations

---

* Generation 0 -> no MIPP data

* Generation 1 -> MIPP thin target data + other improvements

* Generation 2 -> MIPP thick target data + other improvements

## Flux vs publications

---

| **Flux** | **Analysis** | **Reference** |
|:--------:|:------------:|:-------------:|
| Generation 0 | $\nu_\mu$ CCQE | PRL 111 (2013) 022502 |
| Generation 0 | $\bar{\nu_\mu}$ CCQE | PRL 111 (2013) 022501 |
| Generation 1 | CC target ratios | PRL 112 (2014) 231801 |
| Generation 1 | Coherent $\pi$ | PRL 113 (2014) 261802 |
| Generation 1 | $\nu_\mu$ muon + proton | PRD (2015) 071301 |
| Generation 1 | $\bar{\nu_\mu}$ CC $\pi^0$ | PLB 749 (2015) 130 |

## Generation 0 vs Generation 2 (thick off)

---

<img src="../img/minerva/ratio_gen0_ppfx_def_numu.png">

## Generation 1 vs Generation 2 (thick off)

---

<img src="../img/minerva/spec_rat_gen2_gen1_fhc_numu.png" width=45%>

##  Generation 2 (thin vs thick)

---

<img src="../img/minerva/ppfx_thin.png" float=left width=40%>
<img src="../img/minerva/ppfx_thick.png" float=right width=40%>

## Generation 2: ratio

---

<img src="../img/minerva/thick_vs_thin.png">

#

## Flux constraints

## $\nu e$ constraint

---

<div class=left>

<img src="../img/minerva/nue_events.png">

* Weighting up universes that agree better with data

</div>

<div class=right>

* Experimental signature is a very forward single electron in the finale state

<img src="../img/minerva/nue_signal.png">

</div>

## Generation 1 + $\nu e$

---

<img src="../img/minerva/spec_rat_gen2_gen1_fhc_numu.png" width=45%>
<img src="../img/minerva/spec_rat_gen2_gen1_nu-e_numu.png" width=45%>


## low-$\nu$ method

---

$$\frac{d\sigma}{d\nu} = A + B\frac{\nu}{E} - \frac{C}{2}\frac{\nu^2}{E^2}$$

* Differential cross-section can be expressed by the above formula

* It is a constant for $\frac{\nu}{E} \rightarrow 0$

* It can be used to constraint the flux prediction (with high-energy normalization taken from other measurements, like NOMAD)

## low-$\nu$ vs generation 2

---

<img src="../img/minerva/thick_thin_low.png">

#

## CCQE results

## CCQE "true" aka "1-track"

---

| **Flux** | **Analysis** | **Reference** |
|:--------:|:------------:|:-------------:|
| Generation 0 | $\nu_\mu$ CCQE | PRL 111 (2013) 022502 |
| Generation 0 | $\bar{\nu_\mu}$ CCQE | PRL 111 (2013) 022501 |

<br>

* require only muon track

* target -> scintillator (CH)

## High-$Q^2$ candidates

---

<img src="../img/minerva/ccqe_signal_highQ.png" width=70%>

## Low-$Q^2$ candidates

---

<img src="../img/minerva/ccqe_signal_lowQ.png" width=70%>

## Background

---

<img src="../img/minerva/ccqe_signal_bkg.png" width=70%>

## Background subtraction

---

<img src="../img/minerva/ccqe_bkg_scaling.png" width=70%>

## $\nu_\mu$ CCQE

---

<img src="../img/minerva/ccqe_numu.png" class=left>
<img src="../img/minerva/ccqe_numu_ratio.png" class=right>

## $\bar\nu_\mu$ CCQE

---

<img src="../img/minerva/ccqe_numubar.png" class=left>
<img src="../img/minerva/ccqe_numubar_ratio.png" class=right>
