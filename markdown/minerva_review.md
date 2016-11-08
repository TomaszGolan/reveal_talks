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
| Generation 1 | $\nu_\mu$ muon + proton | PRD 91 (2015) 071301 |
| Generation 1 | $\nu_\mu$ CC $\pi^\pm$ | PRD 92 (2015) 092008 |
| Generation 1 | $\bar{\nu_\mu}$ CC $\pi^0$ | PLB 749 (2015) 130 |
| Generation 1 | Coherent $\pi$ | PRL 113 (2014) 261802 |
| Generation 1 | CC target ratios | PRL 112 (2014) 231801 |

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

## CCQE measurements

## CCQE-"true" aka "1-track"

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


## CCQE-"like" aka "muon+proton"

---

| **Flux** | **Analysis** | **Reference** |
|:--------:|:------------:|:-------------:|
| Generation 1 | $\nu_\mu$ muon + proton | PRD (2015) 071301 |

<br>

* CC $\nu_\mu$ on $CH$

* require a muon, at least one proton, and no pions in the final state

* based on hadronic kinematics

* *proton kinetic energy > 110 MeV*

## $\nu_\mu$ CCQE-like

---

<img src="../img/minerva/ccqe_like_numu.png" class=left>
<img src="../img/minerva/ccqe_like_numu_ratio.png" class=right>

#

## Pion production measurements

## Charged pion production

---

<div class=left>

CC $1\pi^\pm$

---

* require a muon and exactly one charged pion

* $W < 1.4$ GeV

</div>

<div class=right>

CC $N\pi^\pm$

---

* require a muon and at least one charged pion

* $W < 1.8$ GeV

</div>

## Invariant mass

---

<div class=left>

<br>

$$E_\nu = E_\mu + E_{recoil}$$
$$Q^2 = 2E_\nu(E_\mu  - |\vec p_\mu|\cos\theta_\mu) - m_\mu^2$$
$$W_{exp}^2 = M_p^2 - Q^2 + 2M_pE_{recoil}$$

<br>

* $E_{recoil}$ is measured colorimetrically

</div>

<img src="../img/minerva/wexp.png" width=40%>

## Backrounds vs invariant mass

---

<img src="../img/minerva/wexp_bkg.png">

## CC $1\pi^\pm$

---

<img src="../img/minerva/cc1pic.png">

## CC $N\pi^\pm$

---

<img src="../img/minerva/ccnpic.png">

## $\bar\nu_\mu$ CC $1\pi^0$

---

* require a muon and a single neutral pion (visible as two photons)
* about 70% of background - multipion events $\pi^0 + \pi^\pm$
    * $pi^\pm$ is not tracked
    * $\pi^-\rightarrow\pi^0$
* the rest of the background is mostly due to energy deposit by $\pi^-$ and neutrons misidentified as photons

## Invariant mass of $\gamma\gamma$

---

<div class=left>

<br><br>

The $\gamma\gamma$ invariant mass is reconstructed from the photon energies ($E_1$, $E_2$):

$$m_{\gamma\gamma}^2 = 2E_1E_2(1 - \cos\theta_{\gamma\gamma})$$

</div>

<img src="../img/minerva/mgg.png" class=right>

## Differential cross sections

---

<img src="../img/minerva/cc1pi0_mom.png" class=left>
<img src="../img/minerva/cc1pi0_ang.png" class=right>

## Coherent pion production

---

<img src="../img/minerva/coh_candidate.png">

* require two final state particles: $\mu^\pm$ and $\pi^\mp$ and no extra visible recoil

## Background

---

<img src="../img/minerva/coh_bkg.png">

## Low energy transfer requirement

---

<img src="../img/minerva/coh_tcut.png">

## Total cross section

---

<img src="../img/minerva/coh_total.png">

## Differential cross section (energy)

---

<img src="../img/minerva/coh_energy.png">

## Differential cross section (angle)

---

<img src="../img/minerva/coh_angle.png">


#

## Other measurements highlights

## Inclusive $\nu_\mu$ CC ratios

---

<div class=left>

<img src="../img/minerva/target_ratios1.png" width=75%>

* shadowing at low $x$

* no MEC in simulations (high $x$ dominated by QE)

</div>

<img src="../img/minerva/target_ratios2.png" width=30%>

## DIS $\nu_\mu$ CC ratios

---

<div class=left>

<img src="../img/minerva/dis_ratios1.png" width=75%>

* $W > 2$ GeV and $Q^2 > 1$ GeV$^2$

* $E_\nu$ up to 50 GeV

</div>

<img src="../img/minerva/dis_ratios2.png" width=30%>

## Available energy vs momentum transfer

---

<div class=left>

<br>

* $E_{avail}$ - sum of proton and charged pion kinetic energy and neutral pion, electron, and photon total energy

</div>

<img src="../img/minerva/availableE.png" width=50%>

## NC diffractive $\pi^0$ production

---

<div class=left>

<br>

* The most plausible source of the excess seen in the data is diffractive NC $\pi^0$ production from hydrogen in the scintillator target of MINERvA.

</div>

<img src="../img/minerva/nc_diffractive.png" width=50%>

## CC pion production (muon variables)

---

<div class=left>

<br>

* $\nu$-CC($\pi^+$) and $\bar\nu$-CC($\pi^0$)

* total cross section

* differential cross sections:

    * muon momentum
    * muon angle
    * $Q^2$

</div>

<img src="../img/minerva/ccpi_muon.png" width=30%>

## Kaon production

---

<img src="../img/minerva/kaon_production.png" class=left>
<img src="../img/minerva/kaon_coh.png" class=right>

#

## Summary

---

* MINERvA offers an unique opportunity to measure neutrino cross section on different nuclear targets

* There is still a lot of collected data to analyze (e.g. in nuclear target region)

* Medium energy data will allow to study more precisely DIS (and transition region?)
