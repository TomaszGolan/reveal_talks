% Języki skryptowe - Python
% Wykład 14
% Powtórka cz. II

<div class='footer'>
Navigate:
<br> &emsp; PgDn / PgUp - next / previous slide
<br> &emsp; Esc - expo mode
</div>

#

## Programowanie obiektowe

---

* klasa definiuje nowy typ obiektu zadany przez
    * dane
    * metody (funkcje)

* obiekty różnych typów mogą ze sobą oddziaływać

## Przykład - lista zakupów

---

<div class="left">

```py
# lista_zakupow.py
"""System zarządzania listą zakupów."""


def dodaj(produkt, lista):
    """Dodaje produkt do listy zakupów."""
    print("Dodaję:", produkt)
    lista.add(produkt)
    print("Lista:", lista)


def usun(produkt, lista):
    """Usuwa produkt z listy zakupów."""
    print("Usuwam:", produkt)
    lista.discard(produkt)
    print("Lista:", lista)

if __name__ == "__main__":
    zakupy = set()  # moja lista zakupów
    dodaj("jajka", zakupy)
    dodaj("masło", zakupy)
    dodaj("jajka", zakupy)
    dodaj("chleb", zakupy)
    usun("masło", zakupy)
```
</div>
<div class="right"><br>
```
goran@ift438:~$ python lista_zakupow.py
Dodaję: jajka
Lista: {'jajka'} # jajka dodane
Dodaję: masło
Lista: {'jajka', 'masło'} # masło dodane
Dodaję: jajka
Lista: {'jajka', 'masło'} # jajka już są
Dodaję: chleb
Lista: {'jajka', 'chleb', 'masło'} # +chleb
Usuwam: masło
Lista: {'jajka', 'chleb'} # masło usunięte
```
</div>

## Lista zakupów - obiektowo

---

<div class="left"><br>

```py
# lista_zakupow.py
"""System zarządzania listą zakupów."""


class Lista_Zakupow:
    """Lista zakupów"""

    def __init__(self):
        """Konstruktor tworzy zbiór"""
        self.lista = set()  # pusty zbiór

    def dodaj(self, produkt):
        """Dodaje produkt do listy zakupów."""
        print("Dodaję:", produkt)
        self.lista.add(produkt)
        print("Lista:", self.lista)

    def usun(self, produkt):
        """Usuwa produkt z listy zakupów."""
        print("Usuwam:", produkt)
        self.lista.discard(produkt)
        print("Lista:", self.lista)
```

</div>
<div class="right"><br>

```
>>> import lista_zakupow as lz
>>> help(lz)
```

```
Help on module lista_zakupow:

NAME
    lista_zakupow - System zarządzania listą zakupów.

CLASSES
    builtins.object
        Lista_Zakupow

    class Lista_Zakupow(builtins.object)
     |  Lista zakupów
     |  
     |  Methods defined here:
     |  
     |  __init__(self)
     |      Konstruktor tworzy zbiór
     |  
     |  dodaj(self, produkt)
     |      Dodaje produkt do listy zakupów.
     |  
     |  usun(self, produkt)
     |      Usuwa produkt z listy zakupów.
     |  
     |  ----------------------------------------------------------------------
     |  Data descriptors defined here:
     |  
     |  __dict__
     |      dictionary for instance variables (if defined)
     |  
     |  __weakref__
     |      list of weak references to the object (if defined)
```

</div>

## Lista zakupów - test

---

<div class="left"><br>

```py
# lz_test.py
"""Testujemy listę zakupów"""
from lista_zakupow import Lista_Zakupow


lista = Lista_Zakupow()
lista.dodaj("jajka")
lista.dodaj("masło")
lista.dodaj("jajka")
lista.dodaj("chleb")
lista.usun("masło")
```

</div>
<div class="right"><br>

```
$ python lz_test.py
Dodaję: jajka
Lista: {'jajka'}
Dodaję: masło
Lista: {'masło', 'jajka'}
Dodaję: jajka
Lista: {'masło', 'jajka'}
Dodaję: chleb
Lista: {'masło', 'jajka', 'chleb'}
Usuwam: masło
Lista: {'jajka', 'chleb'}
```

