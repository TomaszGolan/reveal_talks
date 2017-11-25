% The implementation of intranuclear cascade
% Tomasz Golan (on behalf of NuWro Collaboration)
% 03-05.12.2017, NuWro Workshop 2017

<div class='footer'>
Navigate:
<br> &emsp; PgDn / PgUp - next / previous slide
<br> &emsp; Space / Shift+Space - next / previous slide
<br> &emsp; Esc - expo mode
</div>

# 

## Cascade by Metropolis

## Intranuclear cascade

---

<div style="float: left">
* Script: N. Metropolis
* Director: J. Sobczyk
* Cast: C. Juszczak, T. Golan, K. Niewczas
</div>

<embed src="../img/cascade/cascade.swf" wmode="transparent" quality="high" width="750" height="750" style="margin-top: -150px" scale="default"/>

## Total cross section

---

*src: N. Metropolis et al., Phys. Rev. 110 (1958) 204*

<div class="left">

* Nucleons

    * $\sigma_{ii}$ - same isospin
    * $\sigma_{ij}$ - different isospin

* Pions

    * $\sigma_{ii}$ - $\pi^+p$ or $\pi^-n$
    * $\sigma_{ij}$ - $\pi^-p$ or $\pi^+n$

</div>

<br><img src="../img/cascade/metro_tab1.png" class="right"/>

## Total cross section (low energies)

---

<div class="left">

*Nucleons below $335$ MeV*

<img src="../img/cascade/metro_nucl_eq.png" width=75%/>

* $\beta$ - velocity of incoming nucleon

</div>
<div class="right">

*Pions below $51$ MeV*

<img src="../img/cascade/metro_pion_eq.png" width=75%/>

* $\gamma$ - total energy in $m_{\pi^0c^2}$

* $\eta$ - momentum in $m_{\pi^0c}$

</div>

## Interaction parameters (nucleons)

---

<div class="left">

* $f_{inel}$ - the fraction of pion production

* $f_{\pi}$ - the fraction of single pion production

* angular distribution in CMS

$$\frac{d\sigma}{d\Omega} = A\cos^4\theta + B\cos^3\theta + 1$$

</div>

<img src="../img/cascade/metro_nucl_tab.png" class="right"/>

## Interaction parameters (pions)

---

<div class="left">

* $f_{inel}$ - the fraction of pion production

* $f_{\pi}$ - the fraction of single pion production

* angular distribution in CMS

$$\frac{d\sigma}{d\Omega} = A\cos^4\theta + B\cos^3\theta + 1$$

* $f_{CE}$ - the fraction (of inelastic events) that is charge exchange

</div>

<img src="../img/cascade/metro_pion_tab.png" style="float: right" width=40%/>

#

## Cascade algorithm

## The main loop

---

<div class="left">

General idea

<pre><code class='nohighlight'>
until there are particles to propagate
until there are nucleons in nucleus

    take a particle from the queue
    calculate free path
    move particle

    if there is no interaction
        put the particle back to the queue
    otherwise 
        generate interaction
        put all created particles
        into the queue
</code></pre>
</div>
<div style="height: 600px; overflow: auto" class="right">
<img src="../img/cascade/main_loop.png"/>
</div>

## Free path

---

* The probability of passing $\lambda$ without any interactions <br><br> $$ P(\lambda) = e^{-\lambda / \tilde\lambda}$$ <br>
* Mean free path <br><br> $$\tilde\lambda = \left[\sigma_p\rho_p(r) + \sigma_n\rho_n(r)\right]^{-1}$$ <br>
* Free path (an interaction happens if $\lambda < 0.2$ fm) <br><br> $$\lambda = - \tilde\lambda\cdot\ln(\text{rand[0,1]})$$ <br>

## N-N interactions

---

<div style="height: 600px; overflow: auto">
<img src="../img/cascade/nucl_loop.png" width=60%/>
</div>

## $\pi$-N interactions

---

<div style="height: 600px; overflow: auto">
<img src="../img/cascade/pion_loop.png" width=60%/>
</div>

#

## Improvements of cascade model in NuWro (nucleons)

