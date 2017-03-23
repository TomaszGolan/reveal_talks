% Introduction to Markdown
% Tomasz Golan
% Neutrino Division Seminar

# 

## Outline

---

* [Markdown basics](#markdown)
* [Pandoc](#pandoc)
* [Web page](#web-page-src)
* [Presentation](#presentation-src)
* [Publication](#publication-src)
* [Extras](#markdown-to-slides)

#

## Markdown

---

<br>

* lightweight markup language

* designed for HTML

* possible to generate many other formats: LaTeX, pdf, beamer...

## Markdown - headers

---

<div class=left>

<br>

```
# Header

## Subheader

### Subsubheader

#### Subsubsubheader
```

</div>
<div class=right>

# Header

## Subheader

### Subsubheader

#### Subsubsubheader

</div>

## Markdown - text formatting

---

<div class=left>

<br>

```
A blank line - new paragraph.

*Text encapsulated in stars*

**Text encapsulated in double stars**

<font color=red>
HTML tags can be used directly.
</font>
```

</div>
<div class=right>

<br>

A blank line - new paragraph.

*Text encapsulated in stars*

**Text encapsulated in double stars**

<font color=red>
HTML tags can be used directly.
</font>
</div>

## Markdown - bullet list

---

<div class=left><br>

```
Bullet list:

* one can use stars
- or dash
* it really does not matter
```

</div>
<div class=right>

Bullet list:

* one can use stars
- or dash
* it really does not matter

</div>

## Markdown - numbered list

---

<div class=left><br>

```
Numbered list:

1. one can use any number
9. it really does not matter
4. the list will be well ordered
```

</div>
<div class=right>

Numbered list:

1. one can use any number
9. it really does not matter
4. the list will be well ordered

</div>

## Markdown - math

---

<div class=left><br>

One can use LaTeX syntax:

```
$$E = \frac{1}{2}\int\limits_0^c mx dx$$
```

</div>
<div class=right><br>

$$E = \frac{1}{2}\int\limits_0^c mx dx$$

</div>

## Markdown - tables

---

<div class=left>

```
| family I | family II | family III | 
|:---------|:---------:|-----------:|
| $e$      | $\mu$     | $\tau$     |
| $\nu_e$  | $\nu_\mu$ | $\nu_\tau$ |
```

<br>

* `|:----|` - left
* `|:---:|` - center
* `|----:|` - right

</div>
<div class=right><br><br>

| family I | family II | family III | 
|:---------|:---------:|-----------:|
| $e$      | $\mu$     | $\tau$     |
| $\nu_e$  | $\nu_\mu$ | $\nu_\tau$ |

</div>

## Markdown - code

---

<div class=left>

* code listing can be obtained by encapsulating a code in ```

* one can also specify the language, e.g. ```cpp

```
 ```

 some code

 ```
```

</div>
<div class=right><br><br>

```
#include <iostream>

int main() {
    std::cout << "Hello World!\n";

    return 0;
}
```

</div>

## Markdown - misc

---

<div class=left><br><br>

```
Horizontal rule

---

[Link](http://neutrino.ift.uni.wroc.pl/)

---

![Picture](../img/andy.gif)
```

</div>
<div class=right>

Horizontal rule

---

[Link](http://neutrino.ift.uni.wroc.pl/)

---

![Picture](../img/andy.gif)

</div>

#

## Pandoc

---

* Pandoc is a universal document converter

* markdown, HTML, LaTeX, Beamer, ODT, ...

* more info: [pandoc website](http://pandoc.org/)

## Pandoc - demo

---

<div width=100% height=600>
<iframe src="http://pandoc.org/try/" width=100% height=600></iframe>
</div>

## Pandoc - examples

---

* Standalone HTML: 

```
pandoc -s input.md -o output.html
```

* PDF: 

```
pandoc input.md -o output.pdf
```

* Beamer:

```
pandoc -t beamer input.md -o output.pdf
```

* Beamer with template:

```
pandoc -t beamer -H template.tex input.md -o output.pdf
```

* LaTeX:

```
pandoc -s input.md -o output.tex
```

#

## Web page src

---

```
## Contact

* email: <tomasz.golan@uwr.edu.pl>
* room@ift: 438
* phone: +48 71 375-9405

## Research interests

* neutrino interactions
* nuclear effects in neutrino scattering off nuclei
* Monte Carlo generators
* machine learning in event reconstruction

## Teaching
...
```

[src](https://raw.githubusercontent.com/TomaszGolan/ift_webpage/master/src/index.md)

## Web page - pandoc

---

```
pandoc -s index.md -o index.html
```

<div width=100% height=600>
<iframe style="background: #FFFFFF;" src="../html/ift_example.html" width=100% height=500></iframe>
</div>

## Web page - markdown-styles

---

```
generate-md --layout src/mixu-radar-mod --input src/index.md --output www
```

<div width=100% height=600>
<iframe style="background: #FFFFFF;" src="http://www.ift.uni.wroc.pl/~tgolan/" width=100% height=500></iframe>
</div>

## Web page - preview example

---

<img src="../img/md_preview.png" width=100%>

#

## Presentation src

---

```
% Golden Ratio
% Tomasz Golan
% Neutrino Seminar

# Outline

* Introduction
* Methods
* Solution

# Introduction

* $a$ and $b$ are in the golden ratio if:

$$\frac{a+b}{a} = \frac{a}{b}$$

* The solution of the following quadratic equation:

$$x^2 - x - 1 = 0$$

is found to represents the golden ratio:

$$\phi = 1.618...$$

# Methods

* The discriminant of quadratic equation is given by the following formula:

$$\Delta = b^2 - 4*a*c$$

* And the solutions are given by:

$$x = \frac{-b \pm \sqrt{\Delta}}{2a}$$

# Solution

* The following solution can be found:

$$x_1 = 1.618033988749895$$
$$x_2 = -0.6180339887498949$$

* The first one is the golden ratio
```

## Presentation - preview

---

<img src="../img/md_preview_pres.png" width=100%>

## Presentation - template

---

* Use `-t beamer` option to get the PDF presentation

```
pandoc -t beamer example.md -o example.pdf
```

* One can include custom options, e.g. *header.tex*:

```
\setbeamertemplate{footline}[frame number]
```

* Use `-H [tex file]` to include the file: 

```
pandoc -t beamer -H header.tex example.md -o example.pdf
```

* The output PDF file: [result](http://www.ift.uni.wroc.pl/~tgolan/talks/example.pdf)

## Presentation - LaTeX src

---

```
pandoc -t beamer example.md -o example.tex
```

```
\begin{frame}{Outline}

\begin{itemize}
\tightlist
\item
  Introduction
\item
  Methods
\item
  Solution
\end{itemize}

\end{frame}

\begin{frame}{Introduction}

\begin{itemize}
\tightlist
\item
  \(a\) and \(b\) are in the golden ratio if:
\end{itemize}

\[\frac{a+b}{a} = \frac{a}{b}\]

\begin{itemize}
\tightlist
\item
  The solution of the following quadratic equation:
\end{itemize}

\[x^2 - x - 1 = 0\]

is found to represents the golden ratio:

\[\phi = 1.618...\]

\end{frame}

\begin{frame}{Methods}

\begin{itemize}
\tightlist
\item
  The discriminant of quadratic equation is given by the following
  formula:
\end{itemize}

\[\Delta = b^2 - 4*a*c\]

\begin{itemize}
\tightlist
\item
  And the solutions are given by:
\end{itemize}

\[x = \frac{-b \pm \sqrt{\Delta}}{2a}\]

\end{frame}

\begin{frame}{Solution}

\begin{itemize}
\tightlist
\item
  The following solution can be found:
\end{itemize}

\[x_1 = 1.618033988749895\] \[x_2 = -0.6180339887498949\]

\begin{itemize}
\tightlist
\item
  The first one is the golden ratio
\end{itemize}

\end{frame}
```

#

## Publication src

---

```
% Tomasz Golan
% The study of nothing

# Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat rutrum consectetur. Praesent volutpat mi ac consequat vehicula. Sed vitae faucibus lacus, sed semper turpis. Aliquam pulvinar est porttitor mollis malesuada. Phasellus vel sodales lectus. Vestibulum gravida malesuada feugiat. Duis ullamcorper, lectus pretium dignissim porttitor, odio nisi pretium ante, eget suscipit lectus tortor sit amet enim. Nam eleifend scelerisque lacus nec gravida.

$$\sum\limits_{i=1}^N |c_i|^2 = 1$$

# Lorep ipsum

Proin hendrerit erat ac lacus dapibus interdum. Vivamus sed tellus semper, pellentesque enim vel, scelerisque nibh. Curabitur eget feugiat enim. Praesent eu fermentum leo. Curabitur tempor bibendum lobortis. Maecenas eget nunc eget eros venenatis sollicitudin et in metus. Aliquam imperdiet tortor nec vehicula iaculis. Duis odio enim, auctor id massa in, aliquet ultricies elit. Ut sit amet turpis eu nibh aliquet ultrices aliquet ac nibh. In ullamcorper nibh nec arcu venenatis, eget bibendum tellus semper. Curabitur tortor libero, porta in hendrerit eu, sollicitudin eu sapien. Integer rutrum quam eget cursus sollicitudin. Proin at augue rhoncus lorem iaculis fringilla et in neque. Donec sollicitudin elit at nisl tristique, et laoreet dolor tempor. Nam sodales orci eget neque viverra pharetra. Suspendisse et volutpat lorem.

![My plot](plot.png)

## Subsection

Sed in iaculis ipsum. Morbi sollicitudin id ex eu aliquam. Nam lobortis bibendum elit, sed hendrerit turpis aliquam vitae. Nam lobortis ut mi et scelerisque. Aliquam porttitor eget arcu eu molestie. Ut condimentum sollicitudin elit accumsan pulvinar. Ut placerat iaculis risus ut aliquam. Aliquam erat volutpat. Phasellus sit amet euismod mi. Quisque dictum suscipit mauris sed mattis. Nunc ac aliquam lacus. Duis sed turpis in nunc tristique bibendum. Quisque elit diam, tristique et arcu in, suscipit tempus orci. Mauris accumsan tincidunt sem ut placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet ligula sit amet turpis cursus, id sollicitudin arcu feugiat.

# Summary

Integer a odio accumsan, sagittis erat vel, condimentum velit. Quisque ullamcorper ante turpis, non ultricies odio suscipit at. Morbi eget lectus eu ex mollis sodales a ut magna. Phasellus commodo consequat enim, sit amet rutrum dui congue eu. Vestibulum sit amet rutrum arcu. Curabitur viverra lacus sit amet nulla accumsan maximus. Donec fermentum eu nibh eget ornare. Aliquam in leo a elit gravida pretium. In urna elit, cursus a erat vitae, vehicula convallis velit. Mauris eget nisl at turpis tincidunt tincidunt non non purus. Praesent pharetra tempor augue at tempor. Cras risus lorem, dictum ut sapien a, sagittis mollis felis. Suspendisse commodo neque id nisi mattis consectetur ut sit amet urna. Praesent pretium, dolor sed malesuada gravida, nulla neque pellentesque dui, eget tempus arcu justo at odio. Pellentesque fermentum diam enim, sit amet eleifend nulla accumsan non.

Donec et consectetur mauris. Cras pulvinar arcu quis lobortis congue. Phasellus lobortis augue justo, eu auctor leo tempor vel. Mauris sit amet eros odio. Nam tellus arcu, scelerisque semper tristique vitae, tincidunt vestibulum sem. Duis augue nibh, ornare ac orci vitae, sollicitudin volutpat neque. Maecenas at erat dolor. Praesent convallis ornare tortor eu vestibulum. Maecenas luctus eget nibh sed pellentesque.
```

## Publication - output

---

* one can get PDF directly (useful during work on draft):

```
pandoc example_pub.md -o example_pub.pdf
```

[result](http://www.ift.uni.wroc.pl/~tgolan/talks/example_pub.pdf)

* or one can get LaTeX source (to format document properly):

```
pandoc -s example_pub.md -o example_pub.tex
```

## References

---

```
pandoc --filter=pandoc-citeproc --biblio=example.bib --csl example.csl \
       example_ref.md -o example_ref.pdf
```

<div class=left>

```
Nobody @my_ref says nothing.

# References
```
</div>
<div class=right>

```
@article{my_ref,
author="Nobody",
title="Nothing",
year="2017",
publisher="None"
}
```

</div>

<img src="../img/nothing.png">

#

## Markdown-to-slides

---

<div class=left>

```
# My first markdown-to-slides presentation

## Is is that simple?

1. first bullet point
.red[- important subbullet]
2. and some equation

$$x^2 = \int_0^x ydy$$

.footnote[.gray[*I like footnotes]]

## Two columns? Why not

.left-column[
You may want to use some colors, like .red[red], to highlight .blue[important stuff].
Or even .orange[**bold some part of text**]. And sometime you want to provide a link to your source:

Gif source = [link](http://theodysseyonline.com/portland-state/life-lessons-from-andy-dwyer/343455)

]
.right-column[
![](andy.gif)
]

## Some bash code

 ```bash
#!/bin/bash

cd $HOME
echo "I am at home!"
 ```

###Some C++ code

 ```cpp
#include <iostream>

using namespace std;

int main(int argc, char *argv[])
{
    cout << "Hello World!\n";

    return 0;
}
 ```

## References

- Introduction to *remark*: http://remarkjs.com/
- Introduction to *markdown-to-slides*: [md2slides](http://www.lendmeyourear.net/wp-content/uploads/markdown-remark-slides.html)
- *Markdown* wiki: [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
```
</div>
<div width=50% height=480>
<iframe style="background: #FFFFFF;" src="http://tomaszgolan.github.io/md2slides_template" width=50% height=480></iframe>
</div>

## MARP

---

<img src="../img/marp-cast.gif" width=60%>

[src](https://yhatt.github.io/marp/)

## Markdown Here

---

<img src="../img/mdhere1.png" width=75%>

## Markdown Here

---

<img src="../img/mdhere2.png" width=75%>