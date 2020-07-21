unk = 11
usr = 0
while unk != usr:
  usr = int(input('Tu numero es: '))
  if usr < unk:
    print('nop, escoge un numero mayor que', usr)
  elif usr > unk:
    print('nop, escoge un numero menor que', usr)
  else:
    print('correcto! el numero es', usr)