*all changes are done in a way to keep the structure the same*

## N-N inelastic

---

<img src="../img/cascade/metro_nucl_inel.png" width=60%/>

*based on experimental data*

## proton-Carbon scattering

---

<img src="../img/cascade/metro_nucl_plot.png" width=80%/>

## N-N nuclear correction

---

*src: V.R. Pandharipande and S.C. Pieper, PRC45 (1992) 791*

<div class="left">

<img src="../img/cascade/nucl_medium_eq.png"/>

* effective mass calculated using potential form *R.B. Wiringa, PRC38 (1988) 2967*

</div>
<div style="height: 500px; overflow: auto" class="right">
<img src="../img/cascade/nucl_medium.png"/>
</div>

## ArgoNeut data

---

<img src="../img/cascade/argoneut.png" width=50%>

*src: K. Partyka, “Exclusive 1mu+np topologies in ArgoNeuT”, NuInt12, 2012 <br> O. Palamara, “QE or not QE, that is the question”, INT workshop, Seattle, 2013*


## Binding energy

---

* binding energy is subtracted from nucleon energy in the primary vertex

* the value is stored and use later in the cascade 

* nuclear potential is defined as <br><br> $$V(r) = E_F(r) + E_B$$ <br>

* nucleon is jailed in a nucleus if <br><br> $$T_k < V(r)$$ <br>

#

## Improvements of cascade model in NuWro (pions)

*all changes are done in a way to keep the structure the same*

## Low-energy pions

---

* for low-energy pions ($T_k < 350$ MeV) E. Oset et al (*Phys. Lett. B165 (1985) 13–18*) is used

* $\Delta$ width modification in nuclear matter <br><br> $$\frac{1}{2}\tilde\Gamma \rightarrow \frac{1}{2}\tilde\Gamma - \text{Im}\Sigma_\Delta$$ <br>

    * $\tilde\Gamma$ - reduced $\Delta$ width (due to Pauli blocking)
    * $\Sigma_\Delta$ - $\Delta$ self-energy

## $\Delta$ self-energy

---

* the parametrization of $\Delta$ self-energy is taken from *E. Oset et al., Nucl. Phys. A468 (1987) 631–652* <br><br> $$\text{Im}\Sigma_\Delta(E_\pi) = -\left[C_Q(\rho/\rho_0)^\alpha + C_{A2}(\rho/\rho_0)^\beta + C_{A3}(\rho/\rho_0)^\gamma\right]$$ <br>

* $C_Q$, $C_{A2}$, $C_{A3}$, $\alpha$, $\beta$, $\gamma$ - functions of pion energy

* $C_{A}$ - pion absorption

* implementation: cross sections 2D tables ($T_k$ and $\rho$)

## Comparison with Oset et al.

---

<img src="../img/cascade/oset_comp.png" width=60%/>

## Comparison with Oset et al.

---

<img src="../img/cascade/oset_comp_2.png" width=60%/>

## High-energy pions

---

<div class="left"><br><br>

* Metropolis-like tables based on data

* new parameter $f_{2\pi}$ gives the fraction of double pion production among all non-single pion production processes

</div>
<div style="height: 600px; overflow: auto" class="right">
<img src="../img/cascade/pion_he_tab.png"/>
</div>

## Charge fragmentation

---

<div class="left"><br>

* for single pion production see a table on the right

* for double pion production $ii$: half is assumed to be with neutal pion

* all other cases - equally likely

</div>
<div style="height: 600px; overflow: auto" class="right">
<img src="../img/cascade/pion_charge_fragm.png"/>
</div>

## Angular distributions

---

* for QEL and CEX $\pi$-N scattering (in CMS) <br><br> $$\frac{d\sigma}{d\Omega} \sim \sum\limits_{i=0}^{7}a_i\cos^i\theta$$ <br>

* with $a_i$ being extracted from [SAID](http://gwdac.phys.gwu.edu/) model

* separately for each channel ($ii$, $ij$, $0$, and *CEX*)

## Pion-Carbon scattering

---

<div style="height: 600px; overflow: auto">
<img src="../img/cascade/pion_carbon.png" width=60%/>
</div>
