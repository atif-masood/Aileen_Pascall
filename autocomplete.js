document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("f-autocomplete-input");
    const icon = document.querySelector(".f-input-field .f-icon");
    const optionsContainer = document.querySelector(".f-autocomplete-options");
    const options = document.querySelectorAll(".f-option");
  
    const filterOptions = () => {
      const query = inputField.value.toLowerCase();
      let visibleOptionsCount = 0;
  
      options.forEach(option => {
        const title = option.querySelector(".f-option-title").innerText.toLowerCase();
        const subtitle = option.querySelector(".f-option-subtitle").innerText.toLowerCase();
        if (title.includes(query) || subtitle.includes(query)) {
          option.style.display = "block";
          visibleOptionsCount++;
        } else {
          option.style.display = "none";
        }
      });
  
      adjustDropdownHeight(visibleOptionsCount);
    };
  
    const adjustDropdownHeight = (visibleOptionsCount) => {
      const optionHeight = 80; // Adjust based on your option element height
      const newHeight = visibleOptionsCount * optionHeight;
      optionsContainer.style.maxHeight = `${newHeight}px`;
    };
  
    const toggleDropdown = () => {
      if (optionsContainer.classList.contains("f-hidden")) {
        optionsContainer.classList.remove("f-hidden");
        optionsContainer.style.maxHeight = `${options.length * 80}px`; // Adjust based on your option element height
      } else {
        optionsContainer.classList.add("f-hidden");
        optionsContainer.style.maxHeight = "0";
      }
    };
  
    icon.addEventListener("click", toggleDropdown);
    inputField.addEventListener("focus", () => {
      optionsContainer.classList.remove("f-hidden");
      optionsContainer.style.maxHeight = `${options.length * 80}px`; // Adjust based on your option element height
    });
    inputField.addEventListener("input", filterOptions);
    inputField.addEventListener("blur", () => {
      setTimeout(() => {
        optionsContainer.classList.add("f-hidden");
        optionsContainer.style.maxHeight = "0";
      }, 200); // Delay to allow option click
    });
  
    options.forEach(option => {
      option.addEventListener("click", () => {
        inputField.value = option.querySelector(".f-option-title").innerText;
        optionsContainer.classList.add("f-hidden");
        optionsContainer.style.maxHeight = "0";
      });
    });
  
    inputField.addEventListener("focus", () => {
      if (!inputField.value) {
        document.querySelector(".f-floating-label").classList.remove("f-shrink");
      }
    });
  
    inputField.addEventListener("blur", () => {
      if (!inputField.value) {
        document.querySelector(".f-floating-label").classList.remove("f-shrink");
      }
    });
  
    filterOptions();
  });
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("f-two-autocomplete-input");
    const icon = document.querySelector(".f-two-input-field .f-two-icon");
    const optionsContainer = document.querySelector(".f-two-autocomplete-options");
    const options = document.querySelectorAll(".f-two-option");
  
    const filterOptions = () => {
      const query = inputField.value.toLowerCase();
      let visibleOptionsCount = 0;
  
      options.forEach(option => {
        const title = option.querySelector(".f-two-option-title").innerText.toLowerCase();
        const subtitle = option.querySelector(".f-two-option-subtitle").innerText.toLowerCase();
        if (title.includes(query) || subtitle.includes(query)) {
          option.style.display = "block";
          visibleOptionsCount++;
        } else {
          option.style.display = "none";
        }
      });
  
      adjustDropdownHeight(visibleOptionsCount);
    };
  
    const adjustDropdownHeight = (visibleOptionsCount) => {
      const optionHeight = 80; // Adjust based on your option element height
      const newHeight = visibleOptionsCount * optionHeight;
      optionsContainer.style.maxHeight = `${newHeight}px`;
    };
  
    const toggleDropdown = () => {
      if (optionsContainer.classList.contains("f-two-hidden")) {
        optionsContainer.classList.remove("f-two-hidden");
        optionsContainer.style.maxHeight = `${options.length * 80}px`; // Adjust based on your option element height
      } else {
        optionsContainer.classList.add("f-two-hidden");
        optionsContainer.style.maxHeight = "0";
      }
    };
  
    icon.addEventListener("click", toggleDropdown);
    inputField.addEventListener("focus", () => {
      optionsContainer.classList.remove("f-two-hidden");
      optionsContainer.style.maxHeight = `${options.length * 80}px`; // Adjust based on your option element height
    });
    inputField.addEventListener("input", filterOptions);
    inputField.addEventListener("blur", () => {
      setTimeout(() => {
        optionsContainer.classList.add("f-two-hidden");
        optionsContainer.style.maxHeight = "0";
      }, 200); // Delay to allow option click
    });
  
    options.forEach(option => {
      option.addEventListener("click", () => {
        inputField.value = option.querySelector(".f-two-option-title").innerText;
        optionsContainer.classList.add("f-two-hidden");
        optionsContainer.style.maxHeight = "0";
      });
    });
  
    inputField.addEventListener("focus", () => {
      if (!inputField.value) {
        document.querySelector(".f-two-floating-label").classList.remove("f-two-shrink");
      }
    });
  
    inputField.addEventListener("blur", () => {
      if (!inputField.value) {
        document.querySelector(".f-two-floating-label").classList.remove("f-two-shrink");
      }
    });
  
    filterOptions();
  });