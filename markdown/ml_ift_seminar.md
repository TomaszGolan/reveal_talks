% Machine Learning for MINERvA Physics Reconstruction
% Tomasz Golan
% IFT seminar, 10.03.2017

## Outline

---

* [Motivation](#motivation)
* [Introduction to MINERvA](#minerva)
* [Introduction to Machine Learning](#machine-learning)

#

## Motivation

*(for MINERvA experiment)*

## Neutrino oscillations

---

<div class='left'>
<hr style="height:10pt; visibility:hidden;" />

* three neutrino flavors: electron, muon, tau
* created in one of the flavors can be detected with a different flavor later
* The Nobel Price in Physics 2015: Takaaki Kajita and Arthur B. McDonald (Super-K, SNO)

</div>
<div class='right'>

<img src="../img/neutrino/neutrino_oscillations.jpg" width=100%>
src: [nobelprize.org](http://www.nobelprize.org/nobel_prizes/physics/laureates/2015/popular-physicsprize2015.pdf)

## Oscillation experiment

---

<svg id="nu_osc_exp" width="900" height="600"></svg>
<script src="../js/nu_osc_exp.js"></script>

#

## MINERvA

<font color=red>M</font>ain <font color=red>IN</font>jector <font color=red>E</font>xpe<font color=red>R</font>iment <font color=red>$\nu$-A</font>

## MINERvA Experiment

---

<div class=left>
<hr style="height:10pt; visibility:hidden;" />

* MINERvA is a neutrino-scattering experiment at Fermilab
* Collaboration of about 50-100 physicist
* NuMI beam is used to measure cross section for neutrino-nucleus interactions
* The detector includes several different nuclear targets

</div>

<img src="../img/minerva/minerva.jpg" width=30%>

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
<div class=right>

<img src="../img/minerva/numi_spectrum.png" width=80%>

</div>

## LE vs ME analyses

---

<div class=left><br>

* LE analyses: almost done
* ME analyses: starting now
    * more energy
    * more particles in the final state
    * more *messy* events
    * more problems with the reconstruction

</div>
<div class=right><br>

<img src="../img/minerva/le_event_example.jpg" width=100%>

*LE event example*

</div>

## MINERvA Detector

---

<img src="../img/minerva/minerva_detector.png" width=75%>


## Nuclear targets

---

<img src="../img/minerva/minerva_nuclear_targets.jpg" width=50%>

## Event example 1

---

<img src="../img/minerva/event_example1.png" width=60%>
<br>*courtesy of G. Perdue*

## Event example 2

---

<img src="../img/minerva/event_example2.png" width=60%>
<br>*courtesy of G. Perdue*

## Vertex Reconstruction

---

<div class=left>
<hr style="height:10pt; visibility:hidden;" />

* tracking based algorithms fail for high energy events

* "by eye" method is very often more accurate

* idea: use algorithms for images analysis and pattern recognition

</div>
<div class=right>

<img src="../img/minerva/event_example1_zoom.png" width=100%>

</div>

#

## Machine Learning

## Why ML?

---

<div class='left'>

* [ImageNet](http://image-net.org) is an image database

* Annual competition for classification
    * 2010: 71.8%
    * 2011: 74.3%
    * 2012: 84.0%
    * 2013: 88.2%
    * 2014: 93.3%
    * 2015: <font color=red>96.4%</font>

* Humans: about <font color=red>95%</font>
</div>
<div class='right'>

* Why humans fail?

<img src='../img/ml/alaskan_malamute.jpg'>

Siberian Husky or Alaskan Malamute?

</div>

## Understanding CNN

---

<font size=6>

> If you can't explain it simply, you don't understand it well enough.
>
<div style="text-align:right;">Albert Einstein</div>

</font>

---

<br>

* lets start from [linear regression](#linear-regression)
* then introduce a [single neuron](#single-neuron) and [neural networks](#neural-networks)
* to finally get to [convolutional neural networks](#convolutional-neural-networks)

#

## Linear Regression

## Notation

---

* Hypothesis (for convenience $x_0 = 1$):
$$h(x) = w_0 + w_1x_1 + ... + w_nx_n = \sum\limits_{i=0}^n w_i x_i = w^T x$$
* Cost function:
$$f(w) = \frac{1}{2}\sum\limits_{i=0}^n\left(h (x^{(i)}) - y^{(i)}\right)^2$$
* Learning step (gradient descent, $\alpha$ - training rate):
$$w_j = w_j - \alpha\frac{\partial f(w)}{\partial w_j} = w_j + \alpha\sum\limits_{i=0}^n\left(y^{(i)} - h (x^{(i)})\right)x_j$$

## Example

---

<img src="../img/ml/linear_regression_learning.gif" class="left">
<div class='right'><br>

- **epoch** = one loop over the whole training sample

- for each feature vector weights are updated using **gradient descent** method

</div>

## Classification

---

<img src="../img/ml/linear_classification_learning.gif" class="left">
<div class="right"><br>

- target: $y = 0, 1$

- not really efficient for classification

- imagine having some data ~ 100

- logistic function does better job
</div>

## Classification

---

<img src="../img/ml/linear_classification_learning.gif"  class="left">
<img src="../img/ml/linear_classification_learning_far_data.gif" class="right">


## Logistic function

---

<img src="../img/ml/sigmoid_function.png" class='right'>
<div class='left'><br>

* Logistic function:
$$g(z) = \frac{1}{1 + e^{-z}}$$

* Hypothesis:
$$h(x) = g(w^Tx) = \frac{1}{1 + e^{-w^Tx}}$$
</div>

## Results

---

<img src="../img/ml/logistic_classification.gif"  class="left">
<img src="../img/ml/logistic_classification_far_data.gif" class="right">

## Why do we need neural networks?

---

- We can do classification

- We can do regression

- But real problems are nonlinear

## Non-linear problem

---

<img src="../img/ml/point_in_out_circle.png" width=100% style="background-color: white;">

## Cheat

---

<div class="left">

* Feature vector:
$$(x,y) \rightarrow (x,y,x^2,y^2)$$

* Hypothesis:
$$h (x) = \frac{1}{1 + e^{-w_0 - w_1x - w_2y - w_3x^2 - w_4y^2}}$$

*In general, adding extra dimension by hand would be hard / impossible.
Neural networks do that for us.*
</div>
<img src="../img/ml/point_in_out_circle_sigmoid.png" width=40%>

#

## Neural Networks

## Neuron

---

<img src="../img/ml/single_neuron.png" class="left">
<div class="right"><br>

- neuron = activation function:
    - linear
    - binary step
    - logistic
    - tanh
    - relu
    - ...

</div>

## AND gate

---

<div class="left">
<img src="../img/ml/single_neuron.png" width=60%>

| | | | | |
|:---:|:---:|:---:|:---:|:---:|
| $x_1$ | 0 | 1 | 0 | 1 |
| $x_2$ | 0 | 0 | 1 | 1 |
| AND | 0 | 0 | 0 | 1 |

</div>
<div class="right"><br>

- Hypothesis = logistic function:

$$h(x) = \frac{1}{1 + e^{-w^Tx}}$$

---

Intuition:

- $w_0 < 0$
- $w_0 + w_1 < 0$
- $w_0 + w_2 < 0$
- $w_0 + w_1 + w_2 > 0$

</div>

## AND gate - learning

---

<img src="../img/ml/and_gate_weights.png" width=60% style="background-color: white">

## Non-linear problem: XOR gate

---

<img src="../img/ml/xor_vs_and_gates.png" width=100%>

## Neural network for XOR

---

<img src="../img/ml/nn_two_neurons.png" width=60%>

> x XOR y = (x AND NOT y) OR (y AND NOT x)
