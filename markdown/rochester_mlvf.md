% Update on MLVF
% T. Golan
% *On behalf of J. Miller, G. Perdue, D. Rimal, M. Wospakrik, B. Yaeggi* <br> <br> Rochester meeting, 04.18.2016

# Outline

- [Introduction](#linear-regression)
    - [Linear Regression](#linear-regression)
    - [Logistic Regression](#logistic-regression)
    - [Neural Networks](#neural-networks)
    - [Convolutional Neural Networks](#convolutional-neural-networks)
- [MLVF (Machine Learning Vertex Finding) progress](#mlvf-progress)
- [Oak Ridge National Laboratory](#oak-ridge-national-laboratory)

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

#

## Logistic Regression

## Logistic function

---

<img src="../img/ml/sigmoid_function.png" class='right'>
<div class='left'><br>

* Logistic function:
$$g(z) = \frac{1}{1 + e^{-z}}$$

* Hypothesis:
$$h(x) = g(w^Tx) = \frac{1}{1 + e^{-w^Tx}}$$
</div>

## Classification

---

* Probability of 1:
$$P (y = 1 | x, w) = h(x)$$

* Probability of 0:
$$P (y = 0 | x, w) = 1 - h(x)$$

* Probability:
$$p (y | x, w) = (h(x))^y\cdot(1 - h(x))^{1 - y}$$

##

* Likelihood:
$$L(w) = \prod\limits_{i=0}^n p(y^{(i)} | x^{(i)}, w) = \prod\limits_{i=0}^n (h(x^{(i)}))^{y^{(i)}}\cdot(1 - h(x^{(i)}))^{1 - y^{(i)}}$$

* Log-likelihood:
$$l(w) = \log L(w) = \sum\limits_{i=0}^n y^{(i)}\log h(x^{(i)}) + (1 - y^{(i)})\log (1-h(x^{(i)}))$$

* Learning step (maximize $l(w)$):
$$w_j = w_j + \alpha\frac{\partial l(w)}{\partial w_j} = w_j + \alpha\sum\limits_{i=0}^n\left(y^{(i)} - h (x^{(i)})\right)x_j$$


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

#

## Convolutional Neural Networks

## Idea

---

<img src="../img/ml/cnn_idea_sketch.png" width=50%>

## Convolution

---

<img src="../img/ml/convolution_example.gif" width=50%>

src: [deeplearning.net](http://deeplearning.stanford.edu/wiki/images/6/6c/Convolution_schematic.gif)

## "Clones" of a neuron looking at different part of an image

---

<img src="../img/ml/minerva_filter.png" width = "100%">

## Convolution Layer

---

<center>*No. of convolved feature vectors / matrices = No. of filters*</center>

<img src="../img/ml/minerva_filter_layer.png" width = "50%">

## Pooling

---

<img src="../img/ml/pool_example.png" width = "75%">

src: [wildml.com](http://www.wildml.com/2015/11/understanding-convolutional-neural-networks-for-nlp/)

## Pooling - example

---

<img src="../img/ml/max_pooling_example.png" width = "100%">

src: [arxiv](http://arxiv.org/abs/1506.03767)

## CNN example

---

<img src="../img/ml/cnn_example.png" width = "100%">

src: [wildml.com](http://www.wildml.com/2015/11/understanding-convolutional-neural-networks-for-nlp/)

#

## MLVF Progress

## What are we looking for?

---

- The first goal is to use CNN to find vertex in nuclear target region

      - **Classification**: upstream of target 1, target 1, plastic between target 1 and target 2, target 2...

      - **Regression**: in progress, no luck so far

- Apply this for Marianette's DIS measurement

- Next steps: NC$\pi^0$? $\pi$ momentum? hadron multiplicities?

## What are we looking at?

---

<img src="../img/ml/mlvf_view.png" class="left">
<div class="right"><br>

- started with smaller "pictures" to save GPU time and memory usage ("compress" 127 strips to 50)

- now all 127 strips are used

</div>

## Classification regions

---

<img src="../img/ml/mlvf_detector_regions.png" width=60%>

## Learning and testing samples

---

- At this point we use **me1B** to **train** the net

- and **me1A** to **test** the net

---

<h2> Frameworks in use </h2>

---

- [**Theano**](http://deeplearning.net/software/theano/) - Python library for numerical computation
- [**Lasagne**](https://github.com/Lasagne/Lasagne) - Python library to build and train neural networks in Theano
- [**Fuel**](https://github.com/mila-udem/fuel) - data management

## The previous best CNN

> *Working on "compressed" samples*

---

| | | |
|:---:|:---:|:---:|:---:|
| **Convolution layer** | **No. of filters** | **Filter size** | **Pool size** |
| 1 | 12 | (8,3) | (2,1) |
| 2 | 20 | (7,3) | (2,1) |
| 3 | 28 | (6,3) | (2,1) |
| 4 | 36 | (6,3) | (2,1) |

---

- and fully connected layers at the end of net

##

<img src="../img/ml/mlvf_cnn_vs_track.png" class='left'>
<div class='right'><br><br>

## ML accuracy

---

```
test accuracy:    89.63 %

    target 1 accuracy:     94.166 %
    target 2 accuracy:     91.993 %
    target 3 accuracy:     93.637 %
    target 4 accuracy:     87.773 %
    target 5 accuracy:     85.937 %
```

</div>

## Purity *(preliminary)*

---

<img src="../img/ml/targetid_pur_inc.png" class='left'>
<img src="../img/ml/targetid_pur_dis.png" class='right'>

## Efficiency *(preliminary)*

---

<img src="../img/ml/targetid_eff_inc.png" class='left'>
<img src="../img/ml/targetid_eff_dis.png" class='right'>

## Purity * Efficiency *(preliminary)*

---

<img src="../img/ml/targetid_pur_eff_inc.png" class='left'>
<img src="../img/ml/targetid_pur_eff_dis.png" class='right'>

##

<img src="../img/ml/mlvf_cnn_vs_track_127.png" class='left'>
<div class='right'><br>

## The current best

---

```
test accuracy:        92.67 %

    target 0 accuracy:            75.861 %
    target 1 accuracy:            94.878 %
    target 2 accuracy:            94.733 %
    target 3 accuracy:            93.596 %
    target 4 accuracy:            90.404 %
    target 5 accuracy:            94.011 %
    target 6 accuracy:            87.775 %
    target 7 accuracy:            85.225 %
    target 8 accuracy:            94.109 %
    target 9 accuracy:            53.077 %
    target 10 accuracy:           96.608 %
```

</div>

## How did we get here?

---

<font size=6>

> In order to attain the impossible, one must attempt the absurd.
>
<div style="text-align:right;">Miguel de Cervante</div>

</font>

---

* Some educated guesses
* A little bit of intuition
* And many, many attempts
* ... on 2 GPU's (shared with other groups)

#

## Oak Ridge National Laboratory

## Titan

---

- We have been working on Wilson Cluster, which has... 2 GPUs
- Recently, we got $10^6$ GPU hours on Titan

---

<img src="../img/ml/ornl_titan.png" width = 75%>

src: [olcf.ornl.gov](https://www.olcf.ornl.gov/media-center/image-gallery/)

## 2nd on TOP500 list

---

<img src="../img/ml/wiki_top500.png" width=100%>

src: [wikpedia](https://en.wikipedia.org/wiki/TOP500)

## Yes, it has more than 2 GPUs

---

> *it has **18,668** NVIDIA Kepler GPUs*

---

<img src="../img/andy.gif" width=50%>

## MENNDL Group

---

<font size=6>

> *Multi-node Evolutionary Neural Networks for Deep Learning*

</font>

---

* Looking for optimal hyper-parameters values
* Determine an optimal network structure

##

<div class='left'>

## Summary

---

* ML approach outperforms track-based reconstruction
* Statistics, efficiency and purity is improved for inclusive and DIS samples
* It will be even better with the current best network
* Access to Titan will help a lot, but...

</div>
<div class='right'>

## Done / in progress

---

* Install software we need at Titan
* Move to [**Caffe**](http://caffe.berkeleyvision.org/) and [**LMDB**](https://lmdb.readthedocs.org/en/release/)
* Adapt our workflow to Titan's requirements

---

* How simulations-dependent are we?
* Next physics goals for ML?

</div>