</div>

## Lista v2

---

<div class="left"><br>

```py
# lista_zakupow_v2.py
"""System zarządzania listą zakupów."""


class Lista_Zakupow:
    """Lista zakupów"""

    def __init__(self):
        """Konstruktor tworzy zbiór"""
        self.lista = set()  # pusty zbiór

    def __str__(self):
        """Drukuje listę zakupów"""
        s = "Lista zakupów\n"
        s += "-"*20

        for i, p in enumerate(self.lista):
            s += "\n{}. {}".format(i+1, p)

        return s

    def dodaj(self, produkt):
        """Dodaje produkt do listy zakupów."""
        self.lista.add(produkt)

    def usun(self, produkt):
        """Usuwa produkt z listy zakupów."""
        self.lista.discard(produkt)
```

</div>
<div class="right"><br>

```py
# lz_test_v2.py
"""Testujemy listę zakupów"""
from lista_zakupow_v2 import Lista_Zakupow


lista = Lista_Zakupow()
lista.dodaj("jajka")
lista.dodaj("masło")
lista.dodaj("jajka")
lista.dodaj("chleb")
lista.usun("masło")

print(lista)  # __str__
```

```
$ python lz_test_v2.py
Lista zakupów
--------------------
1. chleb
2. jajka
```

</div>

## Dziedziczenie - ponowne wykorzystanie

---

<div class="left"><br>

```py
# todo.py
"""Zarządzanie obowiązkami"""
from lista_zakupow_v2 import Lista_Zakupow


class Todo(Lista_Zakupow):
    """Lista rzeczy do zrobienia"""

    def __init__(self):
        """Tylko konstruktor klasy bazowej"""
        super().__init__()

    def __str__(self):
        """Nadpisujemy print"""
        s = "Lista rzeczy do zrobienia\n"
        s += "-"*20

        for i, p in enumerate(self.lista):
            s += "\n{}. {}".format(i+1, p)

        return s
```

</div>
<div class="right"><br>

```py
# todo_test.py
import todo


lista = todo.Todo()
lista.dodaj("Wyrzuć śmieci")
lista.dodaj("Wyjdź z psem")

print(lista)
```

```
$ python todo_test.py
Lista rzeczy do zrobiebia
--------------------
1. Wyjdź z psem
2. Wyrzuć śmieci
```

</div>

## Klasa mąż

---

<div class="left"><br>

```py
# maz.py
"""System zarządzanie mężem"""
from lista_zakupow_v2 import Lista_Zakupow
from todo import Todo


class Maz:
    """Obsługa męża"""

    def __init__(self):
        """Tworzy dwie listy"""
        self.zakupy = Lista_Zakupow()
        self.todo = Todo()

    def kup(self, produkt):
        """Dodaj do listy zakupów"""
        self.zakupy.dodaj(produkt)

    def zrob(self, czynnosc):
        """Dodaj do todo"""
        self.todo.dodaj(czynnosc)

    def status(self):
        """Stan zadań męża"""
        print(self.zakupy, self.todo, sep='\n\n')
```

</div>
<div class="right"><br>


```py
# maz_test.py
import maz

m = maz.Maz()

m.kup("jajka")
m.kup("masło")
m.zrob("Wynieś śmieci")

m.status()
```

```
$ python maz_test.py
Lista zakupów
--------------------
1. masło
2. jajka

Lista rzeczy do zrobienia
--------------------
1. Wynieś śmieci
```

</div>

#

## Sklep - plan

---

* Sklep - magazyn i kadry

* Magazyn posiada towary

* Kadry zarządają pracownikami

* Pracownicy mogą być sprzedawcami lub magazynierami


## Magazyn

---

<div class="left"><br>

```py
# magazyn.py
"""Zarządzanie magazynem"""


class Magazyn:
    """Przechowuje zapas towarów"""

    def __init__(self):
        """Inicjuje zmienne"""
        self.towary = {}  # towar: liczba

    def dodaj(self, produkt, sztuki=1):
        """Dodaje produkty do magazynu"""
        if self.towary.get(produkt):
            self.towary[produkt] += sztuki
        else:
            self.towary[produkt] = sztuki

    def usun(self, produkt, sztuki=1):
        """Usuwa produkt z magazynu"""
        if self.towary.get(produkt):
            self.towary[produkt] -= sztuki

    def stan(self):
        """Drukuje stan magazynu"""
        print("\nStan magazynu:\n")

        for t, n in self.towary.items():
            print(" {} -> {}".format(t, n))
```

