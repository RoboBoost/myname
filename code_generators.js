// Генератор для блоку esp32_digital_write
Blockly.JavaScript['esp32_digital_write'] = function(block) {
  var pin_number = block.getFieldValue('PIN_NUM');
  var state = block.getFieldValue('STATE');
  // Важливо: додаємо pinMode у setup-код, якщо це потрібно
  // Це просунута техніка, але для початку можна обійтись без неї
  var code = `digitalWrite(${pin_number}, ${state});\n`;
  return code;
};

// Генератор для блоку esp32_delay
Blockly.JavaScript['esp32_delay'] = function(block) {
    var delay_time = Blockly.JavaScript.valueToCode(block, 'DELAY_TIME', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `delay(${delay_time});\n`;
    return code;
};

// Функція для обгортання коду у стандартну структуру Arduino
function generateFullCode(workspace) {
    // В ідеалі потрібно збирати всі pinMode тут
    const setupCode = `void setup() {\n  // pinMode(2, OUTPUT);\n}`;
    const loopCode = `void loop() {\n${Blockly.JavaScript.workspaceToCode(workspace)}\n}`;
    return `${setupCode}\n\n${loopCode}`;
}
