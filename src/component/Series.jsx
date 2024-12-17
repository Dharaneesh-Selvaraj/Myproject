import React from 'react'

export default function Series() {
    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '16px',
        maxWidth: '300px',
       
        backgroundColor: '#fff',
        textAlign: 'center',
      };
    
      const imageStyle = {
        width: '100%',
        borderRadius: '8px 8px 0 0',
        marginBottom: '16px',
      };
    
      const titleStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '8px',
        color: '#333',
      };
    
      const contentStyle = {
        fontSize: '1rem',
        color: '#555',
        lineHeight: '1.5',
      };
    
      const buttonStyle = {
        marginTop: '16px',
        padding: '10px 16px',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      };
    
      return (
        <div style={{display:'flex',justifyContent:'space-evenly'}}>

            <div style={cardStyle}>
            <img
                src="https://th.bing.com/th/id/OIP.N3FvHTs3bz2_Y0C8_9VCCQHaLH?rs=1&pid=ImgDetMain"
                alt="Card Example"
                style={imageStyle}
            />
            <div style={titleStyle}>Card Title</div>
            <div style={contentStyle}>
                This card now includes an image. It’s a great way to make your content more engaging.
            </div>
            <button style={buttonStyle} onClick={() => alert('Button clicked!')}>
                Learn More
            </button>
            </div>
            <div style={cardStyle}>
            <img
                src="https://flxt.tmsimg.com/assets/p8553063_b_v13_ay.jpg"
                alt="Card Example"
                style={imageStyle}
            />
            <div style={titleStyle}>Card Title</div>
            <div style={contentStyle}>
                This card now includes an image. It’s a great way to make your content more engaging.
            </div>
            <button style={buttonStyle} onClick={() => alert('Button clicked!')}>
                Learn More
            </button>
            </div>
            <div style={cardStyle}>
            <img
                src="https://th.bing.com/th/id/OIP.53XjkO3rIjIOFmJFDx54HQHaKQ?rs=1&pid=ImgDetMain"
                alt="Card Example"
                style={imageStyle}
            />
            <div style={titleStyle}>Card Title</div>
            <div style={contentStyle}>
                This card now includes an image. It’s a great way to make your content more engaging.
            </div>
            <button style={buttonStyle} onClick={() => alert('Button clicked!')}>
                Learn More
            </button>
            </div>
            <div style={cardStyle}>
            <img
                src="https://preview.redd.it/official-poster-for-shazam-fury-of-the-gods-v0-02uqs0j639ea1.jpg?width=640&crop=smart&auto=webp&s=4c12ebeb91c3e8d8505e53e32de16a2aecb1af9b"
                alt="Card Example"
                style={imageStyle}
            />
            <div style={titleStyle}>Card Title</div>
            <div style={contentStyle}>
                This card now includes an image. It’s a great way to make your content more engaging.
            </div>
            <button style={buttonStyle} onClick={() => alert('Button clicked!')}>
                Learn More
            </button>
            </div>
        
        </div>
      );
    
}
