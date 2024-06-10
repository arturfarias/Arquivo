from unittest import TestCase, main
from classes.roll import Roll
roll = Roll()

class RollTestes(TestCase):
    
    def test_separador(self):
        self.assertEqual(roll.separador("3d4+1d10-5d6+8"),(['3d4', '+', '1d10', '-', '5d6', '+', '8'], None))

    def test_separador2(self):
        self.assertEqual(roll.separador("1+2*3/2"),(['1', '+', '2', '*', '3', '/', '2'], None))
main()