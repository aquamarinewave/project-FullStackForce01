const handleColorText = color => {
  switch (color) {
    case 'login':
      return 'var(--bg-color)';
    case 'register':
      return 'var(--accent-color)';
    case 'logout-white':
          return 'var(--bg-color)';
      case 'logout-grey':
          return '#888888';
    case 'name':
      return 'var(--accent-color)';
    default:
      return 'var(--main-color)';
  }
};

const handleHoverText = color => {
  switch (color) {
    case 'login':
      return 'var(--bg-color)';
    case 'register':
      return 'var(--accent-color)';
    case 'logout-white':
      return 'var(--bg-color)';
    case 'logout-grey':
      return '#888888';
    case 'name':
      return 'var(--accent-color)';
    default:
      return 'var(--main-color)';
  }
};

const handleWeightText = weight => {
  switch (weight) {
    case 'usual':
      return '500';
    case 'semi-bold':
      return '600';
    case 'bold':
      return '700';
    default:
      return '500';
  }
};

const handleFunctions = { handleColorText, handleWeightText, handleHoverText };

export default handleFunctions;