</div>
<div class="right"><br>

```
>>> import magazyn
>>> m = magazyn.Magazyn()
>>> m.dodaj("Jajka", 10)
>>> m.dodaj("Chleb", 10)
>>> m.stan()

Stan magazynu:

 Chleb -> 10
 Jajka -> 10
>>> m.usun("Jajka")
>>> m.stan()

Stan magazynu:

 Chleb -> 10
 Jajka -> 9
```

</div>

## Pracownicy

---

<div class="left"><br>

```py
# pracownicy.py
"""Definicje pracowników"""


class Pracownik:
    """Pracownik sklepu"""

    pid = 1234  # id pracownika

    def __init__(self, imie, nazwisko):
        """Aktualizuje id i zapisuje pracownika"""
        Pracownik.pid += 1

        self.imie = imie
        self.nazwisko = nazwisko
        self.id = Pracownik.pid

        self.hire()

    def __str__(self):
        """Informacje o pracowniku"""
        return "[{}] {} {} ({})".format(
            self.id, self.imie,
            self.nazwisko, self.stanowisko)

    def hire(self):
        """Ustaw stanowisko"""
        raise NotImplementedError(
            "Klasa pochodna musi "
            "zdefiniować funkcję hire()")


class Sprzedawca(Pracownik):
    """Konkretny typ pracownika"""

    def __init__(self, imie, nazwisko):
        super().__init__(imie, nazwisko)

    def hire(self):
        """Zatrudniony jako sprzedawca"""
        self.stanowisko = "sprzedawca"

    def sprzedaj(self, utarg, kwota):
        """Sprzedaje towary zwiększając utarg"""
        print("Sprzedaje {} {}...".format(
            self.imie, self.nazwisko))
        utarg += kwota


class Magazynier(Pracownik):
    """Kolejny typ pracownika"""

    def __init__(self, imie, nazwisko):
        super().__init__(imie, nazwisko)

    def hire(self):
        """Zatrudniony jako magazynier"""
        self.stanowisko = "magazynier"

    def przynies(self, magazyn, produkt, sztuk=1):
        """Przynosi towar z magazynu"""
        print("Przynosi {} {}...".format(
            self.imie, self.nazwisko))
        magazyn.usun(produkt, sztuk)
```

</div>
<div class="right"><br>

```
>>> import pracownicy
>>> s = pracownicy.Sprzedawca("Jan", "Kowalski")
>>> m = pracownicy.Magazynier("Maria", "Nowak")
>>> print(s)
[1236] Jan Kowalski (sprzedawca)
>>> print(m)
[1237] Maria Nowak (magazynier)
```

```
>>> p = pracownicy.Pracownik("Jan", "Kowalski")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/doc/insync/scratch/zajęcia/2016/języki skryptowe - python/python_powtorka/oop/sklep/pracownicy.py", line 18, in __init__
    self.hire()
  File "/doc/insync/scratch/zajęcia/2016/języki skryptowe - python/python_powtorka/oop/sklep/pracownicy.py", line 29, in hire
    "Klasa pochodna musi "
NotImplementedError: Klasa pochodna musi zdefiniować funkcję hire()
```

</div>

## Kadry

---

<div class="left"><br>

```py
# kadry.py
"""Lista pracowników"""
from pracownicy import *


class Kadry:
    """Zarządzanie pracownikami"""

    def __init__(self):
        """Inicjuje pustą listę"""
        self.pracownicy = []

    def zatrudnij(self, imie, nazwisko, stanowisko):
        """Zatrudnia pracownika imie, nazwisko
        na stanowisku:

        0 - sprzedawca
        1 - magazynier
        """
        if stanowisko == 0:
            p = Sprzedawca(imie, nazwisko)
        elif stanowisko == 1:
            p = Magazynier(imie, nazwisko)

        self.pracownicy.append(p)

    def lista(self):
        """Drukuje listę pracowników"""
        print("\nLista pracowników:\n")

        for p in self.pracownicy:
            print(p)
```

