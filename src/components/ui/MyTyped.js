import React from 'react';
import Typed from 'typed.js';

function MyComponent(props) {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings:props.strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: '!',
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}

export default MyComponent; 