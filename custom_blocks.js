// Визначення блоку для керування цифровим піном (digitalWrite)
Blockly.Blocks['esp32_digital_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("встановити цифровий пін №")
        .appendField(new Blockly.FieldNumber(2, 0, 33), "PIN_NUM");
    this.appendDummyInput()
        .appendField("у стан")
        .appendField(new Blockly.FieldDropdown([["ВИСОКИЙ","HIGH"], ["НИЗЬКИЙ","LOW"]]), "STATE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4a90e2");
    this.setTooltip("Встановлює цифровий пін у стан HIGH або LOW");
    this.setHelpUrl("");
  }
};

// Визначення блоку для затримки (delay)
Blockly.Blocks['esp32_delay'] = {
    init: function() {
        this.appendValueInput("DELAY_TIME")
            .setCheck("Number")
            .appendField("чекати (мс)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#4a90e2");
        this.setTooltip("Зупиняє виконання програми на вказаний час у мілісекундах");
        this.setHelpUrl("");
    }
};