</div>
<div class="right"><br>

```
>>> import kadry
>>> k = kadry.Kadry()
>>> k.zatrudnij("Jan", "Kowalski", 0)
>>> k.zatrudnij("Maria", "Nowak", 1)
>>> k.lista()

Lista pracowników:

[1238] Jan Kowalski (sprzedawca)
[1239] Maria Nowak (magazynier)
```

</div>

## Sklep

---

<div class="left"><br>

```py
# sklep.py
"""Główny program"""
import kadry
import magazyn
import random

UTARG = 0  # dzienny utarg
MAGAZYN = magazyn.Magazyn()
KADRY = kadry.Kadry()


def get_sprzedawca(lista):
    """Szuka sprzedawcy na liście pracowników"""
    while True:
        p = random.choice(lista)
        if type(p) is kadry.Sprzedawca:
            return p


def get_magazynier(lista):
    """Szuka magazyniera na liście pracowników"""
    while True:
        p = random.choice(lista)
        if type(p) is kadry.Magazynier:
            return p


def sprzedaj(kwota):
    """Szuka sprzedacy i sprzedaje towar"""
    global UTARG
    global KADRY
    p = get_sprzedawca(KADRY.pracownicy)
    p.sprzedaj(UTARG, kwota)


def przynies(produkt, sztuk):
    """Szuka magazyniera i przynosi towar"""
    global MAGAZYN
    global KADRY
    p = get_magazynier(KADRY.pracownicy)
    p.przynies(MAGAZYN, produkt, sztuk)

if __name__ == "__main__":
    # wypełnij magazyn
    MAGAZYN.dodaj("Jajka", 1000)
    MAGAZYN.dodaj("Chleb", 100)
    MAGAZYN.dodaj("Masło", 100)
    MAGAZYN.dodaj("Mleko", 100)
    # wydrukuj stan
    MAGAZYN.stan()

    # zatrudnij pracowników
    KADRY.zatrudnij("Jan", "Kowalski", 0)
    KADRY.zatrudnij("Anna", "Nowak", 0)
    KADRY.zatrudnij("Maria", "Rokita", 0)
    KADRY.zatrudnij("Piotr", "Mięśniak", 1)
    # pokaż pracowników
    KADRY.lista()

    print("\n\nOtwarcie sklepu\n\n")

    sprzedaj(100)
    przynies("Jajka", 10)
    przynies("Masło", 20)
    sprzedaj(50)
    sprzedaj(200)

    print("\n\nZamknięcie sklepu\n\n")

    print("Utarg =", UTARG)

    MAGAZYN.stan()
```

</div>
<div class="right"><br>

```
$ python sklep.py

Stan magazynu:

 Mleko -> 100
 Jajka -> 1000
 Chleb -> 100
 Masło -> 100

Lista pracowników:

[1235] Jan Kowalski (sprzedawca)
[1236] Anna Nowak (sprzedawca)
[1237] Maria Rokita (sprzedawca)
[1238] Piotr Mięśniak (magazynier)


Otwarcie sklepu


Sprzedaje Anna Nowak...
Przynosi Piotr Mięśniak...
Przynosi Piotr Mięśniak...
Sprzedaje Jan Kowalski...
Sprzedaje Maria Rokita...


Zamknięcie sklepu


Utarg = 0 # dlaczego 0?

Stan magazynu:

 Mleko -> 100
 Jajka -> 990
 Chleb -> 100
 Masło -> 80
```

</div>

## Poprawka

---

<div class="left"><br>

```py
# w klasie sprzedawca
def sprzedaj(self, utarg, kwota):
    """Sprzedaje towary zwiększając utarg"""
    print("Sprzedaje {} {}...".format(
        self.imie, self.nazwisko))
    return utarg + kwota

# w sklep.py
def sprzedaj(kwota):
    """Szuka sprzedacy i sprzedaje towar"""
    global UTARG
    global KADRY
    p = get_sprzedawca(KADRY.pracownicy)
    UTARG = p.sprzedaj(UTARG, kwota)
```

