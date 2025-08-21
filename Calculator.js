      let calculation = localStorage.getItem('calculation') || '';

      Output();

      function updateCalculation(value) {
        calculation += value;
        localStorage.setItem('calculation', calculation);
        Output();
      }

      function safeEval() {
        try {
          calculation = eval(calculation).toString(); 
          localStorage.setItem('calculation', calculation);
          Output();
        } catch (e) {
          alert('Invalid calculation!');
          calculation = '';
          Output();
        }
      }

      function clearCalculation() {
        calculation = '';
        localStorage.removeItem('calculation');
        Output();
      }

      function Output() {
        document.querySelector('.js-Output')
          .innerHTML = `Calculation: ${calculation}`;
      }

