import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactRow() {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <div
      className='row container contactRow'
      style={{ width: '80%', justifyContent: 'space-around' }}
    >
      <a
        className={hovered ? 'heartbeat' : ''}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        href='https://github.com/Nhawley'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon
          icon={['fab', 'github']}
          size='5x'
          color='#BE0B16'
          className='link-hover'
        />
      </a>
      <a
        className={hovered ? 'heartbeat' : ''}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        href='https://www.linkedin.com/in/nate-hawley-iii/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon
          icon={['fab', 'linkedin-in']}
          size='5x'
          color='#BE0B16'
          className='link-hover'
        />
      </a>
      <a
        className={hovered ? 'heartbeat' : ''}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        href='mailto:nhawley255@gmail.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon
          icon='envelope'
          size='5x'
          color='#BE0B16'
          className='link-hover'
        />
      </a>
      <a
        className={hovered ? 'heartbeat' : ''}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        href='https://twitter.com/Nhawley255'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon
          icon={['fab', 'twitter']}
          size='5x'
          color='#BE0B16'
          className='link-hover'
        />
      </a>
    </div>
  );
}

export default ContactRow;