</div>
<div class="right"><br>

```
$ python sklep.py
...

Utarg = 350

Stan magazynu:

 Jajka -> 990
 Masło -> 80
 Chleb -> 100
 Mleko -> 100

```

</div>

#

## Cechy programowania obiektowego

---

* dziedziczenie - klasa pochodna = klasa bazowa + dodatkowe funkcjonalności

* abstrakcja - "wirtualne" obiekty, które mogą wykonywać funkcje, zmieniać swój stan oraz komunikować się z innymi obiektami

* polimorfizm - wywołanie metody z zachowaniem typu (gdy zmienna może wskazywać różne "podklasy")

* enkapsulacja (ukrywanie implementacji) - stan obiektu można zmieniać tylko za pomocą interfejsu

## OOP - (często) łatwiejsze aktualizacje

---

* przychodzi klient i prosi o nową funkcjonalność

> Niech magazyn wyśle automatycznie zamówienie za każdym razem, gdy magazynier zabierze towar.

## Magazyn v2

---

<div class="left"><br>

```py
# magazyn.py
"""Zarządzanie magazynem"""


class Magazyn:
    """Przechowuje zapas towarów"""

    def __init__(self):
        """Inicjuje zmienne"""
        self.towary = {}  # towar: liczba

    def dodaj(self, produkt, sztuki=1):
        """Dodaje produkty do magazynu"""
        if self.towary.get(produkt):
            self.towary[produkt] += sztuki
        else:
            self.towary[produkt] = sztuki

    def usun(self, produkt, sztuki=1):
        """Usuwa produkt z magazynu"""
        if self.towary.get(produkt):
            self.towary[produkt] -= sztuki
            self._zamow(produkt, sztuki)

    def _zamow(self, produkt, sztuki=1):
        """Zamawia towar z hurtowni"""
        self.towary[produkt] += sztuki
        print("Dostarczono {} sztuk {}".format(
                produkt, sztuki))

    def stan(self):
        """Drukuje stan magazynu"""
        print("\nStan magazynu:\n")

        for t, n in self.towary.items():
            print(" {} -> {}".format(t, n))
```

</div>
<div class="right"><br>

```
$ python sklep.py

Stan magazynu:

 Mleko -> 100
 Masło -> 100
 Chleb -> 100
 Jajka -> 1000

Lista pracowników:

[1235] Jan Kowalski (sprzedawca)
[1236] Anna Nowak (sprzedawca)
[1237] Maria Rokita (sprzedawca)
[1238] Piotr Mięśniak (magazynier)


Otwarcie sklepu


Sprzedaje Jan Kowalski...
Przynosi Piotr Mięśniak...
Dostarczono Jajka sztuk 10
Przynosi Piotr Mięśniak...
Dostarczono Masło sztuk 20
Sprzedaje Anna Nowak...
Sprzedaje Jan Kowalski...


Zamknięcie sklepu


Utarg = 350

Stan magazynu:

 Mleko -> 100
 Masło -> 100
 Chleb -> 100
 Jajka -> 1000
```

</div>

## Tworzenie dokumentacji

---

* dobrze *odocstringowany* kod jest łatwy do udokumentowania, np.

```
epydoc --graph all *.py
```

* wynik: [sklep doc](http://www.ift.uni.wroc.pl/~tgolan/sklep/)

## Diagramy UML

---

<img src="../img/python/class-diagram-example-hasp-licensing-domain.png" width=50%>

[źródło](http://www.uml-diagrams.org/examples/class-diagram-example-hasp-licensing-domain.png), więcej np. [tutaj](https://www.michalwolski.pl/diagramy-uml/)

#

## Podsumowanie

---

* programowanie obiektowe wymaga trochę innego spojrzenia na problem niż programowanie strukturalne

* dobrze zaprojektowany program jest łatwy w aktualizacji

* jeśli obiekty komunikują się za pomocą interfejsów, zmiana implementacji jednej klasy nie wymaga aktualizacji pozostałych

* dokumentacja (*docstring*) powinna powstawać razem z projektem - ułatwi to życie w przyszłości
