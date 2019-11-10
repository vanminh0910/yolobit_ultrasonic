Blockly.Blocks['ultrasonic_create'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "type": "ultrasonic_create",
        "message0": "create %1 trigger pin %2 echo pin %3",
        "args0": [
          {
            "type": "field_variable",
            "name": "ultrasonic_sensor",
            "variable": Blockly.Msg.ULTRASONIC_CREATE_MESSAGE1
          },
          {
            "type": "field_dropdown",
            "name": "TRG",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "ECH",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#0fbc11",
        "tooltip": Blockly.Msg.ULTRASONIC_CREATE_TOOLTIP,
        "helpUrl": Blockly.Msg.ULTRASONIC_CREATE_HELPURL
      }
    );
  }
};

Blockly.Python['ultrasonic_create'] = function(block) {
  var variable_ultrasonic_sensor = Blockly.Python.variableDB_.getName(block.getFieldValue('ultrasonic_sensor'), Blockly.Variables.NAME_TYPE);
  var dropdown_trg = block.getFieldValue('TRG');
  var dropdown_ech = block.getFieldValue('ECH');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_ultrasonic'] = 'from hcsr04 import HCSR04';
  var code = variable_ultrasonic_sensor + ' = HCSR04(trigger_pin=' + dropdown_trg + '.pin, echo_pin=' + dropdown_ech + '.pin)\n';
  return code;
};

Blockly.Blocks['ultrasonic_read'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "ultrasonic_read",
        "message0": Blockly.Msg.ULTRASONIC_READ_MESSAGE0,
        "args0": [
          {
            "type": "field_variable",
            "name": "ultrasonic_sensor",
            "variable": Blockly.Msg.ULTRASONIC_CREATE_MESSAGE1
          },
          {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
              [
                "cm",
                "CM"
              ],
              [
                "mm",
                "MM"
              ]
            ]
          }
        ],
        "output": null,
        "colour": "#ff8f3f",
        "tooltip": Blockly.Msg.ULTRASONIC_READ_TOOLTIP,
        "helpUrl": Blockly.Msg.ULTRASONIC_READ_HELPURL
      }
    );
  }
};

Blockly.Python['ultrasonic_read'] = function(block) {
  var variable_ultrasonic_sensor = Blockly.Python.variableDB_.getName(block.getFieldValue('ultrasonic_sensor'), Blockly.Variables.NAME_TYPE);
  var dropdown_type = block.getFieldValue('TYPE');
  // TODO: Assemble Python into code variable.
  if (dropdown_type == 'CM') {
    var code = variable_ultrasonic_sensor + '.distance_cm()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  } else {
    var code = variable_ultrasonic_sensor + '.distance_mm()';
  }  
};

Blockly.Blocks['ultrasonic_checkdistance'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "ultrasonic_checkdistance",
        "message0": Blockly.Msg.ULTRASONIC_CHECK_MESSAGE0,
        "args0": [
          {
            "type": "field_variable",
            "name": "ultrasonic_sensor",
            "variable": Blockly.Msg.ULTRASONIC_CREATE_MESSAGE1
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "DISTANCE",
            "check": "Number"
          },
          {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
              [
                "cm",
                "CM"
              ],
              [
                "mm",
                "MM"
              ]
            ]
          }
        ],
        "output": "Boolean",
        "colour": "#ff8f3f",
        "tooltip": Blockly.Msg.ULTRASONIC_CHECK_TOOLTIP,
        "helpUrl": Blockly.Msg.ULTRASONIC_CHECK_HELPURL
      }
    );
  }
};

Blockly.Python['ultrasonic_checkdistance'] = function(block) {
  var variable_ultrasonic_sensor = Blockly.Python.variableDB_.getName(block.getFieldValue('ultrasonic_sensor'), Blockly.Variables.NAME_TYPE);
  var value_distance = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('TYPE');
  // TODO: Assemble Python into code variable.
  var code = '';
  if (dropdown_type == 'CM')
    code = variable_ultrasonic_sensor + '.distance_cm() < ' + value_distance;
  else
    code = variable_ultrasonic_sensor + '.distance_mm()' + value_distance;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};