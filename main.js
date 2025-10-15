<script src="custom_blocks.js"></script>
<script src="code_generators.js"></script>
<script src="main.js"></script>
  // Ініціалізація робочої області Blockly
const workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
  scrollbars: true,
  trashcan: true
});

// Функція для показу згенерованого коду
function showCode() {
  // Генеруємо повний код для Arduino
  const code = generateFullCode(workspace);
  document.getElementById('generatedCode').textContent = code;
}
