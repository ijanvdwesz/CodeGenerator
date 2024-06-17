document.addEventListener('DOMContentLoaded', function() {
  const generateButton = document.getElementById('generateButton');
  generateButton.addEventListener('click', generateCode);
});

function generateCode() {
  const language = document.getElementById('language').value;
  const codeType = document.getElementById('codeType').value;
  const codeOutput = document.getElementById('codeOutput');
  let code = '';

  if (language === 'javascript') {
      code = generateJavaScriptCode(codeType);
  } else if (language === 'java') {
      code = generateJavaCode(codeType);
  } else if (language === 'python') {
      code = generatePythonCode(codeType);
  }

  codeOutput.textContent = code;
}

function generateJavaScriptCode(codeType) {
  switch (codeType) {
      case 'function':
          return `// Function Syntax\nfunction functionName(parameters) {\n    // Code to be executed\n}`;
      case 'eventHandler':
          return `// Event Handler Syntax\n// Selecting elements:This selects an element based on its ID/class/tag and assigns it to a variable\n//Choose wheter you use const(for unchangable variables) or let (for reasignable variables)\n\nconst byId = document.getElementById('elementId');\nconst byClass = document.getElementsByClassName('className')[0];\nconst byTag = document.getElementsByTagName('tagName')[0];\nconst byQuery = document.querySelector('.className');\n\n// Event Handlers:This then uses that variable(byId in the example) and attaches an event listener to it based on the desired event \nbyId.addEventListener('click', function() {\n//Insert Code to be executed when selected element is clicked\n});\n\nbyId.addEventListener('keypress', function(event) {\n    if (event.key === 'Enter') {\n        // Insert Code to be executed when Enter key is pressed\n    }\n});\n\nbyId.addEventListener('input', function() {\n    // Code to be executed when typing\n});`;
      case 'ifStatement':
          return `// If Statement Syntax\nif (condition) {\n    // Code to be executed if condition is true\n} else {\n    // Code to be executed if condition is false\n}`;
      case 'forLoop':
          return `// For Loop Syntax\nfor (let i = 0; i < count; i++) {\n    // Code to be executed in each iteration\n}`;
      case 'whileLoop':
          return `// While Loop Syntax\nwhile (condition) {\n    // Code to be executed while condition is true\n}`;
      default:
          return '// Select a valid code type';
  }
}

function generateJavaCode(codeType) {
  switch (codeType) {
      case 'function':
          return `// Function(Method) Syntax\npublic void functionName(parameters) {\n    // Code to be executed\n}`;
      case 'eventHandler':
          return `// Event Handler Syntax\n// Java doesn't have native event handlers like JavaScript\n// Example: Using ActionListener in Swing\nJButton button = new JButton("Click Me");\nbutton.addActionListener(new ActionListener() {\n    @Override\n    public void actionPerformed(ActionEvent e) {\n        // Code to be executed when event is triggered\n    }\n});`;
      case 'ifStatement':
          return `// If Statement Syntax\nif (condition) {\n    // Code to be executed if condition is true\n} else {\n    // Code to be executed if condition is false\n}`;
      case 'forLoop':
          return `// For Loop Syntax\nfor (int i = 0; i < count; i++) {\n    // Code to be executed in each iteration\n}`;
      case 'whileLoop':
          return `// While Loop Syntax\nwhile (condition) {\n    // Code to be executed while condition is true\n}`;
      default:
          return '// Select a valid code type';
  }
}

function generatePythonCode(codeType) {
  switch (codeType) {
      case 'function':
          return `# Function Syntax\ndef function_name(parameters):\n    # Code to be executed\n    pass`;
      case 'eventHandler':
          return `# Event Handler Syntax\n# Python doesn't have native event handlers like JavaScript\n# Example: Using tkinter for GUI\nimport tkinter as tk\nroot = tk.Tk()\ndef on_event(event):\n    # Code to be executed when event is triggered\n    pass\nbutton = tk.Button(root, text="Click Me")\nbutton.bind("<Event>", on_event)\nbutton.pack()\nroot.mainloop()`;
      case 'ifStatement':
          return `# If Statement Syntax\nif condition:\n    # Code to be executed if condition is true\nelse:\n    # Code to be executed if condition is false`;
      case 'forLoop':
          return `# For Loop Syntax\nfor i in range(count):\n    # Code to be executed in each iteration`;
      case 'whileLoop':
          return `# While Loop Syntax\nwhile condition:\n    # Code to be executed while condition is true`;
      default:
          return '# Select a valid code type';
  }
}