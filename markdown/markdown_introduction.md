% Introduction to Markdown
% Tomasz Golan
% Neutrino Division Seminar

# 

## Outline

---

* [Markdown basics](#markdown)
* [Example](#example)

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

```
A blank line - new paragraph.

*Text encapsulated in stars*

**Text encapsulated in double stars**
```

</div>
<div class=right>

A blank line - new paragraph.

*Text encapsulated in stars*

**Text encapsulated in double stars**

</div>

## Markdown - bullet list

---

<div class=left>

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

<div class=left>

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

<div class=left>

```
One can use LaTeX syntax for equations:

$$E = \frac{1}{2}\int\limits_0^c mx dx$$
```

</div>
<div class=right>

$$E = \frac{1}{2}\int\limits_0^c mx dx$$

</div>

## Markdown - misc

---

<div class=left>

```
Horizontal rule

---

[link](http://neutrino.ift.uni.wroc.pl/)

---

![Picture](../img/andy.gif)
```

</div>
<div class=right>

Horizontal rule

---

[link](http://neutrino.ift.uni.wroc.pl/)

---

![Picture](../img/andy.gif)

</div>

#

## Example

---

```md
% O Neutrinach dla Każdego...
% ZFN

> I am confidnet that the future of the neutrino physics will be as exciting and fruitful
as the past has been.

Frederick Reines, 1995, wykład noblowski

# Wstęp

Fizyka neutrin liczy sobie już ponad 80 lat! Poznanie własności neutrin, boskich posłańców
sił natury, jest kluczowe dla zrozumienia podstawowych praw natury dlatego planowane są
wciąż nowe eksperymenty. Nieuchwytne neutrina wciąż stanowią dla fizyków zagadkę, którą
rozwikłać starać się będą kolejne pokolenia fizyków. 

Niniejsza strona skierowana jest do wszystkich zainteresowanych fizyką, zawiera ona zbiór
podstawowych informacji na temat własności neutrin oraz faktów historycznych.

# Cząstki elementarne

Z punktu widzenia bieżącego stanu wiedzy, wydaje się, że istnieje tylko kilka naprawdę
elementarnych składników, z których zbudowany jest otaczający na świat... 

![Jądro](img/jadro.png)

# Kwarki

* Znamy sześć rodzajów kwarków. Fizycy mówią, że mamy sześć zapachów kwarków:
    * u (up, górny), d (down, dolny)
    * c (charm, górny), s (strange, dziwny)
    * t (top, wysoki), b (bottom, niski)
* Kwarki są cząstkami naładowanymi elektrycznie o ładunkach 2/3|e| (kwarki u, c, t),
-1/3|e| (d, s, b). Ładunek podano względem całkowitego ładunku elektronu.
* Proton zawiera trzy kwarki, walencyjne uud, natomiast neutron zawiera kwarki
walencyjne ddu.

# Rodzina

![Tabela](img/kwarkileptony.png)

W tabeli powyżej kwarki pogrupowano trzy pary, każdą z tych par nazywamy rodziną.
Okazuję się, że każdej parze kwarków odpowiada para leptonów (l, $\nu$). 
```

## Example - preview

---

<img src="../img/md_preview.png" width=70%>

## Example - possibilities

---

* Standalone HTML: 

```
pandoc -s example.md -o example.html
```

* PDF: 

```
pandoc example.md -o example.pdf
```

* Beamer:

```
pandoc -t beamer example.md -o example_beamer.pdf
```

* Beamer with template:

```
pandoc -t beamer -H header.tex example.md -o example_beamer_v2.pdf
```

* LaTeX:

```
pandoc -s example.md - o example.tex
```