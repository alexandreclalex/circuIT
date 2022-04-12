const LEVELS = [
    {
      "instructions": "A voltage source provides the power potential for a circuit. An LED consumes voltage causing a voltage drop and is illuminated by the current flowing through the circuit. A resistor causes a voltage drop in a circuit. The total resistance in a circuit determines the current flowing through the circuit.  \n\nThis circuit contains a voltage source, LED, and resistor. Connect the circuit using all components, that will light the LED. ",
      "code": "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111111111111111100003000000000000007000010000000000000010000100000000000000100001000000000000001000011111112111111110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    },
    {
      "instructions": "A parallel circuit is a circuit where there are multiple paths for the circuit’s current can flow. For parallel circuits, resistance combines to where 1/total resistance = 1/resistance 1 + 1/resistance 2 + 1/resistance 3 + .... + 1/resistance n. Capacitors in parallel combine to where C total = C1 + C2 + C3 + ... + Cn. \n\n\n\nThis circuit contains a voltage source, and 4 resistors of varying resistance. This circuit needs to be connected so that the circuit is wired in parallel and current flows through all resistors.   ",
      "code": "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111111111111110000001001001001000100000030020020020002000000100100100100010000001111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    },
    {
      "instructions": "This circuit contains a voltage source and resistor. Connect the two components so that current can flow through the resistor. ",
      "code": "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011111111120000000000100000000100000000001000000001000000000010000000010000000000100000000100000000003111111111000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    },
    {
      "instructions": "A series circuit is a circuit in which there is only one path for the current to flow, and the current remains the same throughout the circuit. The total resistance of a series circuit is calculated by adding together all the resistances. The total capacitance of a series circuit is calculated: 1/C total = 1/C1 + 1/C2 + 1/C3 + .... + 1/Cn. \n\n\n\nThis circuit contains a voltage source and 3 resistors of varying resistance. Wire the circuit so that the voltage source supplies the resistors and is wired in series.  ",
      "code": "0000000000000000000000000000000000000000000000000000000000000000000000000000000000111211111111211000001000000000000010000010000000000000100000100000000000001000001000000000000010000030000000000000100000100000000000001000001000000000000010000010000000000000100000111111121111111000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    },
    {
      "instructions": "This circuit contains a voltage source and a capacitor. A capacitor is a device used in circuits to store an electric charge.  \n\n\n\nWire this circuit so that the capacitor can store charge.  ",
      "code": "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001111111111151000000010000000000010000000100000000000100000001000000000001000000010000000000010000000100000000000100000003111111111111000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    },
    {
      "instructions": "This circuit has two voltage sources and a resistor. The voltage sources with combine to make the total voltage. Wire the circuit so that the current runs through both voltage sources and the resistor.  ",
      "code": "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111121111110000000001000000000100000000010000000001000000000300000000030000000001000000000100000000011111111111000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    },
    {
      "instructions": "A series circuit is a circuit in which there is only one path for the current to flow, and the current remains the same throughout the circuit. The total resistance of a series circuit is calculated by adding together all the resistances. The total capacitance of a series circuit is calculated: 1/C total = 1/C1 + 1/C2 + 1/C3 + .... + 1/Cn. \n\n\n\nWire the circuit so that current can flow through all three capacitors and is wired in series.  ",
      "code": "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001111511111111151000010000000000000010000100000000000000100001000000000000001000010000000000000010000300000000000000100001000000000000001000011111111511111110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    },
    {
      "instructions": "A parallel circuit is a circuit where there are multiple paths for the circuit’s current can flow. For parallel circuits, resistance combines to where 1/total resistance = 1/resistance 1 + 1/resistance 2 + 1/resistance 3 + .... + 1/resistance n. Capacitors in parallel combine to where C total = C1 + C2 + C3 + ... + Cn. \n\n\n\nWire the circuit so that current flows through the circuit is wired in parallel.",
      "code": "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111111111111111110001000010000100000100010000100001000001000300005000050000050001000010000100000100010000100001000001000111111111111111110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    },
    {
      "instructions": "Wire this circuit so that the LED turns off once the capacitor is completely charged.",
      "code": "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111121111111115110001000000000000000100010000000000000001000100000000000000010003000000000000000100010000000000000001000100000000000000010001000000000000000700010000000000000001000111111111111111110000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    },
    {
      "instructions": "A current source is source of current flowing through a circuit. It supplies a set amount of current. \n\nThis circuit contains a voltage source, current source, and three resistors.  \n\n\n\nWire the circuit so that there are too loops each involving 2 resistors. The left loop should have the voltage source, and two resistors. The right loop should have the current source and two resistors. The two loops should share one of the resistors. ",
      "code": "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111211111121110000001000001000000100000010000010000001000000300000200000040000001000001000000100000010000010000001000000111111111111110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    },
    {
      "instructions": "Connect all LEDs using only one resistor, and so that the LEDs illuminate.",
      "code": "0000000000000000000000000000000000000000000000000000000000000011121111711111171000100000000000000010001000000000000000100010000000000000001000300000000000000010001000000000000000700010000000000000001000100000000000000010001117111117111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    },
    {
      "instructions": "Wire this circuit so that the LEDs are illuminated, the circuit is in parallel, and there are resistors in between the positive voltage source and the LED nodes.  ",
      "code": "0001111111211171111000010000000000000010000111111121117111100001000000000000001000011111112111711110000100000000000000100001111111211171111000010000000000000010000111111121117111100001000000000000001000011111112111711110000100000000000000100001111111211171111000010000000000000010000111111121117111100001000000000000001000011111112111711110000100000000000000100003000000000000001000011111111111111110"
    },
    {
      "instructions": "Wire the circuit so that all the LEDs are illuminated, and there is a resistor in between each LED and the battery source.",
      "code": "0000000000000000000000000000000000000000011111111211111111000100010000000100010001000200000001000100010001000000010001000100010000000100050001000100000001000100010001000000010001000300010000000700010001000100000001000100010001000000010001000100070000000100010001000100000001000100010001000000010001000111111111111111110000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    },
    {
      "instructions": "Wire the circuit so that the LED is controlled by the button. The LED should be on if the button is pressed.  ",
      "code": "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011116111111211110000100000000000000100001000000000000001000030000000000000010000100000000000000100001000000000000007000011111111111111110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    },
    {
      "instructions": "Wire the circuit so that the switch controls whether the LED is on or off.",
      "code": "0000000000000000000000000000000000000000000000000000000000000000000000000000000001111111611111121100010000000000000001000100000000000000010003000000000000000700010000000000000001000100000000000000010001111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 "
    },
    {
      "instructions": "Wire the LEDs in parallel and connected to the switch so that the switch controls whether both LEDs are on.  ",
      "code": "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011611111111111211100100000001000000001001000000020000000010010000000100000000100100000001000000007003000000010000000010010000000100000000100100000007000000001001000000010000000010010000000100000000100111111111111111111000000000000000000000000000000000000000000000000000000000000000000000000000000000 "
    },
    {
      "instructions": "Wire the LEDs in parallel where one LED is always on, and the other LED is only on when the switch is activated.  ",
      "code": "0000000000000000000000000000000000000000000000000000000000000000000000000000000001111111111161111000010000100000000010000100001000000000100001000070000000007000010000100000000010000100001000000000100003000010000000001000010000100000000010000100001000000000100001000020000000002000010000100000000010000111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    },
    {
      "instructions": "Wire the circuit so that the LEDs are connected to one resistor, and so that the capacitor is connected between the LEDs and the resistors.  ",
      "code": "0000000000000000000000000000000000000000011121117111111111100100000000010000001001000000000100000010010000000001000000100100000000070000007001000000000100000010010000000001000000100100000000011115111003000000000100000010010000000001000000100100000000010000001001000000000200000020010000000001000000100111111111111111111000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    },
    {
      "instructions": "Wire the circuit so that the switch controls current flow, and so that the circuit is not wired solely in parallel or series.  ",
      "code": "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011161112111117111000100000000010000010001000000000100000100010000000002000002000100000000010000010003000000000100000100010000000001117111000100000000010000010001000000000100000100010000000007000007000100000000010000010001111111111111111100000000000000000000000000000000000000000000000000000000000000"
    }
  ]