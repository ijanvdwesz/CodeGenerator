$(document).ready(function() {
  $('#generateButton').on('click', generateCode);
});

function generateCode() {
  const language = $('#language').val();
  const codeType = $('#codeType').val();
  const codeOutput = $('#codeOutput');
  let code = '';

  // Set background image based on selected language
  const languageBackgrounds = {
    javascript: 'JavaScript-logo.png',
    java: 'Java logo.png',
    python: 'Python-logo.png',
    jquery: 'jQuery-logo.png'
  };

  const backgroundImage = languageBackgrounds[language] || 'default.jpg';
  $('body').css('background-image', `url('images/${backgroundImage}')`);

  if (language === 'javascript') {
    code = generateJavaScriptCode(codeType);
  } else if (language === 'java') {
    code = generateJavaCode(codeType);
  } else if (language === 'python') {
    code = generatePythonCode(codeType);
  }
  else if (language === 'jquery') {
    code = generateJQueryCode(codeType);
  }

  codeOutput.text(code);
}

function generateJavaScriptCode(codeType) {
  switch (codeType) {
    case 'function':
      return `// Function Syntax\nfunction functionName(parameters) {\n    // Code to be executed\n}`;
      case 'eventHandler':
        return `// Event Handler Syntax\n// Selecting elements:This selects an element based on its ID/class/tag and assigns it to a variable\n//Choose wheter you use const(for unchangable variables) or let (for reasignable variables)\n\nconst byId = document.getElementById('elementId');\nconst byClass = document.getElementsByClassName('className')[0];\nconst byTag = document.getElementsByTagName('tagName')[0];\nconst byQuery = document.querySelector('.className');\n\n// Event Handlers:This then uses that variable(byId in the example) and attaches an event listener to it based on the desired event \nbyId.addEventListener('click', function() {\n//Insert function or code to be executed when selected element is clicked\n});\n\nbyId.addEventListener('keypress', function(event) {\n if (event.key === 'Enter') {\n // Insert function or code to be executed when Enter key is pressed\n }\n});\n\nbyId.addEventListener('input', function() {\n // insert code to be executed when typing\n});;`
    case 'ifStatement':
      return `// If Statement Syntax\nif (condition) {\n    //Insert function call or code to be executed if condition is true\n} else {\n    // Code to be executed if condition is false\n}`;
    case 'forLoop':
      return `// For Loop Syntax\nfor (let i = 0; i < count; i++) {\n    //Insert function call or code to be executed in each iteration\n}`;
    case 'whileLoop':
      return `// While Loop Syntax\nwhile (condition) {\n    //Insert function call or code to be executed while condition is true\n}`;
    default:
      return '// Select a valid code type';
  }
}

function generateJavaCode(codeType) {
  switch (codeType) {
    case 'function':
      return `// Function Syntax\npublic void functionName(parameters) {\n    // Code to be executed\n}`;
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
function generateJQueryCode(codeType) {
  switch (codeType) {
    case 'function':
      return `// jQuery Function Syntax\nAll functions should start with this line\n$(document).ready(function() {//All jquery code should be in these brackets\n    // Set background\n    $('body').css('background', 'url(images/background.jpg)');\n\n    // Cycle background\n    let backgrounds = ['images/bg1.jpg', 'images/bg2.jpg', 'images/bg3.jpg'];\n    let current = 0;\n    setInterval(function() {\n        $('body').css('background', 'url(' + backgrounds[current] + ')');\n        current = (current + 1) % backgrounds.length;\n    }, 3000);\n\n    // Fade an image out\n    $('#image').fadeOut('slow');\n\n    // Slide an image\n    $('#image').slideUp('slow');\n    $('#image').slideDown('slow');\n});`;
    case 'eventHandler':
      return `// Event Handler Syntax\n$(document).ready(function() {\n    $('#elementId').on('click', function() {\n        //Insert function or code to be executed on click\n    });\n    $('#elementId').on('keypress', function(event) {\n        if (event.key === 'Enter') {\n            //Insert function or code to be executed on Enter key press\n        }\n    });\n    $('#elementId').on('input', function() {\n        //Insert function or code to be executed on input\n    });\n});`;
    case 'ifStatement':
      return `// If Statement Syntax\nif (condition) {\n    //Insert function or code to be executed if condition is true\n} else {\n    //Insert function or code to be executed if condition is false\n}`;
    case 'forLoop':
      return `// For Loop Syntax\nfor (let i = 0; i < count; i++) {\n    //Insert function or  code to be executed in each iteration\n}`;
    case 'whileLoop':
      return `// While Loop Syntax\nwhile (condition) {\n    //Insert function or code to be executed while condition is true\n}`;
    default:
      return '// Select a valid code type';
  }
}

